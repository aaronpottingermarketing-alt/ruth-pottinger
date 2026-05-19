"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/lib/supabase";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
};

const initial: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const { error } = await getSupabaseClient().from("contact_submissions").insert({
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone || null,
      message: form.message,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or call Ruth directly.");
    } else {
      setStatus("success");
      setForm(initial);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-[#F8F5F0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: info */}
          <div>
            <p className="text-[#8BAF7C] text-sm tracking-[0.2em] uppercase font-medium mb-3">
              Get in Touch
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-[#2C2C2A] text-4xl md:text-5xl font-light leading-tight mb-6">
              Get in Touch
            </h2>
            <p className="text-[#2C2C2A]/70 mb-8 leading-relaxed">
              West Wickham, Bromley, Kent, England
            </p>

            <div className="space-y-5">
              {/* Phone */}
              <a
                href="tel:07961566058"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#4A6741]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4A6741]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-[#2C2C2A] group-hover:text-[#4A6741] transition-colors">
                  07961 566058
                </span>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/ruthpottingernaturopath/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#4A6741]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4A6741]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span className="text-[#2C2C2A] group-hover:text-[#4A6741] transition-colors">
                  Facebook
                </span>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ruth_pottinger_naturopath/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-full bg-[#4A6741]/10 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-[#4A6741]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </div>
                <span className="text-[#2C2C2A] group-hover:text-[#4A6741] transition-colors">
                  Instagram
                </span>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-[#e8e4df]">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-[#4A6741]/10 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-[#4A6741]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[#2C2C2A] mb-2">
                  Message Sent
                </h3>
                <p className="text-[#2C2C2A]/70 text-sm">
                  Thank you for getting in touch. Ruth will be in contact with
                  you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#2C2C2A]/60 mb-1.5 uppercase tracking-wide">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={form.firstName}
                      onChange={handleChange}
                      className="w-full border border-[#e8e4df] rounded-lg px-4 py-3 text-sm text-[#2C2C2A] bg-[#F8F5F0] focus:outline-none focus:border-[#4A6741] transition-colors"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#2C2C2A]/60 mb-1.5 uppercase tracking-wide">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={form.lastName}
                      onChange={handleChange}
                      className="w-full border border-[#e8e4df] rounded-lg px-4 py-3 text-sm text-[#2C2C2A] bg-[#F8F5F0] focus:outline-none focus:border-[#4A6741] transition-colors"
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C2C2A]/60 mb-1.5 uppercase tracking-wide">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border border-[#e8e4df] rounded-lg px-4 py-3 text-sm text-[#2C2C2A] bg-[#F8F5F0] focus:outline-none focus:border-[#4A6741] transition-colors"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C2C2A]/60 mb-1.5 uppercase tracking-wide">
                    Phone (optional)
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full border border-[#e8e4df] rounded-lg px-4 py-3 text-sm text-[#2C2C2A] bg-[#F8F5F0] focus:outline-none focus:border-[#4A6741] transition-colors"
                    placeholder="07700 000000"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#2C2C2A]/60 mb-1.5 uppercase tracking-wide">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className="w-full border border-[#e8e4df] rounded-lg px-4 py-3 text-sm text-[#2C2C2A] bg-[#F8F5F0] focus:outline-none focus:border-[#4A6741] transition-colors resize-none"
                    placeholder="Tell Ruth about your health concerns..."
                  />
                </div>

                {status === "error" && (
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full bg-[#4A6741] text-white font-medium py-3.5 rounded-lg hover:bg-[#3d5636] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
