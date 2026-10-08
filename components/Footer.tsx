export default function Footer() {
  return (
    <footer className="border-t border-line bg-base px-5 py-9 md:px-10">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-3 text-[12px] text-muted md:flex-row md:items-center md:justify-between">
        <span>© {new Date().getFullYear()} Muthannagari Sai Kiran</span>
        <span>Video editor for YouTube, social and events</span>
        <a href="#top" className="link-underline w-fit transition-colors hover:text-ink">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
