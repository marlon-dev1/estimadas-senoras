"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Icon } from "@/components/atoms/icon";
import { ResourceCard } from "@/components/molecules/resource-card";
import { SectionHeading } from "@/components/molecules/section-heading";
import {
  forumResources,
  forumPdfUrl,
  type ForumResource,
} from "@/content/forum-resources";

const filters = ["Todo", "Carteles", "Guías"] as const;

export function Resources() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Todo");
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState<ForumResource | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const previousOverflow = useRef("");
  const filteredResources = forumResources.filter(
    (resource) => filter === "Todo" || resource.category === filter,
  );
  const visibleResources = expanded
    ? filteredResources
    : filteredResources.slice(0, 6);
  const selectedIndex = filteredResources.findIndex(
    (resource) => resource.id === selected?.id,
  );

  function openResource(resource: ForumResource) {
    setSelected(resource);
    previousOverflow.current = document.body.style.overflow;
    dialog.current?.showModal();
    document.body.style.overflow = "hidden";
  }

  function changeResource(direction: number) {
    const index =
      (selectedIndex + direction + filteredResources.length) %
      filteredResources.length;
    setSelected(filteredResources[index]);
  }

  return (
    <section
      id="para-compartir"
      aria-labelledby="resources-heading"
      className="page-container py-20 lg:py-25"
    >
      <div className="flex flex-wrap items-end justify-between gap-7">
        <SectionHeading eyebrow="El archivo de Estimadas Señoras">
          <span id="resources-heading">
            El cineforo,
            <br />
            <span className="editorial">en imágenes.</span>
          </span>
        </SectionHeading>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar recursos del cineforo"
        >
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setFilter(item);
                setExpanded(false);
              }}
              aria-pressed={filter === item}
              className={`min-h-10 rounded-full border px-4 py-2 text-xs font-medium transition-colors ${filter === item ? "border-ink bg-ink text-paper" : "border-ink/20 hover:bg-lime-cream/30"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <p className="mt-6 max-w-xl text-sm leading-7 text-muted">
        Nuestros carteles y materiales de acompañamiento. Abre cada pieza para
        verla completa y seguir explorando las conversaciones del foro.
      </p>
      <p className="sr-only" aria-live="polite">
        Mostrando {visibleResources.length} de {filteredResources.length}{" "}
        recursos.
      </p>
      <div
        id="forum-resource-grid"
        className="mt-9 grid items-start gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3"
      >
        {visibleResources.map((resource) => (
          <ResourceCard
            key={resource.id}
            resource={resource}
            onOpen={() => openResource(resource)}
          />
        ))}
      </div>
      {filteredResources.length > 6 && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setExpanded(!expanded)}
            aria-controls="forum-resource-grid"
            aria-expanded={expanded}
            className="inline-flex min-h-12 items-center gap-4 rounded-full border border-ink/30 px-6 py-3 text-sm font-semibold transition-colors hover:bg-lime-cream/30"
          >
            {expanded
              ? "Mostrar menos"
              : `Ver los ${filteredResources.length} recursos`}
            <Icon name={expanded ? "minus" : "plus"} className="size-4" />
          </button>
        </div>
      )}
      <div className="mt-9 flex flex-wrap items-center justify-between gap-5 border-t border-line pt-6">
        <p className="max-w-lg text-xs leading-6 text-muted">
          Los carteles conservan sus fechas originales como parte del archivo
          del cineforo.
        </p>
        <a
          href={forumPdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-10 items-center gap-2 text-xs font-semibold underline underline-offset-4"
        >
          Leer la guía completa
          <Icon name="arrow-up-right" className="size-4" />
        </a>
      </div>
      <dialog
        ref={dialog}
        aria-labelledby="resource-title"
        aria-describedby="resource-description"
        onClose={() => {
          document.body.style.overflow = previousOverflow.current;
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            changeResource(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            const rect = event.currentTarget.getBoundingClientRect();
            if (
              event.clientX < rect.left ||
              event.clientX > rect.right ||
              event.clientY < rect.top ||
              event.clientY > rect.bottom
            )
              dialog.current?.close();
          }
        }}
        className="resource-dialog fixed inset-0 m-auto max-h-[92dvh] w-[calc(100%-2rem)] max-w-5xl overflow-y-auto rounded-lg bg-paper p-0 text-ink shadow-2xl"
      >
        {selected && (
          <>
            <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
              <p className="eyebrow">
                {selected.category} · {selectedIndex + 1} de{" "}
                {filteredResources.length}
              </p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => changeResource(-1)}
                  aria-label="Recurso anterior"
                  className="flex size-10 items-center justify-center rounded-full border border-ink/20 hover:bg-lime-cream/30"
                >
                  <Icon name="arrow-left" />
                </button>
                <button
                  type="button"
                  onClick={() => changeResource(1)}
                  aria-label="Recurso siguiente"
                  className="flex size-10 items-center justify-center rounded-full border border-ink/20 hover:bg-lime-cream/30"
                >
                  <Icon name="arrow-right" />
                </button>
                <button
                  type="button"
                  autoFocus
                  onClick={() => dialog.current?.close()}
                  aria-label="Cerrar recurso"
                  className="ml-1 flex size-10 items-center justify-center rounded-full bg-ink text-paper hover:bg-ink/85"
                >
                  <Icon name="close" />
                </button>
              </div>
            </div>
            <div className="grid md:grid-cols-[minmax(0,1.3fr)_minmax(240px,.8fr)]">
              <div className="relative h-[57dvh] min-h-64 bg-ink md:h-[72dvh]">
                <Image
                  key={selected.id}
                  src={selected.image}
                  alt={selected.alt}
                  fill
                  loading="eager"
                  sizes="(max-width: 767px) 95vw, 650px"
                  className="object-contain p-3"
                />
              </div>
              <div className="flex flex-col items-start p-6 md:p-8">
                <p className="eyebrow mb-4 text-muted">Material del cineforo</p>
                <h2
                  id="resource-title"
                  className="text-3xl leading-tight font-semibold tracking-[-0.05em]"
                >
                  {selected.title}
                </h2>
                <p
                  id="resource-description"
                  className="mt-5 text-sm leading-7 text-muted"
                >
                  {selected.description}
                </p>
                <p className="mt-5 text-xs leading-6 text-muted">
                  {selected.category === "Guías"
                    ? `Página ${selected.page} de 3. Puedes consultar el documento completo en PDF.`
                    : "Pieza original compartida por el foro. La imagen conserva el diseño y la información de su publicación."}
                </p>
                <a
                  href={selected.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold underline underline-offset-4"
                >
                  {selected.category === "Guías"
                    ? "Abrir el PDF completo"
                    : "Ver el original en Drive"}
                  <Icon name="arrow-up-right" className="size-4" />
                </a>
                {selected.category === "Guías" && (
                  <a
                    href={forumPdfUrl}
                    download="Estimadas-Senoras-La-hermanastra-fea.pdf"
                    className="mt-3 inline-flex min-h-11 items-center gap-2 text-xs font-medium"
                  >
                    Descargar la guía
                    <Icon name="arrow-down" className="size-4" />
                  </a>
                )}
              </div>
            </div>
          </>
        )}
      </dialog>
    </section>
  );
}
