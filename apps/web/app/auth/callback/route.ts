import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const error = requestUrl.searchParams.get("error");

  if (error) {
    console.error("Auth error:", error);
    return NextResponse.redirect(`${requestUrl.origin}?error=${error}`);
  }

  if (code) {
    const supabase = createRouteHandlerClient({ cookies });
    const { error: exchangeError } =
      await supabase.auth.exchangeCodeForSession(code);

    if (exchangeError) {
      console.error("Exchange error:", exchangeError);
      return NextResponse.redirect(
        `${requestUrl.origin}?error=exchange_failed`
      );
    }
  }

  // URL to redirect to after sign in process completes
  return NextResponse.redirect(requestUrl.origin);
}
