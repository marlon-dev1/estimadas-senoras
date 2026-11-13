import Image from "next/image";
import { ButtonLink } from "@/components/atoms/button-link";
import { Flower } from "@/components/atoms/flower";
import { Icon } from "@/components/atoms/icon";

export function Hero() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-13 pb-14 lg:pt-17 lg:pb-18"
    >
      <div className="page-container grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-13">
        <div className="relative z-10">
          <p className="eyebrow mb-7 flex items-center gap-2.5">
            <span className="size-2 rounded-full bg-strong-cyan" />
            Un espacio de encuentro y otras miradas
          </p>
          <h1 id="hero-heading" className="hero-title max-w-[650px]">
            El cine nos reúne.
            <br />
            La conversación
            <br />
            <span className="editorial">nos transforma.</span>
          </h1>
          <p className="mt-7 max-w-[440px] text-base leading-7 text-muted">
            Historias que nos atraviesan. Preguntas que nos mueven. Un espacio
            para mirar el mundo con enfoque de género y construir comunidad.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <ButtonLink href="#cineforo" variant="rose">
              Conoce el cineforo
            </ButtonLink>
            <a
              href="#nosotras"
              className="inline-flex min-h-11 items-center gap-2 text-sm font-medium underline decoration-ink/30 underline-offset-5 hover:decoration-ink"
            >
              Esta es nuestra historia
              <Icon name="arrow-up-right" className="size-4" />
            </a>
          </div>
          <div className="mt-11 flex items-center gap-3 text-[11px] text-muted">
            <span className="flex size-7 items-center justify-center rounded-full border border-ink/20">
              <Icon name="heart" className="size-3.5" />
            </span>
            <span>Muchas voces. Todas las personas bienvenidas.</span>
          </div>
        </div>
        <div className="hero-art relative mx-auto w-full max-w-[540px] px-5 pt-7 pb-8 lg:translate-x-2">
          <div className="relative aspect-[1/1.08]">
            <div className="absolute top-[14%] bottom-[6%] left-0 w-[46%] -rotate-12 border-[5px] border-paper bg-paper shadow-lg">
              <Image
                src="/images/foro/poor-things.webp"
                alt="Cartel original de Poor Things para Estimadas Señoras"
                fill
                sizes="(max-width: 1023px) 42vw, 240px"
                className="object-contain"
              />
            </div>
            <div className="absolute top-[10%] right-0 bottom-[9%] w-[46%] rotate-12 border-[5px] border-paper bg-paper shadow-lg">
              <Image
                src="/images/foro/huesera.webp"
                alt="Cartel original de Huesera para Estimadas Señoras"
                fill
                sizes="(max-width: 1023px) 42vw, 240px"
                className="object-contain"
              />
            </div>
            <div className="absolute top-0 bottom-0 left-[21%] z-10 w-[58%] -rotate-3 border-[5px] border-paper bg-paper shadow-xl">
              <Image
                src="/images/foro/la-hermanastra-fea.webp"
                alt="Cartel del cineforo La hermanastra fea, sobre papel con textura y letras fucsias"
                fill
                sizes="(max-width: 1023px) 52vw, 300px"
                preload
                className="object-contain"
              />
            </div>
          </div>
          <div className="absolute -top-2 right-0 z-20 flex size-27 rotate-12 items-center justify-center rounded-full bg-lime-cream text-center text-[11px] leading-[1.35] font-extrabold tracking-wide shadow-sm sm:size-30">
            MÁS VOCES.
            <br />
            MÁS MIRADAS.
            <br />
            MÁS NOSOTRAS.
          </div>
          <Flower className="absolute top-3 -left-2 z-20 size-19 -rotate-12 text-cherry-rose sm:size-23" />
          <div className="absolute right-9 -bottom-1 left-7 z-20 rotate-[-3deg] border border-ink/15 bg-paper px-5 py-3 text-center font-editorial text-lg italic shadow-sm sm:left-12 sm:text-xl">
            Una película es solo el comienzo.
          </div>
          <svg
            viewBox="0 0 90 70"
            className="absolute -right-2 bottom-9 h-20 w-24 -rotate-12 text-ink"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M8 9c5 36 51 46 66 17M53 29l23-7-1 24"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
