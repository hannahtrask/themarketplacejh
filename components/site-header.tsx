import Link from "next/link";
import { navigationLinks } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-warmgold/30 bg-whitewarm/95 backdrop-blur-sm">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-display text-browndark">
          The Marketplace JH
        </Link>
        <nav aria-label="Primary" className="flex flex-wrap items-center gap-4 text-sm text-browndark sm:gap-6">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-terracotta">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
