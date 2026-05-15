"use client";

import { useState } from "react";
import { markAsRead, deleteMessage } from "@/app/actions/messages";
import {
  Mail,
  MailOpen,
  Trash2,
  Phone,
  AtSign,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

type Message = {
  id: string;
  full_name: string;
  phone: string;
  email?: string;
  subject?: string;
  message: string;
  is_read: boolean;
  created_at: string;
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-NP", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function MessageRow({ msg }: { msg: Message }) {
  const [expanded, setExpanded] = useState(false);
  const [marking, setMarking] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleMarkRead() {
    setMarking(true);
    await markAsRead(msg.id);
    setMarking(false);
  }

  async function handleDelete() {
    if (!confirm("Delete this message?")) return;
    setDeleting(true);
    await deleteMessage(msg.id);
  }

  return (
    <div
      className={`border rounded-xl overflow-hidden transition-all duration-200 ${
        msg.is_read
          ? "border-gray-200 bg-white"
          : "border-blue-200 bg-blue-50/40 shadow-sm"
      }`}
    >
      {/* Row header */}
      <div
        className="flex items-center gap-4 px-5 py-4 cursor-pointer select-none"
        onClick={() => setExpanded((p) => !p)}
      >
        {/* Read indicator */}
        <div className="flex-shrink-0">
          {msg.is_read ? (
            <MailOpen className="w-5 h-5 text-gray-400" />
          ) : (
            <Mail className="w-5 h-5 text-blue-500" />
          )}
        </div>

        {/* Sender */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <span
              className={`text-sm font-semibold truncate ${
                msg.is_read ? "text-gray-700" : "text-gray-900"
              }`}
            >
              {msg.full_name}
            </span>
            {!msg.is_read && (
              <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500 text-white">
                NEW
              </span>
            )}
          </div>
          <p className="text-xs text-gray-500 truncate mt-0.5">
            {msg.subject || "No subject"} —{" "}
            <span className="text-gray-400">{msg.message.slice(0, 60)}…</span>
          </p>
        </div>

        {/* Date */}
        <div className="flex-shrink-0 text-right hidden sm:block">
          <p className="text-xs text-gray-400">{formatDate(msg.created_at)}</p>
        </div>

        {/* Expand icon */}
        <div className="flex-shrink-0 text-gray-400">
          {expanded ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>
      </div>

      {/* Expanded body */}
      {expanded && (
        <div className="border-t border-gray-100 px-5 py-5 space-y-4">
          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5" />
              {msg.phone}
            </span>
            {msg.email && (
              <span className="flex items-center gap-1.5">
                <AtSign className="w-3.5 h-3.5" />
                {msg.email}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {formatDate(msg.created_at)}
            </span>
          </div>

          {/* Subject */}
          {msg.subject && (
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
                Subject
              </p>
              <p className="text-sm text-gray-700">{msg.subject}</p>
            </div>
          )}

          {/* Message */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">
              Message
            </p>
            <p className="text-sm text-gray-800 leading-relaxed whitespace-pre-wrap">
              {msg.message}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 pt-1">
            {!msg.is_read && (
              <button
                onClick={handleMarkRead}
                disabled={marking}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 transition-colors"
              >
                <MailOpen className="w-3.5 h-3.5" />
                {marking ? "Marking…" : "Mark as read"}
              </button>
            )}
            {msg.email && (
              <a
                href={`mailto:${msg.email}`}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
              >
                <AtSign className="w-3.5 h-3.5" />
                Reply via email
              </a>
            )}
            <button
              onClick={handleDelete}
              disabled={deleting}
              className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-md bg-red-50 text-red-600 hover:bg-red-100 disabled:opacity-60 transition-colors ml-auto"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {deleting ? "Deleting…" : "Delete"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

type Filter = "all" | "unread" | "read";

export default function MessagesPage({
  initialMessages,
}: {
  initialMessages: Message[];
}) {
  const [filter, setFilter] = useState<Filter>("all");

  const unreadCount = initialMessages.filter((m) => !m.is_read).length;

  const filtered = initialMessages.filter((m) => {
    if (filter === "unread") return !m.is_read;
    if (filter === "read") return m.is_read;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-5 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-gray-900">
            Contact Messages
          </h1>
          <p className="text-sm text-gray-500 mt-0.5">
            {initialMessages.length} total
            {unreadCount > 0 && (
              <span className="ml-2 inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold bg-blue-500 text-white">
                {unreadCount} unread
              </span>
            )}
          </p>
        </div>
        <a
          href="/admin/faculty"
          className="text-sm text-gray-500 hover:text-gray-800 transition-colors"
        >
          ← Faculty
        </a>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-8 space-y-4">
        {/* Filter tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 w-fit">
          {(["all", "unread", "read"] as Filter[]).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-1.5 rounded-md text-sm font-medium capitalize transition-colors ${
                filter === f
                  ? "bg-white text-gray-900 shadow-sm"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {f}
              {f === "unread" && unreadCount > 0 && (
                <span className="ml-1.5 text-xs text-blue-500 font-semibold">
                  {unreadCount}
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Messages list */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">
            <Mail className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-sm">
              {filter === "unread"
                ? "No unread messages."
                : filter === "read"
                  ? "No read messages yet."
                  : "No messages yet."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((msg) => (
              <MessageRow key={msg.id} msg={msg} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
