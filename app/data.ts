export type Spot = {
  id: number;
  name: string;
  category: "Restaurant" | "Brewery" | "Coffee" | "Play Spot" | "Park" | "Nature";
  neighborhood: string;
  ages: string;
  address: string;
  tags: string[];
  summary: string;
  parentNote: string;
  image: string;
  imageAlt: string;
  sourceUrl: string;
  sourceLabel: string;
};

export type WeeklyEvent = {
  id: number;
  date: string;
  day: string;
  title: string;
  time: string;
  place: string;
  area: string;
  ages: string;
  price: string;
  summary: string;
  tags: string[];
  image: string;
  imageAlt: string;
  sourceUrl: string;
  sourceLabel: string;
};

export const spots: Spot[] = [
  {
    id: 1,
    name: "Thinkery",
    category: "Play Spot",
    neighborhood: "Mueller",
    ages: "0-8",
    address: "1830 Simond Ave.",
    tags: ["Indoor", "Hands-on", "Rainy day"],
    summary:
      "Austin's children's museum, with open-ended exhibits and a strong setup for hot, cold, or rainy days.",
    parentNote:
      "Baby Bloomers on Friday and Saturday mornings is especially useful for kids 0-3.",
    image:
      "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children playing with colorful building blocks",
    sourceUrl: "https://thinkeryaustin.org/visit-us",
    sourceLabel: "Thinkery",
  },
  {
    id: 2,
    name: "Pease Park: Kingsbury Commons",
    category: "Park",
    neighborhood: "Central Austin",
    ages: "1-8",
    address: "1100 Kingsbury St.",
    tags: ["Playground", "Splash pad", "Shade"],
    summary:
      "A destination playground with a water feature, treehouse observation pod, restrooms, and big shade trees.",
    parentNote:
      "Parking is limited, so weekday mornings or stroller access from nearby streets tend to feel easier.",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Sunny playground with slides and climbing structures",
    sourceUrl: "https://peasepark.org/kingsbury-commons",
    sourceLabel: "Pease Park Conservancy",
  },
  {
    id: 3,
    name: "Alliance Children's Garden",
    category: "Park",
    neighborhood: "Downtown",
    ages: "1-8",
    address: "1000 Barton Springs Rd.",
    tags: ["Outdoor", "Climbing", "City views"],
    summary:
      "A two-acre play garden at Butler Park with climbing, slides, creative play areas, and skyline views.",
    parentNote:
      "Great when you want something playful but still close to downtown coffee, lunch, and trails.",
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children running through a sunny city park",
    sourceUrl: "https://www.austintexas.gov/department/alliance-childrens-garden",
    sourceLabel: "Austin Parks and Recreation",
  },
  {
    id: 4,
    name: "Austin Nature & Science Center",
    category: "Nature",
    neighborhood: "Zilker",
    ages: "2-8",
    address: "2389 Stratford Dr.",
    tags: ["Free", "Animals", "Outdoor"],
    summary:
      "A low-pressure nature stop with indoor and outdoor exhibits on the western edge of Zilker Park.",
    parentNote:
      "Plan for walking shoes, sunscreen, and a little extra time for kids who want to linger outside.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Family walking on a shaded nature trail",
    sourceUrl:
      "https://www.austintexas.gov/parks/plan-your-visit-austin-nature-science-center",
    sourceLabel: "Austin Parks and Recreation",
  },
  {
    id: 5,
    name: "Zilker Botanical Garden",
    category: "Nature",
    neighborhood: "Zilker",
    ages: "2-8",
    address: "2220 Barton Springs Rd.",
    tags: ["Garden", "Paths", "Ponds"],
    summary:
      "A walkable garden with ponds, paths, and themed areas that work well for stroller-paced exploring.",
    parentNote:
      "The paths are the point here: it is a good calm outing when everyone needs a slower morning.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Lush garden path with trees and flowers",
    sourceUrl: "https://zilkergarden.org/visit/",
    sourceLabel: "Zilker Botanical Garden",
  },
  {
    id: 6,
    name: "Lady Bird Johnson Wildflower Center",
    category: "Nature",
    neighborhood: "Southwest Austin",
    ages: "2-8",
    address: "4801 La Crosse Ave.",
    tags: ["Family garden", "Trails", "Native plants"],
    summary:
      "A native plant destination with a family garden built for hands-on outdoor exploring.",
    parentNote:
      "Bring water and expect dirt, rocks, and wandering. That is the charm.",
    image:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wildflowers blooming beside a garden path",
    sourceUrl: "https://www.ladybirdjohnson.org/wildflowercenter",
    sourceLabel: "Lady Bird Johnson Wildflower Center",
  },
  {
    id: 7,
    name: "Austin Central Library",
    category: "Play Spot",
    neighborhood: "Downtown",
    ages: "0-8",
    address: "710 W. Cesar Chavez St.",
    tags: ["Indoor", "Books", "Storytimes"],
    summary:
      "A dependable indoor reset with a children's area, events, cafe access, and stroller-friendly downtown energy.",
    parentNote:
      "Check the library calendar before you go; storytimes and youth events change often.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Bright library shelves with children's books",
    sourceUrl: "https://library.austintexas.gov/central-library",
    sourceLabel: "Austin Public Library",
  },
  {
    id: 8,
    name: "Littlefield's Tacos + Coffee",
    category: "Coffee",
    neighborhood: "Tarrytown",
    ages: "1-6",
    address: "2401 Winsted Ln.",
    tags: ["Coffee", "Tacos", "Play yard"],
    summary:
      "An outdoor taco, coffee, and ice cream spot with picnic tables and a shaded enclosed yard.",
    parentNote:
      "Strong option when adults want coffee and kids need a contained place to move.",
    image:
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Coffee cups on an outdoor cafe table",
    sourceUrl: "https://www.littlefieldsatx.com/",
    sourceLabel: "Littlefield's",
  },
  {
    id: 9,
    name: "Brentwood Social House",
    category: "Coffee",
    neighborhood: "Brentwood",
    ages: "0-6",
    address: "1601 W. Koenig Ln.",
    tags: ["Bakery", "Fenced yard", "Family room"],
    summary:
      "A neighborhood cafe with baked goods, counter service, a fenced backyard, and an indoor family room.",
    parentNote:
      "Best for a low-key breakfast or snack where you do not have to whisper the whole time.",
    image:
      "https://images.unsplash.com/photo-1482350325005-eda5e677279b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Pastries and coffee on a cafe table",
    sourceUrl: "https://www.brentwoodsocial.com/",
    sourceLabel: "Brentwood Social House",
  },
  {
    id: 10,
    name: "Meanwhile Brewing",
    category: "Brewery",
    neighborhood: "Southeast Austin",
    ages: "1-8",
    address: "3901 Promontory Point Dr.",
    tags: ["Food trucks", "Soccer field", "Outdoor"],
    summary:
      "A large South Austin brewery with food trucks, coffee, outdoor space, and kid-friendly policies.",
    parentNote:
      "Go early for calmer energy; the soccer field and open space are the big win.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Picnic tables on a lively outdoor patio",
    sourceUrl: "https://www.meanwhilebeer.com/contact",
    sourceLabel: "Meanwhile Brewing",
  },
  {
    id: 11,
    name: "Loro South Lamar",
    category: "Restaurant",
    neighborhood: "South Lamar",
    ages: "2-8",
    address: "2115 South Lamar Blvd.",
    tags: ["Patio", "Counter service", "Shady"],
    summary:
      "A casual Asian smokehouse with counter service, lots of seating, a kids menu, and a dog-friendly patio.",
    parentNote:
      "Better for confident eaters and patio meals than for contained toddler play.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Restaurant table with shared plates",
    sourceUrl: "https://www.loroeats.com/locations/austin/south-lamar/",
    sourceLabel: "Loro",
  },
];

