import { useProfileTabStore, tabs } from "@/store/useProfileTabStore";

export default function ProfileSidebar() {
    const { activeTab, setActiveTab } = useProfileTabStore();

    return (
        <aside className="w-[184px] flex flex-col items-center gap-6">
            <h2 className="font-montserrat text-debug">
                Profile
            </h2>


            <img
                src="/noProfImg.png"
                alt="Avatar"
                className="w-[160px] h-[160px] object-cover rounded-xl"
            />

            <p className="text-white text-sm font-semibold">@Userlongname</p>

            <div className="flex flex-col gap-2 w-full">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`py-2 w-full rounded-[8px] text-sm font-semibold ${activeTab === tab
                                ? "bg-white text-black"
                                : "text-white/40 hover:text-white"
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <img src="/applyCost.png" alt="Apply" className="rounded-xl w-full" />
            <button className="bg-[#111219] text-white text-sm font-bold py-2 rounded-[8px] w-full">
                Apply to add a cost
            </button>
        </aside>
    );
}
