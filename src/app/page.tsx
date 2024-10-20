"use client";

import Image from "next/image";
import PageWithNavbar from "@/components/layout/page";
import AuthButton from "@/components/buttons/authButton";

export default function Home() {
  return (
    <PageWithNavbar>
      <div className="page">
        <div className="container md:pt-4 lg:pt-12 xl:pt-20">
          <h1 className="mb-4 text-6xl">CareHippos</h1>
          <div className="py-8 space-y-4 w-full flex flex-col items-center">
            <Image
              src="/images/moodeng.png"
              alt="Moo Deng CareHippo Moods"
              height={256}
              width={256}
            />
            <h3 className="text-center">
              Check your community&apos;s health with a fun and rewarding
              experience
            </h3>
            <p>1. Choose your community</p>
            <p>2. Select your emotional level (1-10)</p>
            <p>3. Pick your current mood</p>
            <p>4. Mint and check the leaderboard</p>
          </div>
          <div className="w-full flex justify-center py-4">
            <AuthButton size="lg" />
          </div>
        </div>
      </div>
    </PageWithNavbar>
  );
}
