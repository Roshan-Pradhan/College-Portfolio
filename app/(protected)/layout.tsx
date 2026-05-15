import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) redirect("/admin/login");

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/admin/login");

  // Fetch unread count for badge
  const { count: unreadCount } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact", head: true })
    .eq("is_read", false);

  return (
    <div className="min-h-screen flex bg-gray-50">
      <AdminSidebar
        unreadCount={unreadCount ?? 0}
        userEmail={user.email ?? ""}
      />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
