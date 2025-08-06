import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL || "https://placeholder.supabase.co";
const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "placeholder-key";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Database types based on our schema
export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          email: string;
          phone: string | null;
          avatar_url: string | null;
          role: "customer" | "admin" | "staff";
          is_active: boolean;
          email_verified: boolean;
          phone_verified: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          email: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: "customer" | "admin" | "staff";
          is_active?: boolean;
          email_verified?: boolean;
          phone_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          email?: string;
          phone?: string | null;
          avatar_url?: string | null;
          role?: "customer" | "admin" | "staff";
          is_active?: boolean;
          email_verified?: boolean;
          phone_verified?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          parent_id: string | null;
          image_url: string | null;
          sort_order: number;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          parent_id?: string | null;
          image_url?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          parent_id?: string | null;
          image_url?: string | null;
          sort_order?: number;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      brands: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          logo_url: string | null;
          website_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          logo_url?: string | null;
          website_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          logo_url?: string | null;
          website_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      products: {
        Row: {
          id: string;
          name: string;
          slug: string;
          description: string | null;
          short_description: string | null;
          brand_id: string | null;
          category_id: string | null;
          sku: string;
          price: number;
          sale_price: number | null;
          cost_price: number | null;
          weight_grams: number | null;
          dimensions: Record<string, unknown> | null;
          tags: string[] | null;
          meta_title: string | null;
          meta_description: string | null;
          is_featured: boolean;
          is_active: boolean;
          is_deleted: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          description?: string | null;
          short_description?: string | null;
          brand_id?: string | null;
          category_id?: string | null;
          sku: string;
          price: number;
          sale_price?: number | null;
          cost_price?: number | null;
          weight_grams?: number | null;
          dimensions?: Record<string, unknown> | null;
          tags?: string[] | null;
          meta_title?: string | null;
          meta_description?: string | null;
          is_featured?: boolean;
          is_active?: boolean;
          is_deleted?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          short_description?: string | null;
          brand_id?: string | null;
          category_id?: string | null;
          sku?: string;
          price?: number;
          sale_price?: number | null;
          cost_price?: number | null;
          weight_grams?: number | null;
          dimensions?: Record<string, unknown> | null;
          tags?: string[] | null;
          meta_title?: string | null;
          meta_description?: string | null;
          is_featured?: boolean;
          is_active?: boolean;
          is_deleted?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
