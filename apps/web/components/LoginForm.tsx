import { Button } from "@/components/ui/button";
import { signInWithGoogleAction } from "@/app/actions/auth";

export async function LoginForm() {
  return (
    <div className="space-y-4">
      <form action={signInWithGoogleAction}>
        <Button type="submit" className="w-full" variant="ghost">
          Đăng nhập với Google
        </Button>
      </form>
    </div>
  );
}
