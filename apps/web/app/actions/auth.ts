"use server";

import { signInWithGoogle, signOut } from "@sonfootball/supabase/server";
import { redirect } from "next/navigation";

export async function signInWithGoogleAction() {
  const { data, error } = await signInWithGoogle();

  if (error) {
    console.error("Error signing in with Google:", error);
    return;
  }

  if (data.url) {
    redirect(data.url);
  }
}

export async function signOutAction() {
  const { error } = await signOut();

  if (error) {
    console.error("Error signing out:", error);
    return;
  }

  redirect("/");
}
