import React, { useState } from "react";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormProps {
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

export const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      if (onSubmit) {
        await onSubmit(formData);
      } else {
        // Default: simulate a 1.5s API call for demo/Storybook use
        await new Promise((resolve) => setTimeout(resolve, 1500));
      }
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="border-b border-(--border-color) bg-transparent pb-2.5 text-(--white) outline-none placeholder-gray-600 transition-colors focus:border-(--light-gray) disabled:opacity-40"
        required
        disabled={status === "loading"}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="border-b border-(--border-color) bg-transparent pb-2.5 text-(--white) outline-none placeholder-gray-600 transition-colors focus:border-(--light-gray) disabled:opacity-40"
        required
        disabled={status === "loading"}
      />

      <textarea
        name="message"
        placeholder="Message"
        value={formData.message}
        onChange={handleChange}
        rows={4}
        className="min-h-20 resize-y border-b border-(--border-color) bg-transparent pb-2.5 text-(--white) outline-none placeholder-gray-600 transition-colors focus:border-(--light-gray) disabled:opacity-40"
        required
        disabled={status === "loading"}
      />

      <div className="mt-1 flex items-center justify-between gap-4">
        <div className="flex-1">
          {status === "success" && (
            <div className="flex items-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              <span className="text-xs text-emerald-500">Sent — I&apos;ll reply within 24 hours.</span>
            </div>
          )}
          {status === "error" && (
            <div className="flex items-center gap-2">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#f87171" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              <span className="text-xs text-red-400">{errorMessage}</span>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="flex h-9 shrink-0 cursor-pointer items-center gap-2 rounded-full border border-(--border-color) bg-white/5 px-5 text-xs font-medium text-(--light-gray) outline-none transition-all duration-200 hover:border-white/30 hover:text-(--white) disabled:cursor-not-allowed disabled:opacity-50"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="22" y1="2" x2="11" y2="13" />
            <polygon points="22 2 15 22 11 13 2 9 22 2" />
          </svg>
        </button>
      </div>
    </form>
  );
};
