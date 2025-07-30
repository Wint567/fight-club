'use client'

import ProfileSidebar from "@/components/ProfileSidebar";
import { useProfileTabStore } from "@/store/useProfileTabStore";

import MyProfile from "@/components/profileTabs/MyProfile";
import MyPresets from "@/components/profileTabs/MyPresets";
import MyAccounts from "@/components/profileTabs/MyAccounts";
import MyGames from "@/components/profileTabs/MyGames";
import MyStatistics from "@/components/profileTabs/MyStatistics";
import Settings from "@/components/profileTabs/Settings";

export default function ProfilePage() {
    const { activeTab } = useProfileTabStore();

    return (
        <section className="w-full text-white">
            <div className="max-w-[1720px] mx-auto px-6 flex gap-6">
                <ProfileSidebar />

                <div className="flex-1 flex flex-col gap-10">
                    {activeTab === "My profile" && <MyProfile />}
                    {activeTab === "My presets" && <MyPresets />}
                    {activeTab === "My accounts" && <MyAccounts />}
                    {activeTab === "My games" && <MyGames />}
                    {activeTab === "My statistics" && <MyStatistics />}
                    {activeTab === "Settings" && <Settings />}
                </div>
            </div>
        </section>
    );
}
