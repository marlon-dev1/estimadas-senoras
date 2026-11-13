import type { ComponentProps } from "react";
import { Icon, type IconName } from "@/components/atoms/icon";

const variants = {
  dark: "bg-ink text-paper border-ink hover:bg-ink/85",
  outline: "border-ink/30 text-ink hover:bg-lime-cream/30",
  rose: "bg-cherry-rose border-cherry-rose text-light-yellow hover:bg-cherry-rose/90",
  cyan: "bg-strong-cyan border-strong-cyan text-ink hover:bg-strong-cyan/80",
};

export function ButtonLink({
  children,
  variant = "dark",
  icon = "arrow-up-right",
  className = "",
  ...props
}: ComponentProps<"a"> & {
  variant?: keyof typeof variants;
  icon?: IconName | false;
}) {
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center gap-5 rounded-full border px-6 py-3 text-sm font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <Icon name={icon} className="size-4 shrink-0" />}
    </a>
  );
}
