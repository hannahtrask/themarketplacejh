import Image from "next/image";
import { FAQAccordion } from "@/components/faq-accordion";
import { faqs } from "@/lib/data";

export default function HomePage() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden">
      <Image
        src="/images/workspace.jpg"
        alt="Coming soon hero background"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-browndark/70 via-browndark/50 to-browndark/80" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20 text-center sm:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-cream">
            The Marketplace JH
          </p>
          <h1 className="font-display text-6xl text-whitewarm sm:text-7xl">Coming Soon</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-cream">
            A community marketplace for freelancers and small business owners in Jackson, WY.
          </p>
          <a
            href="https://airtable.com/appiBhj91PpTkH2ZL/pagsAoHnoDW6MRHC0/form"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-whitewarm transition-colors hover:bg-[#b95d3e]"
          >
            I want to be part of this!
          </a>
        </div>

        <div className="mx-auto mt-14 w-full max-w-3xl rounded-3xl border border-white/25 bg-white/90 p-4 text-left shadow-card backdrop-blur-md sm:p-6">
          <h2 className="mb-4 font-display text-3xl text-browndark">FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
