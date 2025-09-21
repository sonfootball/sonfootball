import { Button } from "@/components/ui/button";
import { signOut } from "@/app/actions/auth";

export function SignOutButton() {
  return (
    <form action={signOut}>
      <Button type="submit" variant="destructive" className="w-full md:w-auto">
        Đăng xuất
      </Button>
    </form>
  );
}
