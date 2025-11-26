// type Position = { x: number; y: number };

import { create } from "zustand";

type ChatMenuStore = {
  isOpen: boolean;
  activeChatId: string | null;
  //   position: Position;
  //   open: (chatId: string, pos: Position) => void;
  open: (chatId: string) => void;
  close: () => void;
};

export const useChatMenuStore = create<ChatMenuStore>((set) => ({
  isOpen: false,
  activeChatId: null,
  //   position: Position;
  //   open: (chatId: string, pos: Position) => void;
  open: (chatId: string) =>
    set({
      isOpen: true,
      activeChatId: chatId,
      //  position: pos,
    }),
  close: () =>
    set({
      isOpen: false,
      activeChatId: null,
      //  position: pos,
    }),
}));
