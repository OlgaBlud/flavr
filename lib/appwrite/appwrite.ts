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
    Storage,
    TablesDB,
} from "react-native-appwrite";

export const config = {
  platform: "flavr.test.oauth",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID,
  usersTable: "users",
  storageId: process.env.EXPO_PUBLIC_APPWRITE_STORAGE_ID || "avatars",
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
export const storage = new Storage(client);

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
    const accountData = await account.get();
    if (accountData.$id) {
      // Get user data from database
      const userData = await getUserFromDatabase(accountData.$id);

      if (userData) {
        return {
          $id: accountData.$id,
          name: userData.userName || accountData.name,
          email: userData.userEmail || accountData.email,
          avatar: userData.avatar || avatar.getInitialsURL(accountData.name).toString(),
        };
      }

      // Fallback if no database record
      const userAvatar = avatar.getInitialsURL(accountData.name);
      return { ...accountData, avatar: userAvatar.toString() };
    }
  } catch (error: any) {
    const isGuestError =
      error?.message?.includes("missing scopes") &&
      error?.message?.includes("account");

    if (isGuestError) return null;
    console.log("getCurrentUserAppwrite", error);
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

// ------------------ UPLOAD AVATAR ------------------
export async function uploadAvatar(uri: string, userId: string) {
  try {
    console.log("uploadAvatar - Starting upload for URI:", uri);
    console.log("uploadAvatar - Config:", {
      endpoint: config.endpoint,
      projectId: config.projectId,
      storageId: config.storageId,
    });

    // Get file info from URI
    const filename = uri.split("/").pop() || `avatar_${Date.now()}.jpg`;
    const match = /\.(\w+)$/.exec(filename);
    const type = match ? `image/${match[1]}` : "image/jpeg";

    console.log("uploadAvatar - File info:", { filename, type });

    // For react-native-appwrite, we need to use InputFile
    const file = {
      name: filename,
      type: type,
      size: 0, // Will be determined by the library
      uri: uri,
    };

    console.log("uploadAvatar - Uploading to bucket:", config.storageId);
    console.log("uploadAvatar - File object:", file);

    // Upload to Appwrite Storage
    const uploadedFile = await storage.createFile(
      config.storageId!,
      ID.unique(),
      file
    );

    console.log("uploadAvatar - Upload successful:", uploadedFile);
    console.log("uploadAvatar - File ID:", uploadedFile?.$id);

    if (!uploadedFile || !uploadedFile.$id) {
      throw new Error("Upload failed - no file ID returned");
    }

    // Get file URL
    const fileUrl = `${config.endpoint}/storage/buckets/${config.storageId}/files/${uploadedFile.$id}/view?project=${config.projectId}`;

    console.log("uploadAvatar - File URL:", fileUrl);

    return { fileId: uploadedFile.$id, fileUrl };
  } catch (error: any) {
    console.error("uploadAvatar error:", error);
    console.error("uploadAvatar error message:", error?.message);
    console.error("uploadAvatar error code:", error?.code);
    console.error("uploadAvatar error type:", error?.type);
    throw error;
  }
}

// ------------------ UPDATE USER PROFILE ------------------
export async function updateUserProfile(
  userId: string,
  data: { userName?: string; avatar?: string }
) {
  try {
    console.log("updateUserProfile - Starting update for userId:", userId);
    console.log("updateUserProfile - Data to update:", data);

    // Find user row in database
    const existingUser = await tables.listRows({
      databaseId: config.databaseId!,
      tableId: config.usersTable!,
      queries: [Query.equal("userId", userId)],
    });

    console.log("updateUserProfile - Found users:", existingUser.total);

    if (existingUser.total === 0) {
      console.error("updateUserProfile - User not found in database");
      throw new Error("User not found in database");
    }

    const userRowId = existingUser.rows[0].$id;
    console.log("updateUserProfile - User row ID:", userRowId);
    console.log("updateUserProfile - Existing user data:", existingUser.rows[0]);

    // Update user data
    const updatedUser = await tables.updateRow({
      databaseId: config.databaseId!,
      tableId: config.usersTable!,
      rowId: userRowId,
      data,
    });

    console.log("updateUserProfile - Update successful");

    return updatedUser;
  } catch (error: any) {
    console.error("updateUserProfile error:", error);
    console.error("updateUserProfile error message:", error?.message);
    console.error("updateUserProfile error response:", error?.response);
    throw error;
  }
}

// ------------------ GET USER FROM DATABASE ------------------
export async function getUserFromDatabase(userId: string) {
  try {
    const response = await tables.listRows({
      databaseId: config.databaseId!,
      tableId: config.usersTable!,
      queries: [Query.equal("userId", userId)],
    });

    if (response.total > 0) {
      return response.rows[0];
    }

    return null;
  } catch (error) {
    console.log("getUserFromDatabase error:", error);
    return null;
  }
}
