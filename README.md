# The Marketplace JH

A warm, community-first marketplace website for Jackson freelancers and small business owners built with Next.js 14, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Vercel deployment ready

## Local Development

1. Install dependencies:
   npm install
2. Start the dev server:
   npm run dev
3. Open:
   http://localhost:3000

## Build and Production Check

- Run lint:
  npm run lint
- Run production build:
  npm run build

## Project Structure

- app: Route pages and root layout
- components: Reusable UI components
- lib: Shared data and types
- public/images: Placeholder hero/member imagery

## Environment Variables

The project includes a template-style `.env.local` for your future Airtable connection:

- NEXT_PUBLIC_AIRTABLE_BASE_ID
- AIRTABLE_API_KEY
- AIRTABLE_TABLE_NAME

No database is connected yet. Forms are client-side and log submissions to the browser console.

## Node Version

Use Node.js 22 for this project.

- `.nvmrc` and `.node-version` are set to `22`.
- `package.json` has an `engines` constraint for Node 22.

## Deploy to Vercel

1. Push this project to a Git repository (GitHub, GitLab, or Bitbucket).
2. In Vercel, click Add New Project and import the repository.
3. Vercel auto-detects Next.js settings.
4. Add environment variables from `.env.local` in Vercel Project Settings (Environment Variables).
5. Click Deploy.
6. Connect your custom domain `themarketplacejh.com` in Vercel Domain settings if not already connected.

## Notes

- Placeholder images are in `public/images`.
- Swap `hero-placeholder.svg` and `member-placeholder.svg` with your real golden-hour photos when ready.
- Directory, events, and FAQ content are hardcoded for launch.
