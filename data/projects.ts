export interface Project {
  id: string;
  title: string;
  category: string;
  year?: string;
  role?: string;
  description?: string;
  video: string;
  poster?: string;
}

/**
 * VIDEO SOURCE NOTE
 * -----------------
 * These entries are placeholders that map 1:1 to the real categories of work
 * listed on Sai Kiran's resume (long-form/short-form YouTube edits and event
 * highlight films). The actual footage lives in Sai's Google Drive folder,
 * which can't be read or downloaded automatically from this environment
 * (Drive requires an authenticated, JS-rendered session — it isn't a plain
 * file server this app can fetch from).
 *
 * To finish this section:
 *   1. Download the real clips from Drive.
 *   2. Rename them to match (or replace) the `video` paths below.
 *   3. Drop them into /public/videos/, with matching posters in /public/images/.
 * No project titles, clients, or years are invented — only the category
 * labels that come directly from the resume.
 */
export const projects: Project[] = [
  {
    id: "project-01",
    title: "YouTube Edit — Long Form",
    category: "Storytelling / Pacing",
    role: "Editor",
    description:
      "Long-form YouTube editing: structure, transitions, captions, sound design and thumbnail coordination.",
    video: "https://pub-960024d73c05488896944e01057e8018.r2.dev/project-01.mp4",
    poster: "/images/project-01.svg",
  },
  {
    id: "project-02",
    title: "YouTube Edit — Short Form / Reels",
    category: "Social / Reels",
    role: "Editor",
    description:
      "Short-form reels and social content cut for pacing, hooks and retention.",
    video: "https://pub-960024d73c05488896944e01057e8018.r2.dev/project-02.mp4",
    poster: "/images/project-02.svg",
  },
  {
    id: "project-03",
    title: "Event Highlight Film",
    category: "Event Coverage",
    role: "Editor / Colorist",
    description:
      "Event coverage cut into a highlight film — cinematic edit, color grade, social-ready delivery.",
    video: "/videos/project-03.mp4",
    poster: "/images/project-03.svg",
  },
];
