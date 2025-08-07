import React from "react";

const socials = [
  { name: "Telegram", icon: "/footer-icon/telegram.png", link: "#" },
  { name: "Twitch", icon: "/footer-icon/twitch.png", link: "#" },
  { name: "Youtube", icon: "/footer-icon/youtube.png", link: "#" },
  { name: "Discord", icon: "/footer-icon/discord.png", link: "#" },
];

export default function FollowUs() {
  return (
    <section className="text-white">
      <h2 className="text-[16px] font-montserrat font-black italic mb-5 mt-5">Follow us</h2>

      <div className="bg-[#1A1D2A] p-4 rounded-[10px] flex flex-col gap-7">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center font-bold text-[14px] justify-between hover:opacity-90 transition"
          >
            <div className="flex items-center gap-3">
              <img
                src={social.icon}
                alt={social.name}
                className="w-6 h-6"
              />
              <span className="text-sm font-bold">{social.name}</span>
            </div>
            <img src="/icons/arrow.svg" alt="arrow" />
          </a>
        ))}
      </div>
    </section>
  );
}
