# Internationalization (i18n) Implementation

## Overview
This portfolio now supports both English and Spanish languages with a complete i18n system that includes:
- Language detection and persistence
- Dynamic content switching
- Glassmorphism UI components
- URL-based language switching

## Features Implemented

### 1. Language Store (`src/stores/languageStore.ts`)
- Functional approach (no classes)
- localStorage persistence
- Language detection functions
- Type-safe with `Language = 'en' | 'es'`

### 2. Dynamic Data Loading (`src/utils/cvData.ts`)
- Centralized CV data management
- Language-based data retrieval
- TypeScript support with proper CV types

### 3. Language Modal (`src/components/LanguageModal.astro`)
- First-visit language selection
- Glassmorphism design
- Accessible with backdrop click
- Flag icons for better UX

### 4. Language Switcher (`src/components/LanguageSwitcher.astro`)
- Fixed position glass button
- URL parameter-based switching
- Globe icon with current language display
- Mobile responsive

### 5. URL-Based Language Switching
- Uses `?lang=en` or `?lang=es` parameters
- Server-side language detection
- Persistent across page reloads

## Data Structure
- `src/data/en.json` - English CV data
- `src/data/es.json` - Spanish CV data
- Both follow jsonresume.org schema with proper TypeScript definitions

## Component Updates
All section components now accept properly typed `data: CV` props:
- Hero.astro
- About.astro
- Experience.astro
- Education.astro
- Projects.astro
- Skills.astro

## TypeScript Compliance
- No `any` types used
- Proper CV interface imports
- Type-safe language handling
- Strict TypeScript configuration maintained

## Usage
1. First visit shows language selection modal
2. Language choice is saved to localStorage
3. Language switcher allows changing between EN/ES
4. URL reflects current language selection
5. All content updates dynamically

## Glassmorphism Styling
Applied to:
- Language switcher button
- Language selection modal
- Uses backdrop-filter blur effects
- Consistent design language throughout