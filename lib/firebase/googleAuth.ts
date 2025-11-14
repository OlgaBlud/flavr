// import * as Google from "expo-auth-session/providers/google";
// import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
// import { useEffect } from "react";
// import { auth } from "./firebaseConfig";

// export const useGoogleAuth = () => {
//   const [request, response, promptAsync] = Google.useAuthRequest({
//     clientId: process.env.EXPO_PUBLIC_WEB_CLIENT_ID,
//     scopes: ["profile", "email"],
//   });

//   useEffect(() => {
//     if (response?.type === "success") {
//       const { id_token } = response.params;
//       const credential = GoogleAuthProvider.credential(id_token);
//       signInWithCredential(auth, credential)
//         .then(() => alert("Successfully signed in!"))
//         .catch(console.error);
//     }
//   }, [response]);

//   return { promptAsync, request };
// };
