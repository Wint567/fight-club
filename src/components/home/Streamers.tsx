import React from "react";

type Streamer = {
  name: string;
  link: string;
  avatar?: string;
  followers: string;
  game: string;
};

const streamers: Streamer[] = [
  { name: "GL1n", link: "https://twitch.tv/Sereja_GL1n", followers: "14k", game: "Zenless Zone Zero" },
  { name: "recluzze", link: "https://twitch.tv/recluzze_", followers: "12.4k", game: "Zenless Zone Zero" },
  { name: "Shizo", link: "https://twitch.tv/sh1z01_", followers: "8.9k", game: "Zenless Zone Zero" },
  { name: "Dixzard", link: "https://twitch.tv/dixzard", followers: "17k", game: "Zenless Zone Zero" },
  { name: "noteflight", link: "https://twitch.tv/notefl1ght", followers: "3.1k", game: "Zenless Zone Zero" },
  { name: "Mistikal", link: "https://www.twitch.tv/mistikalc", followers: "25.6k", game: "Zenless Zone Zero" },
  { name: "Black_Show", link: "https://twitch.tv/black_show_yt", followers: "9.2k", game: "Zenless Zone Zero" },
  { name: "DaMikuro", link: "https://www.twitch.tv/damikuro01", followers: "7.7k", game: "Zenless Zone Zero" },
  { name: "Shad1w", link: "https://www.twitch.tv/shad1w27", followers: "11.3k", game: "Zenless Zone Zero" },
  { name: "Mortemorr", link: "https://www.twitch.tv/mortemorrr", followers: "5.4k", game: "Zenless Zone Zero" },
  { name: "LikeButterFly", link: "https://www.twitch.tv/1ikebutterfly", followers: "13.1k", game: "Zenless Zone Zero" },
  { name: "Energex", link: "https://www.twitch.tv/energex5", followers: "10k", game: "Zenless Zone Zero" },
  { name: "qsummercy", link: "https://www.twitch.tv/qsummercy", followers: "6.2k", game: "Zenless Zone Zero" },
  { name: "Alou", link: "https://www.twitch.tv/alou_xd", followers: "4.8k", game: "Zenless Zone Zero" },
  { name: "Nisav", link: "https://www.twitch.tv/nisav666", followers: "15k", game: "Zenless Zone Zero" },
  { name: "iXi", link: "https://www.twitch.tv/9ixi6", followers: "19.7k", game: "Zenless Zone Zero" },
  { name: "Ne_Nika", link: "https://www.twitch.tv/ne_nika_", followers: "2.3k", game: "Zenless Zone Zero" },
  { name: "Shyflyadka", link: "https://www.twitch.tv/shyflyadka", followers: "9.8k", game: "Zenless Zone Zero" },
];

export default function Streamers() {
  return (
    <section className="text-white pb-5">
      <h2 className="text-[16px] font-black italic mb-5 mt-5">Streamers</h2>

      <div className="bg-[#1A1D2A] rounded-xl flex flex-col max-h-[879px] gap-2 overflow-y-auto">
        {streamers.map((streamer, i) => {
          const bg = i % 2 === 0 ? "bg-[#232735]" : "bg-[#1A1D2A]";

          return (
            <a
              key={i}
              href={streamer.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center justify-between hover:opacity-90 transition px-8 py-1.5 ${bg}`}
            >
              <div className="flex items-center gap-3">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-1">
                    <img
                      src={streamer.avatar || "/noAvatar.png"}
                      alt={streamer.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-sm font-bold leading-tight">
                      {streamer.name}
                    </span>
                  </div>
                  <span className="text-sm text-white/60 leading-tight flex gap-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="12" viewBox="0 0 11 12" fill="none">
                      <circle cx="5.48173" cy="3.06377" r="2.35185" stroke="white" />
                      <path d="M1 11.2118C1 11.2118 1 7.1377 5.48148 7.1377C9.96296 7.1377 9.96296 11.2118 9.96296 11.2118" stroke="white" />
                    </svg>
                    {streamer.followers} &nbsp;•&nbsp; {streamer.game}
                  </span>
                </div>
              </div>
              <img src="/icons/arrow.svg" alt="arrow" />
            </a>
          );
        })}
      </div>
    </section>
  );
}
