"use client";

import { Button } from "@/components";
import { useAuth } from "@/hooks";

export default function Page() {
  const auth = useAuth();

  return (
    <div>
      <h1 className="text-4xl font-semibold">Dashboard</h1>
      <div className="mt-2 flex gap-2">
        <Button onClick={auth?.logout}>logout</Button>
      </div>
    </div>
  );
}
