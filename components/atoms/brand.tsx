import { Flower } from "@/components/atoms/flower";

export function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      aria-label="Estimadas Señoras, ir al inicio"
      className={`inline-flex items-center gap-2.5 ${light ? "text-paper" : "text-ink"}`}
    >
      <Flower
        className={`size-11 -rotate-12 ${light ? "text-lime-cream" : "text-cherry-rose"}`}
      />
      <span className="text-[23px] leading-[0.85] font-extrabold tracking-[-0.075em]">
        estimadas
        <span className="block">
          señoras
          <span className={light ? "text-lime-cream" : "text-cherry-rose"}>
            .
          </span>
        </span>
      </span>
    </a>
  );
}
