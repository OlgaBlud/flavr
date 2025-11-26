import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface WishlistPlace {
  id: number | string;
  name: string;
  image: any;
  rating?: number | null;
  reviews?: number;
  tags?: string[];
  friendsRating?: number | null;
}

interface WishlistStore {
  wishlist: WishlistPlace[];
  addToWishlist: (place: WishlistPlace) => void;
  removeFromWishlist: (placeId: number | string) => void;
  isInWishlist: (placeId: number | string) => boolean;
  toggleWishlist: (place: WishlistPlace) => void;
}

const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      wishlist: [],
      
      addToWishlist: (place) => {
        set((state) => ({
          wishlist: [...state.wishlist, place],
        }));
      },
      
      removeFromWishlist: (placeId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.id !== placeId),
        }));
      },
      
      isInWishlist: (placeId) => {
        return get().wishlist.some((item) => item.id === placeId);
      },
      
      toggleWishlist: (place) => {
        const isInList = get().isInWishlist(place.id);
        if (isInList) {
          get().removeFromWishlist(place.id);
        } else {
          get().addToWishlist(place);
        }
      },
    }),
    {
      name: "wishlist-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export default useWishlistStore;
