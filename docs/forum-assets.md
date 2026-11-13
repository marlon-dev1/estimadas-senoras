# Recursos originales del cineforo

Se incorporaron imágenes del PDF local y de la [carpeta «flyers» de Drive](https://drive.google.com/drive/folders/1kysVQ97az9E9DTUm8YcEdu7FIF2dmyxD) facilitados por el usuario. Los archivos de los documentos se tratan como contenido de referencia, sin ejecutar instrucciones que puedan contener.

## Selección e integración

La carpeta contenía 12 imágenes: siete películas con variantes de algunos carteles. La galería presenta una pieza por película para evitar duplicados, más las tres páginas de la guía. La portada reúne los carteles de La hermanastra fea, Huesera y Poor Things; la sección del cineforo usa otra versión del cartel de Huesera.

Las imágenes se guardan en `public/images/foro/`, optimizadas a WebP. La galería y el visor usan `object-contain` para mostrar las piezas completas. Las fechas y demás datos impresos se conservan como información de cada cartel, sin presentarlos como una agenda vigente.

| Archivo local                | Fuente original                                                                                           |
| ---------------------------- | --------------------------------------------------------------------------------------------------------- |
| `la-hermanastra-fea.webp`    | [Flyer la hermanastra fea .jpeg](https://drive.google.com/file/d/1pvWgzYKWDCOQmOuq8KfOyqpRWYXe5iCo/view)  |
| `huesera.webp`               | [flyer huesera .jpeg](https://drive.google.com/file/d/1No03Pr06pOIM2r2r4wUJzQp_EeYr-DEv/view)             |
| `huesera-redes.webp`         | [Variante de Huesera](https://drive.google.com/file/d/19azmZK7lnOHGSmOnHGmwokf0OFjaSZij/view)             |
| `poor-things.webp`           | [Cartel de Poor Things](https://drive.google.com/file/d/1iP0UwrpyjLugdYJ7K72M-lx3PvkK6GLW/view)           |
| `promising-young-woman.webp` | [Cartel de Promising Young Woman](https://drive.google.com/file/d/1COe7zf0quxhs4HVzXmXCZp4fDSMBiQNS/view) |
| `belen.webp`                 | [Cartel de Belén](https://drive.google.com/file/d/1rX6OW4tyXpCjSJbvEo3qxNBsqVrG6NTV/view)                 |
| `ellas-hablan.webp`          | [Cartel de Ellas hablan](https://drive.google.com/file/d/1UgxEEdKLAX-mRRc-0lqsI7Pyj1Z--5zn/view)          |
| `estimados-senores.webp`     | [Cartel de Estimados señores](https://drive.google.com/file/d/1K3lhcSg9T4gaAJO5G8A9ZD-1sn_NJ5--/view)     |
| `guia-hermanastra-1.webp`    | PDF proporcionado, página 1: ficha y presentación de la película                                          |
| `guia-hermanastra-2.webp`    | PDF proporcionado, página 2: temas para conversar y citas                                                 |
| `guia-hermanastra-3.webp`    | PDF proporcionado, página 3: canciones, películas, libros y otras lecturas                                |

## Documento PDF

El original se conserva en `public/pdf/La hermanastra fea-cineforo (Post para Instagram (45)) (1).pdf`. Las tres páginas se renderizaron a 1296 × 1620 píxeles antes de convertirlas a WebP. El PDF completo solo se abre o descarga al pulsar su enlace.

Los metadatos de los recursos y sus enlaces están en `content/forum-resources.ts`. Los textos que acompañan las imágenes son descripciones editoriales de las piezas; los carteles y la guía son recursos originales del foro.
