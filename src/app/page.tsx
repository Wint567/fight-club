import FollowUs from "@/components/home/FollowUs";
import HeroBanner from "@/components/home/HeroBanner";
import LatestTournaments from "@/components/home/LatestTornaments";
import LiveMatches from "@/components/home/LiveMatches";
import NewsFeed from "@/components/home/NewsFeed";
import OurTeam from "@/components/home/OurTeam";
import RatingTable from "@/components/home/RatingTable";
import Sponsors from "@/components/home/Sponsors";
import Streamers from "@/components/home/Streamers";
import VoteForWinners from "@/components/home/VoteForWinners";

export default function HomePage() {
  return (
    <div className="max-w-[1440px] mx-auto pb-12">
      <div className="flex justify-between">
        <main className="w-[1076px]">
          <HeroBanner />
          <RatingTable />
          <NewsFeed />
        </main>
        <aside>
          <div className="w-[328px]">
            <LatestTournaments />
            <LiveMatches />
            {/* <VoteForWinners /> */}
            <Sponsors />
            <FollowUs />
            <Streamers />
          </div>
        </aside>
      </div>
      <OurTeam />
    </div>
  );
}
