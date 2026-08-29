export type Service = {
  id: string;
  group: "cuts" | "womens" | "mens-braids" | "other";
  name: { en: string; fr: string };
  minutes: number;
  price: number;
  note?: { en: string; fr: string };
  book: string;
};

const B = "https://meticuleux-1.setmore.com/book";

export const SERVICES: Service[] = [
  {
    id: "beard-lineup",
    group: "cuts",
    name: { en: "Beard/Lineup", fr: "Barbe / contour" },
    minutes: 30,
    price: 25,
    book: `${B}?step=staff&products=26ec72b4-1e8e-4e7e-82bc-dd26d9b3ab1a&type=service`,
  },
  {
    id: "scissor-taper",
    group: "cuts",
    name: { en: "Scissor + Taper", fr: "Ciseaux + taper" },
    minutes: 45,
    price: 45,
    note: {
      en: "Scissors & Taper (No beard, Textured crop, Comb over, Mullet, Pompadour…)",
      fr: "Ciseaux et taper (sans barbe : textured crop, comb over, mullet, pompadour…)",
    },
    book: `${B}?step=staff&products=1821a877-1266-441c-8495-07738d5bd9e5&type=service`,
  },
  {
    id: "apprentice-cut",
    group: "cuts",
    name: { en: "Haircut", fr: "Coupe" },
    minutes: 45,
    price: 30,
    note: {
      en: "Our apprentice barber is currently training under senior barbers and provides quality cuts at a reduced rate.",
      fr: "Notre barbier apprenti s’entraîne avec les barbiers seniors et offre des coupes à tarif réduit.",
    },
    book: `${B}?step=staff&products=8018e938-825d-4506-94dd-07ec71371382&type=service`,
  },
  {
    id: "taper-no-beard",
    group: "cuts",
    name: { en: "Taper Fade / No Beard", fr: "Taper fade / sans barbe" },
    minutes: 35,
    price: 40,
    note: {
      en: "A fade only on the temple area, it does not include the scissors trim on top.",
      fr: "Fade seulement aux tempes — n’inclut pas la coupe aux ciseaux sur le dessus.",
    },
    book: `${B}?step=staff&products=853007ef-da04-45e9-b59d-1abb2c7ba28b&type=service`,
  },
  {
    id: "cut-beard",
    group: "cuts",
    name: { en: "Haircut + Beard", fr: "Coupe + barbe" },
    minutes: 45,
    price: 35,
    book: `${B}?step=staff&products=7b6cb478-67f8-4385-9eb6-e1be574ed535&type=service`,
  },
  {
    id: "full-taper-beard",
    group: "cuts",
    name: { en: "Full Haircut + Taper + Beard", fr: "Coupe complète + taper + barbe" },
    minutes: 60,
    price: 50,
    note: { en: "Cutting top + Taper + Beard", fr: "Dessus + taper + barbe" },
    book: `${B}?step=staff&products=114b2a8d-c09a-4e44-9273-298a290395d1&type=service`,
  },
  {
    id: "taper-beard",
    group: "cuts",
    name: { en: "Taper fade and Beard", fr: "Taper fade et barbe" },
    minutes: 40,
    price: 45,
    note: { en: "High, Low, Mid Taper and Beard", fr: "Taper haut, bas ou mid, et barbe" },
    book: `${B}?step=staff&products=3145b07d-dfe7-443a-a0f1-0e9aac81aff8&type=service`,
  },
  {
    id: "senior",
    group: "cuts",
    name: { en: "Senior cut", fr: "Coupe senior" },
    minutes: 30,
    price: 30,
    note: {
      en: "A professional haircut designed for seniors, offering clean, stylish grooming with extra care and comfort. Includes a precision cut, shaping, and light styling to maintain a neat look.",
      fr: "Coupe professionnelle pour aînés : coupe précise, formage et léger coiffage.",
    },
    book: `${B}?step=staff&products=b3982e4c-c9b1-4eab-a4ef-19f05c51634f&type=service`,
  },
  {
    id: "kids",
    group: "cuts",
    name: { en: "Kids", fr: "Enfants" },
    minutes: 35,
    price: 40,
    note: { en: "Kids 11 & Younger", fr: "11 ans et moins" },
    book: `${B}?step=additional-products&products=65ecec29-89d9-4dfa-9353-31f96e96ba5c&type=service&staff=d960e091-fb73-45ae-bc61-fa9876a1b040&staffSelected=false`,
  },
  {
    id: "small-knotless",
    group: "womens",
    name: { en: "Small Knotless", fr: "Knotless petites" },
    minutes: 720,
    price: 250,
    note: {
      en: "Braiding hair included, Small Butt length knotless braids, soft and lightweight",
      fr: "Cheveux à tresser inclus. Knotless petites, longueur fesses, légères.",
    },
    book: `${B}?step=additional-products&products=14a007ae-1588-4ad8-884a-612e2b67e681&type=service`,
  },
  {
    id: "med-knotless",
    group: "womens",
    name: { en: "Medium Knotless Braids", fr: "Knotless moyennes" },
    minutes: 480,
    price: 200,
    note: {
      en: "Braiding hair included, medium sized butt length knotless braids, lightweight",
      fr: "Cheveux à tresser inclus. Knotless moyennes, longueur fesses.",
    },
    book: `${B}?step=additional-products&products=e6d2e0ba-a760-4fbd-8cbe-894a45f8dc83&type=service`,
  },
  {
    id: "large-knotless",
    group: "womens",
    name: { en: "Large Knotless Braids", fr: "Knotless grandes" },
    minutes: 360,
    price: 150,
    note: {
      en: "BRAIDING HAIR INCLUDED, Large sized butt length Knotless braids, neat and flowy",
      fr: "Cheveux à tresser inclus. Knotless grandes, longueur fesses.",
    },
    book: `${B}?step=additional-products&products=dea456ba-3804-4c30-bf94-75942789f407&type=service`,
  },
  {
    id: "med-feedin",
    group: "womens",
    name: { en: "Medium Feed-in braids", fr: "Feed-in moyennes" },
    minutes: 360,
    price: 120,
    note: {
      en: "Medium sized butt length cornrows. All hair is included.",
      fr: "Cornrows moyennes, longueur fesses. Cheveux inclus.",
    },
    book: `${B}?step=additional-products&products=f4f05b2a-3c0f-40a6-a9f8-34fba8932fa4&type=service`,
  },
  {
    id: "small-feedin",
    group: "womens",
    name: { en: "Small feed-in braids", fr: "Feed-in petites" },
    minutes: 600,
    price: 145,
    note: {
      en: "BRAIDING HAIR INCLUDED, small feed-in cornrows, neat and lightweight",
      fr: "Cheveux à tresser inclus. Petites cornrows feed-in.",
    },
    book: `${B}?step=additional-products&products=829fcab1-31d8-4406-8df5-2477906fdbf4&type=service`,
  },
  {
    id: "half-feedin-knotless",
    group: "womens",
    name: { en: "Half feed-in, half knotless", fr: "Moitié feed-in, moitié knotless" },
    minutes: 240,
    price: 185,
    note: {
      en: "Feed-in cornrows in the front and knotless braids in the back, butt length. All hair is included.",
      fr: "Cornrows feed-in devant, knotless derrière, longueur fesses. Cheveux inclus.",
    },
    book: `${B}?step=additional-products&products=c2ab9c01-f96b-4b44-8b9b-770157f29dbf&type=service`,
  },
  {
    id: "wig-custom",
    group: "womens",
    name: { en: "Wig Customizing", fr: "Personnalisation de perruque" },
    minutes: 60,
    price: 60,
    note: {
      en: "Simple wig customizing, includes: bleaching the knots, plucking the hairline and a specific cut if requested",
      fr: "Personnalisation simple : décoloration des nœuds, plucking de la ligne, coupe si demandée.",
    },
    book: `${B}?step=additional-products&products=38adf96d-5946-4fc1-99b5-9cccd5d14427&type=service`,
  },
  {
    id: "wig-13x6",
    group: "womens",
    name: { en: "13 x 6 wig install", fr: "Pose perruque 13 × 6" },
    minutes: 180,
    price: 100,
    note: {
      en: "Wig install with a 13 x 6 lace front wig, includes basic styles only e.i flat ironing and curling, hair MUST be detangled prior to appointment or there will be a 40$ detangling fee",
      fr: "Pose lace 13 × 6, styles de base (fer et boucles). Cheveux démêlés avant le rendez-vous, sinon frais de 40 $.",
    },
    book: `${B}?step=additional-products&products=094ec103-9dde-40ef-bfb5-6d2de4ef99ca&type=service`,
  },
  {
    id: "wig-5x5",
    group: "womens",
    name: { en: "5 x 5 wig install", fr: "Pose perruque 5 × 5" },
    minutes: 180,
    price: 100,
    note: {
      en: "Wig install with 5 x 5 lace front wig, style of choice is included",
      fr: "Pose lace 5 × 5, style au choix inclus.",
    },
    book: `${B}?step=additional-products&products=b7dc4de7-28c0-468a-b729-97cdb31e127b&type=service`,
  },
  {
    id: "sewin-leaveout",
    group: "womens",
    name: { en: "Sew-in with leave-out", fr: "Sew-in avec leave-out" },
    minutes: 240,
    price: 100,
    note: {
      en: "Traditional sew-in with middle part leave-out, hair MUST be detangled prior to appointment or there will be a 40$ detangling fee",
      fr: "Sew-in classique, raie au milieu. Cheveux démêlés avant, sinon 40 $.",
    },
    book: `${B}?step=additional-products&products=0bd4bac9-6841-49fd-bdad-bf176902de29&type=service`,
  },
  {
    id: "flip-sewin",
    group: "womens",
    name: { en: "Flip-over sew-in", fr: "Sew-in flip-over" },
    minutes: 180,
    price: 100,
    note: {
      en: "Sew-in with minimal leave-out around the entire hairline, hair MUST be detangled prior to appointment or there will be a 40$ detangling fee",
      fr: "Sew-in avec leave-out minimal sur toute la ligne. Cheveux démêlés avant, sinon 40 $.",
    },
    book: `${B}?step=additional-products&products=9cbf6a23-91cf-4e00-8aff-103888180c35&type=service`,
  },
  {
    id: "sewin-closure",
    group: "womens",
    name: { en: "Sew-in with lace closure", fr: "Sew-in avec closure lace" },
    minutes: 180,
    price: 100,
    note: {
      en: "Traditional sew-in, with no leave out and a lace front closure, hair must be detangled prior to appointment or there will be a 40$ detangling fee",
      fr: "Sew-in sans leave-out, closure lace. Cheveux démêlés avant, sinon 40 $.",
    },
    book: `${B}?step=additional-products&products=74dfd9f9-831f-4e1e-bc5e-8967dc6b4e5d&type=service`,
  },
  {
    id: "half-feedin-sewin",
    group: "womens",
    name: { en: "Half feed-in, half sew-in", fr: "Moitié feed-in, moitié sew-in" },
    minutes: 240,
    price: 175,
    note: {
      en: "Feed-in braids in the front and Sew-in in the back for the perfect island look. All hair is included.",
      fr: "Feed-in devant, sew-in derrière. Cheveux inclus.",
    },
    book: `${B}?step=additional-products&products=b261d6ec-9926-43ab-aa97-504b8401fcf4&type=service`,
  },
  {
    id: "ponytail",
    group: "womens",
    name: { en: "Sleek ponytail", fr: "Queue de cheval lisse" },
    minutes: 180,
    price: 120,
    note: {
      en: "Super sleek ponytail. Hair will be blowdried, flat ironed and then put up securely in your ponytail style of choice",
      fr: "Queue de cheval lisse : séchage, fer, puis attache selon le style choisi.",
    },
    book: `${B}?step=additional-products&products=5ad732bb-b199-4964-a102-bdaa7cd4f405&type=service`,
  },
  {
    id: "single-braids",
    group: "mens-braids",
    name: { en: "Single Braids", fr: "Tresses simples" },
    minutes: 150,
    price: 80,
    note: { en: "Medium to large singular braids", fr: "Tresses individuelles moyennes à grandes" },
    book: `${B}?step=additional-products&products=6c7320b1-b200-4008-a5cb-8545dd321cce&type=service`,
  },
  {
    id: "twists",
    group: "mens-braids",
    name: { en: "Two strand twists", fr: "Twists deux brins" },
    minutes: 150,
    price: 70,
    note: {
      en: "Medium to large two strand twist with traditional box parting",
      fr: "Twists deux brins, parting box traditionnel.",
    },
    book: `${B}?step=additional-products&products=6da54f4b-e92d-4870-a19d-716bf1f8194a&type=service`,
  },
  {
    id: "retwist",
    group: "mens-braids",
    name: { en: "Retwist/Interlock", fr: "Retwist / interlock" },
    minutes: 180,
    price: 120,
    note: { en: "Loc retwist/interlock with style of choice", fr: "Retwist / interlock de locs, style au choix" },
    book: `${B}?step=additional-products&products=174d7206-8ae3-47d8-8637-d2e63d31b357&type=service`,
  },
  {
    id: "corn-4",
    group: "mens-braids",
    name: { en: "4 Cornrows", fr: "4 cornrows" },
    minutes: 120,
    price: 50,
    note: { en: "4 cornrows of your choice with no added extensions", fr: "4 cornrows au choix, sans extensions" },
    book: `${B}?step=additional-products&products=a65fb15d-bab5-4485-8a6e-f50a67bc79b3&type=service`,
  },
  {
    id: "corn-6",
    group: "mens-braids",
    name: { en: "6 cornrows", fr: "6 cornrows" },
    minutes: 120,
    price: 60,
    note: { en: "6 cornrows with style of your choice", fr: "6 cornrows, style au choix" },
    book: `${B}?step=additional-products&products=c016ec03-4965-4d1c-850e-98aee2b8a589&type=service`,
  },
  {
    id: "corn-8",
    group: "mens-braids",
    name: { en: "8 cornrows", fr: "8 cornrows" },
    minutes: 140,
    price: 70,
    note: { en: "8 cornrows with your style of choice", fr: "8 cornrows, style au choix" },
    book: `${B}?step=additional-products&products=4e25dfd8-a41f-4711-b35a-b81db34cbfd7&type=service`,
  },
  {
    id: "wash",
    group: "other",
    name: { en: "Wash", fr: "Shampooing" },
    minutes: 15,
    price: 10,
    book: `${B}?step=staff&products=3405805e-d4c4-45fa-a857-55f8990c19fb&type=service`,
  },
];

export const GROUPS: { id: Service["group"]; en: string; fr: string }[] = [
  { id: "cuts", en: "Haircuts", fr: "Coupes" },
  { id: "womens", en: "Women’s braided styles & other", fr: "Tresses et styles (femmes)" },
  { id: "mens-braids", en: "Men’s Braided Styles & Other", fr: "Tresses (hommes)" },
  { id: "other", en: "Other", fr: "Autre" },
];

export function formatMins(n: number, lang: "en" | "fr") {
  if (n >= 60 && n % 60 === 0) {
    const h = n / 60;
    return lang === "fr" ? `${h} h` : h === 1 ? "1 hr" : `${h} hrs`;
  }
  if (n > 60) {
    const h = Math.floor(n / 60);
    const m = n % 60;
    return lang === "fr" ? `${h} h ${m} min` : `${h} hr ${m} mins`;
  }
  return lang === "fr" ? `${n} min` : `${n} mins`;
}
