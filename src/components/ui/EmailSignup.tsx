"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BRAND, WEB3FORMS_KEY } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Status = "idle" | "sending" | "done" | "error";

/**
 * Email list signup. Submissions deliver to the club inbox through
 * Web3Forms once NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY is set (repo
 * variable). Until then, and on any network failure, the form falls
 * back to a prefilled mailto draft so no signup is ever dropped.
 */
export default function EmailSignup({
  dark,
  className,
}: {
  /** true when the form sits on a forest band */
  dark?: boolean;
  className?: string;
}) {
  const [status, setStatus] = useState<Status>("idle");

  function mailtoFallback(name: string, email: string) {
    const subject = encodeURIComponent("MSUEA email list signup");
    const body = encodeURIComponent(
      `Hi MSUEA,\n\nPlease add me to the email list.\n\nName: ${name}\nEmail: ${email}\n`,
    );
    window.location.href = `mailto:${BRAND.email}?subject=${subject}&body=${body}`;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    // honeypot
    if (String(data.get("company") || "") !== "") return;

    if (!WEB3FORMS_KEY) {
      mailtoFallback(name, email);
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: "MSUEA email list signup",
          from_name: "msuea.org",
          name,
          email,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setStatus("done");
        form.reset();
      } else {
        setStatus("error");
        mailtoFallback(name, email);
      }
    } catch {
      setStatus("error");
      mailtoFallback(name, email);
    }
  }

  if (status === "done") {
    return (
      <div
        className={cn(
          "flex items-center gap-3 py-3",
          dark ? "text-white" : "text-forest",
          className,
        )}
        role="status"
      >
        <span
          className={cn(
            "flex h-10 w-10 items-center justify-center",
            dark ? "bg-kelly text-white" : "bg-forest text-white",
          )}
        >
          <Check className="h-5 w-5" />
        </span>
        <p className="font-medium">
          You&apos;re on the list. Watch your inbox for what&apos;s next.
        </p>
      </div>
    );
  }

  const inputCls = cn(
    "h-13 w-full border-2 bg-white px-4 text-[0.95rem] text-ink placeholder:text-muted focus:outline-none",
    dark
      ? "border-transparent focus:border-moss"
      : "border-line focus:border-kelly",
  );

  return (
    <form
      onSubmit={onSubmit}
      className={cn("flex flex-col gap-3 sm:flex-row", className)}
    >
      {/* honeypot */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <label className="sr-only" htmlFor="signup-name">
        Name
      </label>
      <input
        id="signup-name"
        name="name"
        type="text"
        required
        placeholder="Your name"
        className={cn(inputCls, "sm:max-w-[200px]")}
      />
      <label className="sr-only" htmlFor="signup-email">
        MSU email
      </label>
      <input
        id="signup-email"
        name="email"
        type="email"
        required
        placeholder="you@msu.edu"
        className={inputCls}
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className={cn(
          "btn shrink-0",
          dark ? "btn-solid" : "btn-forest",
          status === "sending" && "opacity-70",
        )}
      >
        {status === "sending" ? "Joining..." : "Join the list"}
        <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
