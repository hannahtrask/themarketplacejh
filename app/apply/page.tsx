import { ApplyForm } from "@/components/apply-form";
import { Section } from "@/components/section";

export const metadata = {
  title: "Apply | The Marketplace JH"
};

export default function ApplyPage() {
  return (
    <Section>
      <header className="mx-auto mb-8 max-w-2xl text-center">
        <h1 className="font-display text-4xl text-browndark sm:text-5xl">Join the Marketplace</h1>
        <p className="mt-4 text-graywarm">
          Founding member applications are open. Tell us what you create and how you want to
          contribute.
        </p>
      </header>
      <ApplyForm />
    </Section>
  );
}
