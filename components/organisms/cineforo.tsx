import { ButtonLink } from "@/components/atoms/button-link";
import Image from "next/image";
import { Icon } from "@/components/atoms/icon";
import { SectionHeading } from "@/components/molecules/section-heading";
import { instagramPost } from "@/content/landing";

const steps = [
  {
    number: "01",
    title: "Vemos una historia",
    text: "Una película que abre preguntas y nos invita a mirar desde otro lugar.",
  },
  {
    number: "02",
    title: "Abrimos la conversación",
    text: "Compartimos lo que sentimos, lo que pensamos y lo que nos hizo ruido.",
  },
  {
    number: "03",
    title: "Nos llevamos algo nuevo",
    text: "Una idea, una conexión o una pregunta que sigue dando vueltas.",
  },
];

export function Cineforo() {
  return (
    <section
      id="cineforo"
      aria-labelledby="cineforo-heading"
      className="bg-strong-cyan/10 py-17 lg:py-22"
    >
      <div className="page-container">
        <div className="grid items-end gap-7 md:grid-cols-[1fr_0.8fr]">
          <SectionHeading eyebrow="Nuestro punto de encuentro">
            <span id="cineforo-heading">
              Se apagan las luces.
              <br />
              <span className="editorial">Se encienden las ideas.</span>
            </span>
          </SectionHeading>
          <p className="max-w-sm text-sm leading-7 text-muted md:justify-self-end">
            El cineforo es el corazón de este espacio. Una excusa para
            encontrarnos y seguir hablando cuando la película termina.
          </p>
        </div>
        <div className="mt-11 grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:gap-13">
          <figure className="overflow-hidden rounded-[3px] bg-ink text-paper">
            <a
              href="#para-compartir"
              className="relative block aspect-[1.3] bg-ink"
              aria-label="Explorar los carteles originales del cineforo"
            >
              <Image
                src="/images/foro/huesera-redes.webp"
                alt="Pieza original del cineforo para Huesera, dirigida por Michelle Garza Cervera"
                fill
                sizes="(max-width: 1023px) 90vw, 650px"
                className="object-contain p-5"
              />
            </a>
            <figcaption className="flex items-center justify-between gap-4 border-t border-paper/15 px-6 py-4 text-[10px] tracking-wide">
              <span>HUESERA · CARTEL DEL CINEFORO</span>
              <a
                href="#para-compartir"
                className="inline-flex items-center gap-2 underline underline-offset-4"
              >
                Explorar el archivo
                <Icon name="arrow-up-right" className="size-3" />
              </a>
            </figcaption>
          </figure>
          <div className="flex flex-col justify-center divide-y divide-ink/15">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 py-6 first:pt-2 last:pb-2"
              >
                <span className="pt-1 font-editorial text-lg italic text-muted">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.03em]">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-85 text-sm leading-6 text-muted">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-5 border-t border-ink/15 pt-7">
          <div className="flex flex-wrap gap-x-7 gap-y-3 text-xs font-medium">
            <span className="flex items-center gap-2">
              <Icon name="pin" className="size-4" />
              Nos encontramos en Ibagué
            </span>
            <span className="flex items-center gap-2">
              <Icon name="heart" className="size-4" />
              Abierto a todo el público
            </span>
          </div>
          <ButtonLink
            href={instagramPost}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            className="min-h-10 px-4 text-xs"
          >
            Consulta los encuentros en Instagram
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
