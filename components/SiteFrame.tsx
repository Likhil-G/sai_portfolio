/**
 * Fixed viewport frame: a hairline whose highlight slowly travels the edge of
 * the screen, plus viewfinder corner ticks. Purely decorative.
 */
export default function SiteFrame() {
  const tick = "absolute h-3 w-3 border-ink/50";
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-2 z-[55] md:inset-3">
      <div className="edge absolute inset-0 !rounded-[2px]" />
      <span className={`${tick} left-0 top-0 border-l border-t`} />
      <span className={`${tick} right-0 top-0 border-r border-t`} />
      <span className={`${tick} bottom-0 left-0 border-b border-l`} />
      <span className={`${tick} bottom-0 right-0 border-b border-r`} />
    </div>
  );
}
