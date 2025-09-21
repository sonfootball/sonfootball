// Server-side only exports
export { getCachedCategories, getCachedBrands } from "./server-data";
export { supabase } from "./client";
export type { Database, Profile, Category, Brand, Product } from "./types";

// Server-side authentication
import { supabase } from "./client";

export async function getServerUser() {
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session?.user || null;
  } catch (error) {
    console.error("Error getting server user:", error);
    return null;
  }
}
