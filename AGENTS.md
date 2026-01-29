# AGENTS.md - Web App Coding Guidelines (web/)

Scope: This file covers the Next.js app under `web/`. Repo-wide workflow and the asset pipeline live in `../AGENTS.md`.

## Project Overview
Next.js 14 (App Router) TypeScript website celebrating Papa Dmitry's 64th birthday with a gamified RPG interface. Features custom Tailwind theme with gold/blue color scheme, Framer Motion animations, and Russian text content.

## Build Commands

```bash
# Development
npm run dev          # Start dev server at localhost:3000

# Production
npm run build        # Build production bundle (Next.js)
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint (Next.js config)
```

**No test runner configured** - Add Jest/Vitest if tests needed.

Note: `web/next.config.mjs` is currently minimal; if you expect a static export build, confirm export settings before relying on that behavior.

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion |
| Icons | Lucide React |
| Fonts | Inter, Russo One (Google Fonts via next/font) |

## Code Style Guidelines

### File Structure
```
src/
  app/              # Next.js App Router pages
    layout.tsx      # Root layout with fonts
    page.tsx        # Home page
    globals.css     # Tailwind + custom styles
  components/       # React components
    ui/             # Reusable UI components
    *.tsx           # Feature components
  data/             # Static data files
```

### Naming Conventions
- **Components**: PascalCase (e.g., `Hero.tsx`, `QuestLog.tsx`)
- **Functions/Variables**: camelCase (e.g., `onComplete`, `currentLine`)
- **Interfaces**: PascalCase with Props suffix (e.g., `StatBarProps`)
- **Custom Colors**: kebab-case with `papa-` prefix (e.g., `papa-gold`, `papa-blue`)

### Import Order
1. React/core hooks
2. External libraries (framer-motion, lucide-react)
3. Internal components (`@/components/*`)
4. Internal data/types (`@/data/*`)
5. Styles (CSS files)

Example:
```tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { StatBar } from "@/components/ui/StatBar";
import { memories } from "@/data/memories";
import "./globals.css";
```

### Component Patterns

**Client Components**: Always add `"use client"` directive at top if using:
- React hooks (useState, useEffect, etc.)
- Browser APIs
- Framer Motion components

**Props Interface Pattern**:
```tsx
interface ComponentNameProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
}

export function ComponentName({ label, value, icon }: ComponentNameProps) {
  // Component logic
}
```

**Default Props Pattern**:
```tsx
export function StatBar({ 
  label, 
  value, 
  color = "bg-papa-gold",  // Provide defaults inline
  icon 
}: StatBarProps) {
```

### Tailwind Custom Theme

**Custom Colors** (defined in `tailwind.config.ts`):
- `background` - `#0F172A` (slate-900)
- `foreground` - `#F8FAFC` (slate-50)
- `papa-gold` / `papa-gold-500` / `papa-gold-600` - Gold accent
- `papa-blue` / `papa-blue-light` - Blue accent
- `papa-card` - `#1E293B` Card background

**Custom Fonts**:
- `font-heading` - Russo One (gaming headers)
- `font-body` - Inter (body text)
- `font-mono` - System monospace (UI elements)

**Custom Animations**:
- `animate-spin-slow` - 3s spin
- `animate-pulse-glow` - Pulsing glow effect

### TypeScript Rules

- **Strict mode enabled** - No `any` types, no `@ts-ignore`
- Use explicit return types sparingly (let TypeScript infer)
- Props interfaces required for all components
- Use `React.ReactNode` for children types

### Error Handling

No global error boundary configured. For now:
- Use try/catch in async operations
- Provide fallback UI for missing data
- Check for null/undefined before accessing nested properties

### Git Workflow

```bash
# Before committing
git add .
npm run lint        # Ensure no lint errors
npm run build       # Verify build succeeds
```

### Performance Notes

- Uses `next/image` for optimized images
- Framer Motion `whileInView` for scroll animations
- Lazy loading via Next.js dynamic imports if needed

## Common Tasks

**Add new component**:
1. Create file in `src/components/` (or `src/components/ui/` if reusable)
2. Add `"use client"` if needed
3. Export as named export (not default)
4. Import using `@/components/ComponentName`

**Add new route**:
1. Create folder in `src/app/`
2. Add `page.tsx` with default export component
3. Optional: `layout.tsx` for route-specific layout

**Add custom color**:
1. Extend `colors` in `tailwind.config.ts`
2. Use kebab-case with `papa-` prefix
3. Restart dev server if needed

## Project-Specific Notes

- Russian text content throughout UI
- Gaming/RPG aesthetic (character cards, stat bars, quest logs)
- 25 memory photos displayed in inventory grid
- Confetti animation on toast button click
- Custom scrollbar styling in globals.css
- Static export configured for deployment
