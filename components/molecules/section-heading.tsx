import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  children,
  className = "",
}: {
  eyebrow: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="eyebrow mb-5 flex items-center gap-2.5">
        <span className="size-1.5 rounded-full bg-current" />
        {eyebrow}
      </p>
      <h2 className="text-[clamp(2.1rem,3.5vw,3.35rem)] leading-[1.12] font-semibold tracking-[-0.055em]">
        {children}
      </h2>
    </div>
  );
}
