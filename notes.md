# Dev Events App - Tech Stack Notes

## Core Framework
- **Next.js 16.0.1** - React framework with App Router
- **React 19.2.0** - Latest React with new features
- **React DOM 19.2.0** - React rendering library
- **TypeScript 5** - Type-safe development

## Next.js Configuration
- **React Compiler** - Enabled for automatic optimizations
- **Component Caching** - Enabled for performance improvements
- **App Router** - Using the modern Next.js routing system

## Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework (latest major version)
- **PostCSS** - CSS processing with @tailwindcss/postcss plugin
- **shadcn/ui** - Component library using "new-york" style
  - Base color: neutral
  - CSS Variables enabled
  - React Server Components (RSC) support
- **Radix UI** - Headless UI components
  - @radix-ui/react-dropdown-menu (^2.1.16)
  - @radix-ui/react-navigation-menu (^1.2.14)
  - @radix-ui/react-slot (^1.2.4)
- **Lucide React (^0.553.0)** - Icon library
- **next-themes (^0.4.6)** - Theme management (dark/light mode)
- **class-variance-authority (^0.7.1)** - CVA for component variants
- **clsx (^2.1.1)** - Conditional classNames utility
- **tailwind-merge (^3.4.0)** - Merge Tailwind classes
- **tw-animate-css (^1.4.0)** - Tailwind animation utilities

## Database
- **Mongoose (^8.19.4)** - MongoDB object modeling

## 3D Graphics
- **OGL (^1.0.11)** - Minimal WebGL library

## Analytics
- **PostHog (^1.293.0)** - Product analytics and feature flags

## Development Tools
- **ESLint 9** - Code linting with Next.js config
- **Prettier (^3.6.2)** - Code formatting
- **prettier-plugin-tailwindcss (^0.6.14)** - Tailwind class sorting

## TypeScript Configuration
- Target: ES2017
- Module Resolution: bundler
- Path Aliases: `@/*` maps to `./src/*`
- JSX: react-jsx
- Strict mode enabled

## Project Structure
```
src/
├── app/          # Next.js App Router pages
├── components/   # React components
└── lib/          # Utility functions and libraries
```

## Key Features
- Server Components (RSC) by default
- React 19 with latest features
- React Compiler for automatic memoization
- Component-level caching
- Modern Tailwind CSS v4 architecture
- Type-safe development with TypeScript
- Instrumentation support (instrumentation-client.ts)
