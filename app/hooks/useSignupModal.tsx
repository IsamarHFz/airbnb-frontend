import { create } from "zustand";


interface signupModalStore {
    isOpen: boolean;
    open: () => void;
    close: () => void;
}

const useSignupModal = create<signupModalStore>((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false })
}));

export default useSignupModal;