import Link from "next/link";
import Script from "next/script";
import { FAQAccordion } from "@/components/faq-accordion";
import { ProcessSteps } from "@/components/process-steps";
import { Section } from "@/components/section";
import { faqs, processSteps } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how The Marketplace JH connects Jackson freelancers and small business owners with opportunities and events.",
  alternates: {
    canonical: "/how-it-works"
  }
};

export default function HowItWorksPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <>
      <Script id="how-it-works-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <Section>
        <header className="mb-10">
          <h1 className="font-display text-4xl text-browndark sm:text-5xl">How it works</h1>
          <p className="mt-3 max-w-2xl text-graywarm">
            A simple way to connect good people with good work in Jackson. Ready to start? Explore
            the{" "}
            <Link
              href="/directory"
              className="font-semibold text-terracotta underline decoration-2 underline-offset-4"
            >
              Jackson freelancer directory
            </Link>{" "}
            or{" "}
            <Link
              href="/apply"
              className="font-semibold text-terracotta underline decoration-2 underline-offset-4"
            >
              apply to get listed
            </Link>
            .
          </p>
        </header>
        <ProcessSteps steps={processSteps} />
      </Section>

      <Section className="pt-4">
        <h2 className="mb-6 font-display text-3xl text-browndark">FAQ</h2>
        <FAQAccordion items={faqs} />
      </Section>
    </>
  );
}
