import React from "react";

type Match = {
  tournament: string;
  stage: string;
  player1: string;
  player2: string;
};

const voteMatch: Match = {
  tournament: "Fight Club: Shiyu | Fast Cup III",
  stage: "Stage 5",
  player1: "Playerlongname",
  player2: "Playerlongname",
};

export default function VoteForWinners() {
  return (
    <section className="text-white">
      <h2 className="font-montserrat text-[16px] font-black italic mb-5 mt-5">Vote for winners</h2>

      <div className="bg-[#1A1D2A] py-5 px-1.5 rounded-xl flex flex-col gap-5">
        {/* Турнир и стадия */}
        <div className="text-center">
          <p className="text-sm font-bold">{voteMatch.tournament}</p>
          <p className="text-sm text-white/50">{voteMatch.stage}</p>
        </div>

        {/* Игроки-кнопки */}
        <div className="flex flex-col gap-2">
          <button className="bg-[#111219] w-full rounded-[10px] py-4 text-sm font-bold">
            {voteMatch.player1}
          </button>
          <button className="bg-[#111219] w-full rounded-[10px] py-4 text-sm font-bold">
            {voteMatch.player2}
          </button>
        </div>
      </div>
    </section>
  );
}
