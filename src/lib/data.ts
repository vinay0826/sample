export type Sweet = {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  weightOptions: string[];
  image: string;
  category: 'Milk-based' | 'Dry Fruit' | 'Festival Specials' | 'Classic';
};

export const sweets: Sweet[] = [
  {
    id: 1,
    name: "Kaju Katli",
    slug: "kaju-katli",
    description: "A classic diamond-shaped sweet made from cashews, sugar, and ghee. A favorite for all occasions.",
    price: 850.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/kaju/600/400",
    category: "Dry Fruit",
  },
  {
    id: 2,
    name: "Motichoor Laddoo",
    slug: "motichoor-laddoo",
    description: "Tiny gram flour globules (boondi) fried in ghee, soaked in sugar syrup, and molded into delicious laddoos.",
    price: 480.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/laddoo/600/400",
    category: "Classic",
  },
  {
    id: 3,
    name: "Jalebi",
    slug: "jalebi",
    description: "Crispy, juicy, and coil-shaped, these are deep-fried and soaked in saffron-infused sugar syrup.",
    price: 420.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/jalebi/600/400",
    category: "Classic",
  },
  {
    id: 4,
    name: "Gulab Jamun",
    slug: "gulab-jamun",
    description: "Soft, spongy balls made of milk solids, deep-fried and soaked in a light, fragrant sugar syrup.",
    price: 520.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/gulab-jamun/600/400",
    category: "Milk-based",
  },
  {
    id: 5,
    name: "Rasgulla",
    slug: "rasgulla",
    description: "Spongy cottage cheese balls cooked in a light sugar syrup. A melt-in-your-mouth delicacy.",
    price: 500.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/rasgulla/600/400",
    category: "Milk-based",
  },
  {
    id: 6,
    name: "Milk Cake",
    slug: "milk-cake",
    description: "A rich, granular, and fudgy sweet made from solidified, sweetened milk. A true indulgence.",
    price: 650.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/milk-cake/600/400",
    category: "Milk-based",
  },
  {
    id: 7,
    name: "Gajar Ka Halwa",
    slug: "gajar-ka-halwa",
    description: "A warm, comforting pudding made from grated carrots, milk, sugar, and ghee, garnished with nuts.",
    price: 550.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/halwa/600/400",
    category: "Festival Specials",
  },
  {
    id: 8,
    name: "Pista Barfi",
    slug: "pista-barfi",
    description: "A delectable fudge made from pistachios, milk, and sugar, often decorated with silver leaf (vark).",
    price: 950.00,
    weightOptions: ["250g", "500g", "1kg"],
    image: "https://picsum.photos/seed/barfi/600/400",
    category: "Dry Fruit",
  },
   {
    id: 9,
    name: "Soan Papdi",
    slug: "soan-papdi",
    description: "A flaky, cube-shaped sweet that melts in your mouth. Made from gram flour, ghee, and sugar.",
    price: 450.00,
    weightOptions: ["250g", "500g"],
    image: "https://picsum.photos/seed/soan-papdi/600/400",
    category: "Classic",
  },
];

export const featuredSweets = sweets.filter(s => [1,2,3,4,7,8].includes(s.id));

export const testimonials = [
  {
    name: "Anjali Sharma",
    avatar: "https://picsum.photos/seed/avatar1/100/100",
    text: "The Kaju Katli was absolutely divine! Tasted just like the ones my grandmother used to make. Will definitely order again.",
  },
  {
    name: "Rohan Patel",
    avatar: "https://picsum.photos/seed/avatar2/100/100",
    text: "Super fast delivery and the Gulab Jamuns were so soft and fresh. Mithaai Delight is my new go-to for all festival sweets.",
  },
  {
    name: "Priya Singh",
    avatar: "https://picsum.photos/seed/avatar3/100/100",
    text: "I ordered a mix box for a family gathering and everyone loved it. The quality and packaging are top-notch. Highly recommended!",
  },
];
