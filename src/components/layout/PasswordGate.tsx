"use client";

import { useState, useEffect, FormEvent } from "react";

const PASS = "lihara28";
const STORAGE_KEY = "lihara-auth";

export function PasswordGate({ children }: { children: React.ReactNode }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (sessionStorage.getItem(STORAGE_KEY) === "true") {
      setAuthenticated(true);
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setAuthenticated(true);
    } else {
      setError(true);
      setInput("");
    }
  };

  if (!mounted) return null;
  if (authenticated) return <>{children}</>;

  return (
    <div className="fixed inset-0 bg-charcoal z-[100] flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-display text-2xl tracking-[0.3em] text-cream mb-12">
          LIHARA
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
          <input
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="Enter password"
            autoFocus
            className="bg-transparent border-b border-cream/20 text-cream text-center text-sm px-4 py-2.5 w-64 placeholder:text-cream/20 focus:outline-none focus:border-cream/50 transition-colors"
          />
          {error && (
            <p className="text-red-400/70 text-xs">Incorrect password</p>
          )}
          <button
            type="submit"
            className="text-cream/30 text-xs uppercase tracking-[0.25em] hover:text-cream/60 transition-colors mt-2"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}
