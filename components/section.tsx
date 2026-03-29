import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type SectionProps = {
  children: ReactNode;
  className?: string;
};

export function Section({ children, className }: SectionProps) {
  return (
    <section className={cn("mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8", className)}>
      {children}
    </section>
  );
}
