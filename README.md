# Sai Kiran — Video Editor Portfolio

A cinematic Next.js (App Router) + TypeScript + Tailwind + Framer Motion
portfolio, built from Muthannagari Sai Kiran's resume. Signature interaction:
the Work section is a self-sliding reel of playing videos (hover to pause,
click to watch full screen), framed by a specular edge inspired by grading suites.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Adding the real reels

This build could not pull footage from the Google Drive folder automatically —
Drive requires an authenticated, JS-rendered session that isn't reachable as a
plain download from this environment. The video slots are wired up and ready:

1. Download the real clips from Drive.
2. Rename/place them at:
   - `public/videos/hero-reel.mp4` (hero background)
   - `public/videos/project-01.mp4`
   - `public/videos/project-02.mp4`
   - `public/videos/project-03.mp4`
3. Optionally replace the placeholder posters in `public/images/` with real
   frame grabs (same filenames, `.jpg` or `.svg`).
4. Edit `data/projects.ts` if you want to add/remove/reorder project entries —
   all video paths live in that one file.

## Structure

```
app/            routes, layout, metadata, sitemap/robots
components/     Hero, Navigation, ProjectShowcase, CircularVideo, etc.
data/           projects.ts — single source of truth for portfolio videos
public/videos/  drop real .mp4 files here
public/images/  poster placeholders
```

## Notes

- All bio, experience, education, software and contact info comes directly
  from the provided resume — nothing is fabricated (no fake clients, awards
  or stats).
- Respects `prefers-reduced-motion`.
- Only reel cards currently on screen play, so the reel stays light.
