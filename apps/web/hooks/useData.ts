import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { Database } from "@/lib/supabase";

type Category = Database["public"]["Tables"]["categories"]["Row"];
type Brand = Database["public"]["Tables"]["brands"]["Row"];

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from("categories")
          .select("*")
          .eq("is_active", true)
          .order("sort_order", { ascending: true });

        if (error) {
          setError(error.message);
        } else {
          setCategories(data || []);
        }
      } catch (err) {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return { categories, loading, error };
}

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const { data, error } = await supabase
          .from("brands")
          .select("*")
          .eq("is_active", true)
          .order("name", { ascending: true });

        if (error) {
          setError(error.message);
        } else {
          setBrands(data || []);
        }
      } catch (err) {
        setError("Failed to fetch brands");
      } finally {
        setLoading(false);
      }
    };

    fetchBrands();
  }, []);

  return { brands, loading, error };
}
