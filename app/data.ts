export type Spot = {
  id: number;
  name: string;
  category:
    | "Restaurant"
    | "Brewery"
    | "Beer Garden"
    | "Coffee"
    | "Play Spot"
    | "Park"
    | "Nature";
  neighborhood: string;
  ages: string;
  address: string;
  tags: string[];
  summary: string;
  parentNote: string;
  image: string;
  imageAlt: string;
  photoCredit?: string;
  photoCreditUrl?: string;
  photoLicense?: string;
  photoLicenseUrl?: string;
  photoNote?: string;
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
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/The_thinkery_austin_2014.jpg",
    imageAlt: "Exterior of Thinkery in Austin.",
    photoCredit: "Larry D. Moore",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:The_thinkery_austin_2014.jpg",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0",
    photoNote: "cropped",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Pease_Park_Gate.jpg",
    imageAlt: "Stone gate at Pease Park in Austin.",
    photoCredit: "Bryanrutherford0",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Pease_Park_Gate.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoNote: "cropped",
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
    image: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Austin_nature_center_entrance.jpg",
    imageAlt: "Entrance sign at the Austin Nature and Science Center.",
    photoCredit: "Larry D. Moore",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Austin_nature_center_entrance.jpg",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0",
    photoNote: "cropped",
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
      "https://upload.wikimedia.org/wikipedia/commons/5/50/Mabel_Davis_Rose_Garden_-_Zilker_Botanical_Garden_-_Austin%2C_Texas_-_DSC08873.jpg",
    imageAlt: "Mabel Davis Rose Garden at Zilker Botanical Garden.",
    photoCredit: "Daderot",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Mabel_Davis_Rose_Garden_-_Zilker_Botanical_Garden_-_Austin,_Texas_-_DSC08873.jpg",
    photoLicense: "CC0",
    photoLicenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
    photoNote: "cropped",
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
      "https://upload.wikimedia.org/wikipedia/commons/4/43/Garden_Chairs_Wildflower_Center_Austin_Texas_2024.jpg",
    imageAlt: "Garden chairs at Lady Bird Johnson Wildflower Center.",
    photoCredit: "Larry D. Moore",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Garden_Chairs_Wildflower_Center_Austin_Texas_2024.jpg",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0",
    photoNote: "cropped",
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
      "https://upload.wikimedia.org/wikipedia/commons/e/ec/Austin_Public_Library_August_2019_02.jpg",
    imageAlt: "Exterior of Austin Central Library.",
    photoCredit: "Michael Barera",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Austin_Public_Library_August_2019_02.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoNote: "cropped",
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
  {
    id: 12,
    name: "Austin Beerworks Sprinkle Valley",
    category: "Brewery",
    neighborhood: "Northeast Austin",
    ages: "2-8",
    address: "10300 Springdale Rd.",
    tags: ["Play area", "Food trucks", "Outdoor"],
    summary:
      "A huge taproom and beer garden with food, wide outdoor space, games, and a family-friendly play setup.",
    parentNote:
      "Best when kids need space more than a formal activity. Check the event calendar before going because big events can change the vibe.",
    image:
      "https://images.unsplash.com/photo-1528823872057-9c018a7a7553?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor brewery patio with picnic tables",
    sourceUrl: "https://austinbeerworks.com/",
    sourceLabel: "Austin Beerworks",
  },
  {
    id: 13,
    name: "Fast Friends Beer Co.",
    category: "Brewery",
    neighborhood: "Southeast Austin",
    ages: "1-8",
    address: "7313 N. Interstate 35 Frontage Rd.",
    tags: ["Playground", "Pizza", "Patio"],
    summary:
      "A roomy South Austin brewery and restaurant with indoor/outdoor seating, beer, pizza, and a kid-friendly playground setup.",
    parentNote:
      "Good for mixed groups where some people want beer, some want food, and kids need a defined place to play.",
    image:
      "https://images.unsplash.com/photo-1532635241-17e820acc59f?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Beer garden tables under string lights",
    sourceUrl: "https://fastfriendsbeer.com/",
    sourceLabel: "Fast Friends Beer Co.",
  },
  {
    id: 14,
    name: "Dionysus Oak Hill",
    category: "Beer Garden",
    neighborhood: "Oak Hill",
    ages: "1-7",
    address: "8907 Circle Dr.",
    tags: ["Playground", "Food trailers", "Mocktails"],
    summary:
      "A family-friendly Oak Hill drink spot with beer, cocktails, wine, mocktails, nearby food trailers, and a kid-friendly playground.",
    parentNote:
      "Useful for southwest Austin families who want a casual outdoor spot without driving across town.",
    image:
      "https://images.unsplash.com/photo-1532635249-6a2f6d4ce208?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor picnic tables at a casual beer garden",
    sourceUrl: "https://www.dionysusatx.com/",
    sourceLabel: "Dionysus",
  },
  {
    id: 15,
    name: "The Good Lot",
    category: "Beer Garden",
    neighborhood: "Cedar Park",
    ages: "1-8",
    address: "2500 W. New Hope Dr.",
    tags: ["Playscape", "Food trucks", "Shade"],
    summary:
      "A north Austin-area beer garden with a tree-filled yard, food trucks, live music, yard games, and a kids' playscape.",
    parentNote:
      "Not Austin proper, but strong for north-side families who want shade, room, and an easy food-truck setup.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Food truck park with picnic tables outdoors",
    sourceUrl: "https://www.thegoodlotcp.com/",
    sourceLabel: "The Good Lot",
  },
  {
    id: 16,
    name: "Hat Creek Burger Co. Burnet",
    category: "Restaurant",
    neighborhood: "Burnet Road",
    ages: "1-8",
    address: "5400 Burnet Rd.",
    tags: ["Playground", "Burgers", "Beer & wine"],
    summary:
      "An Austin burger staple with counter service, a spacious patio, beer and wine, and a playground that makes dinner easier.",
    parentNote:
      "One of the simplest dinner wins: order at the counter, sit near the play area, and keep expectations happily low-key.",
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Burger and fries on a restaurant table",
    sourceUrl: "https://hatcreekburgers.com/restaurants/burnet-rd",
    sourceLabel: "Hat Creek Burger Company",
  },
  {
    id: 17,
    name: "Phil's Ice House Burnet",
    category: "Restaurant",
    neighborhood: "Allandale",
    ages: "1-8",
    address: "5620 Burnet Rd.",
    tags: ["Playscape", "Burgers", "Ice cream nearby"],
    summary:
      "A casual burger spot built for families, with kid-friendly energy, draft beer, and Amy's Ice Creams next door.",
    parentNote:
      "Great for toddlers who need to move before or after food. The Burnet location is the classic playscape pick.",
    image:
      "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Classic cheeseburger on a tray",
    sourceUrl: "https://www.philsicehouse.com/locations/",
    sourceLabel: "Phil's Ice House",
  },
  {
    id: 18,
    name: "Waterloo Ice House 360 & 2222",
    category: "Restaurant",
    neighborhood: "Northwest Austin",
    ages: "1-8",
    address: "6203 N. Capital of Texas Hwy.",
    tags: ["Patio", "Playscape", "Full bar"],
    summary:
      "A long-running Austin family restaurant with breakfast, burgers, a full bar, and a big outdoor patio near Bull Creek.",
    parentNote:
      "A good northwest option when you need real food and kid movement in the same stop.",
    image:
      "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Casual restaurant patio with tables",
    sourceUrl: "https://www.waterlooicehouse.com/360-2222-menus",
    sourceLabel: "Waterloo Ice House",
  },
  {
    id: 19,
    name: "Bouldin Acres South Lamar",
    category: "Restaurant",
    neighborhood: "South Lamar",
    ages: "2-8",
    address: "2027 S. Lamar Blvd.",
    tags: ["Playground", "Food trucks", "Pickleball"],
    summary:
      "A big indoor-outdoor restaurant and drinkery with food, a full bar, pickleball, lawn games, and a kids' playground.",
    parentNote:
      "Kid-friendly hours matter here; their site notes kids are welcome until 8 PM.",
    image:
      "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor picnic tables and lawn games",
    sourceUrl: "https://lamar.bouldinacres.com/",
    sourceLabel: "Bouldin Acres",
  },
  {
    id: 20,
    name: "Ski Shores Cafe",
    category: "Restaurant",
    neighborhood: "Lake Austin",
    ages: "2-8",
    address: "2905 Pearce Rd.",
    tags: ["Lakefront", "Playground", "Outdoor"],
    summary:
      "A classic Lake Austin stop with burgers, fried catfish, outdoor seating, full bar, and a family-friendly lake vibe.",
    parentNote:
      "The water views are part of the fun, so this is better for kids who can follow directions near an open lake setting.",
    image:
      "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Outdoor lakeside restaurant tables",
    sourceUrl: "https://www.skishorescafe.com/",
    sourceLabel: "Ski Shores Cafe",
  },
  {
    id: 21,
    name: "Loudmouth Pizza",
    category: "Restaurant",
    neighborhood: "East Austin",
    ages: "2-8",
    address: "1209 Rosewood Ave.",
    tags: ["Pizza", "Play area", "Patio"],
    summary:
      "A Central East Austin pizzeria with wood-fired pies, cocktails, weekend brunch, and a large outdoor lawn with a kids' play area.",
    parentNote:
      "Good for pizza nights when you want nicer food but still need space for kids to wiggle.",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Wood-fired pizza on a restaurant table",
    sourceUrl: "https://www.loudmouth.pizza/",
    sourceLabel: "Loudmouth",
  },
  {
    id: 22,
    name: "Nomadic Outpost",
    category: "Beer Garden",
    neighborhood: "Sunset Valley",
    ages: "1-8",
    address: "3505 Country White Ln.",
    tags: ["Playground", "Coffee", "Food trucks"],
    summary:
      "A Nomadic Beerworks beer garden with coffee, local beer, cocktails, food trucks, and a large outdoor play-friendly yard.",
    parentNote:
      "Useful because it works at different times of day: coffee in the morning, food trucks later, and outdoor space for kids.",
    image:
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A relaxed outdoor beer garden with picnic tables.",
    sourceUrl: "https://www.nomadicbeerworks.com/outpost",
    sourceLabel: "Nomadic Outpost",
  },
  {
    id: 23,
    name: "Bartholomew Splash Pad",
    category: "Park",
    neighborhood: "Mueller / Windsor Park",
    ages: "1-8",
    address: "5201 Berkman Dr.",
    tags: ["Splash pad", "Free", "Seasonal"],
    summary:
      "A free city splash pad near Bartholomew District Park, listed by Austin Parks as open May 1 through October 31.",
    parentNote:
      "Bring water shoes, towels, and a backup plan in case weather or maintenance changes the day.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Children playing in water on a sunny day",
    sourceUrl: "https://www.austintexas.gov/parks/locations/pools-and-splash-pads",
    sourceLabel: "Austin Parks and Recreation",
  },
  {
    id: 24,
    name: "Liz Carpenter Splash Pad",
    category: "Park",
    neighborhood: "Bouldin / Butler Park",
    ages: "1-8",
    address: "200 Dawson Rd.",
    tags: ["Splash pad", "Downtown", "Free"],
    summary:
      "A central city splash pad near Butler Park and the Long Center, useful for hot mornings close to downtown.",
    parentNote:
      "Pair it with a stroller walk or snacks nearby, but keep sun protection high on the list.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Butler_Metro_Park_Austin_View.jpg",
    imageAlt: "View from Butler Metro Park near the Liz Carpenter Splash Pad.",
    photoCredit: "Larry D. Moore",
    photoCreditUrl: "https://commons.wikimedia.org/wiki/File:Butler_Metro_Park_Austin_View.jpg",
    photoLicense: "CC BY-SA 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    photoNote: "cropped",
    sourceUrl: "https://www.austintexas.gov/parks/locations/pools-and-splash-pads",
    sourceLabel: "Austin Parks and Recreation",
  },
  {
    id: 25,
    name: "Ricky Guerrero Splash Pad",
    category: "Park",
    neighborhood: "South Austin",
    ages: "1-8",
    address: "1100 Brodie St.",
    tags: ["Splash pad", "Free", "Neighborhood park"],
    summary:
      "A South Austin city splash pad that works well for a quick cool-down without turning the day into a full pool outing.",
    parentNote:
      "Best as a simple neighborhood stop: towels, snacks, sunscreen, and done.",
    image:
      "https://images.unsplash.com/photo-1559825481-12a05cc00344?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kids running through water spray outdoors",
    sourceUrl: "https://www.austintexas.gov/parks/locations/pools-and-splash-pads",
    sourceLabel: "Austin Parks and Recreation",
  },
  {
    id: 26,
    name: "Rosewood Splash Pad",
    category: "Park",
    neighborhood: "East Austin",
    ages: "1-8",
    address: "2300 Rosewood Ave.",
    tags: ["Splash pad", "Free", "East Austin"],
    summary:
      "An East Austin splash pad at Rosewood Park, part of the city splash pad network for hot-weather play.",
    parentNote:
      "The city lists splash pads as seasonal, so confirm status if you are making a special trip.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/bb/Rosewood_Park_Austin_Entry_Column.jpg",
    imageAlt: "Entry column at Rosewood Park in Austin.",
    photoCredit: "Larry D. Moore",
    photoCreditUrl:
      "https://commons.wikimedia.org/wiki/File:Rosewood_Park_Austin_Entry_Column.jpg",
    photoLicense: "CC BY 4.0",
    photoLicenseUrl: "https://creativecommons.org/licenses/by/4.0",
    photoNote: "cropped",
    sourceUrl: "https://www.austintexas.gov/parks/locations/rosewood-splash-pad",
    sourceLabel: "Austin Parks and Recreation",
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
  "Beer Garden",
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
