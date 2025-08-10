export const LANGUAGES = {
  EN: 'en',
  ES: 'es',
} as const;

export const DEFAULT_LANGUAGE = LANGUAGES.EN;

export const LANGUAGE_NAMES = {
  en: 'English',
  es: 'Español',
} as const;

export const LANGUAGE_FLAGS = {
  en: '🇺🇸',
  es: '🇪🇸',
} as const;

export const LANGUAGE_LABELS = {
  en: {
    switchTo: 'Español',
    modalTitle: 'Select Your Language',
    modalSubtitle: 'Selecciona tu Idioma',
    sendEmail: 'Send an email to',
    callPhone: 'Call by phone to',
    visitProfile: 'Visit profile of',
    portfolio: 'Portfolio of',
  },
  es: {
    switchTo: 'English',
    modalTitle: 'Selecciona tu Idioma',
    modalSubtitle: 'Select Your Language',
    sendEmail: 'Enviar un correo electrónico a',
    callPhone: 'Llamar por teléfono a',
    visitProfile: 'Visitar el perfil de',
    portfolio: 'Portafolio de',
  },
} as const;

export type Language = typeof LANGUAGES[keyof typeof LANGUAGES];