import Image from "next/image";
import { Icon } from "@/components/atoms/icon";
import type { ForumResource } from "@/content/forum-resources";

export function ResourceCard({
  resource,
  onOpen,
}: {
  resource: ForumResource;
  onOpen: () => void;
}) {
  return (
    <article className="resource-card group relative w-full text-left focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-ink">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] border border-ink/10 bg-lime-cream/15">
        <Image
          src={resource.image}
          alt={resource.alt}
          fill
          sizes="(max-width: 767px) 90vw, (max-width: 1023px) 45vw, 400px"
          className="resource-visual object-contain p-3"
        />
        <span className="absolute top-3 left-3 rounded-full border border-ink/10 bg-paper px-3 py-1.5 text-[9px] font-semibold shadow-sm">
          {resource.category === "Guías"
            ? `Guía · página ${resource.page}`
            : "Cartel del cineforo"}
        </span>
        <span className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-full bg-paper shadow-sm transition-colors group-hover:bg-lime-cream">
          <Icon name="expand" className="size-4" />
        </span>
      </div>
      <div className="pt-4">
        <h3 className="text-lg leading-snug font-semibold tracking-[-0.04em] group-hover:underline group-hover:underline-offset-4">
          <button
            type="button"
            onClick={onOpen}
            aria-label={`Ver recurso: ${resource.title}`}
            aria-haspopup="dialog"
            className="text-left after:absolute after:inset-0 focus-visible:outline-none"
          >
            {resource.title}
          </button>
        </h3>
        <p className="mt-2 text-xs leading-6 text-muted">
          {resource.description}
        </p>
        <p className="mt-3 text-[10px] font-medium text-muted">
          Material original de Estimadas Señoras
        </p>
      </div>
    </article>
  );
}
