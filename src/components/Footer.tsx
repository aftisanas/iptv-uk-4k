import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { NAV_LINKS, LEGAL_LINKS, PILLAR_LINKS, SITE_NAME, CONTACT_EMAIL } from "@/lib/constants";
import SectionLink from "@/components/SectionLink";

export default function Footer() {
  return (
    <footer className="relative border-t border-violet-100/50 bg-gradient-to-b from-[#fafbff] to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="relative h-12 w-12 shrink-0">
                <Image
                  src="/iptv-uk.webp"
                  alt="IPTV UK 4K logo"
                  fill
                  sizes="48px"
                  loading="lazy"
                  className="object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.5)]"
                />
              </div>
              <span className="text-lg font-bold text-foreground">
                IPTV<span className="gradient-text"> UK </span>4K
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-6">
              A UK-focused IPTV service with 37,000 live channels, 198,000 films and series, native 4K UHD and an optional Secure Proxy add-on — from £4.17/month.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted">
                <Mail className="h-4 w-4 text-violet-500/60" />
                <span>{CONTACT_EMAIL}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted">
                <MapPin className="h-4 w-4 text-violet-500/60" />
                <span>United Kingdom</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <SectionLink
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </SectionLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Guides
            </h3>
            <ul className="space-y-3">
              {PILLAR_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              {LEGAL_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted transition-colors hover:text-violet-600"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-violet-100/50 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted text-center sm:text-left">
              © {new Date().getFullYear()} iptv-uk-4k.com — IPTV UK | Best IPTV UK | UK IPTV Subscription | Buy IPTV UK
            </p>
            <p className="text-xs text-gray-500 text-center sm:text-right max-w-md">
              {SITE_NAME} is not affiliated with any television networks or content providers.
              All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
