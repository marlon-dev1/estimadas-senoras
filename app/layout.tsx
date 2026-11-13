import type { Metadata } from "next";
import { DM_Sans, Lora } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Estimadas Señoras — Cine, encuentros y otras miradas",
  description:
    "Un espacio para mirar el cine con enfoque de género, hacernos preguntas y construir comunidad. Bienvenidas a Estimadas Señoras.",
  applicationName: "Estimadas Señoras",
  openGraph: {
    title: "Estimadas Señoras — Otras miradas, nuevas conversaciones",
    description:
      "El cine nos reúne. Las conversaciones nos transforman. Un espacio de encuentro con enfoque de género.",
    locale: "es_CO",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${dmSans.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
