import ProfileSidebar from "@/components/ProfileSidebar";

export default function ProfilePage() {
    return (
        <section className="w-full text-white">
            <div className="max-w-[1720px] mx-auto px-6 flex gap-6">
                <ProfileSidebar />

                {/* Правая часть */}
                <div className="flex-1 flex flex-col gap-10">
                    <div className="h-10 bg-blue-500">Right block</div>
                </div>
            </div>
        </section>
    );
}
