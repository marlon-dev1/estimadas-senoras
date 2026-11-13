# Estimadas Señoras

Landing page en español para un espacio de cine, conversación y comunidad con enfoque de género. Construida sobre el proyecto existente con Next.js 16, React 19, TypeScript y Tailwind CSS 4.

## Desarrollo

```bash
npm install
npm run dev
```

Abre [localhost:3000](http://localhost:3000). Para comprobar la versión de producción:

```bash
npm run build
npm start
```

## Atomic Design

```text
components/
  atoms/       Iconos, flor, marca y enlaces de botón
  molecules/   Navegación, títulos de sección y tarjetas de recursos
  organisms/   Cabecera, portada, manifiesto, nosotras, cineforo, galería y pie
  templates/   Composición de la landing
app/page.tsx   Instancia de la plantilla en la ruta principal
content/       Navegación, metadatos de recursos y enlaces externos
```

Las secciones estáticas son Server Components. La navegación móvil y la galería con filtros y visor usan Client Components.

## Paleta reutilizable

Los colores se registran en `app/globals.css` mediante `@theme`, la configuración CSS de Tailwind 4. No es necesario un archivo `tailwind.config.js`.

| Token          | Color     | Ejemplos de utilidades                                        |
| -------------- | --------- | ------------------------------------------------------------- |
| `cherry-rose`  | `#B5185F` | `bg-cherry-rose`, `text-cherry-rose`, `border-cherry-rose`    |
| `light-yellow` | `#FEFFE0` | `bg-light-yellow`, `text-light-yellow`, `border-light-yellow` |
| `lime-cream`   | `#D0E86E` | `bg-lime-cream`, `text-lime-cream`, `border-lime-cream`       |
| `strong-cyan`  | `#35C1C2` | `bg-strong-cyan`, `text-strong-cyan`, `border-strong-cyan`    |

También se incluyen los tonos de apoyo `ink`, `paper`, `muted` y `line`. `paper` reutiliza `light-yellow` y `ink` es el verde oscuro de apoyo. Los colores admiten modificadores de opacidad, por ejemplo `bg-cherry-rose/15`.

## Contenido e imágenes

Los textos de presentación son ejemplos y se editan en los organismos de cada sección. Los enlaces de navegación están en `content/landing.ts`; los metadatos, descripciones y fuentes de las imágenes se encuentran en `content/forum-resources.ts`. Los botones de comunidad enlazan al perfil público de una de las autoras de la referencia.

La web usa los carteles originales de la carpeta de Drive y las tres páginas del PDF del cineforo proporcionados por el usuario. El [inventario de recursos](docs/forum-assets.md) documenta sus fuentes y usos. Las imágenes están optimizadas en `public/images/foro/` y el PDF original se conserva en `public/pdf/`.

El [análisis de la referencia inicial](docs/design-reference.md) recoge la publicación de Instagram y las decisiones visuales de la primera versión.

Incluye diseño adaptable, navegación móvil, filtros para carteles y guías, visor con flechas y cierre mediante Escape, enlaces a los originales, lectura y descarga del PDF, enlace para saltar al contenido y respeto por la preferencia de movimiento reducido.
