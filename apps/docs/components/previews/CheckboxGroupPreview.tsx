"use client";

import { useState } from "react";
import { CheckboxGroup } from "piece-ui";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function CheckboxGroupPreview() {
  const [days, setDays] = useState<string[]>(["Monday", "Tuesday", "Thursday", "Sunday"]);

  return (
    <div className="w-full max-w-[340px] rounded-3xl bg-white p-7 shadow-2xl shadow-black/40">
      <h3 className="text-lg font-bold text-[#111827]">Set Company Working days</h3>
      <p className="mt-1 text-[15px] leading-snug text-[#6b7280]">
        Select your company working days, and uncheck non-working days
      </p>

      <div className="my-6">
        <CheckboxGroup
          options={DAYS}
          value={days}
          onChange={setDays}
          accentColor="#3b82f6"
          labelColor="#374151"
          borderColor="#d1d5db"
          weight="medium"
        />
      </div>

      <button
        type="button"
        className="w-full cursor-pointer rounded-full bg-[#3b82f6] py-3.5 font-bold text-white transition-opacity hover:opacity-90"
      >
        Continue
      </button>
    </div>
  );
}
