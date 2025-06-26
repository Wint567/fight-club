export default function ProfileSidebar() {
    return (
        <aside className="w-[184px] rounded flex flex-col gap-4">
            {/* Заголовок */}
            <h2 className="text-[32px] leading-[1.45] text-white font-black italic">Profile</h2>

            {/* Аватар */}
            <img
                src="/noProfImg.png"
                alt="Avatar"
                className="w-[180px] h-[180px] object-cover border border-white rounded"
            />

            {/* Имя */}
            <div>
                <p className="text-base leading-[1.45] font-black italic">NAME</p>
                <p className="text-base leading-[1.45] font-black italic">userlongname</p>
            </div>

            {/* Кнопка "My Accounts" */}
            <button className="bg-[#232735] text-white text-base leading-[1.45] font-bold italic py-5 w-full rounded-[10px] cursor-pointer
            hover:bg-[#111219] hover:border-[#232735] border-2 border-transparent transition">
                My Accounts
            </button>

            {/* Социальные сети */}
            <div className="w-full">
                <p className="text-base leading-[1.45] font-black italic pb-2">Connected socials</p>
                <div className="flex flex-col gap-2">
                    <button className="flex items-center gap-6 pl-6 bg-[#232735] text-white text-base leading-[1.45] font-bold italic py-5 w-full rounded-[10px] cursor-pointer
                    hover:bg-[#111219] hover:border-[#232735] border-2 border-transparent transition">
                        <img src="/profile-discord.png" className="w-7 h-7" />
                        Discord
                    </button>
                    <button className="flex items-center gap-6 pl-6 bg-[#232735] text-white text-base leading-[1.45] font-bold italic py-5 w-full rounded-[10px] cursor-pointer
                    hover:bg-[#111219] hover:border-[#232735] border-2 border-transparent transition">
                        <img src="/profile-telegram.png" className="w-7 h-7" />
                        Telegram
                    </button>
                </div>
            </div>

            {/* Постер + кнопка */}
            <div className="w-full flex flex-col gap-4">
                <img src="/applyCost.png" alt="apply" className="rounded w-full" />
                <button className="bg-[#232735] text-white text-base leading-[1.45] font-bold italic py-5 mb-10 w-full rounded-[10px] cursor-pointer
                hover:bg-[#111219] hover:border-[#232735] border-2 border-transparent transition">
                    Apply to add a cast
                </button>
            </div>
        </aside>
    );
}
