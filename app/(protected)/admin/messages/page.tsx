import MessagesPage from "@/components/admin/MessagesPage";
import { createClient } from "@/lib/supabase/server";

export default async function AdminMessagesPage() {
  const supabase = await createClient();
  const { data: messages } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false }); // newest first

  return <MessagesPage initialMessages={messages ?? []} />;
}
