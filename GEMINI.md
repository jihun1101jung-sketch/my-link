# MyLink Project Guide

This file provides project context and guidelines for Gemini CLI and developers.

## 1. Project Overview

### 1.1 Purpose
- A consolidated link management service that allows creators, brands, and individuals to bundle multiple social media, website, portfolio, and shop links into a single shared URL.

### 1.2 Core Tech Stack
- **Frontend:** Next.js 16.1.7 (App Router), React 19, TypeScript
- **Styling:** Tailwind CSS, Shadcn UI
- **Backend/Auth:** Firebase (Google Auth & Data management)
- **Icons:** Hugeicons, Phosphor Icons
- **Deployment/Infrastructure:** Next.js (Turbopack recommended)

### 1.3 Key Features (MVP)
- **User Authentication:** Google Social Login only (via Firebase).
- **Profile Management:** Inline editing for usernames, nicknames, and bios.
- **Link Management:** Add/Delete links, enable/disable toggles, and drag-and-drop reordering.
- **Public Page:** Unique user URLs (e.g., `mylink.co/nickname`) with automatic favicon integration (via Google Favicon API).

---

## 2. Project Structure

- `docs/`: Planning documents (PRD, User Scenarios, Wireframes).
- `next-app/`: Main web application source code.
  - `app/`: Next.js App Router pages and layouts.
  - `components/`: UI components (including Shadcn UI).
  - `hooks/`: Custom React hooks.
  - `lib/`: Shared utility functions and configurations.
  - `public/`: Static assets.

---

## 3. Development Guide & Commands

### 3.1 Key Commands (Run inside `next-app` directory)
- **Development:** `npm run dev` (Turbopack enabled)
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Format:** `npm run format` (via Prettier)
- **Type Check:** `npm run typecheck`

### 3.2 Development Conventions
- **File References:** Always prefix file names with `@` when referencing them (e.g., @package.json, @app/layout.tsx).
- **UI Components:** Prioritize `shadcn/ui`. Use `npx shadcn@latest add [component-name]` to add new components.
- **Styling:** Use Tailwind CSS. Utilize the `cn` utility from @lib/utils.ts for complex conditional classes.
- **Fonts:** Configured with `Geist`, `Geist Mono`, `Raleway`, and `Roboto`.
- **UX:** Aim for **Inline Editing** to allow users to modify content directly on the page without navigating to separate settings pages.

---

## 4. Notes
- While the documentation is in English for token efficiency, communication and requests can be conducted in Korean.
- Always verify changes with a build or type check.
- Write commit messages in Korean, focusing on the "why" behind the changes.
