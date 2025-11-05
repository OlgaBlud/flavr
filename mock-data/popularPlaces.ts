import { images } from "@/constants";

export const popularPlaces = [
  {
    id: 1,
    name: "Mario’s Pizza",
    image: images.pp1,
    tags: ["$$$", "Italian", "Pizza"],
    rating: 4.8,
    reviews: 543,
  },
  {
    id: 2,
    name: "Dolce Vita Café",
    image: images.pp2,
    tags: ["$$", "Desserts", "Coffee"],
    rating: 4.7,
    reviews: 410,
  },
  {
    id: 3,
    name: "Green Leaf",
    image: images.pp1,
    tags: ["Vegan friendly", "Healthy", "$$"],
    rating: 4.9,
    reviews: 289,
  },
  {
    id: 4,
    name: "Sushi World",
    image: images.pp2,
    tags: ["Japanese", "$$$", "Seafood"],
    rating: 4.6,
    reviews: 376,
  },
  {
    id: 5,
    name: "Burger Hub",
    image: images.pp1,
    tags: ["$$", "American", "Fast Food"],
    rating: 4.5,
    reviews: 623,
  },
];

export const popularPlacesMock = [
  {
    id: 1,
    name: "La Bella Napoli",
    image: images.pp1,
    rating: 4.8,
    reviews: 543,
    tags: ["$$", "Italian", "Pizza", "Desserts"],
    liked: true,
  },
  {
    id: 2,
    name: "Sushi Corner",
    image: images.pp2,
    rating: 4.6,
    reviews: 321,
    tags: ["$$$", "Japanese", "Sushi"],
    liked: false,
  },
  {
    id: 3,
    name: "Coffee Stories",
    image: images.pp1,
    rating: 4.9,
    reviews: 812,
    tags: ["$", "Cafe", "Desserts"],
    liked: false,
  },
  {
    id: 4,
    name: "Vegan Planet",
    image: images.pp2,
    rating: 4.7,
    reviews: 212,
    tags: ["$$", "Healthy", "Vegan"],
    liked: true,
  },
  {
    id: 5,
    name: "Urban Grill",
    image: images.pp1,
    rating: null, // ❌ немає рейтингу → покаже "/"
    reviews: 0,
    tags: [], // ❌ немає тегів → не рендеряться
    liked: false,
  },
];
