import { Events } from "@/components/events";
import { ExploreBtn } from "@/components/explore-btn";
import { Suspense } from "react";

export default function Home() {
  return (
    <section>
      <h1 className="text-center">
        The Hub for Every Dev <br /> Event You Can't Miss
      </h1>
      <p className="mt-5 text-center">
        Hackathons, Meetups, and Conferences, All in One Place
      </p>
      <ExploreBtn />
      <div className="mt-20 space-y-7">
        <h3>Featured Events</h3>
        <Suspense fallback={<p>Loading events...</p>}>
          <Events />
        </Suspense>
      </div>
    </section>
  );
}
