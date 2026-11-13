"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/atoms/icon";
import { navigation } from "@/content/landing";

export function SiteNavigation() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    function onPointerDown(event: PointerEvent) {
      if (!container.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <div ref={container}>
      <nav
        aria-label="Navegación principal"
        className="hidden items-center gap-8 text-[13px] font-medium md:flex"
      >
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="py-3 transition-colors hover:text-muted"
          >
            {item.label}
          </a>
        ))}
      </nav>
      <button
        ref={toggle}
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        className="flex size-11 items-center justify-center rounded-full border border-ink/20 md:hidden"
      >
        <Icon name={open ? "close" : "menu"} />
      </button>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Navegación móvil"
          className="absolute inset-x-0 top-full border-b border-line bg-paper px-6 py-5 shadow-lg md:hidden"
        >
          {[
            ...navigation,
            { label: "Hagamos comunidad ↗", href: "#comunidad" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 text-base font-medium hover:bg-lime-cream/30"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
