import HeroBanner from "@/components/home/HeroBanner";
import NewsFeed from "@/components/home/NewsFeed";
import RatingTable from "@/components/home/RatingTable";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto flex">
      <main className="w-[1076px]">
        <HeroBanner />
        <RatingTable />
        <NewsFeed />
      </main>
      <aside>
        <div className="w-[328px]">

        </div>
      </aside>
    </div>
  );
}
