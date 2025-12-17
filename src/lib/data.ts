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
    name: "Truffle & Parmesan Arancini",
    slug: "truffle-arancini",
    description: "Crispy risotto balls filled with black truffle and Parmesan cheese, served on a bed of saffron aioli.",
    price: 1600.00,
    courseOptions: ["Appetizer"],
    image: "https://picsum.photos/seed/arancini/600/400",
    category: "Appetizer",
  },
  {
    id: 2,
    name: "Edamame & Mint Velouté",
    slug: "edamame-veloute",
    description: "A silky smooth soup of young edamame and fresh mint, topped with a swirl of lemon-infused olive oil.",
    price: 1400.00,
    courseOptions: ["Appetizer"],
    image: "https://picsum.photos/seed/green-soup/600/400",
    category: "Appetizer",
  },
  {
    id: 3,
    name: "Wild Mushroom & Asparagus Risotto",
    slug: "mushroom-risotto",
    description: "Creamy Carnaroli risotto with foraged wild mushrooms, tender asparagus tips, and aged Parmesan.",
    price: 2800.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/mushroom-risotto/600/400",
    category: "Main Course",
  },
  {
    id: 4,
    name: "Pan-Seared Paneer Steak",
    slug: "paneer-steak",
    description: "Thick-cut paneer steak, marinated in herbs and spices, seared to perfection, served with a tomato reduction and quinoa.",
    price: 3200.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/paneer-steak/600/400",
    category: "Main Course",
  },
  {
    id: 5,
    name: "Beetroot & Goat Cheese Tart",
    slug: "beetroot-tart",
    description: "Delicate puff pastry tart with roasted beetroot, creamy goat cheese, walnuts, and a drizzle of honey.",
    price: 1800.00,
    courseOptions: ["Appetizer"],
    image: "https://picsum.photos/seed/beetroot-tart/600/400",
    category: "Appetizer",
  },
  {
    id: 6,
    name: "The Saffron Jewel",
    slug: "saffron-jewel",
    description: "Our signature dessert. A saffron and cardamom infused mousse, encased in a white chocolate sphere, revealed by a cascade of warm rose syrup.",
    price: 2200.00,
    courseOptions: ["Dessert"],
    image: "https://picsum.photos/seed/saffron-dessert/600/400",
    category: "Signature",
  },
  {
    id: 7,
    name: "Handmade Gnocchi al Pesto",
    slug: "gnocchi-pesto",
    description: "Pillowy potato gnocchi tossed in a vibrant basil pesto with sun-dried tomatoes and toasted pine nuts.",
    price: 2600.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/gnocchi/600/400",
    category: "Main Course",
  },
  {
    id: 8,
    name: "Golden Chocolate Lava Cake",
    slug: "chocolate-lava-cake",
    description: "A decadent dark chocolate lava cake with a molten center, dusted with edible gold and served with vanilla bean ice cream.",
    price: 1900.00,
    courseOptions: ["Dessert"],
    image: "https://picsum.photos/seed/chocolate-gold/600/400",
    category: "Dessert",
  },
   {
    id: 9,
    name: "Royal Vegetable Biryani",
    slug: "royal-biryani",
    description: "A fragrant medley of basmati rice, exotic vegetables, and aromatic spices, slow-cooked in a sealed pot (dum). A dish fit for royalty.",
    price: 3500.00,
    courseOptions: ["Main Course"],
    image: "https://picsum.photos/seed/royal-biryani/600/400",
    category: "Signature",
  },
];

export const featuredDishes = dishes.filter(s => [9, 4, 3, 6].includes(s.id));

export const testimonials = [
  {
    name: "Priya Singh",
    avatar: "https://picsum.photos/seed/woman-jewelry/100/100",
    text: "Dining at Elysian Bites is more than a meal; it's an event. The Royal Vegetable Biryani was a culinary masterpiece. The ambiance is pure opulence.",
  },
  {
    name: "Rohan Mehra",
    avatar: "https://picsum.photos/seed/man-tuxedo/100/100",
    text: "Unparalleled luxury and exquisite flavors. Every dish is a testament to their commitment to vegetarian fine dining. The Saffron Jewel was unforgettable.",
  },
  {
    name: "Anjali Desai",
    avatar: "https://picsum.photos/seed/woman-elegant/100/100",
    text: "A dazzling experience from start to finish. The attention to detail in both the food and the decor is astounding. It's the pinnacle of luxury dining in the city.",
  },
];
