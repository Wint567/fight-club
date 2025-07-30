import { create } from "zustand";

export const tabs = [
    "My profile",
    "My presets",
    "My accounts",
    "My games",
    "My statistics",
    "Settings",
] as const;

export type ProfileTab = (typeof tabs)[number];

type ProfileTabStore = {
    activeTab: ProfileTab;
    setActiveTab: (tab: ProfileTab) => void;
};

export const useProfileTabStore = create<ProfileTabStore>((set) => ({
    activeTab: "My profile",
    setActiveTab: (tab) => set({ activeTab: tab }),
}));
