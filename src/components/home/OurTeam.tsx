import React from "react";

type TeamMember = {
    name: string;
    about: string;
    avatar?: string;
};

const team: TeamMember[] = Array(12).fill({
    name: "Longnamename",
    about: "About me... jafdblasjfbnldbas knfgadf dfnodfbno dfju djgdf jdfgnkfdjk dfg",
    avatar: "/noAvatar.png",
});

export default function OurTeam() {
    return (
        <section className="text-white w-full">
            <h2 className="text-[16px] font-montserrat font-black italic mb-6">Our team</h2>

            <div className="grid grid-cols-4 gap-5">
                {team.map((member, i) => (
                    <div key={i} className="flex gap-6">
                        <div className="w-[125px] h-[107px] rounded-md bg-[#232735]"></div>
                        <div className="w-[194px] flex flex-col justify-between">
                            <p className="text-[16px] font-bold">{member.name}</p>
                            <p className="text-sm font-normal py-2 text-white leading-snug">{member.about}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
