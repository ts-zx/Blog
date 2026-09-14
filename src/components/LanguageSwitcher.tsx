"use client";

import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  t as translate,
  getLocale,
  setLocale as changeLocale,
  subscribeLocale,
  type Locale,
} from "@/lib/i18n-state";
import { LOCALE_LABELS, SUPPORTED_LOCALES } from "@/lib/i18n";

export function LanguageSwitcher() {
  const [locale, setLocaleState] = useState<Locale>(() => getLocale());
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return subscribeLocale(() => setLocaleState(getLocale()));
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const current: { native: string; english: string; flag: string } =
    (LOCALE_LABELS as Record<string, { native: string; english: string; flag: string }>)[locale] ||
    LOCALE_LABELS["zh-CN"];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="inline-flex items-center justify-center gap-1 w-8 h-8 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Switch language"
        title={current.native}
      >
        <Globe className="w-4 h-4" />
      </button>
      {open && (
        <div
          className="absolute right-0 top-full mt-1 min-w-[180px] bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-1 z-50"
          role="menu"
        >
          {SUPPORTED_LOCALES.map((loc) => {
            const info = (LOCALE_LABELS as Record<string, { native: string; english: string; flag: string }>)[loc];
            const isCurrent = loc === locale;
            return (
              <button
                key={loc}
                type="button"
                onClick={() => {
                  changeLocale(loc);
                  setOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-sm flex items-center gap-2 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200 transition-colors"
                role="menuitem"
              >
                <span className="text-base leading-none">{info.flag}</span>
                <span className="flex-1">{info.native}</span>
                {isCurrent && <Check className="w-3.5 h-3.5 text-indigo-500" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
