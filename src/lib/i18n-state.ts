// i18n state - 模块级共享，避开 useT 的 proxy 问题
import { translations, DEFAULT_LOCALE } from "./i18n";

// 重新导出 Locale
export type Locale = "zh-CN" | "en";

const STORAGE_KEY = "blog-locale";

let _currentLocale: Locale = DEFAULT_LOCALE;
const _listeners = new Set<() => void>();

// 客户端初始化
if (typeof window !== "undefined") {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "zh-CN" || stored === "en") {
      _currentLocale = stored;
    } else {
      const browser = navigator.language;
      if (browser?.toLowerCase().startsWith("zh")) {
        _currentLocale = "zh-CN";
      } else {
        _currentLocale = "en";
      }
    }
    document.documentElement.lang = _currentLocale;
  } catch {
    _currentLocale = "en";
  }
}

export function getLocale(): Locale {
  return _currentLocale;
}

export function setLocale(newLocale: Locale) {
  if (_currentLocale === newLocale) return;
  _currentLocale = newLocale;
  if (typeof window !== "undefined") {
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
      document.documentElement.lang = newLocale;
    } catch {}
  }
  _listeners.forEach((cb) => cb());
}

export function subscribeLocale(cb: () => void): () => void {
  _listeners.add(cb);
  return () => _listeners.delete(cb);
}

export function t(key: string, vars?: Record<string, string | number>): string {
  const dict = translations[_currentLocale] as Record<string, string>;
  let str = (dict && dict[key]) || key;
  if (vars && typeof str === "string") {
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, String(v));
    });
  }
  return str;
}
