# College Portfolio — Web

College website with an admin panel to manage faculty and contact messages.

## Stack

- **Next.js 16.2** — App Router
- **Supabase** — database + auth
- **Tailwind CSS** + shadcn/ui

## Getting Started

```bash
npm install
npm run dev
```

Create a `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Database

Run these in the Supabase SQL Editor:
