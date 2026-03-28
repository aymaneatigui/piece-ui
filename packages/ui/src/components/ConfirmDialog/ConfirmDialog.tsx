import React from "react";

export interface ConfirmDialogProps {
  open: boolean;
  title: string;
  message?: string;
  confirmLabel?: string;
  danger?: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmDialog({
  open,
  title,
  message,
  confirmLabel = "Confirm",
  danger = false,
  onConfirm,
  onCancel,
}: ConfirmDialogProps) {
  if (!open) return null;
  return (
    <>
      <div
        className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm"
        onClick={onCancel}
      />
      <div className="fixed left-1/2 top-1/2 z-[81] w-full max-w-[380px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-900 shadow-2xl shadow-black/60">
        <div className="p-6">
          <h2 className="text-[15px] font-semibold text-zinc-100">{title}</h2>
          {message && (
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-400">{message}</p>
          )}
        </div>
        <div className="flex items-center justify-end gap-2 border-t border-zinc-800 px-6 py-4">
          <button
            onClick={onCancel}
            className="cursor-pointer rounded-full border border-zinc-700 bg-zinc-800 px-4 py-2 text-[12px] font-medium text-zinc-300 transition-all hover:bg-zinc-700 hover:text-zinc-100"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className={`cursor-pointer rounded-full px-4 py-2 text-[12px] font-medium transition-all ${
              danger
                ? "border border-red-800 bg-red-950/50 text-red-400 hover:bg-red-900/50"
                : "border border-blue-800 bg-blue-950/50 text-blue-400 hover:bg-blue-900/50"
            }`}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </>
  );
}
