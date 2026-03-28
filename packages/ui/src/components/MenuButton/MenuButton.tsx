import React from "react";

export interface MenuButtonProps {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuButton = ({ isMenuOpen, setIsMenuOpen }: MenuButtonProps) => {
  return (
    <button
      className="flex h-10 w-10 cursor-pointer flex-col items-center justify-center gap-1.5"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      aria-label="Toggle menu"
      aria-expanded={isMenuOpen}
    >
      <span
        className={`h-0.5 w-6 bg-(--white) transition-all duration-300 ${
          isMenuOpen ? "translate-y-2 rotate-45" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-(--white) transition-all duration-300 ${
          isMenuOpen ? "opacity-0" : ""
        }`}
      />
      <span
        className={`h-0.5 w-6 bg-(--white) transition-all duration-300 ${
          isMenuOpen ? "-translate-y-2 -rotate-45" : ""
        }`}
      />
    </button>
  );
};
