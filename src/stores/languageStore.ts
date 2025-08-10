import { LANGUAGES, DEFAULT_LANGUAGE, STORAGE_KEYS } from '@/constants';
import type { Language } from '@/constants';

let currentLanguage: Language = DEFAULT_LANGUAGE;

export function getLanguage(): Language {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE) as Language;
    if (saved && (saved === LANGUAGES.EN || saved === LANGUAGES.ES)) {
      currentLanguage = saved;
    }
  }
  return currentLanguage;
}

export function setLanguage(language: Language): void {
  currentLanguage = language;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language);
    document.documentElement.lang = language;
  }
}

export function toggleLanguage(): void {
  setLanguage(currentLanguage === LANGUAGES.EN ? LANGUAGES.ES : LANGUAGES.EN);
}

export function isFirstVisit(): boolean {
  if (typeof window === 'undefined') return false;
  return !localStorage.getItem(STORAGE_KEYS.LANGUAGE);
}