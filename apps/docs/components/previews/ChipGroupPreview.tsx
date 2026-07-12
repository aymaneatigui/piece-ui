"use client";

import { useState } from "react";
import { ChipGroup } from "piece-ui";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export default function ChipGroupPreview() {
  const [bare, setBare] = useState<string[]>(["Monday", "Tuesday", "Thursday"]);
  const [card, setCard] = useState<string[]>(["Monday", "Tuesday", "Thursday", "Saturday"]);

  return (
    <div className="grid w-full gap-8 lg:grid-cols-2 lg:items-start">
      {/* The component on its own — this is all you get from the package. */}
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">
          The component
        </p>
        <p className="mb-4 text-sm text-text-muted">
          Just the chips. Drop them into a form or a step — no card, title, or button included.
        </p>
        <div className="rounded-xl border border-border bg-background p-6">
          <ChipGroup options={DAYS} value={bare} onChange={setBare} />
        </div>
      </div>

      {/* The same component, wrapped in markup you write yourself. */}
      <div>
        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-text-secondary">
          In your own card
        </p>
        <p className="mb-4 text-sm text-text-muted">
          The card, heading, and Continue button are yours — the component is only the chips inside.
        </p>
        <div className="rounded-3xl bg-white p-7 shadow-2xl shadow-black/40">
          <h3 className="text-lg font-bold text-[#111827]">Set Company Working days</h3>
          <p className="mt-1 text-[15px] leading-snug text-[#6b7280]">
            Select your company working days, and uncheck non-working days
          </p>

          <div className="my-6">
            <ChipGroup
              options={DAYS}
              value={card}
              onChange={setCard}
              accentColor="#3b82f6"
              chipColor="#f9fafb"
              borderColor="#e5e7eb"
              labelColor="#374151"
              weight="semibold"
            />
          </div>

          <button
            type="button"
            className="w-full cursor-pointer rounded-full bg-[#3b82f6] py-3.5 font-bold text-white transition-opacity hover:opacity-90"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
