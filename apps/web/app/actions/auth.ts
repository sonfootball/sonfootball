"use server";

import { createClient as createSSRServerClient } from "@sonfootball/supabase/server";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createSSRServerClient();
  await supabase.auth.signOut();
  redirect("/");
}
