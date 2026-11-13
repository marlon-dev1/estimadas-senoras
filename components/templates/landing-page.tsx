import { About } from "@/components/organisms/about";
import { Cineforo } from "@/components/organisms/cineforo";
import { Community } from "@/components/organisms/community";
import { Hero } from "@/components/organisms/hero";
import { ManifestoStrip } from "@/components/organisms/manifesto-strip";
import { Resources } from "@/components/organisms/resources";
import { SiteFooter } from "@/components/organisms/site-footer";
import { SiteHeader } from "@/components/organisms/site-header";

export function LandingPage() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-50 rounded-full bg-lime-cream px-5 py-3 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <ManifestoStrip />
        <About />
        <Cineforo />
        <Resources />
        <Community />
      </main>
      <SiteFooter />
    </>
  );
}
