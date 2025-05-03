import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';

export async function createClient() {
  const cookieStore = cookies();

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!, // ← ! qo‘shildi
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, // ← ! qo‘shildi
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // Server Componentda setAll ishlamaydi — bu normal holat.
          }
        },
      },
    },
  );
}
