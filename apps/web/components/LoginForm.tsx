import { Button } from "@/components/ui/button";
import { signInWithGoogleAction } from "@/app/actions/auth";
import { getUser } from "@sonfootball/supabase/server";
import { redirect } from "next/navigation";

export async function LoginForm() {
  const user = await getUser();

  if (user) {
    redirect("/");
  }

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
