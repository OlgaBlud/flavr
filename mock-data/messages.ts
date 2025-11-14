export interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  unreadCount: number;
}

export const mockChats: Chat[] = [
  {
    id: "1",
    name: "Ilona Matveeva",
    avatar: "https://i.pravatar.cc/150?img=1",
    lastMessage: "Привіт! Як справи?",
    lastMessageTime: "09:15",
    unreadCount: 2,
  },
  {
    id: "2",
    name: "Ivan Petrov",
    avatar: "https://i.pravatar.cc/150?img=2",
    lastMessage: "Завтра зустрічаємось?",
    lastMessageTime: "08:40",
    unreadCount: 0,
  },
  {
    id: "3",
    name: "Maria Kovalenko",
    avatar: "https://i.pravatar.cc/150?img=3",
    lastMessage: "Надішли файл, будь ласка",
    lastMessageTime: "Вчора",
    unreadCount: 1,
  },
  {
    id: "4",
    name: "Andriy Shevchenko",
    avatar: "https://i.pravatar.cc/150?img=4",
    lastMessage: "Готово, перевір",
    lastMessageTime: "Понеділок",
    unreadCount: 0,
  },
  {
    id: "5",
    name: "Sofia Ivanova",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "Дякую!",
    lastMessageTime: "Неділя",
    unreadCount: 0,
  },
  {
    id: "6",
    name: "Dmytro Koval",
    avatar: "https://i.pravatar.cc/150?img=6",
    lastMessage: "Чекаю на твій відгук",
    lastMessageTime: "Субота",
    unreadCount: 3,
  },
  {
    id: "7",
    name: "Olena Bondarenko",
    avatar: "https://i.pravatar.cc/150?img=7",
    lastMessage: "Добрий вечір!",
    lastMessageTime: "П’ятниця",
    unreadCount: 0,
  },
  {
    id: "8",
    name: "Viktor Melnyk",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Так, звісно",
    lastMessageTime: "Четвер",
    unreadCount: 0,
  },
  {
    id: "9",
    name: "Anna Kravets",
    avatar: "https://i.pravatar.cc/150?img=9",
    lastMessage: "Перевір пошту",
    lastMessageTime: "Середа",
    unreadCount: 1,
  },
  {
    id: "10",
    name: "Oleh Horbach",
    avatar: "https://i.pravatar.cc/150?img=10",
    lastMessage: "Все ок, дякую",
    lastMessageTime: "Вівторок",
    unreadCount: 0,
  },
  {
    id: "11",
    name: "Dmytro Koval",
    avatar: "https://i.pravatar.cc/150?img=6",
    lastMessage: "Чекаю на твій відгук",
    lastMessageTime: "Субота",
    unreadCount: 3,
  },
  {
    id: "12",
    name: "Olena Bondarenko",
    avatar: "https://i.pravatar.cc/150?img=7",
    lastMessage: "Добрий вечір!",
    lastMessageTime: "П’ятниця",
    unreadCount: 0,
  },
  {
    id: "13",
    name: "Viktor Melnyk",
    avatar: "https://i.pravatar.cc/150?img=8",
    lastMessage: "Так, звісно",
    lastMessageTime: "Четвер",
    unreadCount: 0,
  },
  {
    id: "14",
    name: "Anna Kravets",
    avatar: "https://i.pravatar.cc/150?img=9",
    lastMessage: "Перевір пошту",
    lastMessageTime: "Середа",
    unreadCount: 1,
  },
  {
    id: "15",
    name: "Oleh Horbach",
    avatar: "https://i.pravatar.cc/150?img=10",
    lastMessage: "Все ок, дякую",
    lastMessageTime: "Вівторок",
    unreadCount: 0,
  },
];
