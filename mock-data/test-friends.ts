export interface MockUser {
  id: string;
  name: string;
  avatar: string;
  followers: number;
  following: number;
  places: number;
}

export const mockUsers: MockUser[] = [
  {
    id: "friend1",
    name: "Adil",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    followers: 189,
    following: 142,
    places: 67,
  },
  {
    id: "friend2",
    name: "Marina",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    followers: 234,
    following: 156,
    places: 89,
  },
  {
    id: "friend3",
    name: "Dean",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    followers: 312,
    following: 198,
    places: 104,
  },
  {
    id: "friend4",
    name: "Max",
    avatar: "https://randomuser.me/api/portraits/men/36.jpg",
    followers: 278,
    following: 167,
    places: 92,
  },
];

export const getUserById = (id: string): MockUser | undefined => {
  return mockUsers.find((user) => user.id === id);
};
