# Bytespace — Doin Tech Assessment

A responsive landing page for **Bytespace**, an online course platform, plus Login and Register pages.

**Live demo:** https://doin-tech-assessment-alpha.vercel.app/

## Tech Stack

| Area            | Technology                                                                 |
| --------------- | -------------------------------------------------------------------------- |
| Framework       | [Next.js 16](https://nextjs.org) (App Router)                              |
| UI library      | [React 19](https://react.dev)                                              |
| Language        | [TypeScript 5](https://www.typescriptlang.org)                             |
| Styling         | [Tailwind CSS v4](https://tailwindcss.com) + `tw-animate-css`              |
| UI components   | [shadcn/ui](https://ui.shadcn.com) built on [Base UI](https://base-ui.com) |
| Variants        | `class-variance-authority`                                                 |
| Icons           | [Lucide React](https://lucide.dev)                                         |
| Fonts           | Satoshi (self-hosted via `next/font/local`)                                |
| Images          | `next/image`                                                               |
| Linting         | ESLint 9 (`eslint-config-next`)                                            |
| Deployment      | [Vercel](https://vercel.com)                                               |

## Project Structure

```
.
├── app/
│   ├── (auth)/                 # Route group for authentication pages
│   │   ├── layout.tsx
│   │   ├── login/page.tsx      # /login
│   │   └── register/page.tsx   # /register
│   ├── (home)/                 # Route group for the landing page
│   │   ├── layout.tsx          # Navbar + Footer wrapper
│   │   └── page.tsx            # / (home)
│   ├── globals.css             # Tailwind setup and theme tokens
│   └── layout.tsx              # Root layout, Satoshi font, metadata
├── components/
│   └── ui/                     # shadcn/ui primitives (button, card, input, sheet, ...)
├── ui/
│   ├── AuthComponents/         # Auth page layout and form
│   ├── HomeComponents/         # Landing page sections
│   │   ├── Hero.tsx
│   │   ├── Testimonial.tsx
│   │   ├── CoursesSection.tsx
│   │   ├── CourseCategories.tsx
│   │   ├── GrowthShowcase.tsx / GrowthRow.tsx
│   │   ├── CreatorCTA.tsx
│   │   └── FeedbackSection.tsx / FeedbackCard.tsx
│   └── LayoutComponets/        # Navbar and Footer
├── lib/
│   └── utils.ts                # Shared helpers
└── public/
    ├── font/                   # Satoshi font files
    └── images/                 # Logos, hero, course and author images
```

## Features

- Responsive layout for mobile, tablet and desktop
- Desktop navbar and a slide-out mobile menu (Sheet); only the active nav item is bold
- Landing page sections: hero with search, partner logos, courses, categories, growth showcase, creator CTA and feedback
- Login and Register pages with a shared auth layout
- Optimized images and self-hosted fonts

## Getting Started

**Prerequisites:** Node.js 20+ and npm.

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Run the production build             |
| `npm run lint`  | Run ESLint                           |

## Deployment

The app is deployed on Vercel: https://doin-tech-assessment-alpha.vercel.app/
