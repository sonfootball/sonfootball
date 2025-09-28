"use client";

import { useEffect, useState } from "react";
import { User } from "@supabase/supabase-js";
import { getSession, onAuthStateChange } from "./auth";

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
      setUser(session?.user as User | null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  return { user, loading };
}
