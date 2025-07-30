'use client';

export default function HeroBanner() {
    return (
        <section
            className="w-full bg-[url('/HeroBanner.png')] bg-no-repeat flex justify-end"
        >
            <div className="max-w-[640px] flex flex-col items-end">
                <h1 className="text-white text-[65px] font-[900] leading-[0.86] text-end mb-17">
                    Join Tournaments<br />
                    Where <span className="text-[#30A2FF]">Skill Is the Only Thing That Matters.</span>
                </h1>


                <div className="flex flex-wrap gap-2 w-[430px] font-[500] justify-end mb-6">
                    {[
                        'FC Tournaments',
                        'Game History',
                        'Drafts',
                        'News',
                        'Announcements',
                        'Stats',
                        'Streamers',
                        'Ratings',
                    ].map((tag) => (
                        <span
                            key={tag}
                            className="px-3.5 py-1 bg-[#ADADAD21] text-white text-[14px] rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <button className="font-montserrat px-[21px] py-[10px] bg-white font-[900] italic text-[16px] leading-[1.45] tracking-[0] mb-6 text-black rounded-[10px] flex items-center gap-[8px] hover:bg-gray-200 transition cursor-pointer">
                    Start playing
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="20"
                        viewBox="0 0 19 20"
                        fill="none"
                    >
                        <path
                            d="M17.3559 8.25199C18.7268 9.01416 18.7268 10.9858 17.3559 11.748L3.22184 19.6061C1.88877 20.3472 0.25 19.3833 0.25 17.8581V2.14192C0.25 0.616674 1.88876 -0.347232 3.22184 0.393912L17.3559 8.25199Z"
                            fill="black"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
}
