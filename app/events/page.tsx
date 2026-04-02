import Link from "next/link";
import Script from "next/script";
import { EventCard } from "@/components/event-card";
import { Section } from "@/components/section";
import { events } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Find upcoming community events for freelancers and small business owners in Jackson, WY.",
  alternates: {
    canonical: "/events"
  }
};

export default function EventsPage() {
  const eventJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "The Marketplace JH Events",
    itemListElement: events.map((event, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Event",
        name: event.title,
        startDate: new Date(event.date).toISOString(),
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: event.location,
          address: "Jackson, WY"
        },
        description: event.description,
        organizer: {
          "@type": "Organization",
          name: "The Marketplace JH",
          url: "https://themarketplacejh.com"
        },
        url: "https://themarketplacejh.com/events"
      }
    }))
  };

  return (
    <>
      <Script id="events-jsonld" type="application/ld+json">
        {JSON.stringify(eventJsonLd)}
      </Script>
      <Section>
        <header className="mb-10">
          <h1 className="font-display text-4xl text-browndark sm:text-5xl">Events</h1>
          <p className="mt-3 max-w-2xl text-graywarm">
            Gather in person, share ideas, and build real relationships. You can also browse the{" "}
            <Link
              href="/directory"
              className="font-semibold text-terracotta underline decoration-2 underline-offset-4"
            >
              Jackson freelancer directory
            </Link>{" "}
            to connect between events.
          </p>
        </header>

        <section aria-labelledby="upcoming-events" className="mb-14">
          <h2 id="upcoming-events" className="mb-5 font-display text-3xl text-browndark">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>

        <section aria-labelledby="past-events">
          <h2 id="past-events" className="mb-5 font-display text-3xl text-browndark">
            Past Events
          </h2>
          <div className="rounded-2xl border border-dashed border-warmgold/50 bg-whitewarm p-6 text-graywarm">
            Past events will appear here soon.
          </div>
        </section>
      </Section>
    </>
  );
}
