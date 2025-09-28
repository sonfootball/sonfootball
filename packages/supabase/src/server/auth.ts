import { createServerClient } from "./client";

export async function getUser() {
  try {
    const supabase = await createServerClient();
    const { data, error } = await supabase.auth.getUser();

    if (error) {
      return null;
    }

    return data?.user || null;
  } catch (error) {
    console.error("Error getting server user:", error);
    return null;
  }
}

export async function signInWithGoogle() {
  const supabase = await createServerClient();

  return supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });
}

export async function signOut() {
  const supabase = await createServerClient();
  return supabase.auth.signOut();
}
