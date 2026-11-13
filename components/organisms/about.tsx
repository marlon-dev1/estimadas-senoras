import { Flower } from "@/components/atoms/flower";
import { SectionHeading } from "@/components/molecules/section-heading";

export function About() {
  return (
    <section
      id="nosotras"
      className="page-container grid gap-10 py-20 md:grid-cols-[1fr_1.05fr] md:gap-18 lg:py-25"
      aria-labelledby="about-heading"
    >
      <div className="relative">
        <SectionHeading eyebrow="Hola, somos Estimadas Señoras">
          <span id="about-heading">
            Un encuentro.
            <br />
            Muchas maneras
            <br />
            de{" "}
            <span className="editorial hand-drawn-underline">
              ver el mundo.
            </span>
          </span>
        </SectionHeading>
        <Flower className="absolute right-5 bottom-1 hidden size-17 rotate-12 text-cherry-rose lg:block" />
      </div>
      <div className="max-w-xl pt-1 md:pt-10">
        <p className="text-xl leading-[1.6] font-medium tracking-[-0.025em]">
          Creemos en el poder de las historias para abrir conversaciones que
          importan.
        </p>
        <p className="mt-5 text-sm leading-7 text-muted">
          Estimadas Señoras es una invitación a juntarnos alrededor del cine. A
          poner sobre la mesa nuestras experiencias, cuestionar lo aprendido y
          descubrir otras formas de habitar el mundo.
        </p>
        <p className="mt-4 text-sm leading-7 text-muted">
          Desde una mirada de género, hacemos espacio para las voces diversas,
          la escucha y la reflexión colectiva. No necesitas saber de cine: basta
          con tener curiosidad y ganas de compartir.
        </p>
        <div className="mt-7 flex flex-wrap gap-2">
          {["Enfoque de género", "Cultura para compartir", "Comunidad"].map(
            (label, index) => (
              <span
                key={label}
                className={`rounded-full px-3.5 py-2 text-[10px] font-semibold ${index === 0 ? "bg-cherry-rose/15" : index === 1 ? "bg-lime-cream/25" : "bg-strong-cyan/20"}`}
              >
                {label}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
