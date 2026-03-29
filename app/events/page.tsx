import { EventCard } from "@/components/event-card";
import { Section } from "@/components/section";
import { events } from "@/lib/data";

export const metadata = {
  title: "Events | The Marketplace JH"
};

export default function EventsPage() {
  return (
    <Section>
      <header className="mb-10">
        <h1 className="font-display text-4xl text-browndark sm:text-5xl">Events</h1>
        <p className="mt-3 max-w-2xl text-graywarm">
          Gather in person, share ideas, and build real relationships.
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
  );
}
