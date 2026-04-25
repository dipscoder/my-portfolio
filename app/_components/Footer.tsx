export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center justify-between gap-2 border-t border-rule px-[22px] py-5 text-center font-mono text-[10.5px] uppercase tracking-[0.06em] text-inkmute md:flex-row md:px-14 md:py-6 md:text-left md:text-[11px]">
      <span>Dipesh Jaiswal · senior engineer, CultureX</span>
      <span>© {year} · made carefully</span>
    </footer>
  );
}
