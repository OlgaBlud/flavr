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

  // Restaurant ID 6
  {
    id: 12,
    restaurantId: 6,
    name: "Lisa Brown",
    photo: "https://randomuser.me/api/portraits/women/12.jpg",
    food: 4.6,
    service: 4.4,
    atmosphere: 4.5,
    review: "Amazing food and great service. Highly recommend!",
    isFriend: true,
    date: "2025-11-10",
  },
  {
    id: 13,
    restaurantId: 6,
    name: "Mike Davis",
    photo: "https://randomuser.me/api/portraits/men/33.jpg",
    food: 4.7,
    service: 4.6,
    atmosphere: 4.8,
    review: "One of my favorite places. Never disappoints!",
    date: "2025-11-08",
  },

  // Restaurant ID 7
  {
    id: 14,
    restaurantId: 7,
    name: "Rachel White",
    photo: "https://randomuser.me/api/portraits/women/25.jpg",
    food: 4.8,
    service: 4.7,
    atmosphere: 4.6,
    review: "Exceptional experience from start to finish!",
    isFriend: true,
    date: "2025-11-15",
  },
  {
    id: 15,
    restaurantId: 7,
    name: "Chris Martin",
    photo: "https://randomuser.me/api/portraits/men/18.jpg",
    food: 4.5,
    service: 4.4,
    atmosphere: 4.7,
    review: "Great ambiance and delicious food. Will come back!",
    date: "2025-11-12",
  },

  // Restaurant ID 8
  {
    id: 16,
    restaurantId: 8,
    name: "Nina Taylor",
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
    food: 4.9,
    service: 4.8,
    atmosphere: 4.9,
    review: "Absolutely stunning! Best meal I've had in months.",
    date: "2025-11-20",
  },
  {
    id: 17,
    restaurantId: 8,
    name: "Paul Anderson",
    photo: "https://randomuser.me/api/portraits/men/42.jpg",
    food: 4.6,
    service: 4.5,
    atmosphere: 4.7,
    review: "Solid choice for a nice dinner out.",
    isFriend: true,
    date: "2025-11-18",
  },

  // Restaurant ID 9
  {
    id: 18,
    restaurantId: 9,
    name: "Jessica Lee",
    photo: "https://randomuser.me/api/portraits/women/40.jpg",
    food: 4.7,
    service: 4.6,
    atmosphere: 4.5,
    review: "Fresh ingredients and creative dishes. Loved it!",
    date: "2025-11-16",
  },
  {
    id: 19,
    restaurantId: 9,
    name: "Ryan Clark",
    photo: "https://randomuser.me/api/portraits/men/28.jpg",
    food: 4.8,
    service: 4.7,
    atmosphere: 4.8,
    review: "Top-notch quality and service. Highly recommended!",
    isFriend: true,
    date: "2025-11-14",
  },

  // Restaurant ID 10
  {
    id: 20,
    restaurantId: 10,
    name: "Amanda Scott",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    food: 4.5,
    service: 4.4,
    atmosphere: 4.6,
    review: "Cozy atmosphere and tasty food. Perfect spot!",
    date: "2025-11-11",
  },
  {
    id: 21,
    restaurantId: 10,
    name: "Kevin Wright",
    photo: "https://randomuser.me/api/portraits/men/15.jpg",
    food: 4.6,
    service: 4.5,
    atmosphere: 4.7,
    review: "Great experience overall. Will definitely return.",
    isFriend: true,
    date: "2025-11-09",
  },

  // Restaurant ID 11
  {
    id: 22,
    restaurantId: 11,
    name: "Laura King",
    photo: "https://randomuser.me/api/portraits/women/35.jpg",
    food: 4.9,
    service: 4.8,
    atmosphere: 4.7,
    review: "Incredible flavors! Chef really knows what they're doing.",
    date: "2025-11-17",
  },
  {
    id: 23,
    restaurantId: 11,
    name: "Brian Hall",
    photo: "https://randomuser.me/api/portraits/men/50.jpg",
    food: 4.7,
    service: 4.6,
    atmosphere: 4.8,
    review: "Fantastic food and excellent service. A gem!",
    isFriend: true,
    date: "2025-11-13",
  },

  // Restaurant ID 12
  {
    id: 24,
    restaurantId: 12,
    name: "Olivia Young",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    food: 4.8,
    service: 4.7,
    atmosphere: 4.6,
    review: "Lovely dining experience. Food was exquisite!",
    date: "2025-11-19",
  },
  {
    id: 25,
    restaurantId: 12,
    name: "Daniel Moore",
    photo: "https://randomuser.me/api/portraits/men/38.jpg",
    food: 4.6,
    service: 4.5,
    atmosphere: 4.7,
    review: "Great place for a special occasion. Impressive!",
    isFriend: true,
    date: "2025-11-10",
  },

  // Restaurant ID 13
  {
    id: 26,
    restaurantId: 13,
    name: "Sophia Martinez",
    photo: "https://randomuser.me/api/portraits/women/20.jpg",
    food: 4.7,
    service: 4.6,
    atmosphere: 4.8,
    review: "Wonderful atmosphere and delicious dishes!",
    date: "2025-11-21",
  },
  {
    id: 27,
    restaurantId: 13,
    name: "James Walker",
    photo: "https://randomuser.me/api/portraits/men/24.jpg",
    food: 4.8,
    service: 4.7,
    atmosphere: 4.6,
    review: "Outstanding! Everything was perfect.",
    isFriend: true,
    date: "2025-11-14",
  },

  // Restaurant ID 14
  {
    id: 28,
    restaurantId: 14,
    name: "Emily Robinson",
    photo: "https://randomuser.me/api/portraits/women/28.jpg",
    food: 4.6,
    service: 4.5,
    atmosphere: 4.7,
    review: "Really enjoyed our meal here. Great vibes!",
    date: "2025-11-16",
  },
  {
    id: 29,
    restaurantId: 14,
    name: "Matthew Lewis",
    photo: "https://randomuser.me/api/portraits/men/36.jpg",
    food: 4.7,
    service: 4.6,
    atmosphere: 4.5,
    review: "Solid restaurant with great food options.",
    isFriend: true,
    date: "2025-11-11",
  },

  // Restaurant ID 15
  {
    id: 30,
    restaurantId: 15,
    name: "Isabella Garcia",
    photo: "https://randomuser.me/api/portraits/women/42.jpg",
    food: 4.9,
    service: 4.8,
    atmosphere: 4.9,
    review: "Absolutely phenomenal! Best restaurant in the area.",
    date: "2025-11-22",
  },
  {
    id: 31,
    restaurantId: 15,
    name: "Andrew Turner",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    food: 4.8,
    service: 4.7,
    atmosphere: 4.8,
    review: "Exceeded all expectations. Five stars!",
    isFriend: true,
    date: "2025-11-18",
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