export const weeklyEvents: WeeklyEvent[] = [
  {
    id: 1,
    date: "May 14",
    day: "Thu",
    title: "Preschool Storytime",
    time: "10:00-10:45 AM",
    place: "Hampton Branch at Oak Hill",
    area: "Oak Hill",
    ages: "3-5",
    price: "Free",
    summary:
      "A library storytime matched to preschool attention spans, with books, songs, and early literacy play.",
    tags: ["Storytime", "Preschool", "Library"],
    image:
      "https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Children's books arranged on a table",
    sourceUrl: "https://library.austintexas.gov/events/preschoolers",
    sourceLabel: "Austin Public Library",
  },
  {
    id: 2,
    date: "May 14",
    day: "Thu",
    title: "Storytime & Little Messy Art",
    time: "10:30-11:30 AM",
    place: "Terrazas Branch",
    area: "East Austin",
    ages: "0-5",
    price: "Free",
    summary:
      "A storytime with a hands-on art add-on for little kids who like to make, touch, and explore.",
    tags: ["Storytime", "Art", "Library"],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Young child playing outdoors",
    sourceUrl: "https://library.austintexas.gov/events/all-ages-storytime",
    sourceLabel: "Austin Public Library",
  },
  {
    id: 3,
    date: "May 14",
    day: "Thu",
    title: "Hora de Cuentos",
    time: "11:00-11:30 AM",
    place: "Pleasant Hill Branch",
    area: "South Austin",
    ages: "0-5",
    price: "Free",
    summary:
      "A Spanish-language storytime for babies, toddlers, preschoolers, and caregivers.",
    tags: ["Storytime", "Spanish", "Library"],
    image:
      "https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Small child playing a hand drum",
    sourceUrl: "https://library.austintexas.gov/events/spanish-storytime",
    sourceLabel: "Austin Public Library",
  },
  {
    id: 4,
    date: "May 14",
    day: "Thu",
    title: "Pajama Storytime",
    time: "6:30-7:00 PM",
    place: "Central Library",
    area: "Downtown",
    ages: "0-5",
    price: "Free",
    summary:
      "An evening family storytime with stories, songs, rhymes, games, crafts, and pajama energy.",
    tags: ["Storytime", "Evening", "Library"],
    image:
      "https://images.unsplash.com/photo-1519682337058-a94d519337bc?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Open children's book at bedtime",
    sourceUrl:
      "https://library.austintexas.gov/event/pajama-storytime/pajama-storytime-7780595",
    sourceLabel: "Austin Public Library",
  },
  {
    id: 5,
    date: "May 15",
    day: "Fri",
    title: "Baby Bloomers",
    time: "8:00-10:00 AM",
    place: "Thinkery",
    area: "Mueller",
    ages: "0-3",
    price: "$9 standard",
    summary:
      "Early museum access just for little learners, with story time, parachute play, and free play.",
    tags: ["Museum", "0-3", "Tickets"],
    image:
      "https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Toddler stacking colorful toys",
    sourceUrl: "https://my.thinkeryaustin.org/8756/8826",
    sourceLabel: "Thinkery",
  },
  {
    id: 6,
    date: "May 16",
    day: "Sat",
    title: "Baby Bloomers",
    time: "8:00-10:00 AM",
    place: "Thinkery",
    area: "Mueller",
    ages: "0-3",
    price: "$9 standard",
    summary:
      "A weekend version of Thinkery's little-kid morning, built for families with children 36 months and under.",
    tags: ["Museum", "0-3", "Tickets"],
    image:
      "https://images.unsplash.com/photo-1564429238817-393bd4286b2d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Children playing with colorful blocks",
    sourceUrl: "https://my.thinkeryaustin.org/8756/8822",
    sourceLabel: "Thinkery",
  },
  {
    id: 7,
    date: "May 16",
    day: "Sat",
    title: "All Ages Storytime",
    time: "10:30-11:00 AM",
    place: "Hampton Branch at Oak Hill",
    area: "Oak Hill",
    ages: "0-5",
    price: "Free",
    summary:
      "A short Saturday storytime with books, songs, fingerplays, and rhymes for kids 5 and under.",
    tags: ["Storytime", "Weekend", "Library"],
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Stack of colorful children's books",
    sourceUrl: "https://library.austintexas.gov/events/all-ages-storytime",
    sourceLabel: "Austin Public Library",
  },
  {
    id: 8,
    date: "May 17",
    day: "Sun",
    title: "Texas Farmers' Market at Mueller",
    time: "10:00 AM-2:00 PM",
    place: "Branch Park Pavilion",
    area: "Mueller",
    ages: "All ages",
    price: "Free entry",
    summary:
      "A weekly Sunday market with produce, prepared food, artisan goods, and easy stroller wandering.",
    tags: ["Market", "Outdoor", "Food"],
    image:
      "https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Fresh produce at a farmers market",
    sourceUrl: "https://texasfarmersmarket.org/mueller",
    sourceLabel: "Texas Farmers' Market",
  },
  {
    id: 9,
    date: "May 18",
    day: "Mon",
    title: "Music and Movement",
    time: "2:00-2:30 PM",
    place: "Windsor Park Branch",
    area: "Windsor Park",
    ages: "1-3",
    price: "Free",
    summary:
      "A toddler-focused library music program for a quick afternoon energy reset.",
    tags: ["Music", "Toddlers", "Library"],
    image:
      "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Child holding a small musical instrument",
    sourceUrl: "https://library.austintexas.gov/events/toddlers",
    sourceLabel: "Austin Public Library",
  },
];

export const categories = [
  "All",
  "Restaurant",
  "Brewery",
  "Coffee",
  "Play Spot",
  "Park",
  "Nature",
];

export const categoryShortcuts = [
  "Restaurant",
  "Brewery",
  "Coffee",
  "Play Spot",
  "Park",
] as const;
