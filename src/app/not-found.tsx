import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 lg:pt-36 lg:pb-32">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0118] via-[#1a0a3e] to-[#0c1445]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(124,58,237,0.18),transparent_50%)]" />

      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300/90">
          Error 404
        </p>
        <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.1]">
          We couldn&apos;t find that page
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300/90 leading-relaxed">
          The page you were looking for has moved, been renamed or never existed.
          Head back to the homepage or browse the IPTV UK 4K blog for setup guides
          and provider advice.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1a0a3e] transition hover:bg-white/90"
          >
            Go to homepage
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/[0.12]"
          >
            Read the blog
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-white/20 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/[0.12]"
          >
            Contact support
          </Link>
        </div>
      </div>
    </section>
  );
}
