"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@sonfootball/supabase/hooks";

export function LoginForm() {
  const { signInWithGoogle } = useAuth();

  return (
    <div className="space-y-4">
      <Button onClick={signInWithGoogle} className="w-full" variant="outline">
        Đăng nhập với Google
      </Button>
    </div>
  );
}
