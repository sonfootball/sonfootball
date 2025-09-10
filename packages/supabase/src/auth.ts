import { supabase } from "./client";

export async function signInWithGoogle() {
  const redirectUrl = `${window.location.origin}/auth/callback`;

  // Debug logging
  console.log("Auth Debug:", {
    "window.location.origin": window.location.origin,
    "window.location.hostname": window.location.hostname,
    redirectUrl: redirectUrl,
    "current URL": window.location.href,
  });

  const { error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: redirectUrl,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
  return { error };
}

export async function signInWithFacebook() {
  const { error } = await supabase.auth.signInWithOAuth({
    provider: "facebook",
    options: {
      redirectTo: `${window.location.origin}/auth/callback`,
    },
  });
  return { error };
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  return { error };
}

export async function getSession() {
  return await supabase.auth.getSession();
}

export async function getUser() {
  return await supabase.auth.getUser();
}

export function onAuthStateChange(
  callback: (event: string, session: any) => void
) {
  return supabase.auth.onAuthStateChange(callback);
}
