import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
  Account,
  Avatars,
  Client,
  ID,
  OAuthProvider,
} from "react-native-appwrite";

export const config = {
  platform: "flavr.test.oauth",
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
};

export const client = new Client();
client
  .setEndpoint(config.endpoint!)
  .setProject(config.projectId!)
  .setPlatform(config.platform!);

export const avatar = new Avatars(client);
export const account = new Account(client);
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
    const response = await account.createOAuth2Token(
      {
        provider: OAuthProvider.Google,
        success: redirectUri,
        failure: redirectUri,
      }
      //   OAuthProvider.Google,
      //   redirectUri
    );
    if (!response) throw new Error("Failed to log in");
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
    const session = await account.createSession({ userId, secret });
    if (!session) throw new Error("Failed to create a session");
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
      const userAvatar = avatar.getInitials({ name: response.name });
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
