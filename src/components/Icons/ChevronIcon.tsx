import React from "react";

type Props = {
  variant: "left" | "right";
};

function ChevronIcon({ variant }: Props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: variant === "right" ? "rotate(180deg)" : "",
      }}
    >
      <path
        d="M15 18L9 12L15 6"
        stroke="#444444"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default ChevronIcon;
