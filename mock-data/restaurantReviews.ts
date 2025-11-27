export interface Review {
  id: number;
  restaurantId: number;
  name: string;
  photo: string;
  food: number;
  service: number;
  atmosphere: number;
  review: string;
  isFriend?: boolean;
  date?: string;
}

// All reviews for all restaurants
export const allReviewsMock: Review[] = [
  // La Bella Napoli (restaurantId: 1)
  {
    id: 1,
    restaurantId: 1,
    name: "Anna Smith",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    food: 4.8,
    service: 4.2,
    atmosphere: 4.6,
    review:
      "The food was absolutely delicious! The pasta was perfectly cooked and the staff were friendly. Authentic Italian experience.",
    isFriend: true,
    date: "2025-11-20",
  },
  {
    id: 2,
    restaurantId: 1,
    name: "John Carter",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    food: 5.0,
    service: 4.9,
    atmosphere: 4.7,
    review:
      "Excellent experience! Service was top-notch and the pizza was incredible. The tiramisu is a must-try!",
    date: "2025-11-18",
  },
  {
    id: 3,
    restaurantId: 1,
    name: "Maria Lopez",
    photo: "https://randomuser.me/api/portraits/women/32.jpg",
    food: 4.5,
    service: 4.0,
    atmosphere: 4.8,
    review:
      "Beautiful Italian restaurant with great atmosphere. The wine selection is impressive.",
    isFriend: true,
    date: "2025-11-15",
  },

  // Sushi Corner (restaurantId: 2)
  {
    id: 4,
    restaurantId: 2,
    name: "David Kim",
    photo: "https://randomuser.me/api/portraits/men/21.jpg",
    food: 4.9,
    service: 4.7,
    atmosphere: 4.5,
    review:
      "Best sushi in town! Fresh fish, creative rolls, and excellent presentation. The chef's special is amazing.",
    date: "2025-11-22",
  },
  {
    id: 5,
    restaurantId: 2,
    name: "Sophie Miller",
    photo: "https://randomuser.me/api/portraits/women/14.jpg",
    food: 4.7,
    service: 4.5,
    atmosphere: 4.6,
    review:
      "Great spot for sushi lovers! Everything from the food to the service was on point. Will definitely come back.",
    isFriend: true,
    date: "2025-11-19",
  },

  // Urban Grill (restaurantId: 3)
  {
    id: 6,
    restaurantId: 3,
    name: "Alex Johnson",
    photo: "https://randomuser.me/api/portraits/men/9.jpg",
    food: 4.5,
    service: 4.3,
    atmosphere: 4.7,
    review:
      "Perfect steakhouse! The ribeye was cooked to perfection. Great selection of craft beers too.",
    date: "2025-11-21",
  },
  {
    id: 7,
    restaurantId: 3,
    name: "Emma Wilson",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    food: 4.8,
    service: 4.6,
    atmosphere: 4.5,
    review:
      "Amazing burgers and steaks! The atmosphere is very cozy and the staff is super friendly.",
    isFriend: true,
    date: "2025-11-17",
  },

  // Thai Paradise (restaurantId: 4)
  {
    id: 8,
    restaurantId: 4,
    name: "Michael Chen",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    food: 4.6,
    service: 4.4,
    atmosphere: 4.8,
    review:
      "Authentic Thai food with amazing flavors! The green curry is exceptional. Beautiful decor too.",
    date: "2025-11-16",
  },
  {
    id: 9,
    restaurantId: 4,
    name: "Lisa Anderson",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    food: 4.7,
    service: 4.5,
    atmosphere: 4.6,
    review:
      "Love this place! The pad thai is incredible and the service is always excellent.",
    isFriend: true,
    date: "2025-11-14",
  },

  // Green Leaf Bistro (restaurantId: 5)
  {
    id: 10,
    restaurantId: 5,
    name: "Sarah Green",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    food: 4.9,
    service: 4.8,
    atmosphere: 4.7,
    review:
      "Best vegan restaurant! Creative dishes that even meat-lovers will enjoy. The beyond burger is mind-blowing.",
    isFriend: true,
    date: "2025-11-23",
  },
  {
    id: 11,
    restaurantId: 5,
    name: "Tom Harris",
    photo: "https://randomuser.me/api/portraits/men/55.jpg",
    food: 4.5,
    service: 4.3,
    atmosphere: 4.6,
    review:
      "Great healthy options! The smoothie bowls are delicious and the atmosphere is very relaxing.",
    date: "2025-11-12",
  },
];

// Helper functions
export const getReviewsByRestaurantId = (restaurantId: number): Review[] => {
  return allReviewsMock.filter((review) => review.restaurantId === restaurantId);
};

export const getFriendsReviews = (restaurantId: number): Review[] => {
  return allReviewsMock.filter(
    (review) => review.restaurantId === restaurantId && review.isFriend
  );
};

export const getAllReviews = (restaurantId: number): Review[] => {
  return allReviewsMock.filter(
    (review) => review.restaurantId === restaurantId && !review.isFriend
  );
};

// For backward compatibility
export const reviewsMock = allReviewsMock;
