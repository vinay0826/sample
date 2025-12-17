export type Dish = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  courseOptions: string[];
  image: string;
  category: 'Appetizer' | 'Main Course' | 'Dessert' | 'Signature';
};

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Seared Scallops",
    slug: "seared-scallops",
    description: "Perfectly seared scallops served with a saffron risotto, asparagus tips, and a lemon-butter emulsion.",
    price: 2800.00,
    courseOptions: ["Appetizer"],
    image: "https://picsum.photos/seed/scallops/600/400",
    category: "Appetizer",
  },
  {
    id: 2,
    name: "Wagyu Beef Filet",
    slug: "wagyu-beef-filet",
    description: "A5 Wagyu filet mignon, pan-seared to perfection, accompanied by truffle-infused potato purée and a red wine reduction.",
    price: 7500.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/wagyu-steak/600/400",
    category: "Main Course",
  },
  {
    id: 3,
    name: "Lobster Thermidor",
    slug: "lobster-thermidor",
    description: "A classic French dish of creamy lobster meat stuffed back into the shell, gratinated with Parmesan cheese.",
    price: 5200.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/lobster/600/400",
    category: "Main Course",
  },
  {
    id: 4,
    name: "Deconstructed Tiramisu",
    slug: "deconstructed-tiramisu",
    description: "An artistic take on the classic. Espresso-soaked ladyfingers, mascarpone cream, and cocoa powder presented in a modern form.",
    price: 1900.00,
    courseOptions: ["Dessert"],
    image: "https://picsum.photos/seed/tiramisu-art/600/400",
    category: "Dessert",
  },
  {
    id: 5,
    name: "Burrata Caprese",
    slug: "burrata-caprese",
    description: "Creamy burrata from Puglia, served with heirloom tomatoes, fresh basil, and a drizzle of aged balsamic glaze.",
    price: 2100.00,
    courseOptions: ["Appetizer"],
    image: "https://picsum.photos/seed/burrata-salad/600/400",
    category: "Appetizer",
  },
  {
    id: 6,
    name: "The Golden Sphere",
    slug: "golden-sphere",
    description: "Our signature dessert. A delicate white chocolate sphere melted tableside with warm caramel sauce to reveal a passion fruit mousse.",
    price: 2500.00,
    courseOptions: ["Dessert"],
    image: "https://picsum.photos/seed/gold-dessert/600/400",
    category: "Signature",
  },
  {
    id: 7,
    name: "Duck Confit",
    slug: "duck-confit",
    description: "Slow-cooked duck leg with a crispy skin, served on a bed of puy lentils with a cherry and port wine sauce.",
    price: 4800.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/duck-dish/600/400",
    category: "Main Course",
  },
  {
    id: 8,
    name: "Mushroom Vol-au-Vent",
    slug: "mushroom-vol-au-vent",
    description: "A light and airy puff pastry case filled with a creamy ragout of wild forest mushrooms and herbs.",
    price: 2400.00,
    courseOptions: ["Appetizer"],
    image: "https://picsum.photos/seed/pastry-dish/600/400",
    category: "Appetizer",
  },
   {
    id: 9,
    name: "Elysian Risotto",
    slug: "elysian-risotto",
    description: "Creamy Arborio risotto with white truffle, Parmesan, and a hint of fresh chives. A true taste of luxury.",
    price: 3200.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/luxury-risotto/600/400",
    category: "Signature",
  },
];

export const featuredDishes = dishes.filter(s => [1, 2, 3, 6, 7, 9].includes(s.id));

export const testimonials = [
  {
    name: "Aarav Sharma",
    avatar: "https://picsum.photos/seed/man-suit/100/100",
    text: "An absolutely transcendent dining experience. The Wagyu filet was cooked to perfection. Elysian Bites sets the standard for fine dining.",
  },
  {
    name: "Kiara Verma",
    avatar: "https://picsum.photos/seed/elegant-woman/100/100",
    text: "From the ambiance to the service, everything was impeccable. The Golden Sphere dessert was not just food, it was a work of art.",
  },
  {
    name: "Rohan Kapoor",
    avatar: "https://picsum.photos/seed/dapper-man/100/100",
    text: "I hosted a business dinner here and my clients were thoroughly impressed. The attention to detail is remarkable. Highly recommended.",
  },
];
