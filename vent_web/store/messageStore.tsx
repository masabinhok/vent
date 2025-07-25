import { Message } from "@/types/types";
import { create } from "zustand";

interface MessageStore {
  message: Message | null
  setMessage: (message: Message) => void;
  clearMessage: () => void;
}

export const useMessage = create<MessageStore>()((set, get) => ({
  message: null,
  setMessage: (message) => {
    set({ message })
  },
  clearMessage: () => {
    set({ message: null })
  }
}));