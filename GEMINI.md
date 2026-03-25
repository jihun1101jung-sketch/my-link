# Project Overview
This project, named **my-app**, is a modern web application built with **Next.js 16** and **React 19**. It utilizes the **Next.js App Router** for routing and **Tailwind CSS 4** for styling. The codebase is written in **TypeScript** to ensure type safety and improved developer experience.

## Technical Stack
- **Framework:** Next.js 16.1.6
- **Library:** React 19.2.3
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4 with PostCSS
- **Linting:** ESLint 9

## Project Structure
The project follows the standard Next.js App Router structure:
- `my-app/`: The main application directory.
  - `app/`: Contains the application routes, layouts, and global styles.
    - `layout.tsx`: Root layout with Geist font integration.
    - `page.tsx`: The main entry point (home page).
    - `globals.css`: Global CSS including Tailwind directives.
  - `public/`: Static assets such as images and icons.
  - `next.config.ts`: Configuration for Next.js.
  - `package.json`: Project dependencies and scripts.
  - `tsconfig.json`: TypeScript configuration.

## Building and Running
Navigate to the `my-app` directory before running these commands:

### Development
Start the development server with hot-reloading:
```bash
cd my-app
npm run dev
```

### Production Build
Build the application for production:
```bash
cd my-app
npm run build
```

### Start Production Server
Run the compiled application:
```bash
cd my-app
npm run start
```

### Linting
Check the codebase for potential issues:
```bash
cd my-app
npm run lint
```

## Development Conventions
- **App Router:** Use the `app/` directory for routing.
- **Styling:** Use Tailwind CSS utility classes for styling components.
- **Components:** Prefer functional components with React hooks.
- **Types:** Always provide proper TypeScript interfaces and types for props and state.
- **Fonts:** Utilize `next/font` for optimized font loading (currently using Geist).
