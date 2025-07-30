'use client';

interface Player {
    name: string;
    points: number;
}

const players: Player[] = [
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
    { name: 'Playerlongname', points: 1200 },
];

export default function RatingTable() {
    const left = players.slice(0, 5);
    const right = players.slice(5, 10);

    return (
        <section className="text-white mb-5">
            <h2 className="font-montserrat font-bold italic mb-5">Rating</h2>

            <div className="bg-[#1A1D2A] rounded-xl px-4 py-7">
                {/* Заголовки колонок */}
                <div className="grid grid-cols-2 gap-4 text-white/60 text-sm mb-4">
                    <div className="flex justify-between px-10">
                        <div>
                            <span>#</span>
                            <span className="ml-8">Name</span>
                        </div>
                        <span>Points</span>
                    </div>
                    <div className="flex justify-between px-10">
                        <div>
                            <span>#</span>
                            <span className="ml-8">Name</span>
                        </div>
                        <span>Points</span>
                    </div>
                </div>

                {/* Игроки */}
                <div className="grid grid-cols-2 gap-4">
                    <ul className="flex flex-col gap-2">
                        {left.map((player, index) => (
                            <li
                                key={index}
                                className="bg-[#111219] rounded-lg px-10 py-2 flex items-center justify-between text-sm font-bold"
                            >
                                <div>
                                    <span>{index + 1}</span>
                                    <span className="ml-8 truncate">{player.name}</span>
                                </div>
                                <span>{player.points}</span>
                            </li>
                        ))}
                    </ul>

                    <ul className="flex flex-col gap-2">
                        {right.map((player, index) => (
                            <li
                                key={index + 5}
                                className="bg-[#111219] rounded-lg px-10 py-2 flex items-center justify-between text-sm font-bold"
                            >
                                <div>
                                    <span>{index + 6}</span>
                                    <span className="ml-8 truncate">{player.name}</span>
                                </div>
                                <span>{player.points}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
