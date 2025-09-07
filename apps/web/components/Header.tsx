"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@sonfootball/supabase";
import Link from "next/link";

export function Header() {
  const { user, signInWithGoogle, signOut } = useAuth();

  return (
    <header className="flex items-center justify-between p-4 border-b">
      <Link href="/" className="text-xl font-bold">
        SonFootball
      </Link>
      <div>
        {user ? (
          <div className="flex items-center gap-4">
            <span>{user.email}</span>
            <Link href="/profile">
              <Button variant="outline">Profile</Button>
            </Link>
            <Button onClick={signOut}>Sign Out</Button>
          </div>
        ) : (
          <Button onClick={signInWithGoogle}>Sign In</Button>
        )}
      </div>
    </header>
  );
}
