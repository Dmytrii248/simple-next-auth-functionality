"use client";

import { Button } from "@/components";
import { useAuth } from "@/hooks";

export default function Page() {
  const auth = useAuth();

  const handleLogin = () => {
    auth?.login({
      id: crypto.randomUUID(),
      name: "test",
      email: "test.email@gmail.com",
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-semibold">Login</h1>
      <div className="mt-2 flex gap-2">
        <Button onClick={handleLogin}>Login</Button>
        <Button onClick={auth?.logout}>Logout</Button>
      </div>
    </div>
  );
}
