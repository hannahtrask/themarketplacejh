import Link from "next/link";
import { cn } from "@/lib/cn";
import { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const variantStyles = {
  primary:
    "bg-terracotta text-whitewarm border border-terracotta hover:bg-[#b95d3e] focus-visible:ring-terracotta",
  secondary:
    "bg-orangegold text-browndark border border-orangegold hover:bg-[#d9a644] focus-visible:ring-orangegold",
  outline:
    "bg-transparent text-browndark border border-browndark hover:bg-cream focus-visible:ring-browndark"
};

export function Button({ href, children, variant = "primary", className }: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-whitewarm",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Link>
  );
}
