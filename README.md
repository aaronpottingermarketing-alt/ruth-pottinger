# Ruth Pottinger — Naturopath & NAET Practitioner Website

A modern, SEO-optimised website for Ruth Pottinger built with Next.js, TypeScript, Tailwind CSS, and Supabase.

---

## Setup Guide (for Ruth)

Follow these steps exactly. You only need to do this once.

### Step 1 — Install the tools you need

1. Install **Node.js** from [nodejs.org](https://nodejs.org) — choose the "LTS" version
2. Install **Git** from [git-scm.com](https://git-scm.com)
3. Install **VS Code** from [code.visualstudio.com](https://code.visualstudio.com)

### Step 2 — Create your accounts

4. Create a **GitHub** account at [github.com](https://github.com)
5. Create a **Vercel** account at [vercel.com](https://vercel.com) — sign up using your GitHub account
6. Create a **Supabase** account at [supabase.com](https://supabase.com) and create a new project
   - Choose a strong database password and save it somewhere safe
   - Select the region closest to you (EU West is fine for the UK)

### Step 3 — Set up Supabase

7. In Supabase, go to **SQL Editor** (left sidebar), paste the following SQL, and click **Run**:

```sql
create table contact_submissions (
  id uuid primary key default gen_random_uuid(),
  first_name text not null,
  last_name text not null,
  email text not null,
  phone text,
  message text not null,
  created_at timestamptz default now()
);

alter table contact_submissions enable row level security;

create policy "Allow insert from anyone"
  on contact_submissions for insert
  with check (true);
```

8. Go to **Project Settings → API** (left sidebar) and copy:
   - **Project URL** — looks like `https://xxxxxxxxxxxx.supabase.co`
   - **anon / public key** — a long string starting with `eyJ...`

### Step 4 — Get the code running locally

9. Open **Terminal** (search "Terminal" in Spotlight on Mac)
10. Run: `git clone [the GitHub repo URL]`
11. Run: `cd ruth-pottinger`
12. Create a file called `.env.local` in the project folder and paste in:

```
NEXT_PUBLIC_SUPABASE_URL=paste_your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=paste_your_anon_key_here
```

13. Run: `npm install`
14. Run: `npm run dev`
15. Open your browser and go to **localhost:3000** — the site is running!

### Step 5 — Deploy to Vercel

16. In Vercel, click **Add New Project** → import from GitHub → select the `ruth-pottinger` repo
17. Before deploying, click **Environment Variables** and add:
    - `NEXT_PUBLIC_SUPABASE_URL` = your project URL
    - `NEXT_PUBLIC_SUPABASE_ANON_KEY` = your anon key
18. Click **Deploy**
19. Vercel will give you a live URL like `ruth-pottinger.vercel.app` — this is your preview site

### Step 6 — Connect your domain (once ruthpottinger.co.uk is registered)

20. In Vercel project settings, go to **Domains** and add `ruthpottinger.co.uk`
21. Vercel will show you DNS records — update these with your domain registrar
22. Once live, update your Google Business Profile website URL to `https://ruthpottinger.co.uk`

---

## Viewing contact form submissions

All messages sent through the contact form are saved to your Supabase database.

To view them: log in to [supabase.com](https://supabase.com) → your project → **Table Editor** → `contact_submissions`

---

## Project structure

```
app/
  layout.tsx       — global fonts, SEO meta tags, JSON-LD schema
  page.tsx         — main one-page site
  book/page.tsx    — redirects to booking link
  blog/page.tsx    — blog placeholder
  llms/page.tsx    — AI-readable site summary
components/
  Nav.tsx          — sticky navigation
  Hero.tsx         — full-screen hero section
  About.tsx        — Ruth's story + credentials
  NAETTherapy.tsx  — NAET explanation + FAQ accordion
  Programmes.tsx   — 4 programme cards
  Testimonials.tsx — 6 client testimonials
  BookCTA.tsx      — full-width call-to-action
  ContactForm.tsx  — Supabase-connected contact form
  Footer.tsx       — links, social, copyright
lib/
  supabase.ts      — Supabase client
public/
  llms.txt         — AI crawler summary
```

---

## Making content changes

All website text is written directly in the component files. To change something:

1. Open the relevant file in VS Code (e.g. `components/Testimonials.tsx`)
2. Find the text and edit it
3. Save the file — the site updates automatically in the browser
4. Commit and push to GitHub — Vercel redeploys automatically

---

## Tech stack

- **Next.js** — React framework
- **TypeScript** — typed JavaScript
- **Tailwind CSS** — utility-first styling
- **Supabase** — database for contact form submissions
- **Vercel** — hosting and deployment
