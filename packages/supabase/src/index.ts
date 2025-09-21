export { supabase } from "./client";
export type { Database, Profile, Category, Brand, Product } from "./types";
export type { User } from "@supabase/supabase-js";

export {
  signInWithGoogle,
  signInWithFacebook,
  signOut,
  getSession,
  getUser,
  onAuthStateChange,
} from "./auth";

export { fetchCategories, fetchBrands } from "./data";

export { useAuth, useCategories, useBrands } from "./hooks";
