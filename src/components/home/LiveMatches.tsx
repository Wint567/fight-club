import React from "react";

type Match = {
    player1: string;
    player2: string;
    tournament: string;
};

const matches: Match[] = [
    {
        player1: "Playerlongname",
        player2: "Playerlongname",
        tournament: "Fight Club: Shiyu | Fast Cup III",
    },
    {
        player1: "Playerlongname",
        player2: "Playerlongname",
        tournament: "Fight Club: Shiyu | Fast Cup III",
    },
    {
        player1: "Playerlongname",
        player2: "Playerlongname",
        tournament: "Fight Club: Shiyu | Fast Cup III",
    },
];

export default function LiveMatches() {
    return (
        <section className="text-white">
            <h2 className="text-[16px] font-black italic mb-4 flex items-center gap-1 mt-13">
                <span className="text-[#DA3B3B] text-lg leading-none">•</span>
                Live matches
            </h2>

            <div className="flex items-center flex-col gap-2">
                {matches.map((match, i) => (
                    <div
                        key={i}
                        className="flex rounded-[10px]"
                        style={{
                            background: 'linear-gradient(90deg, #40181C 0%, #232735 100%)' 
                        }}
                    >
                        {/* LIVE badge */}
                        <div>
                            <img className="rounded-l-[10px]" src="/live.png" alt="live" />
                        </div>

                        {/* Main content */}
                        <div className="flex flex-col justify-center px-2 py-[10px]">
                            <p className="text-sm font-bold leading-none mb-3">
                                {match.player1} <span className="font-normal">VS</span> {match.player2}
                            </p>
                            <p className="text-sm text-white/50">{match.tournament}</p>
                        </div>

                        {/* Arrow */}
                        <div className="flex items-center bg-[#3A4468]/25 rounded-r-[10px] justify-center px-2">
                            <span className="text-white text-[14px]">→</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
