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
          Get listed in the directory. Tell us what you create and how you want to contribute. Being
          listed is 100% FREE! It&apos;s up to you to sell your services and connect with people,
          but we&apos;re here to help you get discovered.
        </p>
      </header>
      <iframe
        className="airtable-embed"
        src="https://airtable.com/embed/appvMFXHWpCfV4lpC/paghh4ptcBbaTYbgp/form"
        width="100%"
        height="533"
        style={{ background: "transparent", border: "1px solid #ccc", borderRadius: "8px" }}
      />
    </Section>
  );
}
