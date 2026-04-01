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
        <div className="bg-gradient-to-r from-orangegold via-warmgold to-terracotta p-[15px] shadow-card">
          <div className="relative h-[75vh] w-full overflow-hidden">
            <Image
              src="/images/marketplace.jpg"
              alt="Warm community marketplace gathering"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
            <div className="relative flex h-full items-center bg-gradient-to-r from-browndark/75 to-terracotta/45">
              <div className="mx-auto w-full max-w-6xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                <h1 className="fade-up mx-auto max-w-3xl font-display text-4xl leading-tight text-whitewarm sm:text-5xl">
                  The Marketplace: Marketplace for Jackson freelancers and small business owners
                </h1>
                <p className="fade-up-delay mx-auto mt-5 max-w-2xl text-lg text-cream">
                  Connect with the right people. Build sustainable work. Join the community.
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
            Founding members launching soon. Join us! Monthly events.
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
// export default function HomePage() {
//     return (
//         <section className="relative min-h-screen w-full overflow-x-hidden">
//             <Image
//                 src="/images/workspace.jpg"
//                 alt="Coming soon hero background"
//                 fill
//                 priority
//                 className="object-cover"
//                 sizes="100vw"
//             />

//             <div className="absolute inset-0 bg-gradient-to-b from-browndark/70 via-browndark/50 to-browndark/80" />

//             <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-20 text-center sm:py-24">
//                 <div className="mx-auto max-w-3xl">
//                     <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-cream">
//                         The Marketplace JH
//                     </p>
//                     <h1 className="font-display text-6xl text-whitewarm sm:text-7xl">Coming Soon</h1>
//                     <p className="mx-auto mt-6 max-w-2xl text-lg text-cream">
//                         A community marketplace for freelancers and small business owners in Jackson, WY.
//                     </p>
//                     <a
//                         href="https://airtable.com/appiBhj91PpTkH2ZL/pagsAoHnoDW6MRHC0/form"
//                         target="_blank"
//                         rel="noreferrer"
//                         className="mt-10 inline-flex items-center justify-center rounded-full bg-terracotta px-8 py-4 text-base font-semibold text-whitewarm transition-colors hover:bg-[#b95d3e]"
//                     >
//                         I want to be part of this!
//                     </a>
//                 </div>

//                 <div className="mx-auto mt-14 w-full max-w-3xl rounded-3xl border border-white/25 bg-white/90 p-4 text-left shadow-card backdrop-blur-md sm:p-6">
//                     <h2 className="mb-4 font-display text-3xl text-browndark">FAQs</h2>
//                     <FAQAccordion items={faqs} />
//                 </div>
//             </div>
//         </section>
//     );
// }
