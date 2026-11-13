import { Brand } from "@/components/atoms/brand";
import { ButtonLink } from "@/components/atoms/button-link";
import { SiteNavigation } from "@/components/molecules/site-navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
      <div className="page-container flex h-[90px] items-center justify-between gap-6">
        <Brand />
        <SiteNavigation />
        <div className="hidden md:block">
          <ButtonLink
            href="#comunidad"
            variant="cyan"
            className="min-h-10 px-5 text-xs"
          >
            Hagamos comunidad
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
