import { Brand } from "@/components/atoms/brand";
import { Icon } from "@/components/atoms/icon";
import { instagramPost, navigation } from "@/content/landing";

export function SiteFooter() {
  return (
    <footer className="bg-ink pt-12 pb-6 text-paper">
      <div className="page-container">
        <div className="flex flex-wrap items-start justify-between gap-10 pb-10">
          <div>
            <Brand light />
            <p className="mt-5 max-w-56 text-xs leading-6 text-paper/60">
              El cine como punto de partida.
              <br />
              La comunidad como horizonte.
            </p>
          </div>
          <nav
            aria-label="Navegación del pie de página"
            className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-xs text-paper/80"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-2 hover:underline hover:underline-offset-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href={instagramPost}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver Estimadas Señoras en Instagram, abre en una nueva pestaña"
            className="flex size-10 items-center justify-center rounded-full border border-paper/25 transition-colors hover:bg-paper/10"
          >
            <Icon name="instagram" className="size-4" />
          </a>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-paper/15 pt-5 text-[10px] text-paper/60">
          <p>© Estimadas Señoras · Hecho con preguntas y cariño.</p>
          <p>Textos de ejemplo · Recursos originales del cineforo.</p>
        </div>
      </div>
    </footer>
  );
}
