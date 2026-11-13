import { ButtonLink } from "@/components/atoms/button-link";
import { Flower } from "@/components/atoms/flower";
import { instagramProfile } from "@/content/landing";

export function Community() {
  return (
    <section
      id="comunidad"
      aria-labelledby="community-heading"
      className="overflow-hidden bg-lime-cream"
    >
      <div className="page-container relative grid items-center gap-8 py-14 md:grid-cols-[1fr_auto] md:gap-12 lg:py-18">
        <div className="relative z-10">
          <p className="eyebrow mb-5">
            La próxima conversación puede empezar contigo
          </p>
          <h2
            id="community-heading"
            className="text-[clamp(2.3rem,4vw,3.7rem)] leading-[1.08] font-semibold tracking-[-0.06em]"
          >
            Hay un lugar para ti
            <br />
            <span className="editorial">en esta conversación.</span>
          </h2>
          <p className="mt-5 max-w-lg text-sm leading-7 text-ink/75">
            Ven con tus ideas, tus preguntas y tu forma de ver el mundo.
            <br className="hidden sm:block" /> Nos encantará encontrarnos.
          </p>
        </div>
        <div className="relative z-10 flex flex-col items-start gap-3 md:items-center">
          <ButtonLink
            href={instagramProfile}
            target="_blank"
            rel="noopener noreferrer"
            className="gap-7"
          >
            Conversemos en Instagram
          </ButtonLink>
          <p className="pl-5 text-[10px] text-ink/75 md:pl-0">
            Síguenos y consulta los próximos encuentros.
          </p>
        </div>
        <Flower className="pointer-events-none absolute -top-7 right-[24%] size-45 rotate-12 text-ink/5" />
      </div>
    </section>
  );
}
