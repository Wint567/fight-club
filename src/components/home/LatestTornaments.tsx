import React from "react";

type Tournament = {
    title: string;
    prize: string;
    date: string;
    tags: string[];
};

const tournaments: Tournament[] = [
    {
        title: "Fight Club: Shiyu | Fast Cup III",
        prize: "100 000 руб.",
        date: "28.06.2025~30.09.2025",
        tags: ["Upcoming", "Partner"],
    },
    {
        title: "Fight Club: Shiyu | Fast Cup III",
        prize: "100 000 руб.",
        date: "28.06.2025~30.09.2025",
        tags: ["Upcoming", "Partner"],
    },
    {
        title: "Fight Club: Shiyu | Fast Cup III",
        prize: "100 000 руб.",
        date: "28.06.2025~30.09.2025",
        tags: ["Upcoming", "Partner"],
    },
    {
        title: "Fight Club: Shiyu | Fast Cup III",
        prize: "100 000 руб.",
        date: "28.06.2025~30.09.2025",
        tags: ["Upcoming", "Partner"],
    },
];

export default function LatestTournaments() {
    return (
        <section className="text-white">
            <h2 className="font-montserrat text-[16px] font-black italic mb-5">
                Latest Tournaments
            </h2>
            <div className="flex flex-col gap-2">
                {tournaments.map((tournament, index) => (
                    <div
                        key={index}
                        className="bg-[#1A1D2A] p-4 rounded-xl flex flex-col gap-2"
                    >
                        <h3 className="text-[16px] font-black">{tournament.title}</h3>
                        <div className="text-sm font-semibold flex items-center gap-1.5">
                            <img src="/icons/exclude.svg" alt="currency" />
                            {tournament.prize}
                        </div>
                        <p className="text-sm font-semibold text-white/50">{tournament.date}</p>

                        <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center gap-2">
                                {tournament.tags.map((tag: string, i: number) => {
                                    const isUpcoming = tag === "Upcoming";
                                    const bgClass = isUpcoming
                                        ? "bg-[#4579FF]/50"
                                        : "bg-white/15";
                                    return (
                                        <span
                                            key={i}
                                            className={`text-xs font-bold px-3 py-1 rounded-full ${bgClass} text-white`}
                                        >
                                            {tag}
                                        </span>
                                    );
                                })}
                            </div>
                            <button className="text-[12px] font-medium text-white px-[21px] h-[32px] rounded-[10px] bg-[#3A4468]/50 backdrop-blur cursor-pointer">
                                View
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
