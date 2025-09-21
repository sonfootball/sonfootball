"use client";

import { useAuth } from "@sonfootball/supabase/hooks";
import Link from "next/link";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@sonfootball/ui/dropdown-menu";

export function UserDropdownContent() {
  const { user, signInWithGoogle, signOut, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  if (loading) {
    return null;
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <div className="absolute inset-0" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        {user ? (
          <>
            <DropdownMenuLabel>
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  {user.user_metadata?.full_name || "User"}
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={signOut}>Đăng xuất</DropdownMenuItem>
          </>
        ) : (
          <DropdownMenuItem onClick={signInWithGoogle}>
            Đăng nhập
          </DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
