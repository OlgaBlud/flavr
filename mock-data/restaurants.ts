import { images } from "@/constants";

/**
 * Restaurant interface - unified data structure for all restaurant data
 */
export interface Restaurant {
  id: number;
  name: string;
  image: any;
  rating: number;
  reviews: number;
  tags: string[];
  friendsRating?: number | null;
  // Additional details
  description?: string;
  address?: string;
  phone?: string;
  hours?: string;
  priceRange?: string;
  cuisine?: string;
  coordinates?: {
    latitude: number;
    longitude: number;
  };
  // Detailed ratings
  atmosphere?: number;
  service?: number;
  food?: number;
}

/**
 * Universal mock data for restaurants
 * Use this for: Map, List, Wishlist, Details, etc.
 */
export const restaurantsMock: Restaurant[] = [
  {
    id: 1,
    name: "La Bella Napoli",
    image: images.pp1,
    rating: 4.8,
    reviews: 543,
    tags: ["$$$", "Italian", "Pizza"],
    friendsRating: 4.6,
    description: "Authentic Italian cuisine with wood-fired pizzas",
    address: "123 Main St, Downtown",
    phone: "+1 234 567 8900",
    hours: "Open until 10:00 PM",
    priceRange: "$$$",
    cuisine: "Italian",
    coordinates: {
      latitude: 37.78825,
      longitude: -122.4324,
    },
    atmosphere: 4.7,
    service: 4.5,
    food: 4.9,
  },
  {
    id: 2,
    name: "Sushi Corner",
    image: images.pp2,
    rating: 4.6,
    reviews: 410,
    tags: ["$$$$", "Japanese", "Sushi"],
    friendsRating: 4.9,
    description: "Fresh sushi and authentic Japanese dishes",
    address: "456 Oak Ave, Midtown",
    phone: "+1 234 567 8901",
    hours: "Open until 11:00 PM",
    priceRange: "$$$$",
    cuisine: "Japanese",
    coordinates: {
      latitude: 37.78925,
      longitude: -122.4334,
    },
    atmosphere: 4.5,
    service: 4.7,
    food: 4.8,
  },
  {
    id: 3,
    name: "Urban Grill",
    image: images.pp1,
    rating: 4.5,
    reviews: 289,
    tags: ["$$$", "American", "Steakhouse"],
    friendsRating: null,
    description: "Premium steaks and craft cocktails",
    address: "789 Park Blvd, Central",
    phone: "+1 234 567 8902",
    hours: "5:00 PM - 12:00 AM",
    priceRange: "$$$",
    cuisine: "American",
    coordinates: {
      latitude: 37.79025,
      longitude: -122.4344,
    },
  },
  {
    id: 4,
    name: "Thai Paradise",
    image: images.pp2,
    rating: 4.7,
    reviews: 376,
    tags: ["$$", "Thai", "Spicy"],
    friendsRating: null,
    description: "Authentic Thai flavors and aromatic dishes",
    address: "321 River Rd, Eastside",
    phone: "+1 234 567 8903",
    hours: "11:30 AM - 9:30 PM",
    priceRange: "$$",
    cuisine: "Thai",
    coordinates: {
      latitude: 37.78725,
      longitude: -122.4314,
    },
  },
  {
    id: 5,
    name: "Green Leaf Bistro",
    image: images.pp1,
    rating: 4.9,
    reviews: 623,
    tags: ["$$", "Vegan", "Healthy"],
    friendsRating: 4.8,
    description: "Plant-based cuisine with organic ingredients",
    address: "555 Garden St, Westside",
    phone: "+1 234 567 8904",
    hours: "10:00 AM - 9:00 PM",
    priceRange: "$$",
    cuisine: "Vegan",
    coordinates: {
      latitude: 37.78625,
      longitude: -122.4304,
    },
  },
  {
    id: 6,
    name: "Le Petit Bistro",
    image: images.pp2,
    rating: 4.7,
    reviews: 892,
    tags: ["$$$$", "French", "Fine Dining"],
    friendsRating: 4.5,
    description: "Classic French cuisine in elegant setting",
    address: "777 Elm St, Downtown",
    phone: "+1 234 567 8905",
    hours: "6:00 PM - 11:00 PM",
    priceRange: "$$$$",
    cuisine: "French",
    coordinates: {
      latitude: 37.78525,
      longitude: -122.4294,
    },
  },
  {
    id: 7,
    name: "Taco Fiesta",
    image: images.pp1,
    rating: 4.4,
    reviews: 567,
    tags: ["$", "Mexican", "Casual"],
    friendsRating: 4.7,
    description: "Authentic Mexican tacos and burritos",
    address: "888 Mission St, South",
    phone: "+1 234 567 8906",
    hours: "11:00 AM - 10:00 PM",
    priceRange: "$",
    cuisine: "Mexican",
    coordinates: {
      latitude: 37.78425,
      longitude: -122.4284,
    },
  },
  {
    id: 8,
    name: "Dragon Wok",
    image: images.pp2,
    rating: 4.6,
    reviews: 734,
    tags: ["$$", "Chinese", "Dim Sum"],
    friendsRating: null,
    description: "Traditional Chinese dishes and dim sum",
    address: "999 Bay St, Chinatown",
    phone: "+1 234 567 8907",
    hours: "11:00 AM - 10:30 PM",
    priceRange: "$$",
    cuisine: "Chinese",
    coordinates: {
      latitude: 37.79125,
      longitude: -122.4354,
    },
  },
  {
    id: 9,
    name: "Mediterranean Pearl",
    image: images.pp1,
    rating: 4.8,
    reviews: 445,
    tags: ["$$$", "Mediterranean", "Seafood"],
    friendsRating: 4.9,
    description: "Fresh Mediterranean seafood specialties",
    address: "111 Harbor Dr, Marina",
    phone: "+1 234 567 8908",
    hours: "12:00 PM - 11:00 PM",
    priceRange: "$$$",
    cuisine: "Mediterranean",
    coordinates: {
      latitude: 37.79225,
      longitude: -122.4364,
    },
  },
  {
    id: 10,
    name: "Burger Palace",
    image: images.pp2,
    rating: 4.3,
    reviews: 1234,
    tags: ["$", "American", "Burgers"],
    friendsRating: null,
    description: "Gourmet burgers and craft beers",
    address: "222 Broadway, Theater District",
    phone: "+1 234 567 8909",
    hours: "11:00 AM - 12:00 AM",
    priceRange: "$",
    cuisine: "American",
    coordinates: {
      latitude: 37.78325,
      longitude: -122.4274,
    },
  },
  {
    id: 11,
    name: "Pasta & More",
    image: images.pp1,
    rating: 4.7,
    reviews: 389,
    tags: ["$$", "Italian", "Pasta"],
    friendsRating: 4.6,
    description: "Homemade pasta and Italian classics",
    address: "333 Columbus Ave, North Beach",
    phone: "+1 234 567 8910",
    hours: "12:00 PM - 10:00 PM",
    priceRange: "$$",
    cuisine: "Italian",
    coordinates: {
      latitude: 37.79325,
      longitude: -122.4374,
    },
  },
  {
    id: 12,
    name: "The Seafood Shack",
    image: images.pp2,
    rating: 4.5,
    reviews: 678,
    tags: ["$$$", "Seafood", "Casual"],
    friendsRating: 4.4,
    description: "Fresh catch daily and seafood platters",
    address: "444 Fisherman's Wharf",
    phone: "+1 234 567 8911",
    hours: "11:30 AM - 9:30 PM",
    priceRange: "$$$",
    cuisine: "Seafood",
    coordinates: {
      latitude: 37.79425,
      longitude: -122.4384,
    },
  },
  {
    id: 13,
    name: "Spice Route",
    image: images.pp1,
    rating: 4.6,
    reviews: 512,
    tags: ["$$", "Indian", "Curry"],
    friendsRating: null,
    description: "Authentic Indian curries and tandoori",
    address: "555 Valencia St, Mission",
    phone: "+1 234 567 8912",
    hours: "11:00 AM - 10:00 PM",
    priceRange: "$$",
    cuisine: "Indian",
    coordinates: {
      latitude: 37.78225,
      longitude: -122.4264,
    },
  },
  {
    id: 14,
    name: "BBQ Heaven",
    image: images.pp2,
    rating: 4.8,
    reviews: 923,
    tags: ["$$", "BBQ", "American"],
    friendsRating: 4.7,
    description: "Slow-smoked meats and Southern sides",
    address: "666 Potrero Ave, Potrero Hill",
    phone: "+1 234 567 8913",
    hours: "12:00 PM - 10:00 PM",
    priceRange: "$$",
    cuisine: "American",
    coordinates: {
      latitude: 37.78125,
      longitude: -122.4254,
    },
  },
  {
    id: 15,
    name: "Ramen House",
    image: images.pp1,
    rating: 4.7,
    reviews: 845,
    tags: ["$$", "Japanese", "Ramen"],
    friendsRating: 4.8,
    description: "Authentic Japanese ramen and appetizers",
    address: "777 Geary St, Japantown",
    phone: "+1 234 567 8914",
    hours: "11:30 AM - 10:30 PM",
    priceRange: "$$",
    cuisine: "Japanese",
    coordinates: {
      latitude: 37.79525,
      longitude: -122.4394,
    },
  },
];

// Helper function to get restaurant by ID
export const getRestaurantById = (id: number): Restaurant | undefined => {
  return restaurantsMock.find((restaurant) => restaurant.id === id);
};

// Helper function to get restaurants by cuisine
export const getRestaurantsByCuisine = (cuisine: string): Restaurant[] => {
  return restaurantsMock.filter((restaurant) => restaurant.cuisine === cuisine);
};

// For backward compatibility - export as popularPlacesMock
export const popularPlacesMock = restaurantsMock;
