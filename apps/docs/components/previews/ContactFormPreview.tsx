"use client";

import React, { useState } from "react";

export default function ContactFormPreview() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("success");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm flex-col gap-4">
      <input
        type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange}
        className="border-b border-white/10 bg-transparent pb-2.5 text-white outline-none placeholder-zinc-600 transition-colors focus:border-white/40 disabled:opacity-40"
        required disabled={status === "loading"}
      />
      <input
        type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange}
        className="border-b border-white/10 bg-transparent pb-2.5 text-white outline-none placeholder-zinc-600 transition-colors focus:border-white/40 disabled:opacity-40"
        required disabled={status === "loading"}
      />
      <textarea
        name="message" placeholder="Message" value={formData.message} onChange={handleChange} rows={3}
        className="resize-y border-b border-white/10 bg-transparent pb-2.5 text-white outline-none placeholder-zinc-600 transition-colors focus:border-white/40 disabled:opacity-40"
        required disabled={status === "loading"}
      />
      <div className="mt-1 flex items-center justify-between gap-4">
        <div className="flex-1">
          {status === "success" && (
            <span className="text-xs text-emerald-500">✓ Sent — I'll reply within 24 hours.</span>
          )}
        </div>
        <button
          type="submit" disabled={status === "loading"}
          className="flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 text-xs font-medium text-white/70 transition-all duration-200 hover:border-white/30 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </form>
  );
}
