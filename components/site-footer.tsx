import Link from "next/link";
import { navigationLinks } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-warmgold/30 bg-whitewarm py-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 text-sm text-graywarm sm:px-6 lg:px-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-display text-lg text-browndark">The Marketplace JH</p>
            <p>Community marketplace for Jackson freelancers and small business owners.</p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap gap-4 text-browndark">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-terracotta"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="https://www.instagram.com/themarketplacejh/"
            target="_blank"
            rel="noreferrer"
            className="text-browndark transition-colors hover:text-terracotta"
          >
            @themarketplacejh
          </Link>
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/privacy-policy"
              className="text-browndark transition-colors hover:text-terracotta"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-browndark transition-colors hover:text-terracotta"
            >
              Terms and Conditions
            </Link>
            <p>&copy; 2026 The Marketplace JH</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
