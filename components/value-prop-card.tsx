type ValuePropCardProps = {
    title: string;
    description: string;
};

export function ValuePropCard({ title, description }: ValuePropCardProps) {
    return (
        <article className="rounded-2xl border border-warmgold/40 bg-cream p-7 shadow-card">
            <h3 className="text-2xl font-display text-browndark">{title}</h3>
            <p className="mt-4 text-base leading-relaxed text-graywarm">{description}</p>
        </article>
    );
}
