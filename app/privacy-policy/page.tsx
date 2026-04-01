import { Section } from "@/components/section";

export const metadata = {
    title: "Privacy Policy | The Marketplace JH"
};

export default function PrivacyPolicyPage() {
    return (
        <Section>
            <div className="mx-auto max-w-3xl space-y-8 text-browndark">
                <header className="space-y-3">
                    <h1 className="font-display text-4xl sm:text-5xl">Privacy Policy</h1>
                    <p className="text-sm text-graywarm">Last updated: April 1, 2026</p>
                </header>

                <section className="space-y-3">
                    <h2 className="font-display text-2xl">What We Collect</h2>
                    <p>
                        We collect information submitted by freelancers and small business owners who apply to
                        be listed in The Marketplace JH directory. This may include your name, email address,
                        skills, bio, portfolio links, profile photo, and related business details.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="font-display text-2xl">How We Use Your Data</h2>
                    <p>
                        We use this information to review applications and display approved freelancer profiles
                        in the public directory so visitors can discover and contact service providers.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="font-display text-2xl">Where Data Is Stored</h2>
                    <p>
                        Application and profile information is stored in Airtable and used by our website to
                        render directory listings.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="font-display text-2xl">Sharing</h2>
                    <p>
                        We do not sell your personal data. Profile information you submit for listing may be
                        publicly visible on the directory once approved.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="font-display text-2xl">Your Choices</h2>
                    <p>
                        You can request updates or removal of your profile information at any time by emailing
                        hello@wearesagebrush.com.
                    </p>
                </section>

                <section className="space-y-3">
                    <h2 className="font-display text-2xl">Contact</h2>
                    <p>If you have privacy questions, contact us at hello@wearesagebrush.com.</p>
                </section>
            </div>
        </Section>
    );
}
