"use client";

import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";

const moods = [
  { emoji: "😊", label: "Happy" },
  { emoji: "😢", label: "Sad" },
  { emoji: "😰", label: "Nervous" },
  { emoji: "😠", label: "Angry" },
  { emoji: "😴", label: "Tired" },
  { emoji: "😤", label: "Frustrated" },
];

export default function MoodScale() {
  const [feeling, setFeeling] = useState<number>(5);
  const [mood, setMood] = useState<string | null>(null);

  return (
    <div className="max-w-md mx-auto p-6 space-y-8">
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
          {moods.map((item) => (
            <Button
              key={item.label}
              variant={mood === item.label ? "default" : "outline"}
              className="h-20 text-2xl flex flex-col items-center justify-center"
              onClick={() => setMood(item.label)}
            >
              <span className="text-3xl mb-1">{item.emoji}</span>
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </div>
      </div>
      {mood && (
        <p className="text-center">
          Your mood: <span className="font-bold">{mood}</span>
        </p>
      )}
    </div>
  );
}
