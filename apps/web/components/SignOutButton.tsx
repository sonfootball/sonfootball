"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@sonfootball/supabase";

export function SignOutButton() {
  const { signOut } = useAuth();

  return (
    <Button
      onClick={signOut}
      variant="destructive"
      className="w-full md:w-auto"
    >
      Đăng xuất
    </Button>
  );
}
