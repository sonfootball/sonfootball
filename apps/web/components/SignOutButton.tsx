import { Button } from "@/components/ui/button";
import { signOutAction } from "@/app/actions/auth";

export function SignOutButton() {
  return (
    <form action={signOutAction}>
      <Button type="submit" variant="destructive">
        Đăng xuất
      </Button>
    </form>
  );
}
