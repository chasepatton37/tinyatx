"use client";

import { useMemo, useState } from "react";
import {
  Baby,
  CalendarDays,
  Camera,
  ChevronRight,
  Coffee,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Search,
  Trees,
  Utensils,
} from "lucide-react";

const spots = [
  {
    id: 1,
    name: "Loro",
    category: "Restaurant",
    neighborhood: "East Austin",
    ages: "1–6",
    tags: ["Outdoor", "Noisy-Friendly", "High Chairs"],
    summary:
      "Huge patio, fans, and a fun vibe. Kids love watching the trains go by.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    name: "Meanwhile Brewing",
    category: "Brewery",
    neighborhood: "South Austin",
    ages: "1–6",
    tags: ["Outdoor", "Spacious", "Food Trucks"],
    summary:
      "Big open space, picnic tables, and enough room for toddlers to roam.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    name: "Thinkery",
    category: "Play Spot",
    neighborhood: "Mueller",
    ages: "1–8",
    tags: ["Indoor", "Play Area", "Rainy Day"],
    summary:
      "Hands-on exhibits made for kids. Perfect on hot or rainy days.",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    name: "Pease Park",
    category: "Park",
    neighborhood: "Downtown",
    ages: "1–7",
    tags: ["Playground", "Shaded", "Water"],
    summary:
      "Spray pads, a big playground, and plenty of shade for warm afternoons.",
    image:
      "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    name: "Tiny Grooves Music",
    category: "Activity",
    neighborhood: "Central Austin",
    ages: "0–4",
    tags: ["Indoor", "Music", "Weekday"],
    summary:
      "Easy drop-in music class with enough movement to burn energy.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    name: "Littlefield's Patio",
    category: "Coffee",
    neighborhood: "North Austin",
    ages: "1–5",
    tags: ["Outdoor", "Coffee", "Stroller-Friendly"],
    summary:
      "Relaxed patio setup with room to park a stroller and regroup.",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
];

const events = [
  {
    id: 1,
    date: "MAY 18",
    day: "SAT",
    title: "Storytime at BookPeople",
    meta: "10:30 AM • All Ages • Free",
    area: "Downtown",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    date: "MAY 19",
    day: "SUN",
    title: "Toddler Music Class",
    meta: "9:30 AM • Ages 0–4 • $15",
    area: "Central Austin",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    date: "MAY 21",
    day: "TUE",
    title: "Mini Movers Open Gym",
    meta: "11:00 AM • Ages 1–5 • $10",
    area: "North Austin",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    date: "MAY 22",
    day: "WED",
    title: "Little Farmers Market",
    meta: "4:00 PM • All Ages • Free",
    area: "Mueller",
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
  },
];

const categoryButtons = [
  { label: "Restaurants", icon: Utensils },
  { label: "Breweries", icon: Coffee },
  { label: "Play Spots", icon: Baby },
  { label: "Parks", icon: Trees },
  { label: "This Week", icon: CalendarDays },
];

const benefits = [
  {
    icon: Camera,
    title: "Real Photos",
    text: "See what places actually look like before you pack the diaper bag.",
  },
  {
    icon: MessageSquare,
    title: "Honest Parent Notes",
    text: "The good, the hard, and the tiny details that matter with toddlers.",
  },
  {
    icon: MapPin,
    title: "Local & Curated",
    text: "Made for Austin parents who want a plan that feels doable.",
  },
  {
    icon: Heart,
    title: "Save & Share",
    text: "Keep favorites handy and send good finds to other parents.",
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-[#edf1e7] px-3 py-1 text-xs font-medium text-[#4f635a]">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  text,
  linkLabel,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-6 flex items-end justify-between gap-4">
      <div>
        {eyebrow ? (
          <div className="mb-2 text-sm uppercase tracking-[0.2em] text-[#d28d83]">
            {eyebrow}
          </div>
        ) : null}
        <h2 className="font-serif text-3xl tracking-tight md:text-4xl">
          {title}
        </h2>
        {text ? <p className="mt-2 text-[#5b7068]">{text}</p> : null}
      </div>
      {linkLabel ? (
        <button className="hidden items-center gap-2 text-[#d28d83] md:flex">
          {linkLabel} <ChevronRight className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}

export default function Home() {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSpots = useMemo(() => {
    return spots.filter((spot) => {
      const matchesQuery = [
        spot.name,
        spot.category,
        spot.neighborhood,
        ...spot.tags,
      ]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());

      const matchesCategory =
        activeCategory === "All" || spot.category === activeCategory;

      return matchesQuery && matchesCategory;
    });
  }, [query, activeCategory]);

  const categoryFilters = [
    "All",
    "Restaurant",
    "Brewery",
    "Play Spot",
    "Park",
    "Activity",
    "Coffee",
  ];

  return (
    <div className="min-h-screen bg-[#fcfaf6] text-[#193b33]">
      <header className="sticky top-0 z-30 border-b border-[#ece6dd] bg-[#fcfaf6]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-10">
          <div>
            <div className="font-serif text-3xl font-semibold tracking-tight md:text-4xl">
              Tiny<span className="text-[#df8d82]">ATX</span>
            </div>
            <div className="text-[10px] uppercase tracking-[0.24em] text-[#6d7d77] md:text-[11px]">
              Austin, but toddler-friendly.
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-[15px] md:flex lg:text-base">
            <a href="#places" className="hover:text-[#df8d82]">
              Places
            </a>
            <a href="#week" className="hover:text-[#df8d82]">
              This Week
            </a>
            <a href="#why" className="hover:text-[#df8d82]">
              Why TinyATX
            </a>
            <a href="#newsletter" className="hover:text-[#df8d82]">
              Newsletter
            </a>
          </nav>

          <button className="rounded-full border border-[#d9d7bf] bg-[#e6ebd1] px-4 py-2.5 text-sm font-medium shadow-sm transition hover:shadow md:px-6 md:py-3">
            Suggest a Spot ♡
          </button>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-10 lg:grid-cols-[1.05fr_1fr] lg:px-10 lg:py-16">
          <div className="flex flex-col justify-center">
            <h1 className="max-w-2xl font-serif text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Austin, <br />
              but <span className="text-[#df8d82]">toddler-friendly.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#335349] md:text-xl">
              Find restaurants, breweries, play spots, parks, and weekly
              activities that actually work with little kids.
            </p>

            <div className="mt-8 rounded-[28px] border border-[#ebe4da] bg-white p-3 shadow-sm">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#95a29c]" />
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search places, activities, or neighborhoods..."
                    className="h-14 w-full rounded-full border border-[#f0ebe4] bg-[#fcfaf6] pl-12 pr-4 outline-none"
                  />
                </div>
                <button className="h-14 rounded-full bg-[#96a47f] px-8 font-medium text-white transition hover:opacity-90">
                  Search
                </button>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {categoryButtons.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    className="rounded-[26px] border border-[#ede6dd] bg-[#f8f3ed] px-4 py-5 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow"
                  >
                    <Icon className="mx-auto h-6 w-6 text-[#7a9185]" />
                    <div className="mt-2 text-sm font-medium">{item.label}</div>
                  </button>
                );
              })}
            </div>

            <div className="mt-7 flex items-center gap-3 text-[#426257]">
              <span className="text-xl text-[#df8d82]">♥</span>
              <span className="text-base">
                Curated by local parents. Real notes. Honest reviews.
              </span>
            </div>
          </div>

          <div className="relative min-h-[430px] overflow-hidden rounded-[40px] bg-[#efe7dc] shadow-lg md:min-h-[560px]">
            <img
              src="https://images.unsplash.com/photo-1543340713-8e7d3df7ea36?auto=format&fit=crop&w=1400&q=80"
              alt="Toddler sitting at an outdoor Austin patio"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-[#fcfaf6]/30" />
            <div className="absolute bottom-6 right-5 max-w-[220px] rounded-[999px] bg-[#8fa27b] px-6 py-7 text-center font-serif text-2xl leading-tight text-white shadow-xl md:bottom-8 md:right-6 md:text-3xl">
              Know before you go with a toddler.
            </div>
          </div>
        </section>

        <section id="places" className="mx-auto max-w-7xl px-5 py-4 lg:px-10">
          <SectionTitle
            eyebrow="Featured"
            title="Toddler-Friendly Spots"
            text="A clean starter directory section you can later connect to Airtable or Supabase."
            linkLabel="View all places"
          />

          <div className="mb-5 flex flex-wrap gap-3">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveCategory(filter)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  activeCategory === filter
                    ? "bg-[#193b33] text-white"
                    : "border border-[#e8e1d7] bg-white text-[#35544a]"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {filteredSpots.map((spot) => (
              <article
                key={spot.id}
                className="overflow-hidden rounded-[28px] border border-[#ebe5dc] bg-white shadow-sm"
              >
                <img
                  src={spot.image}
                  alt={spot.name}
                  className="h-60 w-full object-cover"
                />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-2xl font-semibold">{spot.name}</h3>
                      <p className="mt-1 text-sm text-[#61786f]">
                        {spot.category} • {spot.neighborhood}
                      </p>
                    </div>
                    <button className="rounded-full border border-[#ece5da] p-2 text-[#768680]">
                      <Heart className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {spot.tags.map((tag) => (
                      <Pill key={tag}>{tag}</Pill>
                    ))}
                  </div>

                  <p className="mt-4 text-[15px] leading-7 text-[#345247]">
                    {spot.summary}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-sm font-medium text-[#24453c]">
                      Best for ages {spot.ages}
                    </p>
                    <button className="text-sm font-medium text-[#d28d83]">
                      View spot →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="week" className="mx-auto max-w-7xl px-5 py-10 lg:px-10">
          <div className="rounded-[32px] bg-[#f7ece8] p-6 md:p-8">
            <SectionTitle
              eyebrow="This week"
              title="Events & Activities"
              text="Use this section for your weekly roundup, storytimes, pop-ups, and toddler classes."
              linkLabel="See full calendar"
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {events.map((event) => (
                <article
                  key={event.id}
                  className="overflow-hidden rounded-[24px] bg-white shadow-sm"
                >
                  <img
                    src={event.image}
                    alt={event.title}
                    className="h-36 w-full object-cover"
                  />
                  <div className="p-5">
                    <div className="text-sm font-semibold uppercase tracking-[0.18em] text-[#df8d82]">
                      {event.date}
                    </div>
                    <div className="mt-1 text-sm uppercase tracking-[0.18em] text-[#7b8b85]">
                      {event.day}
                    </div>
                    <h3 className="mt-4 text-xl font-semibold leading-7">
                      {event.title}
                    </h3>
                    <p className="mt-3 text-sm text-[#547067]">{event.meta}</p>
                    <p className="mt-1 text-sm text-[#547067]">{event.area}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-2 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-[32px] border border-[#ebe5dc] bg-white p-6 shadow-sm md:p-8">
              <SectionTitle
                eyebrow="How it works"
                title="What makes TinyATX useful"
                text="These are the trust signals that make the site feel better than a random directory."
              />
              <div id="why" className="grid gap-6 md:grid-cols-2">
                {benefits.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-[24px] bg-[#fcfaf6] p-5">
                      <Icon className="h-7 w-7 text-[#7a9185]" />
                      <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-[#537067]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[32px] bg-[#eef2e7] p-6 shadow-sm md:p-8">
              <div className="text-sm uppercase tracking-[0.2em] text-[#d28d83]">
                Your content model
              </div>
              <h3 className="mt-3 font-serif text-3xl tracking-tight">
                What you’ll need to add real places
              </h3>
              <div className="mt-6 space-y-3 text-[#39584e]">
                {[
                  "Name + category",
                  "Neighborhood + address",
                  "3–5 photos",
                  "Age fit",
                  "Parent notes",
                  "Tags like shaded, changing table, outdoor",
                  "Link to map or website",
                ].map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl bg-white px-4 py-3 shadow-sm"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          id="newsletter"
          className="mx-auto max-w-7xl px-5 py-10 lg:px-10"
        >
          <div className="rounded-[32px] bg-gradient-to-r from-[#839572] to-[#95a97e] px-6 py-8 text-white shadow-lg md:px-10 md:py-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <div className="mb-2 text-sm uppercase tracking-[0.2em] text-white/80">
                  Newsletter
                </div>
                <h2 className="font-serif text-4xl tracking-tight">
                  Stay in the loop
                </h2>
                <p className="mt-3 max-w-lg text-lg leading-8 text-white/90">
                  Weekly picks, new spots, and fun things to do with toddlers in
                  Austin.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#95a29c]" />
                  <input
                    placeholder="Enter your email"
                    className="h-14 w-full rounded-full border border-white/20 bg-white pl-12 pr-4 text-[#1d3d34] outline-none"
                  />
                </div>
                <button className="h-14 rounded-full bg-[#f0a295] px-8 font-semibold text-white transition hover:opacity-95">
                  Get the Guide!
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#ece6dd] px-5 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#5f756d] md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-serif text-3xl font-semibold tracking-tight text-[#193b33]">
              Tiny<span className="text-[#df8d82]">ATX</span>
            </div>
            <div className="text-[11px] uppercase tracking-[0.22em]">
              Austin, but toddler-friendly.
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#places">Places</a>
            <a href="#week">This Week</a>
            <a href="#why">Why TinyATX</a>
            <a href="#newsletter">Newsletter</a>
            <a href="#">Contact</a>
          </div>
          <div>© 2026 TinyATX</div>
        </div>
      </footer>
    </div>
  );
}