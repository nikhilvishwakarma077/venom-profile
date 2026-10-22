
import { useState } from "react";

const CONTACT_EMAIL = "esports7707@gmail.com";

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com/",
    color: "hover:border-pink-400/60 hover:text-pink-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-5 w-5" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.com/",
    color: "hover:border-indigo-400/60 hover:text-indigo-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M19.5 5.2A18 18 0 0 0 15 3.8l-.6 1.2a16 16 0 0 0-4.8 0L9 3.8a18 18 0 0 0-4.5 1.4C1.7 9.3 1 13.3 1.4 17.2a18 18 0 0 0 5.5 2.8l1.2-2a12 12 0 0 1-1.9-.9l.5-.4a13 13 0 0 0 10.6 0l.5.4a12 12 0 0 1-1.9.9l1.2 2a18 18 0 0 0 5.5-2.8c.5-4.5-.8-8.5-3.1-12ZM8.8 14.6c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Zm6.4 0c-1 0-1.8-.9-1.8-2s.8-2 1.8-2 1.8.9 1.8 2-.8 2-1.8 2Z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://youtube.com/",
    color: "hover:border-red-400/60 hover:text-red-400",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M23 7a3 3 0 0 0-2-2.1C19.2 4.4 12 4.4 12 4.4s-7.2 0-9 .5A3 3 0 0 0 1 7a31 31 0 0 0-.5 5 31 31 0 0 0 .5 5 3 3 0 0 0 2 2.1c1.8.5 9 .5 9 .5s7.2 0 9-.5a3 3 0 0 0 2-2.1 31 31 0 0 0 .5-5 31 31 0 0 0-.5-5ZM9.6 15.6V8.4l6.2 3.6-6.2 3.6Z" />
      </svg>
    ),
  },
];

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-colors focus:border-sky-400/60 focus-visible:ring-1 focus-visible:ring-sky-400/40";

const ExternalArrow = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    className="h-4 w-4"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M7 7h10v10" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const updateField = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact — ${form.name.trim()}`
    );

    const body = encodeURIComponent(
      `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\n${form.message.trim()}`
    );

    window.location.href =
      `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#070D18] px-4 py-6 text-white sm:px-6 sm:py-10"
    >
      {/* Decorative Japanese background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 select-none overflow-hidden"
        aria-hidden="true"
      >
        <span className="contact-jp contact-jp-one">蒼き炎</span>
        <span className="contact-jp contact-jp-two">限界突破</span>
        <span className="contact-jp contact-jp-three">不屈の魂</span>
        <span className="contact-jp contact-jp-four">雷神</span>
      </div>

      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-[100px]" />

      <div className="mx-auto max-w-5xl">
        <header className="mb-8 text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-sky-400">
            Get In Touch
          </p>

          <h2
            id="contact-heading"
            className="text-3xl font-black uppercase sm:text-4xl"
          >
            Contact<span className="text-sky-400">.</span>
          </h2>
        </header>

        <div className="grid gap-5 md:grid-cols-2">
          {/* Contact form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-3 rounded-2xl border border-blue-400/20 bg-[#09172B]/80 p-5 sm:p-6"
          >
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Your name"
              aria-label="Your name"
              maxLength={100}
              required
              value={form.name}
              onChange={updateField}
              className={inputClass}
            />

            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Your email"
              aria-label="Your email"
              maxLength={254}
              required
              value={form.email}
              onChange={updateField}
              className={inputClass}
            />

            <textarea
              name="message"
              placeholder="Your message..."
              aria-label="Your message"
              rows={4}
              maxLength={5000}
              required
              value={form.message}
              onChange={updateField}
              className={`${inputClass} resize-y`}
            />

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-sky-400 px-4 py-3 text-sm font-bold text-[#070D18] transition-colors hover:bg-sky-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"
            >
              Send Message
              <ExternalArrow />
            </button>
          </form>

          {/* Social links */}
          <div className="flex flex-col justify-center gap-3 rounded-2xl border border-blue-400/20 bg-[#09172B]/50 p-5 sm:p-6">
            <p className="mb-2 text-sm text-slate-400">
              Connect with me
            </p>

            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${social.name}`}
                className={`flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5 text-sm font-semibold text-slate-200 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-400 ${social.color}`}
              >
                <span className="flex items-center gap-3">
                  {social.icon}
                  {social.name}
                </span>

                <ExternalArrow />
              </a>
            ))}

            <div className="mt-2 border-t border-white/10 pt-4 text-xs text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  );
}
