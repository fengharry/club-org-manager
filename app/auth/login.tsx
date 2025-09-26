import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

export default async function AuthPage() {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url) url = "";
  if (!key) key = "";

  const supabase = createClient(url, key, {
    auth: { persistSession: false },
  });
  async function login() {
    const { data, error } = await supabase.auth.signUp({
            email: 'example@email.com',
            password: 'example-password',
        })
  }
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-6">
            <h1 className="text-2xl font-semibold text-center">Auth</h1>
            <div className="rounded-lg border border-black/10 dark:border-white/15 p-6">
                <button id="loginButton" onClick={login}>Click me </button>
            </div>
        </div>
    </main>
  );

}
