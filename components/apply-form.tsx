"use client";

import { FormEvent, useState } from "react";

type FormState = {
    name: string;
    email: string;
    craft: string;
    links: string;
    available: "yes" | "no" | "";
    interest: string;
    source: string;
};

const initialState: FormState = {
    name: "",
    email: "",
    craft: "",
    links: "",
    available: "",
    interest: "",
    source: "Instagram"
};

export function ApplyForm() {
    const [formState, setFormState] = useState<FormState>(initialState);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        console.log("Apply Form Submission", formState);
        setSubmitted(true);
        setFormState(initialState);
    }

    return (
        <form onSubmit={handleSubmit} className="mx-auto w-full max-w-2xl space-y-6 rounded-2xl border border-warmgold/40 bg-cream p-6 shadow-card sm:p-8">
            <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-browndark">
                    Name
                </label>
                <input
                    id="name"
                    required
                    value={formState.name}
                    onChange={(event) => setFormState((prev) => ({ ...prev, name: event.target.value }))}
                    className="w-full rounded-lg border border-warmgold/40 bg-whitewarm px-4 py-3 text-browndark outline-none transition focus:border-terracotta"
                />
            </div>

            <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-browndark">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) => setFormState((prev) => ({ ...prev, email: event.target.value }))}
                    className="w-full rounded-lg border border-warmgold/40 bg-whitewarm px-4 py-3 text-browndark outline-none transition focus:border-terracotta"
                />
            </div>

            <div>
                <label htmlFor="craft" className="mb-2 block text-sm font-semibold text-browndark">
                    What do you create?
                </label>
                <input
                    id="craft"
                    required
                    value={formState.craft}
                    onChange={(event) => setFormState((prev) => ({ ...prev, craft: event.target.value }))}
                    className="w-full rounded-lg border border-warmgold/40 bg-whitewarm px-4 py-3 text-browndark outline-none transition focus:border-terracotta"
                />
            </div>

            <div>
                <label htmlFor="links" className="mb-2 block text-sm font-semibold text-browndark">
                    Portfolio or social links
                </label>
                <input
                    id="links"
                    value={formState.links}
                    onChange={(event) => setFormState((prev) => ({ ...prev, links: event.target.value }))}
                    className="w-full rounded-lg border border-warmgold/40 bg-whitewarm px-4 py-3 text-browndark outline-none transition focus:border-terracotta"
                />
            </div>

            <fieldset>
                <legend className="mb-3 block text-sm font-semibold text-browndark">
                    Are you available for projects?
                </legend>
                <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 text-sm text-browndark">
                        <input
                            type="radio"
                            name="available"
                            value="yes"
                            required
                            checked={formState.available === "yes"}
                            onChange={(event) =>
                                setFormState((prev) => ({
                                    ...prev,
                                    available: event.target.value as "yes"
                                }))
                            }
                        />
                        Yes
                    </label>
                    <label className="flex items-center gap-2 text-sm text-browndark">
                        <input
                            type="radio"
                            name="available"
                            value="no"
                            required
                            checked={formState.available === "no"}
                            onChange={(event) =>
                                setFormState((prev) => ({
                                    ...prev,
                                    available: event.target.value as "no"
                                }))
                            }
                        />
                        No
                    </label>
                </div>
            </fieldset>

            <div>
                <label htmlFor="interest" className="mb-2 block text-sm font-semibold text-browndark">
                    Why are you interested in The Marketplace?
                </label>
                <textarea
                    id="interest"
                    required
                    rows={5}
                    value={formState.interest}
                    onChange={(event) => setFormState((prev) => ({ ...prev, interest: event.target.value }))}
                    className="w-full rounded-lg border border-warmgold/40 bg-whitewarm px-4 py-3 text-browndark outline-none transition focus:border-terracotta"
                />
            </div>

            <div>
                <label htmlFor="source" className="mb-2 block text-sm font-semibold text-browndark">
                    How did you hear about us?
                </label>
                <select
                    id="source"
                    value={formState.source}
                    onChange={(event) => setFormState((prev) => ({ ...prev, source: event.target.value }))}
                    className="w-full rounded-lg border border-warmgold/40 bg-whitewarm px-4 py-3 text-browndark outline-none transition focus:border-terracotta"
                >
                    <option>Instagram</option>
                    <option>Friend</option>
                    <option>Event</option>
                    <option>Other</option>
                </select>
            </div>

            <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-whitewarm transition-colors hover:bg-[#b95d3e]"
            >
                Submit Application
            </button>

            {submitted ? (
                <p className="rounded-lg border border-sagesoft/60 bg-whitewarm p-3 text-sm text-browndark">
                    Thanks! We&apos;ll be in touch soon.
                </p>
            ) : null}
        </form>
    );
}
