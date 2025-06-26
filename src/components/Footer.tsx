export default function Footer() {
    return (
        <footer className="bg-[#1F232F] py-8">
            <div className="max-w-[1720px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-white text-sm italic font-medium leading-relaxed">
                {/* Левая часть */}
                <div className="max-w-[960px] leading-[1.11] text-base italic font-medium text-white">
                    <p>
                        Fight Club – initially a small group of people who wanted to hold
                        small tournaments for their own, the current organization has more
                        than 40 people. Our motto is – from abyssbots for abyssbots. Our
                        tournaments: Genshin Impact, Zenless Zone Zero, Honkai Star Rail,
                        Wuthering Waves – and more coming soon.
                    </p>
                    <p className="mt-5">
                        Fight Club is not affiliated with HoYoverse. <br />
                        Game content and materials are trademarks and copyrights of
                        HoYoverse.
                    </p>
                    <p className="mt-5">© Fight Club, 2025</p>
                </div>


                {/* Правая часть */}
                <div className="flex flex-col items-start md:items-end">
                    <p className="text-base leading-[0.61] text-white font-bold italic mb-4">
                        Our socials
                    </p>
                    <div className="flex gap-3">
                        <img src="/footer-icon/telegram.png" alt="Telegram" width={38} height={38} />
                        <img src="/footer-icon/twitch.png" alt="Twitch" width={38} height={38} />
                        <img src="/footer-icon/discord.png" alt="Discord" width={38} height={38} />
                        <img src="/footer-icon/youtube.png" alt="YouTube" width={38} height={38} />
                        <img src="/footer-icon/wtf.png" alt="Spotify" width={38} height={38} />
                    </div>
                </div>
            </div>
        </footer>
    );
}
