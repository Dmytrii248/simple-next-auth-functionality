"use client";

import { ContextType } from "@/types";
import { createContext } from "react";

export const AuthContext = createContext<ContextType | null>(null);
