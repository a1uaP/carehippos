"use client";

import { useEffect, useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { useWaitForTransactionReceipt, useWriteContract } from "wagmi";
import { Address } from "viem";
import MoodCareHippoTokenAbi from "@/lib/MoodCareHippoToken";
import { toast } from "sonner";
import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { useRouter } from "next/navigation";
// import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

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

export default function MoodScale() {
  const { user } = useDynamicContext();
  const [feeling, setFeeling] = useState<number>(5);
  const [moodIndex, setMoodIndex] = useState<number>(-1);
  const [community, setCommunity] = useState("");
  const router = useRouter();

  const {
    data: hash,
    writeContractAsync,
    status: writeContractStatus,
  } = useWriteContract();

  const { data: txReceipt, status: txReceiptStatus } =
    useWaitForTransactionReceipt({
      hash,
    });

  async function handleRegisterMood() {
    if (!user?.userId) {
      return toast.warning("Please log in to play");
    }
    try {
      await writeContractAsync({
        abi: MoodCareHippoTokenAbi,
        address: moods[moodIndex].contractAddress,
        functionName: "mint",
        args: [community],
      });
    } catch (error) {
      console.error(error);
      toast.warning("Something went wrong, try again");
      setMoodIndex(-1);
    }
  }

  useEffect(() => {
    if (txReceiptStatus === "success" && moodIndex > -1) {
      toast.success(
        `You minted 1 ${moods[moodIndex].label} CareHippo Token ${moods[moodIndex].emoji}🦛`
      );
      console.log(txReceipt);
      setMoodIndex(-1);
      setCommunity("");
      router.push("/leaderboard");
    }
  }, [moodIndex, router, txReceipt, txReceiptStatus]);

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
        <h2 className="text-2xl font-bold text-center">How do you feel?</h2>
        <Slider
          value={[feeling]}
          onValueChange={(value) => setFeeling(value[0])}
          max={10}
          step={1}
          className="w-full"
        />
        <p className="text-center">
          You feel: <span className="font-bold">{feeling}</span> / 10
        </p>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-center">
          What&apos;s your mood?
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {moods.map((item, index) => (
            <Button
              key={item.label}
              variant={moodIndex === index ? "default" : "outline"}
              className="h-20 text-2xl flex flex-col items-center justify-center"
              onClick={() => setMoodIndex(index)}
            >
              <span className="text-3xl mb-1">{item.emoji}</span>
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
        <div className="w-full flex justify-center py-4">
          <Button
            size="lg"
            className="font-lg font-semibold"
            disabled={
              !community ||
              moodIndex === -1 ||
              (hash && txReceiptStatus === "pending")
            }
            onClick={handleRegisterMood}
          >
            Submit Mood
          </Button>
        </div>
      </div>
      {moodIndex > -1 && (
        <p className="text-center">
          Your mood: <span className="font-bold">{moods[moodIndex].label}</span>
        </p>
      )}

      <div className="w-full flex justify-center items-center">
        {writeContractStatus === "success" ? (
          <Link
            className="flex items-center"
            href={`https://explorer-holesky.morphl2.io/tx/${hash}`}
            target="_blank"
          >
            View tx on explorer <ExternalLinkIcon className="ml-2 h-4 w-4" />
          </Link>
        ) : (
          writeContractStatus === "pending" && <p>Confirming transaction</p>
        )}
      </div>
    </div>
  );
}
