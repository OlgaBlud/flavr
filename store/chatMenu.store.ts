import { create } from "zustand";

type Position = { x: number; y: number };
type ChatMenuStore = {
  isOpen: boolean;
  activeChatId: string | null;
  menuPosition: Position;
  open: (chatId: string, menuPosition: Position) => void;
  close: () => void;
};

export const useChatMenuStore = create<ChatMenuStore>((set) => ({
  isOpen: false,
  activeChatId: null,
  menuPosition: { x: 0, y: 0 },
  //   open: (chatId: string, pos: Position) => void;
  open: (chatId: string, position) =>
    set({
      isOpen: true,
      activeChatId: chatId,
      menuPosition: position,
    }),
  close: () =>
    set({
      isOpen: false,
      activeChatId: null,
      menuPosition: { x: 0, y: 0 },
    }),
}));
