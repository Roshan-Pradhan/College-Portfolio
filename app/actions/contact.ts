"use server";

import { createClient } from "@/lib/supabase/server";

type ContactForm = {
  full_name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
};

export async function submitContactForm(form: ContactForm) {
  const supabase = await createClient();

  const { error } = await supabase.from("contact_messages").insert(form);

  if (error) return { success: false, error: error.message };
  return { success: true };
}
