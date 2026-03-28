import React from "react";

export interface SectionWrapperProps {
  children: React.ReactNode;
  fullHeight?: boolean;
  fullWidth?: boolean;
  id?: string;
}

export const SectionWrapper = ({
  children,
  fullHeight = true,
  fullWidth = false,
  id,
}: SectionWrapperProps) => {
  return (
    <section
      id={id}
      className={`mx-auto flex w-full flex-col gap-6 py-8 sm:gap-8 md:py-10 ${fullHeight ? "min-h-dvh" : ""} ${fullWidth ? "" : "max-w-7xl px-4 sm:px-6 md:px-10"}`}
    >
      {children}
    </section>
  );
};
