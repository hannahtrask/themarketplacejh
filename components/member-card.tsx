import Image from "next/image";

type MemberCardProps = {
  member: {
    id: string | number;
    name: string;
    skills: string[];
    bio: string;
    portfolio: string;
    email: string;
    image: string;
  };
};

export function MemberCard({ member }: MemberCardProps) {
  return (
    <article className="flex h-full flex-col gap-4 border-l-4 border-terracotta bg-cream p-6 shadow-card">
      <Image
        src={member.image}
        alt={`${member.name} profile`}
        width={200}
        height={200}
        className="h-[200px] w-[200px] rounded-lg object-cover"
        loading="lazy"
      />
      <div className="space-y-3">
        <h3 className="font-display text-2xl font-semibold text-browndark">{member.name}</h3>
        <p className="text-sm text-graywarm">{member.skills.join(", ")}</p>
        <p className="text-sm leading-relaxed text-browndark">{member.bio}</p>
      </div>
      <a
        href={member.portfolio}
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium text-turquoise underline decoration-2 underline-offset-4 transition-colors hover:text-[#4f898d]"
      >
        View Portfolio
      </a>
      <a
        href={`mailto:${member.email}`}
        className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-terracotta px-5 py-2 text-sm font-semibold text-whitewarm transition-colors hover:bg-[#b95d3e]"
      >
        Contact
      </a>
    </article>
  );
}
