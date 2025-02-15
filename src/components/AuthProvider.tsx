"use client";

import { DASHBOARD, LOGIN } from "@/router";
import {
  AuthContext,
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from "@/store";
import { User } from "@/types";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useState } from "react";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(getUserFromLocalStorage());
  const router = useRouter();

  const login = (user: User) => {
    setUser(user);
    setUserToLocalStorage(user);
    router.push(DASHBOARD.basePath);
  };

  const logout = () => {
    setUser(null);
    setUserToLocalStorage(null);
    router.push(LOGIN.basePath);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
