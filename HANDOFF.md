# Portfolio Handoff — Session Summary

## Project Location
`/Users/deepanjaynandal/Documents/MyFiles/vsCodeFiles/asuFiles/portfolio-site/`

## Tech Stack
- Next.js 16.2.4, App Router, TypeScript
- Tailwind CSS v4 (NOT v3) — uses `@theme`, `@custom-variant`, no tailwind.config.ts
- Geist Mono font via `next/font/google`
- `next-themes` — `attribute="class"`, `defaultTheme="dark"`, dark mode by default
- `@custom-variant dark (&:is(.dark *))` — class-based dark mode in globals.css
- Accent color: `#ff6b35` defined as `--color-accent` in `@theme`
- `use-scramble` npm package for scramble text animation
- Resend for contact form email (lazy init inside POST handler)

## Pages
- `/` — Home: Hero + WorkSection + ProjectsPreview (featured only) + EducationSection + SkillsSection
- `/projects` — All projects with full bullets + tags
- `/contact` — Contact form (Resend) + social links

## All Content Lives In
`src/lib/data.ts` — single source of truth

### personal schema
```ts
{
  name: "deepanjay nandal",          // lowercase — intentional site aesthetic
  role: "software engineer",          // shown in Hero with Building2 icon
  location: "tempe, az",             // lowercase
  email: "deepanjay.nandal12@gmail.com",
  github: "https://github.com/DeepanjayNandal",
  linkedin: "https://www.linkedin.com/in/deepanjay-nandal/",
  resume: "/resume.pdf",             // used in Navbar 'r' shortcut — PDF goes in public/
  openToWork: true,                  // controls pulsing green dot in Hero
  openToRelocate: true,              // shows "· open to relocate" next to location
  bio: string[],                     // array of paragraphs
}
```
No twitter field — was removed.

### work schema
```ts
{
  company: string,   // lowercase
  url: string,       // Discover Excellence → LinkedIn page URL
  role: string,
  period: string,    // en dash e.g. "feb 2026 – present"
  location: string,
  bullets: string[],
}
```

### education schema
```ts
{
  school: string,
  url: string,
  degree: string,
  period: string,
  location: string,
  details?: string,  // optional — CGPA shown for ASU only
}
```

### projects schema
```ts
{
  title: string,        // full display title e.g. "BitMod — AI Inference Cache..."
  description: string,  // 1-sentence summary shown on homepage cards AND projects page
  url: string,          // empty string "" = no link (renders as div not <a>)
  period: string,
  bullets: string[],
  tags: string[],
  note?: string,        // italic muted text — BitMod has "private repository (nda)"
  featured: boolean,    // true = shown on homepage preview
}
```
Note: projects NO LONGER have a `name` field. React key uses `project.title`.

### skills schema
```ts
{ category: string, items: string }  // items is comma-separated string
```

## Current Projects (in order)
1. BitMod — featured, url: "", note: "private repository (nda)"
2. CaseTally — featured, url: "https://github.com/DeepanjayNandal/casetally"
3. LexLink — featured, url: "https://github.com/DeepanjayNandal/lexlink"
4. Elastic Face Recognition Cloud System — not featured, url: ""
5. Nutritional Calculator — not featured, url: "https://github.com/DeepanjayNandal/Nutritional-Calculator-Web-App"

## Key Components
| File | Purpose |
|------|---------|
| `src/lib/data.ts` | All content |
| `src/app/layout.tsx` | Root layout, ThemeProvider, Navbar |
| `src/app/globals.css` | Tailwind v4 config, dark variant, animations |
| `src/components/Hero.tsx` | Name scramble, social links, bio, location |
| `src/components/ScrambleText.tsx` | use-scramble hook, speed: 0.5, overdrive: true |
| `src/components/SocialLinks.tsx` | GitHub, LinkedIn, Email icons (custom SVGs, no Twitter) |
| `src/components/WorkSection.tsx` | Work entries with bullets |
| `src/components/ProjectsPreview.tsx` | Featured projects — title + description + note only |
| `src/components/EducationSection.tsx` | Education with optional details (CGPA) |
| `src/app/projects/page.tsx` | All projects — title + description + bullets + tags |
| `src/app/contact/page.tsx` | Contact form + social cards |
| `src/app/contact/ContactForm.tsx` | Client component, Resend API |
| `src/app/api/contact/route.ts` | API route, Resend initialized lazily inside handler |
| `src/components/Navbar.tsx` | Keyboard shortcuts: h, p, c, r (resume) |
| `src/components/OpenToWork.tsx` | Pulsing green dot |

## Critical Tailwind v4 Lessons
### group-hover: IS BROKEN with this dark mode setup
`@custom-variant dark (&:is(.dark *))` makes dark mode rules (0,2,0) specificity, equal to `group-hover:` (0,2,0). CSS order decides — dark mode wins. group-hover: does NOT reliably work.

### The fix: use arbitrary descendant selectors
```tsx
// Make whole card clickable, only h3 turns orange:
<a className="block [&:hover_h3]:text-accent">
  <h3 className="... transition-colors">title</h3>
</a>

// For icons:
<a className="[&:hover_svg]:text-accent">
  <SomeIcon className="... transition-colors" />
</a>
```
`[&:hover_h3]:text-accent` generates `.class:hover h3 { color: accent }` at specificity (0,2,1) which beats dark:text-white at (0,2,0).

### direct hover on the element works fine:
```tsx
<a className="hover:text-accent dark:hover:text-accent">text</a>
```
Always include BOTH `hover:text-accent` AND `dark:hover:text-accent` for dark mode.

## Contact Page Notes
- Icon background: `bg-neutral-100 dark:bg-slate-800` (white in light, dark teal in dark)
- Form inputs: `dark:bg-slate-900 dark:border-slate-700`
- Card hover: `[&:hover_svg]:text-accent` on the `<a>` card — ONLY icon turns orange, no border/bg change
- Social links shown: email, github, linkedin (Twitter removed entirely)

## ScrambleText Usage
- Home: hero name `deepanjay nandal`
- /projects page: `projects` heading
- /contact page: `contact` heading

## Resume
PDF must be placed at `public/resume.pdf` for the Navbar 'r' shortcut to work. Not yet placed.

## Environment Variables
`.env.local` needs: `RESEND_API_KEY=re_your_api_key`

## Pending / TODO
- [ ] Place resume PDF at `public/resume.pdf`
- [ ] Set `RESEND_API_KEY` in `.env.local`
- [ ] Elastic Face Recognition Cloud System — `url: ""` currently, add repo link when available
- [ ] BitMod — `url: ""` currently (NDA), add when public

## Standing Rules (established in session)
1. **Always flag schema discrepancies before implementing** — diff new spec vs current data.ts, surface every removed/changed field, wait for explicit confirmation before writing anything
2. **Site aesthetic is all-lowercase** — names, locations, company names, degrees all lowercase. Tags and abbreviations (CGPA, REST, ECDH etc.) keep their casing.
3. **Never remove fields silently** — resume, openToWork, openToRelocate, note, url must be confirmed before dropping
4. **No group-hover: in this project** — use `[&:hover_h3]:text-accent` or `[&:hover_svg]:text-accent` instead
5. **Always run `npm run build` after changes** and fix all TypeScript errors before reporting done

## Build Command
```bash
cd /Users/deepanjaynandal/Documents/MyFiles/vsCodeFiles/asuFiles/portfolio-site
npm run build
npm run dev   # for local dev
```
