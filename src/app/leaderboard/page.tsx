import PageWithNavbar from "@/components/layout/page";
import MoodsLeaderboard from "@/components/scales/moodsLeaderboard";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Leaderboard() {
  return (
    <PageWithNavbar>
      <div className="page">
        <div className="container md:pt-4">
          <h1 className="mb-4 text-6xl">Leaderboard</h1>
          <div className="space-y-4 w-full flex flex-col items-center">
            <MoodsLeaderboard />
          </div>
          <Link href="/">
            <Button className={`mt-6 h-12 text-lg md:mt-8 lg:mt-8 xl:mt-12`}>
              Back
            </Button>
          </Link>
        </div>
      </div>
    </PageWithNavbar>
  );
}
