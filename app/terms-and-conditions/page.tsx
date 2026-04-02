import { Section } from "@/components/section";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Review the terms for using The Marketplace JH website and participating in the directory.",
  alternates: {
    canonical: "/terms-and-conditions"
  }
};

export default function TermsAndConditionsPage() {
  return (
    <Section>
      <div className="mx-auto max-w-3xl space-y-8 text-browndark">
        <header className="space-y-3">
          <h1 className="font-display text-4xl sm:text-5xl">Terms and Conditions</h1>
          <p className="text-sm text-graywarm">Last updated: April 1, 2026</p>
        </header>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">Use of the Site</h2>
          <p>By using The Marketplace JH website, you agree to use it lawfully and respectfully.</p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">Directory Listings</h2>
          <p>
            Freelancer and small business listings are provided for informational purposes. We may
            review, edit, approve, or remove listings at our discretion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">User-Submitted Information</h2>
          <p>
            If you submit information to be listed, you confirm that it is accurate and that you
            have rights to any content you provide (including images and portfolio links).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">No Guarantee of Work</h2>
          <p>
            The Marketplace JH does not guarantee project opportunities, client outcomes, payments,
            or business results from directory participation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">Limitation of Liability</h2>
          <p>
            To the extent permitted by law, The Marketplace JH is not liable for losses arising from
            use of this site or reliance on directory information.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="font-display text-2xl">Contact</h2>
          <p>Questions about these terms can be sent to hello@wearesagebrush.com.</p>
        </section>
      </div>
    </Section>
  );
}
