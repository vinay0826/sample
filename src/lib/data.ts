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
    description: "Roman-style artichokes.",
    price: 1800,
    courseOptions: ["Antipasto"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    category: "Antipasto",
  },
  {
    id: 2,
    name: "Libum",
    slug: "libum-cake",
    description: "Ancient cheesecake.",
    price: 1500,
    courseOptions: ["Antipasto", "Dolce"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80",
    category: "Antipasto",
  },
  {
    id: 3,
    name: "Mushroom Parthia",
    slug: "mushroom-parthia",
    description: "Mushroom dish.",
    price: 2800,
    courseOptions: ["Primo"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
    category: "Primo",
  },
  {
    id: 4,
    name: "Lentil and Chestnut Stew",
    slug: "lentil-chestnut-stew",
    description: "Hearty lentil stew.",
    price: 3200,
    courseOptions: ["Secondo"],
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=900&q=80",
    category: "Secondo",
  },
  {
    id: 5,
    name: "Moretum",
    slug: "moretum-salad",
    description: "Herb and cheese spread.",
    price: 1600,
    courseOptions: ["Antipasto"],
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    category: "Antipasto",
  },
  {
    id: 6,
    name: "Globi",
    slug: "globi-dessert",
    description: "Fried dessert with honey.",
    price: 1900,
    courseOptions: ["Dolce"],
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80",
    category: "Dolce",
  },
  {
    id: 7,
    name: "Cacio e Pepe",
    slug: "cacio-e-pepe",
    description: "Classic Roman pasta.",
    price: 2600,
    courseOptions: ["Primo"],
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=900&q=80",
    category: "Primo",
  },
  {
    id: 8,
    name: "Pear Patina",
    slug: "pear-patina",
    description: "Pear dessert.",
    price: 2100,
    courseOptions: ["Dolce"],
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=900&q=80",
    category: "Dolce",
  },
  {
    id: 9,
    name: "Savillum",
    slug: "savillum-cake",
    description: "Honey cheesecake.",
    price: 2000,
    courseOptions: ["Dolce"],
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=80",
    category: "Dolce",
  },
];

export const featuredDishes = dishes.filter(d =>
  [1, 7, 4, 6].includes(d.id)
);


export const testimonials = [
  {
    name: "Cassius Maximus",
    title: "Senator of Rome",
    text: "A banquet worthy of Caesar himself. The flavors transport you back to the heart of the Empire.",
  },
  {
    name: "Livia Drusilla",
    title: "Patrician",
    text: "They do not serve food; they serve history. The Pear Patina was unforgettable.",
  },
  {
    name: "Aurelius Victor",
    title: "Merchant of Ostia",
    text: "I have dined across the Mediterranean—this is where authenticity lives.",
  },
];
