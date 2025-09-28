import { signInWithGoogleAction, signOutAction } from "@/app/actions/auth";
import { getUser } from "@sonfootball/supabase/server";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@sonfootball/ui/dropdown-menu";

export async function UserDropdownContent() {
  const user = await getUser();

  return (
    <DropdownMenu>
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
            <form action={signOutAction}>
              <DropdownMenuItem asChild>
                <button type="submit" className="w-full text-left">
                  Đăng xuất
                </button>
              </DropdownMenuItem>
            </form>
          </>
        ) : (
          <form action={signInWithGoogleAction}>
            <DropdownMenuItem asChild>
              <button type="submit" className="w-full text-left">
                Đăng nhập
              </button>
            </DropdownMenuItem>
          </form>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
