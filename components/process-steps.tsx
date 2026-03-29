import { ProcessStep } from "@/lib/types";

type ProcessStepsProps = {
  steps: ProcessStep[];
};

export function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {steps.map((step, index) => (
        <article
          key={step.title}
          className="rounded-2xl border border-warmgold/40 bg-cream p-6 shadow-card"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-terracotta text-sm font-bold text-whitewarm">
              {step.iconLabel}
            </span>
            <span className="text-xs uppercase tracking-[0.2em] text-graywarm">Step {index + 1}</span>
          </div>
          <h3 className="text-2xl font-display text-browndark">{step.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-graywarm">{step.description}</p>
        </article>
      ))}
    </div>
  );
}
