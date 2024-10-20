import PageWithNavbar from "@/components/layout/page";
import MoodScale from "@/components/scales/moodScale";

export default function Play() {
  return (
    <PageWithNavbar>
      <div className="page">
        <div className="container md:pt-4">
          <h1 className="mb-4 text-6xl">Play</h1>
          <div className="space-y-4 w-full flex flex-col items-center">
            <MoodScale />
          </div>
        </div>
      </div>
    </PageWithNavbar>
  );
}
