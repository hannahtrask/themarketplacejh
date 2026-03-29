import { Section } from "@/components/section";
import { MemberCard } from "@/components/member-card";
import { members } from "@/lib/data";

export const metadata = {
  title: "Directory | The Marketplace JH"
};

export default function DirectoryPage() {
  return (
    <Section>
      <header className="mb-10">
        <h1 className="font-display text-4xl text-browndark sm:text-5xl">Creative Directory</h1>
        <p className="mt-3 max-w-2xl text-graywarm">
          Browse local freelancers and small business owners in Jackson building meaningful work.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </Section>
  );
}
