import Link from 'next/link';
import { Footer } from './_components/Footer';
import { Nav } from './_components/Nav';

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="px-[22px] py-20 md:px-14 md:py-32">
        <div className="mx-auto max-w-[640px]">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-inkmute">
            404
          </div>
          <h1 className="m-0 mb-5 font-serif text-[32px] font-normal leading-[1.15] tracking-[-0.012em] md:text-[44px]">
            That page took a wrong turn.
          </h1>
          <p className="m-0 mb-8 font-serif text-[17px] italic text-inksoft md:text-[19px]">
            Nothing here. Maybe what you’re looking for is on the home page.
          </p>
          <Link
            href="/"
            className="font-mono text-xs uppercase tracking-[0.1em] text-ink underline decoration-accent decoration-1 underline-offset-[3px] transition-colors hover:text-accent"
          >
            ← back home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
