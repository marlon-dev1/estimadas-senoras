import type { SVGProps } from "react";

export function Flower({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M50 25C24-10 8 13 27 36-15 30-5 62 28 59 0 85 30 105 43 73c4 42 35 31 23 0 31 26 50-1 17-18 41-7 28-35-2-25 18-34-13-47-24-14L50 25Z" />
      <circle cx="51" cy="49" r="10" fill="var(--color-paper)" />
    </svg>
  );
}
