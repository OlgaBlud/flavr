import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebaseConfig";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(userCredential.user, { displayName: name });

    alert("Registration successful!");
  } catch (error: any) {
    console.log("Register error:", error);
    alert(error.message);
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    alert(`Welcome back, ${user.displayName || "user"}!`);

    return user;
  } catch (error: any) {
    console.log("Login error:", error);
    if (error.code === "auth/invalid-credential") {
      alert("Invalid email or password");
    } else if (error.code === "auth/user-not-found") {
      alert("No user found with this email");
    } else {
      alert(error.message);
    }
  }
};
// export const logoutUser = async () => {
//   await signOut(auth);
// };
