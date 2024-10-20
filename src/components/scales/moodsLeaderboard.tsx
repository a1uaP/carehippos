"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useReadContract } from "wagmi";
import { Address, formatEther } from "viem";
import MoodCareHippoTokenAbi from "@/lib/MoodCareHippoToken";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const moods = [
  {
    emoji: "😊",
    label: "Happy",
    contractAddress: process.env
      .NEXT_PUBLIC_HAPPY_CHT_MORPH_HOLESKY_ADDRESS as Address,
  },
  {
    emoji: "😢",
    label: "Sad",
    contractAddress: process.env
      .NEXT_PUBLIC_SAD_CHT_MORPH_HOLESKY_ADDRESS as Address,
  },
  {
    emoji: "😰",
    label: "Nervous",
    contractAddress: process.env
      .NEXT_PUBLIC_NERV_CHT_MORPH_HOLESKY_ADDRESS as Address,
  },
  {
    emoji: "😠",
    label: "Angry",
    contractAddress: process.env
      .NEXT_PUBLIC_ANGRY_CHT_MORPH_HOLESKY_ADDRESS as Address,
  },
  {
    emoji: "😴",
    label: "Tired",
    contractAddress: process.env
      .NEXT_PUBLIC_TIRED_CHT_MORPH_HOLESKY_ADDRESS as Address,
  },
  {
    emoji: "😤",
    label: "Frustrated",
    contractAddress: process.env
      .NEXT_PUBLIC_FRUSTR_CHT_MORPH_HOLESKY_ADDRESS as Address,
  },
];

const sponsors = [
  "Story",
  "Polygon",
  "SignProtocol",
  "Flow",
  "UniswapFoundation",
  "AirDAO",
  "SKALENetwork",
];

export default function MoodsLeaderboard() {
  const [community, setCommunity] = useState("");

  const { data: happyHctSupply, isSuccess: happyIsSuccess } = useReadContract({
    abi: MoodCareHippoTokenAbi,
    address: moods[0].contractAddress,
    functionName: "totalSupply",
  });

  const { data: sadHctSupply, isSuccess: sadIsSuccess } = useReadContract({
    abi: MoodCareHippoTokenAbi,
    address: moods[1].contractAddress,
    functionName: "totalSupply",
  });

  const { data: nervousHctSupply, isSuccess: nervousIsSuccess } =
    useReadContract({
      abi: MoodCareHippoTokenAbi,
      address: moods[2].contractAddress,
      functionName: "totalSupply",
    });

  const { data: angryHctSupply, isSuccess: angryIsSuccess } = useReadContract({
    abi: MoodCareHippoTokenAbi,
    address: moods[3].contractAddress,
    functionName: "totalSupply",
  });

  const { data: tiredHctSupply, isSuccess: tiredIsSuccess } = useReadContract({
    abi: MoodCareHippoTokenAbi,
    address: moods[4].contractAddress,
    functionName: "totalSupply",
  });

  const { data: frustratedHctSupply, isSuccess: frustratedIsSuccess } =
    useReadContract({
      abi: MoodCareHippoTokenAbi,
      address: moods[5].contractAddress,
      functionName: "totalSupply",
    });

  function displayHctBalance(index: number) {
    if (index === 0) {
      return happyIsSuccess ? formatEther(happyHctSupply as bigint) : "0";
    }
    if (index === 1) {
      return sadIsSuccess ? formatEther(sadHctSupply as bigint) : "0";
    }
    if (index === 2) {
      return nervousIsSuccess ? formatEther(nervousHctSupply as bigint) : "0";
    }
    if (index === 3) {
      return angryIsSuccess ? formatEther(angryHctSupply as bigint) : "0";
    }
    if (index === 4) {
      return tiredIsSuccess ? formatEther(tiredHctSupply as bigint) : "0";
    }
    if (index === 5) {
      return frustratedIsSuccess
        ? formatEther(frustratedHctSupply as bigint)
        : "0";
    }
  }

  return (
    <div className="w-full md:max-w-sm lg:max-w-md mx-auto p-6 space-y-8">
      <div className="w-full">
        <Select onValueChange={setCommunity}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            {sponsors.map((sponsor, index) => (
              <SelectItem key={`sponsor-${sponsor}-${index}`} value={sponsor}>
                {sponsor}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          What&apos;s your mood?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {moods.map((item, index) => (
            <Button
              key={item.label}
              variant="outline"
              className="h-28 text-2xl flex flex-col items-center justify-center"
            >
              <span className="text-3xl mb-1">{displayHctBalance(index)}</span>
              <span className="text-3xl mb-1">{item.emoji}</span>
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
