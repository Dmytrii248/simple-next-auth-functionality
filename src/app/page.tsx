"use client";

import { useAuth } from "@/hooks";
import { DASHBOARD, LOGIN } from "@/router";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";

export default function Home() {
  const router = useRouter();
  const auth = useAuth();

  useLayoutEffect(() => {
    if (auth?.user) {
      router.replace(DASHBOARD.basePath);
    } else {
      router.replace(LOGIN.basePath);
    }
  }, [auth?.user, router]);

  return null;
}
