import React, { createContext, ReactNode, useContext } from "react";

import {
  getCurrentUserAppwrite,
  loginEmailAppwrite,
  loginGoogleAppwrite,
  logoutAppwrite,
  signUpAppwrite,
} from "./appwrite";
import useAppwrite from "./useAppwrite";

interface GlobalContextType {
  isLogged: boolean;
  user: User | null;
  loading: boolean;
  //   refetch: () => void;
  //   refetch: () => Promise<void>;
  refetch: (newParams?: Record<string, string | number>) => Promise<void>;
  handleLogout: () => Promise<void>;
  handleSignUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  handleLoginEmail: (email: string, password: string) => Promise<void>;
  handleLoginGoogle: () => Promise<void>;
}

interface User {
  $id: string;
  name: string;
  email: string;
  avatar: string;
}

interface GlobalProviderProps {
  children: ReactNode;
}
const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const {
    data: user,
    loading,
    refetch,
  } = useAppwrite({
    fn: getCurrentUserAppwrite,
  });

  const isLogged = !!user;
  // console.log("user data from GlobalProvider", JSON.stringify(user, null, 2));

  const handleLogout = async () => {
    const success = await logoutAppwrite();
    if (success) {
      await refetch();
    }
  };
  const handleSignUp = async (
    name: string,
    email: string,
    password: string
  ) => {
    await signUpAppwrite(name, email, password);
    // await loginEmailAppwrite(email, password);
    // await createUserInDatabase(newUser.$id, name, email);
    await refetch();
  };

  const handleLoginEmail = async (email: string, password: string) => {
    await loginEmailAppwrite(email, password);
    await refetch();
  };

  const handleLoginGoogle = async () => {
    const success = await loginGoogleAppwrite();
    if (success) await refetch();
  };

  return (
    <GlobalContext.Provider
      value={{
        isLogged,
        user: user ?? null,
        loading,
        refetch,
        handleLogout,
        handleSignUp,
        handleLoginEmail,
        handleLoginGoogle,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = (): GlobalContextType => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalContext must be used within a GlobalProvider");

  return context;
};

export default GlobalProvider;
