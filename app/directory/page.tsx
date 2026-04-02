import Link from "next/link";
import type { Metadata } from "next";
import Script from "next/script";
import { Section } from "@/components/section";
import { MemberCard } from "@/components/member-card";
import { getMembers } from "@/lib/airtable";

export const metadata: Metadata = {
  title: "Directory",
  description: "Browse freelancer and small business profiles in Jackson, WY and connect directly.",
  alternates: {
    canonical: "/directory"
  }
};

export default async function DirectoryPage() {
  const members = await getMembers();

  const directoryMembers = members.map((member) => ({
    id: member.id,
    name: member.name,
    skills: member.skills,
    bio: member.bio,
    portfolio: member.portfolioUrl,
    email: member.email,
    image: member.photoUrl
  }));

  const directoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The Marketplace JH Directory",
    url: "https://themarketplacejh.com/directory",
    description:
      "Browse freelancer and small business profiles in Jackson, WY and connect directly.",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: directoryMembers.slice(0, 50).map((member, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: "https://themarketplacejh.com/directory",
        item: {
          "@type": "Person",
          name: member.name,
          description: member.bio,
          sameAs: member.portfolio || undefined
        }
      }))
    }
  };

  return (
    <>
      <Script id="directory-jsonld" type="application/ld+json">
        {JSON.stringify(directoryJsonLd)}
      </Script>
      <Section>
        <header className="mb-10">
          <h1 className="font-display text-4xl text-browndark sm:text-5xl">The Directory</h1>
          <p className="mt-3 max-w-2xl text-graywarm">
            Browse local freelancers and small business owners in Jackson building meaningful work.
            Want to join them?{" "}
            <Link
              href="/apply"
              className="font-semibold text-terracotta underline decoration-2 underline-offset-4"
            >
              Apply to join the Jackson freelancer directory
            </Link>
            .
          </p>
        </header>

        {directoryMembers.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {directoryMembers.map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-warmgold/40 bg-cream p-8 text-center shadow-card">
            <h2 className="font-display text-3xl text-browndark">Coming soon</h2>
            <p className="mx-auto mt-3 max-w-2xl text-graywarm">
              No members are listed yet!{" "}
              <Link
                href="/apply"
                className="font-semibold text-terracotta underline decoration-2 underline-offset-4"
              >
                Apply to join the directory
              </Link>
              .
            </p>
          </div>
        )}
      </Section>
    </>
  );
}
