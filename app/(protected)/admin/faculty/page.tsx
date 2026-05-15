import FacultyManager from "@/components/admin/FacultyManager";
import { createClient } from "@/lib/supabase/server";

export default async function AdminFacultyPage() {
  const supabase = await createClient();
  const { data: faculty } = await supabase
    .from("faculty")
    .select("*")
    .order("created_at");

  return <FacultyManager initialFaculty={faculty ?? []} />;
}
