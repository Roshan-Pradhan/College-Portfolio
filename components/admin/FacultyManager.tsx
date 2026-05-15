"use client";

import { useState } from "react";

type Faculty = {
  id: string;
  name: string;
  role: string;
  dept: string;
  exp: string;
};

const EMPTY_FORM = { name: "", role: "", dept: "", exp: "" };

export default function FacultyManager({
  initialFaculty,
}: {
  initialFaculty: Faculty[];
}) {
  const [faculty, setFaculty] = useState<Faculty[]>(initialFaculty);
  const [form, setForm] = useState(EMPTY_FORM);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState(EMPTY_FORM);
  const [adding, setAdding] = useState(false);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function flash(msg: string, type: "success" | "error") {
    if (type === "success") {
      setSuccess(msg);
      setTimeout(() => setSuccess(""), 3000);
    } else {
      setError(msg);
      setTimeout(() => setError(""), 4000);
    }
  }

  // ── ADD ──────────────────────────────────────────────
  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    setAdding(true);
    try {
      const res = await fetch("/api/faculty", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error(await res.text());
      const created: Faculty = await res.json();
      setFaculty((prev) => [...prev, created]);
      setForm(EMPTY_FORM);
      flash("Faculty member added.", "success");
    } catch {
      flash("Failed to add faculty member.", "error");
    } finally {
      setAdding(false);
    }
  }

  // ── EDIT ─────────────────────────────────────────────
  function startEdit(f: Faculty) {
    setEditingId(f.id);
    setEditForm({ name: f.name, role: f.role, dept: f.dept, exp: f.exp });
  }

  function cancelEdit() {
    setEditingId(null);
    setEditForm(EMPTY_FORM);
  }

  async function handleSave(id: string) {
    setSavingId(id);
    try {
      const res = await fetch(`/api/faculty/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editForm),
      });
      if (!res.ok) throw new Error(await res.text());
      const updated: Faculty = await res.json();
      setFaculty((prev) => prev.map((f) => (f.id === id ? updated : f)));
      setEditingId(null);
      flash("Changes saved.", "success");
    } catch {
      flash("Failed to save changes.", "error");
    } finally {
      setSavingId(null);
    }
  }

  // ── DELETE ────────────────────────────────────────────
  async function handleDelete(id: string) {
    if (!confirm("Remove this faculty member?")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/faculty/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error(await res.text());
      setFaculty((prev) => prev.filter((f) => f.id !== id));
      flash("Faculty member removed.", "success");
    } catch {
      flash("Failed to delete.", "error");
    } finally {
      setDeletingId(null);
    }
  }

  const inputCls =
    "w-full border border-gray-200 rounded-md px-2.5 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ── Header ── */}
      <div className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Faculty Management
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {faculty.length} member{faculty.length !== 1 ? "s" : ""}
          </p>
        </div>
        <a
          href="/"
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          ← Back to site
        </a>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-8 space-y-6">
        {/* ── Toast ── */}
        {(success || error) && (
          <div
            className={`rounded-md px-4 py-3 text-sm font-medium ${
              success
                ? "bg-green-50 text-green-700 border border-green-200"
                : "bg-red-50 text-red-700 border border-red-200"
            }`}
          >
            {success || error}
          </div>
        )}

        {/* ── Add form ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              Add New Member
            </h2>
          </div>
          <form onSubmit={handleAdd} className="px-6 py-5">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {(["name", "role", "dept", "exp"] as const).map((field) => (
                <div key={field} className="space-y-1">
                  <label className="text-xs font-medium text-gray-500 capitalize">
                    {field === "exp"
                      ? "Experience"
                      : field === "dept"
                        ? "Department"
                        : field}
                  </label>
                  <input
                    placeholder={
                      field === "name"
                        ? "Dr. Ramesh Adhikari"
                        : field === "role"
                          ? "Principal"
                          : field === "dept"
                            ? "Leadership"
                            : "25 yrs"
                    }
                    value={form[field]}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, [field]: e.target.value }))
                    }
                    className={inputCls}
                    required
                  />
                </div>
              ))}
            </div>
            <button
              type="submit"
              disabled={adding}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white text-sm font-medium px-5 py-2 rounded-md transition-colors"
            >
              {adding ? "Adding…" : "+ Add Faculty Member"}
            </button>
          </form>
        </div>

        {/* ── Table ── */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
              All Members
            </h2>
          </div>

          {faculty.length === 0 ? (
            <div className="px-6 py-16 text-center text-gray-400 text-sm">
              No faculty members yet. Add one above.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    {[
                      "Name",
                      "Role",
                      "Department",
                      "Experience",
                      "Actions",
                    ].map((h) => (
                      <th
                        key={h}
                        className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {faculty.map((f) => {
                    const isEditing = editingId === f.id;
                    const isDeleting = deletingId === f.id;
                    const isSaving = savingId === f.id;

                    return (
                      <tr
                        key={f.id}
                        className={`transition-colors ${
                          isEditing ? "bg-blue-50/50" : "hover:bg-gray-50/70"
                        }`}
                      >
                        {/* Name */}
                        <td className="px-5 py-3">
                          {isEditing ? (
                            <input
                              value={editForm.name}
                              onChange={(e) =>
                                setEditForm((p) => ({
                                  ...p,
                                  name: e.target.value,
                                }))
                              }
                              className={inputCls}
                            />
                          ) : (
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold text-xs flex-shrink-0">
                                {f.name
                                  .split(" ")
                                  .map((w) => w[0])
                                  .join("")
                                  .slice(0, 2)
                                  .toUpperCase()}
                              </div>
                              <span className="font-medium text-gray-900">
                                {f.name}
                              </span>
                            </div>
                          )}
                        </td>

                        {/* Role */}
                        <td className="px-5 py-3">
                          {isEditing ? (
                            <input
                              value={editForm.role}
                              onChange={(e) =>
                                setEditForm((p) => ({
                                  ...p,
                                  role: e.target.value,
                                }))
                              }
                              className={inputCls}
                            />
                          ) : (
                            <span className="text-gray-700">{f.role}</span>
                          )}
                        </td>

                        {/* Dept */}
                        <td className="px-5 py-3">
                          {isEditing ? (
                            <input
                              value={editForm.dept}
                              onChange={(e) =>
                                setEditForm((p) => ({
                                  ...p,
                                  dept: e.target.value,
                                }))
                              }
                              className={inputCls}
                            />
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                              {f.dept}
                            </span>
                          )}
                        </td>

                        {/* Exp */}
                        <td className="px-5 py-3">
                          {isEditing ? (
                            <input
                              value={editForm.exp}
                              onChange={(e) =>
                                setEditForm((p) => ({
                                  ...p,
                                  exp: e.target.value,
                                }))
                              }
                              className={inputCls}
                            />
                          ) : (
                            <span className="text-gray-600">{f.exp}</span>
                          )}
                        </td>

                        {/* Actions */}
                        <td className="px-5 py-3">
                          <div className="flex items-center gap-2">
                            {isEditing ? (
                              <>
                                <button
                                  onClick={() => handleSave(f.id)}
                                  disabled={isSaving}
                                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 transition-colors"
                                >
                                  {isSaving ? "Saving…" : "Save"}
                                </button>
                                <button
                                  onClick={cancelEdit}
                                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
                                >
                                  Cancel
                                </button>
                              </>
                            ) : (
                              <>
                                <button
                                  onClick={() => startEdit(f)}
                                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(f.id)}
                                  disabled={isDeleting}
                                  className="text-xs font-medium px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-60 transition-colors"
                                >
                                  {isDeleting ? "Removing…" : "Remove"}
                                </button>
                              </>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
