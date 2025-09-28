import { AuthChangeEvent, Session } from "@supabase/supabase-js";
import { supabase } from "./client";

export async function getSession() {
  return await supabase.auth.getSession();
}

export async function getUser() {
  return await supabase.auth.getUser();
}

export function onAuthStateChange(
  callback: (
    event: AuthChangeEvent,
    session: Session | null
  ) => void | Promise<void>
) {
  return supabase.auth.onAuthStateChange(callback);
}
