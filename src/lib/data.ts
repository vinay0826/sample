export type Dish = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  courseOptions: string[];
  image: string;
  category: 'Antipasto' | 'Primo' | 'Secondo' | 'Dolce';
};

export const dishes: Dish[] = [
  {
    id: 1,
    name: "Carciofi alla Romana",
    slug: "carciofi-romana",
    description: "Tender artichokes slow-cooked in olive oil, garlic, and mint. A timeless Roman classic.",
    price: 1800.00,
    courseOptions: ["Antipasto"],
    image: "https://picsum.photos/seed/artichoke-roman/600/400",
    category: "Antipasto",
  },
  {
    id: 2,
    name: "Libum",
    slug: "libum-cake",
    description: "A sacred sacrificial cheesecake of the Roman era, made with ricotta, honey, and bay leaves.",
    price: 1500.00,
    courseOptions: ["Antipasto", "Dolce"],
    image: "https://picsum.photos/seed/roman-cheesecake/600/400",
    category: "Antipasto",
  },
  {
    id: 3,
    name: "Mushroom Parthia",
    slug: "mushroom-parthia",
    description: "A rich dish of wild mushrooms cooked in a sweet and savory wine sauce, inspired by Parthian flavors.",
    price: 2800.00,
    courseOptions: ["Primo"],
    image: "https://picsum.photos/seed/parthian-mushrooms/600/400",
    category: "Primo",
  },
  {
    id: 4,
    name: "Lentil and Chestnut Stew",
    slug: "lentil-chestnut-stew",
    description: "A hearty and rustic stew of lentils and chestnuts, seasoned with herbs from a Roman garden.",
    price: 3200.00,
    courseOptions: ["Secondo"],
    image: "https://picsum.photos/seed/roman-stew/600/400",
    category: "Secondo",
  },
  {
    id: 5,
    name: "Moretum",
    slug: "moretum-salad",
    description: "A peasant's delight; a fresh salad of herbs, garlic, and cheese, pounded together in a mortar.",
    price: 1600.00,
    courseOptions: ["Antipasto"],
    image: "https://picsum.photos/seed/herb-salad/600/400",
    category: "Antipasto",
  },
  {
    id: 6,
    name: "Globi",
    slug: "globi-dessert",
    description: "Sweet cheese fritters, fried to perfection and drizzled with golden honey and poppy seeds.",
    price: 1900.00,
    courseOptions: ["Dolce"],
    image: "https://picsum.photos/seed/honey-fritters/600/400",
    category: "Dolce",
  },
  {
    id: 7,
    name: "Cacio e Pepe",
    slug: "cacio-e-pepe",
    description: "The quintessential Roman pasta. Handmade tonnarelli with Pecorino Romano and black pepper.",
    price: 2600.00,
    courseOptions: ["Primo"],
    image: "https://picsum.photos/seed/cacio-pepe/600/400",
    category: "Primo",
  },
  {
    id: 8,
    name: "Pear Patina",
    slug: "pear-patina",
    description: "A delicate baked pear custard, spiced with pepper and sweetened with passum wine.",
    price: 2100.00,
    courseOptions: ["Dolce"],
    image: "https://picsum.photos/seed/roman-pear-dessert/600/400",
    category: "Dolce",
  },
   {
    id: 9,
    name: "Savillum",
    slug: "savillum-cake",
    description: "Another honey-sweetened cheesecake from antiquity, served warm with a dusting of poppy seeds.",
    price: 2000.00,
    courseOptions: ["Dolce"],
    image: "https://picsum.photos/seed/roman-honey-cake/600/400",
    category: "Dolce",
  },
];

export const featuredDishes = dishes.filter(s => [1, 7, 4, 6].includes(s.id));

export const testimonials = [
  {
    name: "Cassius Maximus",
    title: "Senator of Rome",
    text: "A banquet worthy of Caesar himself. The flavors transport you back to the heart of the Empire. Truly a divine experience.",
  },
  {
    name: "Livia Drusilla",
    title: "Patrician",
    text: "Elysian Bites does not merely serve food; they serve history on a platter. The Pear Patina was a revelation. I shall return with my entire household.",
  },
  {
    name: "Aurelius Victor",
    title: "Merchant of Ostia",
    text: "I have dined in Alexandria and Athens, yet this is where my heart remains. The artistry and authenticity are unparalleled. A triumph!",
  },
];
