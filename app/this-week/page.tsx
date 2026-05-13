import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarDays,
  Clock,
  ExternalLink,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { weeklyEvents } from "../data";

export const metadata: Metadata = {
  title: "This Week | TinyATX",
  description: "Family-friendly Austin events and activities for little kids.",
};

function EventTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[#e9f2f0] px-3 py-1 text-xs font-medium text-[#31564e]">
      {children}
    </span>
  );
}

export default function ThisWeekPage() {
  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#183b33]">
      <header className="border-b border-[#e5ded4] bg-[#fffdf8] px-5 py-5 lg:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" aria-label="TinyATX home">
            <div className="font-serif text-3xl font-semibold md:text-4xl">
              Tiny<span className="text-[#c96d5f]">ATX</span>
            </div>
            <div className="text-xs font-medium text-[#58726a]">
              Austin, but toddler-friendly.
            </div>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-[#d7dfd8] bg-[#ecf4ee] px-4 py-2 text-sm font-medium text-[#25463e]"
          >
            <ArrowLeft className="h-4 w-4" />
            Home
          </Link>
        </div>
      </header>

      <main>
        <section className="bg-[#edf6f8] px-5 py-12 lg:px-10">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold uppercase text-[#b75e4f]">
                <CalendarDays className="h-4 w-4" />
                May 14-18, 2026
              </div>
              <h1 className="font-serif text-5xl leading-none md:text-7xl">
                This Week
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#335349] md:text-xl">
                A compact Austin roundup for families with babies, toddlers, and
                preschoolers.
              </p>
            </div>

            <div className="rounded-lg border border-[#d7e5e8] bg-white p-5 shadow-sm">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-1 h-5 w-5 text-[#b75e4f]" />
                <div>
                  <p className="font-semibold">Updated May 13, 2026</p>
                  <p className="mt-2 text-sm leading-6 text-[#58726a]">
                    Schedules, weather, tickets, and location details can change.
                    Each event links to the organizer.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {weeklyEvents.map((event) => (
              <article
                key={event.id}
                className="overflow-hidden rounded-lg border border-[#e8e0d6] bg-white shadow-sm"
              >
                <div className="relative h-44 w-full">
                  <Image
                    src={event.image}
                    alt={event.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-semibold text-[#b75e4f]">
                        {event.date}
                      </div>
                      <div className="text-sm text-[#64786f]">{event.day}</div>
                    </div>
                    <span className="rounded-full bg-[#fff1df] px-3 py-1 text-xs font-semibold text-[#8c5a24]">
                      {event.price}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold leading-8">
                    {event.title}
                  </h2>
                  <p className="mt-3 leading-7 text-[#345247]">{event.summary}</p>

                  <div className="mt-4 space-y-2 text-sm text-[#547067]">
                    <p className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {event.time}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.place} - {event.area}
                    </p>
                    <p>Best for {event.ages}</p>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {event.tags.map((tag) => (
                      <EventTag key={tag}>{tag}</EventTag>
                    ))}
                  </div>

                  <a
                    href={event.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 font-medium text-[#b75e4f]"
                  >
                    View source
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
