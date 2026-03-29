"use client";

import { FAQItem } from "@/lib/types";
import Link from "next/link";
import { useState } from "react";

type FAQAccordionProps = {
  items: FAQItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function renderAnswer(answer: string) {
    const instagramHandle = "@themarketplacejh";

    if (!answer.includes(instagramHandle)) {
      return answer;
    }

    const [before, after] = answer.split(instagramHandle);

    return (
      <>
        {before}
        <Link
          href="https://www.instagram.com/themarketplacejh/"
          target="_blank"
          rel="noreferrer"
          className="font-medium text-terracotta underline decoration-2 underline-offset-4 transition-colors hover:text-[#b95d3e]"
        >
          {instagramHandle}
        </Link>
        {after}
      </>
    );
  }

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article
            key={item.question}
            className="rounded-2xl border border-warmgold/40 bg-whitewarm p-5 shadow-card"
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 text-left"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
            >
              <span className="text-lg font-semibold text-browndark">{item.question}</span>
              <span className="text-xl font-semibold text-terracotta">{isOpen ? "-" : "+"}</span>
            </button>
            {isOpen ? (
              <p className="mt-4 text-sm leading-relaxed text-graywarm">
                {renderAnswer(item.answer)}
              </p>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
