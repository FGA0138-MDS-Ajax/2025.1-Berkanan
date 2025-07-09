'use server'

import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

export async function login(formData: FormData) {
  const supabase = await createClient()

  // Corrigido para "username" se o input do form estiver com esse name
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    const encodedMessage = encodeURIComponent(error.message)
    redirect(`/page-login?error=${encodedMessage}`)
  }

  redirect('/painel-adm')
}
