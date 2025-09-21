"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import {
  signInWithGoogle,
  signInWithFacebook,
  signOut,
  getSession,
  onAuthStateChange,
} from "./auth";
import { fetchCategories, fetchBrands } from "./data";
import type { Category, Brand } from "./types";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getInitialSession = async () => {
      const {
        data: { session },
      } = await getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getInitialSession();

    const {
      data: { subscription },
    } = onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return {
    user,
    loading,
    signInWithGoogle,
    signInWithFacebook,
    signOut,
  };
}

export function useCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategories();
        setCategories(data);
      } catch (err) {
        setError("Failed to fetch categories");
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  return { categories, loading, error };
}

export function useBrands() {
  const [brands, setBrands] = useState<Brand[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await fetchBrands();
        setBrands(data);
      } catch (err) {
        setError("Failed to fetch brands");
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  return { brands, loading, error };
}
