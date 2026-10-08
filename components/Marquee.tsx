const WORDS = ["Editing", "Story", "Rhythm", "Sound", "Color", "Pacing"];

export default function Marquee() {
  const items = [...WORDS, ...WORDS];
  return (
    <div className="marquee-wrap overflow-hidden border-y border-line bg-base py-6" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((set) => (
          <div key={set} className="flex shrink-0 items-center">
            {items.map((word, i) => (
              <span
                key={`${set}-${i}`}
                className={`px-6 font-display text-[clamp(1.6rem,3.6vw,3rem)] font-medium leading-none tracking-tightest md:px-9 ${
                  i % 2 === 0 ? "text-ink/80" : "text-outline"
                }`}
              >
                {word}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
