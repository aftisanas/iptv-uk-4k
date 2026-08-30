"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HOME_PATH } from "@/lib/constants";
import {
  ComponentPropsWithoutRef,
  MouseEvent,
  forwardRef,
} from "react";

type SectionLinkProps = Omit<ComponentPropsWithoutRef<typeof Link>, "href"> & {
  href: string;
};

/**
 * "/" is 301-redirected to HOME_PATH, and the App Router drops the fragment
 * when it follows that redirect — so a "/#pricing" href landed the visitor at
 * the top of the money page rather than at the pricing block. Rewriting the
 * path here fixes both halves at once: the same-page check below can now match,
 * and the href handed to <Link> goes straight to the destination with no
 * redirect hop in between.
 */
function resolveHref(href: string): string {
  if (href === "/") return HOME_PATH;
  if (href.startsWith("/#")) return `${HOME_PATH}${href.slice(1)}`;
  return href;
}

const SectionLink = forwardRef<HTMLAnchorElement, SectionLinkProps>(
  function SectionLink({ href: rawHref, onClick, children, ...rest }, ref) {
    const pathname = usePathname();
    const href = resolveHref(rawHref);

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e);
      if (e.defaultPrevented) return;
      if (
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const hashIndex = href.indexOf("#");
      if (hashIndex < 0) return;

      const targetId = href.slice(hashIndex + 1);
      if (!targetId) return;

      const targetPath = href.slice(0, hashIndex) || HOME_PATH;

      if (pathname !== targetPath) return;

      e.preventDefault();
      const el = document.getElementById(targetId);
      window.history.replaceState(null, "", `${targetPath}#${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    return (
      <Link href={href} onClick={handleClick} ref={ref} {...rest}>
        {children}
      </Link>
    );
  }
);

export default SectionLink;
