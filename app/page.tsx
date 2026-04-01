import Image from "next/image";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { ValuePropCard } from "@/components/value-prop-card";
import { faqs, valueProps } from "@/lib/data";
import { FAQAccordion } from "@/components/faq-accordion";

export default function HomePage() {
  return (
    <>
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[85vh] w-full">
          <div className="relative h-[85vh] w-full overflow-hidden">
            <Image
              src="/images/workspace.jpg"
              alt="Warm community marketplace gathering"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="relative flex h-full items-center bg-gradient-to-r from-browndark/75 to-terracotta/45">
              <div className="mx-auto w-full max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <h1 className="fade-up mx-auto max-w-3xl font-display text-4xl leading-tight text-whitewarm sm:text-5xl">
                  The Marketplace JH
                </h1>
                <p className="fade-up-delay mx-auto mt-5 max-w-2xl text-lg text-cream">
                  A community for freelancers and small business owners. Find work, share ideas, and
                  build real relationships.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4">
                  <Button href="/directory" variant="secondary">
                    Browse freelancers and small business owners
                  </Button>
                  <Button href="/apply" variant="primary">
                    Get listed in the directory
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section className="pt-4">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {valueProps.map((item) => (
            <ValuePropCard key={item.title} title={item.title} description={item.description} />
          ))}
        </div>
      </Section>
      <Section className="pt-2">
        <div className="rounded-3xl border border-warmgold/40 bg-cream p-2 text-center shadow-card sm:p-8">
          <h2 className="font-display text-4xl text-browndark">Ready to be part of something?</h2>
          <p className="mx-auto mt-2 max-w-2xl text-graywarm">
            Founding members launching soon. Let us know you're interested in being part of the
            community, in the meantime, get yourself listed in the{" "}
            <a
              href="/apply"
              className="font-semibold text-terracotta underline decoration-2 underline-offset-4"
            >
              directory
            </a>{" "}
            to start finding work .
          </p>
          <div className="mt-7">
            <Button
              href="https://airtable.com/appiBhj91PpTkH2ZL/pagsAoHnoDW6MRHC0/form"
              target="_blank"
              variant="primary"
            >
              Be a founding member!
            </Button>
          </div>
        </div>
      </Section>
      <Section className="pt-2">
        <div className="mx-auto mt-4 w-full max-w-3xl rounded-3xl border border-white/25 bg-white/90 p-4 text-left shadow-card backdrop-blur-md sm:p-6">
          <h2 className="mb-4 font-display text-3xl text-browndark">FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </Section>
    </>
  );
}
