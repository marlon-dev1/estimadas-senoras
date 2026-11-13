import { Flower } from "@/components/atoms/flower";

export function ManifestoStrip() {
  return (
    <div
      className="overflow-hidden border-y border-ink/10 bg-strong-cyan py-5"
      aria-label="Mirar, cuestionar, conversar, transformar"
    >
      <div className="page-container grid grid-cols-2 items-center gap-x-5 gap-y-4 text-[10px] font-semibold tracking-[0.015em] sm:text-[13px] lg:flex lg:justify-between">
        {[
          "Mirar con otros ojos",
          "Cuestionarlo todo",
          "Conversar sin prisa",
          "Transformar juntas",
        ].map((text) => (
          <span
            key={text}
            className="flex items-center justify-between gap-3 lg:gap-12"
          >
            {text}
            <Flower className="size-4 shrink-0 text-ink sm:size-5" />
          </span>
        ))}
      </div>
    </div>
  );
}
