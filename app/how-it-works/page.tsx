import { FAQAccordion } from "@/components/faq-accordion";
import { ProcessSteps } from "@/components/process-steps";
import { Section } from "@/components/section";
import { faqs, processSteps } from "@/lib/data";

export const metadata = {
  title: "How It Works | The Marketplace JH"
};

export default function HowItWorksPage() {
  return (
    <>
      <Section>
        <header className="mb-10">
          <h1 className="font-display text-4xl text-browndark sm:text-5xl">How it works</h1>
          <p className="mt-3 max-w-2xl text-graywarm">
            A simple way to connect good people with good work. Here&apos;s how it works:
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
