# Constants System Documentation

## Overview
This project uses a centralized constants system to eliminate magic strings and improve maintainability. All constants are organized by category and exported from a single entry point.

## Structure

### `src/constants/index.ts`
Unified export point for all constants. Always import from here:
```typescript
import { LANGUAGES, COMPONENT_IDS, STORAGE_KEYS } from '@/constants';
```

### `src/constants/languages.ts`
Language-related constants:
- `LANGUAGES` - Language codes (`EN: 'en'`, `ES: 'es'`)
- `DEFAULT_LANGUAGE` - Default language setting
- `LANGUAGE_NAMES` - Display names for languages
- `LANGUAGE_FLAGS` - Flag emojis for languages
- `LANGUAGE_LABELS` - Localized strings for UI elements
- `Language` - TypeScript type for language values

### `src/constants/storage.ts`
LocalStorage and browser storage constants:
- `STORAGE_KEYS` - Keys for localStorage items
- `STORAGE_VALUES` - Common storage values

### `src/constants/ui.ts`
User interface constants:
- `COMPONENT_IDS` - DOM element IDs
- `CSS_CLASSES` - CSS class names
- `SECTION_TITLES` - Localized section titles

### `src/constants/urls.ts`
URL and external link constants:
- `URL_PARAMS` - URL parameter names
- `ROUTES` - Internal route paths
- `EXTERNAL_LINKS` - External URL prefixes
- `META_DEFAULTS` - Default meta tag values

## Usage Examples

### Language Management
```typescript
// ❌ Don't use magic strings
if (lang === 'en') { ... }
localStorage.setItem('language', 'es');

// ✅ Use constants
import { LANGUAGES, STORAGE_KEYS } from '@/constants';
if (lang === LANGUAGES.EN) { ... }
localStorage.setItem(STORAGE_KEYS.LANGUAGE, LANGUAGES.ES);
```

### Component IDs and Classes
```typescript
// ❌ Don't use magic strings
document.getElementById('lang-modal');
element.classList.add('hidden');

// ✅ Use constants
import { COMPONENT_IDS, CSS_CLASSES } from '@/constants';
document.getElementById(COMPONENT_IDS.LANGUAGE_MODAL);
element.classList.add(CSS_CLASSES.HIDDEN);
```

### URL Parameters
```typescript
// ❌ Don't use magic strings
url.searchParams.get('lang');

// ✅ Use constants
import { URL_PARAMS } from '@/constants';
url.searchParams.get(URL_PARAMS.LANG);
```

### Localized Strings
```typescript
// ❌ Don't hardcode strings
title="Send an email to..."

// ✅ Use localized constants
import { LANGUAGE_LABELS, LANGUAGES } from '@/constants';
title={LANGUAGE_LABELS[currentLang].sendEmail}
```

## Benefits

1. **Type Safety** - Constants are strongly typed
2. **Refactoring** - Easy to find and replace values
3. **Consistency** - Same strings used everywhere
4. **Localization** - Centralized text management
5. **Maintainability** - Single source of truth

## Rules

1. **Never use magic strings** - Always import from constants
2. **Import from index** - Use `@/constants` as entry point
3. **Add new constants** - Don't create inline strings
4. **Use TypeScript types** - Import `Language` and other types from constants
5. **Localize UI text** - Use `LANGUAGE_LABELS` for user-facing strings