import { type NextRequest } from "next/server";
import { createClient as createSSRServerClient } from "@sonfootball/supabase/server";
import { redirect } from "next/navigation";

export async function GET(request: NextRequest) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");

  if (error) {
    console.error("Auth error:", error);
    return redirect(`${requestUrl.origin}?error=${error}`);
  }

  if (code) {
    const supabase = await createSSRServerClient();
    const { error: exchangeError } =
      await supabase.auth.exchangeCodeForSession(code);

    if (exchangeError) {
      console.error("Exchange error:", exchangeError);
      return redirect(`${requestUrl.origin}?error=exchange_failed`);
    }
  }

  // URL to redirect to after sign in process completes
  return redirect(requestUrl.origin);
}
