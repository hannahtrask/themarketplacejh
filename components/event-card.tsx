import { EventItem } from "@/lib/types";

type EventCardProps = {
  event: EventItem;
};

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="rounded-2xl border-l-4 border-orangegold bg-cream p-6 shadow-card">
      <h3 className="text-2xl font-display text-browndark">{event.title}</h3>
      <p className="mt-2 text-sm text-graywarm">
        {event.date} at {event.time}
      </p>
      <p className="text-sm text-graywarm">{event.location}</p>
      <p className="mt-4 text-browndark">{event.description}</p>
      <a
        href={event.rsvpUrl}
        className="mt-5 inline-flex items-center justify-center rounded-full bg-orangegold px-5 py-2 text-sm font-semibold text-browndark transition-colors hover:bg-[#d9a644]"
      >
        RSVP
      </a>
    </article>
  );
}
