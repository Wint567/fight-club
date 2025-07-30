'use client';

interface NewsCardProps {
    date: string;
    tags: string[];
    title: string;
    preview: string;
    image: string;
}

export default function NewsCard({ date, tags, title, preview, image }: NewsCardProps) {
    return (
        <div className="bg-[#1A1D2A] rounded-xl flex gap-5 pt-3 pb-5 px-4 w-full">
            <img
                src={image}
                alt="News image"
                className="h-[111px] rounded-lg shrink-0"
            />

            <div className="flex flex-col gap-5 text-sm w-full">
                <div className="text-[#7f8088] text-[14px] flex items-center gap-4 font-semibold">
                    {date}
                    <div className="flex flex-wrap gap-2">
                        {tags.map((tag, idx) => (
                            <span
                                key={idx}
                                className="text-[#7f8088] bg-[#2c2f3b] text-xs px-5 py-1 rounded-[7px]"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>



                <h3 className="text-white font-bold leading-tight text-[16px]">
                    {title}
                </h3>

                <p className="text-[#7f8088] flex justify-between text-sm leading-tight">
                    <span className="w-[643px]">{preview}</span>
                     <button className="text-[14px] bg-[#111219] px-3 rounded-[7px] text-white hover:underline">
                        Continue reading...
                    </button>
                </p>
            </div>
        </div>
    );
}
