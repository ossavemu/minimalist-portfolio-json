# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimalist portfolio/CV website built with Astro that renders content from JSON data following the [jsonresume.org schema](https://jsonresume.org/schema/). The site is designed to be both web-viewable and print-friendly for PDF generation.

## Core Architecture

- **Data-driven approach**: CV content is stored in `cv.json` (Spanish) and `cv_english.json` (English) files
- **TypeScript definitions**: `src/cv.d.ts` contains comprehensive type definitions for the CV schema
- **Component structure**: Modular Astro components in `src/components/sections/` for each CV section (Hero, About, Experience, Education, Projects, Skills)
- **Layout system**: Single layout in `src/layouts/Layout.astro` handles the overall page structure
- **Icon system**: Custom Astro icon components in `src/icons/` for technologies and social platforms

## Development Commands

```bash
# Development server
pnpm dev
# or
npm run dev

# Type checking and build
pnpm build
# or  
npm run build

# Preview production build
pnpm preview
# or
npm run preview
```

## Key Files and Structure

- `cv.json` / `cv_english.json`: Main data files containing all CV content
- `src/cv.d.ts`: TypeScript interfaces matching jsonresume.org schema
- `src/pages/index.astro`: Main page that imports and renders all sections
- `src/components/sections/`: Individual CV sections as Astro components
- `src/components/KeyboardManager.astro`: Handles keyboard shortcuts functionality
- `src/icons/`: Technology and social media icons as Astro components

## Working with CV Data

The CV data follows the jsonresume.org schema with TypeScript definitions. Key sections include:
- `basics`: Personal information and contact details
- `work`: Professional experience
- `education`: Educational background
- `projects`: Portfolio projects with GitHub links
- `skills`: Technical skills and proficiencies

## Customization

To customize the portfolio:
1. Edit `cv.json` for Spanish content or `cv_english.json` for English
2. Add new icons in `src/icons/` following existing patterns
3. Modify section components in `src/components/sections/` to change layout
4. Update TypeScript definitions in `src/cv.d.ts` if extending the schema

## Import Alias

The project uses `@/` for src directory imports, configured in `tsconfig.json`.

## Internationalization (i18n)

The portfolio supports English and Spanish languages:
- Language data: `src/data/en.json` and `src/data/es.json`
- Language utilities: `src/stores/languageStore.ts` (functional approach)
- Data loader: `src/utils/cvData.ts`
- Components: `LanguageModal.astro` and `LanguageSwitcher.astro`
- URL-based switching: `?lang=en` or `?lang=es`
- All components accept `data: CV` props with proper TypeScript types

## Constants System

All magic strings are eliminated using a centralized constants system:
- `src/constants/languages.ts` - Language codes, labels, flags, and localized strings
- `src/constants/storage.ts` - localStorage keys and values
- `src/constants/ui.ts` - Component IDs, CSS classes, and section titles
- `src/constants/urls.ts` - URL parameters, routes, external links, and meta defaults
- `src/constants/index.ts` - Unified export point

**Always import from `@/constants` instead of using magic strings**

## TypeScript Standards

- **NO `any` types allowed** - Always use proper type definitions
- **NO magic strings allowed** - Always use constants from `@/constants`
- Import CV types from `@/cv` for component props
- Use `Language` type from `@/constants` for language values
- Maintain strict TypeScript configuration