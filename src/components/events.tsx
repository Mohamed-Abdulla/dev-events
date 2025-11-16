import { getAllEvents } from "@/actions/event.actions";
import { EventCard } from "@/components/event-card";
import { cacheLife } from "next/cache";
import { FC } from "react";
import { IEvent } from "../../database";

interface EventsProps {}

export const Events: FC<EventsProps> = async ({}) => {
  "use cache";
  cacheLife({ stale: 10, expire: 10 });
  const events = await getAllEvents();

  return (
    <ul className="events">
      {events &&
        events.length > 0 &&
        events.map((event) => {
          const evt = event as unknown as IEvent;
          return (
            <li key={evt.title} className="list-none">
              <EventCard {...evt} />
            </li>
          );
        })}
    </ul>
  );
};
