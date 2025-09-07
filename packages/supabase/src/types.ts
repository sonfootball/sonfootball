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
      };
    };
  };
}

export type Profile = Database["public"]["Tables"]["profiles"]["Row"];
export type Category = Database["public"]["Tables"]["categories"]["Row"];
export type Brand = Database["public"]["Tables"]["brands"]["Row"];
export type Product = Database["public"]["Tables"]["products"]["Row"];
