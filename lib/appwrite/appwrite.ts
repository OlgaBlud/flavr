import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
  Account,
  Avatars,
  Client,
  Databases,
  ID,
  OAuthProvider,
  Query,
  TablesDB,
} from "react-native-appwrite";

export const config = {
  platform: "flavr.test.oauth",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  usersTable: "users",
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
export const databases = new Databases(client);
export const tables = new TablesDB(client);

// ------------------ REGISTER ------------------
export async function signUpAppwrite(
  name: string,
  email: string,
  password: string
) {
  try {
    const newUser = await account.create({
      userId: ID.unique(),
      email: email,
      password: password,
      name: name,
    });
    // Додаємо запис у таблицю користувачів
    // await createUserInDatabase(newUser.$id, name, email);
    await loginEmailAppwrite(email, password);
    await createUserInDatabase(newUser.$id, name, email);
    return newUser;
  } catch (error) {
    console.log("Signup error:", error);
    throw error;
  }
}
// ------------------ LOGIN EMAIL ------------------
export async function loginEmailAppwrite(email: string, password: string) {
  try {
    const session = await account.createEmailPasswordSession({
      email: email,
      password: password,
    });
    return session;
  } catch (error) {
    console.log("Login error:", error);
    throw error;
  }
}
// ------------------ LOGIN GOOGLE ------------------
export async function loginGoogleAppwrite() {
  try {
    const redirectUri = Linking.createURL("/");
    // Creating OAuth2 token;
    const response = await account.createOAuth2Token({
      provider: OAuthProvider.Google,
      success: redirectUri,
      failure: redirectUri,
    });
    if (!response) throw new Error("Failed to log in");
    // Opening browser auth session;
    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success")
      throw new Error("Failed to log in browser result ");
    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId)
      throw new Error("Failed to log in - no secret or userId");

    // Creating session;
    const session = await account.createSession({ userId, secret });
    if (!session) throw new Error("Failed to create a session");
    // Fetching user;
    const user = await account.get();
    //   Checking user in database;
    const existingUser = await tables.listRows({
      databaseId: config.databaseId!,
      tableId: config.usersTable!,
      queries: [Query.equal("userId", user.$id)],
    });

    if (existingUser.total === 0) {
      // 👇 якщо користувача немає — створюємо його
      await createUserInDatabase(user.$id, user.name, user.email);
    }
    // else {
    //   console.log(" User already exists in database.");
    // }

    return true;
  } catch (error) {
    console.log("loginGoogleAppwrite", error);

    return false;
  }
}
// ------------------ LOGOUT ------------------
export async function logoutAppwrite() {
  try {
    await account.deleteSession({ sessionId: "current" });

    return true;
  } catch (error) {
    console.log("logoutAppwrite", error);
    return false;
  }
}
// ------------------ GET CURRENT USER ------------------
export async function getCurrentUserAppwrite() {
  try {
    const response = await account.get();
    if (response.$id) {
      const userAvatar = avatar.getInitialsURL(response.name);
      return { ...response, avatar: userAvatar.toString() };
    }
  } catch (error: any) {
    const isGuestError =
      error?.message?.includes("missing scopes") &&
      error?.message?.includes("account");

    if (isGuestError) return null;
    console.log("getCurrentUserAppwrite і", error);
    return null;
  }
}

// ------------------ CREATE USER IN DATABASE ------------------
export async function createUserInDatabase(
  userId: string,
  name: string,
  email: string
) {
  try {
    const avatarUrl = avatar.getInitialsURL(name);

    const newUser = await tables.createRow({
      databaseId: config.databaseId!,
      tableId: config.usersTable!,
      rowId: ID.unique(),
      data: {
        userId: userId,
        userName: name,
        userEmail: email,
        avatar: avatarUrl,
      },
    });

    return newUser;
  } catch (error) {
    console.log("CreateUserInDatabase error:", error);
    throw error;
  }
}
