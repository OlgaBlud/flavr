/**
 * Restaurant interface - unified data structure for all restaurant data
 */
export interface Restaurant {
  id: number;
  name: string;
  image: string; // Universal image URL
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
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&q=80",
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
      latitude: 37.7749,
      longitude: -122.4194,
    },
    atmosphere: 4.7,
    service: 4.5,
    food: 4.9,
  },
  {
    id: 2,
    name: "Sushi Corner",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&q=80",
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
      latitude: 37.8044,
      longitude: -122.4708,
    },
    atmosphere: 4.5,
    service: 4.7,
    food: 4.8,
  },
  {
    id: 3,
    name: "Urban Grill",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
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
      latitude: 37.7599,
      longitude: -122.4148,
    },
  },
  {
    id: 4,
    name: "Thai Paradise",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80",
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
      latitude: 37.7955,
      longitude: -122.3937,
    },
  },
  {
    id: 5,
    name: "Green Leaf Bistro",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
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
      latitude: 37.7833,
      longitude: -122.4667,
    },
  },
  {
    id: 6,
    name: "Le Petit Bistro",
    image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=400&q=80",
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
      latitude: 37.7645,
      longitude: -122.4502,
    },
  },
  {
    id: 7,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&q=80",
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
      latitude: 37.7694,
      longitude: -122.4862,
    },
  },
  {
    id: 8,
    name: "Dragon Wok",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&q=80",
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
      latitude: 37.7945,
      longitude: -122.4078,
    },
  },
  {
    id: 9,
    name: "Mediterranean Pearl",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80",
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
      latitude: 37.8099,
      longitude: -122.4103,
    },
  },
  {
    id: 10,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
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
      latitude: 37.7558,
      longitude: -122.4389,
    },
  },
  {
    id: 11,
    name: "Pasta & More",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
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
      latitude: 37.8005,
      longitude: -122.4477,
    },
  },
  {
    id: 12,
    name: "The Seafood Shack",
    image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
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
      latitude: 37.8085,
      longitude: -122.4753,
    },
  },
  {
    id: 13,
    name: "Spice Route",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
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
      latitude: 37.7622,
      longitude: -122.4213,
    },
  },
  {
    id: 14,
    name: "BBQ Heaven",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&q=80",
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
      latitude: 37.7599,
      longitude: -122.3988,
    },
  },
  {
    id: 15,
    name: "Ramen House",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&q=80",
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
      latitude: 37.7844,
      longitude: -122.4315,
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
