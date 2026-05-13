"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Baby,
  Beer,
  CalendarDays,
  ChevronRight,
  Clock,
  Coffee,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Search,
  ShieldCheck,
  Trees,
  Utensils,
} from "lucide-react";
import { categories, categoryShortcuts, spots, weeklyEvents, type Spot } from "./data";

const shortcutIcons = {
  Restaurant: Utensils,
  Brewery: Beer,
  Coffee,
  "Play Spot": Baby,
  Park: Trees,
};

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[#e9f2f0] px-3 py-1 text-xs font-medium text-[#31564e]">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  href,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? (
          <div className="mb-2 text-sm font-semibold uppercase text-[#b75e4f]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="font-serif text-3xl leading-tight md:text-4xl">{title}</h2>
        {text ? <p className="mt-2 max-w-2xl text-[#4e665f]">{text}</p> : null}
      </div>
      {href && linkLabel ? (
        <Link
          href={href}
          className="inline-flex items-center gap-2 font-medium text-[#b75e4f]"
        >
          {linkLabel}
          <ChevronRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-[#e5ded4] bg-[#fffdf8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
        <Link href="/" aria-label="TinyATX home">
          <div className="font-serif text-3xl font-semibold md:text-4xl">
            Tiny<span className="text-[#c96d5f]">ATX</span>
          </div>
          <div className="text-xs font-medium text-[#58726a]">
            Austin, but toddler-friendly.
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-[15px] md:flex lg:text-base">
          <a href="#places" className="hover:text-[#b75e4f]">
            Places
          </a>
          <Link href="/this-week" className="hover:text-[#b75e4f]">
            This Week
          </Link>
          <a href="#why" className="hover:text-[#b75e4f]">
            Why TinyATX
          </a>
          <a href="#newsletter" className="hover:text-[#b75e4f]">
            Newsletter
          </a>
        </nav>

        <a
          href="mailto:hello@tinyatx.com?subject=TinyATX spot suggestion"
          className="inline-flex items-center gap-2 rounded-full border border-[#d7dfd8] bg-[#ecf4ee] px-4 py-2 text-sm font-medium text-[#25463e] shadow-sm transition hover:bg-[#e2efe7] md:px-5"
        >
          <Heart className="h-4 w-4" />
          Suggest
        </a>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[#e5ded4] px-5 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#5f756d] md:flex-row md:items-center md:justify-between">
        <div>
          <div className="font-serif text-3xl font-semibold text-[#193b33]">
            Tiny<span className="text-[#c96d5f]">ATX</span>
          </div>
          <div className="text-xs font-medium">Austin, but toddler-friendly.</div>
        </div>
        <div className="flex flex-wrap gap-5">
          <a href="#places">Places</a>
          <Link href="/this-week">This Week</Link>
          <a href="#why">Why TinyATX</a>
          <a href="#newsletter">Newsletter</a>
          <a href="mailto:hello@tinyatx.com">Contact</a>
        </div>
        <div>2026 TinyATX</div>
      </div>
    </footer>
  );
}

function SpotCard({ spot }: { spot: Spot }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#e8e0d6] bg-white shadow-sm">
      <div className="relative h-52 w-full">
        <Image
          src={spot.image}
          alt={spot.imageAlt}
          fill
          sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-xl font-semibold leading-7">{spot.name}</h3>
            <p className="mt-1 flex items-center gap-1 text-sm text-[#61786f]">
              <MapPin className="h-3.5 w-3.5" />
              {spot.neighborhood}
            </p>
          </div>
          <span className="rounded-full bg-[#fff1df] px-3 py-1 text-xs font-semibold text-[#8c5a24]">
            {spot.category}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {spot.tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </div>

        <p className="mt-4 text-[15px] leading-7 text-[#345247]">{spot.summary}</p>
        <p className="mt-3 text-sm leading-6 text-[#5f6f68]">{spot.parentNote}</p>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#efe8df] pt-4">
          <p className="text-sm font-medium text-[#24453c]">Best for ages {spot.ages}</p>
          <a
            href={spot.sourceUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm font-medium text-[#b75e4f]"
          >
            Details
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

function MiniEventCard({ event }: { event: (typeof weeklyEvents)[number] }) {
  return (
    <article className="overflow-hidden rounded-lg border border-[#e8e0d6] bg-white shadow-sm">
      <div className="relative h-36 w-full">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-semibold text-[#b75e4f]">{event.date}</div>
            <div className="text-sm text-[#64786f]">{event.day}</div>
          </div>
          <span className="rounded-full bg-[#eef5fb] px-3 py-1 text-xs font-semibold text-[#315b74]">
            {event.price}
          </span>
        </div>
        <h3 className="mt-4 text-xl font-semibold leading-7">{event.title}</h3>
        <p className="mt-3 flex items-center gap-2 text-sm text-[#547067]">
          <Clock className="h-4 w-4" />
          {event.time}
        </p>
        <p className="mt-2 flex items-center gap-2 text-sm text-[#547067]">
          <MapPin className="h-4 w-4" />
          {event.place}
        </p>
      </div>
    </article>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => {
      const searchText = [
        spot.name,
        spot.category,
        spot.neighborhood,
        spot.address,
        spot.summary,
        spot.parentNote,
        ...spot.tags,
      ]
        .join(" ")
        .toLowerCase();

      const matchesQuery = searchText.includes(query.toLowerCase());
      const matchesCategory =
        activeCategory === "All" || spot.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen bg-[#fffdf8] text-[#183b33]">
      <SiteHeader />

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1fr_0.9fr] lg:px-10 lg:py-14">
          <div className="flex flex-col justify-center">
            <p className="mb-3 text-sm font-semibold uppercase text-[#b75e4f]">
              Tiny guide, real Austin plans
            </p>
            <h1 className="max-w-2xl font-serif text-5xl leading-none md:text-7xl">
              TinyATX
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#335349] md:text-xl">
              Restaurants, parks, play spots, coffee stops, and weekly activities
              that make Austin easier with little kids.
            </p>

            <div className="mt-8 max-w-2xl rounded-lg border border-[#e8e0d6] bg-white p-3 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7f918a]" />
                  <input
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search places or areas"
                    className="h-14 w-full rounded-lg border border-[#ece6dc] bg-[#fffaf3] pl-12 pr-4 outline-none focus:border-[#9bb7ad]"
                  />
                </div>
                {query ? (
                  <button
                    onClick={() => setQuery("")}
                    className="h-14 rounded-lg bg-[#193b33] px-6 font-medium text-white transition hover:bg-[#244f45]"
                  >
                    Clear
                  </button>
                ) : null}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
              {categoryShortcuts.map((category) => {
                const Icon = shortcutIcons[category];
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(isActive ? "All" : category)}
                    className={`rounded-lg border px-4 py-4 text-left shadow-sm transition hover:-translate-y-0.5 ${
                      isActive
                        ? "border-[#193b33] bg-[#193b33] text-white"
                        : "border-[#e8e0d6] bg-[#f7fbfa] text-[#24453c]"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                    <div className="mt-2 text-sm font-semibold">{category}</div>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex items-start gap-3 text-[#426257]">
              <ShieldCheck className="mt-0.5 h-5 w-5 text-[#b75e4f]" />
              <span className="text-base">
                Built for parent-level details: shade, noise, bathrooms, parking,
                and whether the outing is worth packing snacks for.
              </span>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-[#e8f4f8] shadow-lg md:min-h-[540px]">
            <Image
              src="/hero.jpg"
              alt="Child enjoying a sunny family outing"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/5 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/92 p-5 shadow-lg backdrop-blur">
              <div className="flex items-start gap-3">
                <CalendarDays className="mt-1 h-6 w-6 text-[#b75e4f]" />
                <div>
                  <p className="font-semibold text-[#193b33]">This week in Austin</p>
                  <p className="mt-1 text-sm leading-6 text-[#4c635b]">
                    Storytimes, Baby Bloomers, farmers market wandering, and a few
                    easy wins for May 14-18.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="places" className="mx-auto max-w-7xl px-5 py-8 lg:px-10">
          <SectionTitle
            eyebrow="Starter directory"
            title="Real Austin Spots"
            text="A first pass at dependable places for toddler-friendly mornings, meals, and energy burns."
          />

          <div className="mb-5 flex flex-wrap gap-3">
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === filter
                    ? "bg-[#193b33] text-white"
                    : "border border-[#e8e0d6] bg-white text-[#35544a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredSpots.map((spot) => (
              <SpotCard key={spot.id} spot={spot} />
            ))}
          </div>
        </section>

        <section id="week" className="mt-8 bg-[#edf6f8] px-5 py-12 lg:px-10">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="This week"
              title="Events & Activities"
              text="A short list of current, low-friction outings for May 14-18, 2026."
              href="/this-week"
              linkLabel="See full list"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {weeklyEvents.slice(0, 4).map((event) => (
                <MiniEventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-7xl px-5 py-12 lg:px-10">
          <SectionTitle
            eyebrow="Why TinyATX"
            title="The Tiny Details Matter"
            text="A place can be great and still be hard with a stroller, a nap clock, or a toddler who needs room."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "Age Fit",
                text: "Quick notes on whether a spot feels better for babies, toddlers, preschoolers, or mixed ages.",
              },
              {
                title: "Parent Notes",
                text: "The practical stuff: shade, noise, timing, parking, food, and where the wheels can come off.",
              },
              {
                title: "Real Sources",
                text: "Every starter listing links back to the venue or organizer so you can confirm before loading the car.",
              },
              {
                title: "Weekly Picks",
                text: "A compact roundup for families who want a plan without reading ten calendars.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-lg border border-[#e8e0d6] bg-white p-5 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#537067]">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="newsletter" className="mx-auto max-w-7xl px-5 pb-12 lg:px-10">
          <div className="rounded-lg bg-[#244f45] px-6 py-8 text-white shadow-lg md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-2 text-sm font-semibold uppercase text-[#f2cdbd]">
                  Newsletter
                </div>
                <h2 className="font-serif text-4xl leading-tight">
                  Tiny plans in your inbox
                </h2>
                <p className="mt-3 max-w-lg text-lg leading-8 text-white/90">
                  Weekly picks, new spots, and parent notes for easy Austin outings.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#7f918a]" />
                  <input
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-lg border border-white/20 bg-white pl-12 pr-4 text-[#1d3d34] outline-none"
                  />
                </div>
                <button className="h-14 rounded-lg bg-[#d88373] px-8 font-semibold text-white transition hover:bg-[#c96d5f]">
                  Join
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
