import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { GET } from '../api/supabase-test/route';

export default async function AuthPage() {
  let url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  let key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url) url = "";
  if (!key) key = "";

  const supabase = createClient(url, key, {
    auth: { persistSession: false },
  });
  const { data, error } = await supabase.auth.getSession();

  // const [instruments, setInstruments] = useState([]);
  // useEffect(() => {
  //   getInstruments();
  // }, []);
  // async function getInstruments() {
  //   const { data } = await supabase.from("instruments").select();
  //   setInstruments(data);
  // }
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-semibold text-center">Auth</h1>
        <div className="rounded-lg border border-black/10 dark:border-white/15 p-6">
          {Boolean(data.session)}
        </div>
      </div>
    </main>
  );

}
