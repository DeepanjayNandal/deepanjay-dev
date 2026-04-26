"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError("");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error ?? "something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "something went wrong");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-600 dark:text-gray-400 mb-2">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="your name"
          className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 rounded text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-600 dark:text-gray-400 mb-2">
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="your.email@example.com"
          className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 rounded text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-600 dark:text-gray-400 mb-2">
          message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="your message here..."
          className="w-full px-4 py-3 bg-white dark:bg-slate-900 border border-neutral-200 dark:border-slate-700 rounded text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      {status === "success" && (
        <p className="text-green-400 text-sm">message sent! i&apos;ll get back to you soon.</p>
      )}
      {status === "error" && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-6 py-3 bg-accent text-white font-semibold rounded hover:bg-accent/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "loading" ? "sending..." : "send message"}
      </button>
    </form>
  );
}
