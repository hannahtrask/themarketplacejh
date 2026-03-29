import Image from "next/image";
import { Button } from "@/components/button";
import { Section } from "@/components/section";
import { ValuePropCard } from "@/components/value-prop-card";
import { valueProps } from "@/lib/data";

export default function HomePage() {
    return (
        <>
            <section className="pt-10 sm:pt-14">
                <div className="relative w-full overflow-hidden border-y border-warmgold/40">
                    <Image
                        src="/images/hero-placeholder.svg"
                        alt="Warm community marketplace gathering"
                        fill
                        priority
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="relative bg-gradient-to-r from-browndark/75 to-terracotta/45">
                        <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
                            <h1 className="fade-up max-w-3xl font-display text-4xl leading-tight text-whitewarm sm:text-5xl">
                                The Marketplace: Marketplace for Jackson freelancers and small business owners
                            </h1>
                            <p className="fade-up-delay mt-5 max-w-2xl text-lg text-cream">
                                Connect with the right people. Build sustainable work. Join the community.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button href="/directory" variant="secondary">
                                    Browse freelancers and small business owners
                                </Button>
                                <Button
                                    href="mailto:hello@themarketplacejh.com?subject=Submit%20a%20Request"
                                    variant="primary"
                                >
                                    Submit a Request
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Section className="pt-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {valueProps.map((item) => (
                        <ValuePropCard key={item.title} title={item.title} description={item.description} />
                    ))}
                </div>
            </Section>

            <Section>
                <div className="rounded-3xl border border-warmgold/40 bg-cream p-8 text-center shadow-card sm:p-12">
                    <h2 className="font-display text-4xl text-browndark">Ready to be part of something?</h2>
                    <p className="mx-auto mt-4 max-w-2xl text-graywarm">
                        Founding members launching soon. Join the movement.
                    </p>
                    <div className="mt-7">
                        <Button href="/apply" variant="primary">
                            Apply Now
                        </Button>
                    </div>
                </div>
            </Section>
        </>
    );
}
