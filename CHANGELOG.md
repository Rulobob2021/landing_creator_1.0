# CHANGELOG — LandingBuilder

Bitácora de cambios del proyecto **LandingBuilder** — constructor de landing pages estilo WordPress con Next.js + React + Bootstrap.

---

## [v0.5.0] — 2026-06-08

### ✨ Nuevo
- **Componente React nativo completo** — reescritura total de `LandingBuilder.jsx` usando React puro con hooks (`useState`, `useEffect`, `useCallback`, `useRef`). Eliminada la dependencia de innerHTML para el preview, ahora es JSX real.
- **LivePreview como componente React** — la vista previa en tiempo real es un componente React verdadero con carrusel animado (`useCarousel`) y countdown timer (`useCountdown`) como custom hooks.
- **WireFrame component** — los wireframes del selector de estructura son componentes React con divs estilizados, sin SVG ni HTML crudo.
- **Selector de Estructura** mejorado con animación hover y selección visual.
- **ImgField component** — campo de imagen reutilizable con input URL + botón "Subir" (FileReader → base64) en todas las secciones.
- **Parámetros UTM** — pestaña dedicada con Select para Source/Medium y campos libres para Campaign/Content/Term. Preview en tiempo real de la URL generada.
- **Botón "Guardar Landing"** en 3 lugares: barra superior, pie del sidebar, vista previa completa.
- **Toast notifications** — confirmación visual al guardar/eliminar.
- **Persistencia dual** — usa `window.storage` (claude.ai) con fallback a `localStorage` (Next.js local).

### 🔧 Modificado
- Preview lateral usa `LivePreview` React en vez de `dangerouslySetInnerHTML`.
- `buildPreviewHTML` se mantiene solo para exportación HTML.
- Countdown timer en preview es reactivo y funcional desde el primer render.
- Badge UTM en tarjetas de "Landings Creadas".

---

## [v0.4.0] — 2026-06-03

### ✨ Nuevo
- Parámetros UTM con dropdowns Source/Medium y campos Campaign/Content/Term.
- Subida de imágenes (base64) en slides hero, logo y sección Nosotros.
- Botón "Guardar Landing" en barra superior, sidebar y vista previa.
- Badge UTM en thumbnails de Landings Creadas.

---

## [v0.3.0] — 2026-06-03

### ✨ Nuevo
- Página de Estructura con selector de 4 plantillas con wireframes visuales.
- Estructura Clásica, Beneficios, Storytelling y Urgencia.
- Countdown timer funcional para estructura Urgencia.
- Sidebar adaptativo según estructura seleccionada.

---

## [v0.2.0] — 2026-06-03

### ✨ Nuevo
- Visualización en explorador embebido como widget interactivo.
- Vista previa en tiempo real en panel derecho del editor.
- Carrusel hero con animación y dots navegables.
- Persistencia con `window.storage`.

---

## [v0.1.0] — 2026-06-03

### ✨ Nuevo — Versión inicial
- Editor con Header, Hero, Servicios, Nosotros, Footer.
- Página "Landings Creadas" con grid de thumbnails.
- Acciones: Vista Previa, Editar, Descargar HTML, Eliminar.
- Exportación como HTML autónomo con Bootstrap 5 CDN.

---

## Archivos del proyecto

```
/mnt/user-data/outputs/
├── landing-creation-v0.4.0.zip   ← ZIP versión anterior
└── landing-creation.zip          ← ZIP última versión

/home/claude/landing-creation/    ← Proyecto activo
├── app/
│   ├── layout.js
│   ├── page.js
│   └── globals.css
├── components/
│   └── LandingBuilder.jsx        ← Componente principal (v0.5.0)
├── public/
├── CHANGELOG.md                  ← Este archivo
├── README.md
├── next.config.js
├── package.json
├── railway.toml
└── .gitignore
```

## Roadmap sugerido

- [ ] v0.6.0 — Sección de precios (pricing cards)
- [ ] v0.6.0 — Formulario de contacto configurable
- [ ] v0.7.0 — Exportación como proyecto Next.js completo
- [ ] v0.7.0 — Responsive preview (mobile/tablet/desktop)
- [ ] v0.8.0 — Galería Unsplash integrada

---

## [v0.6.0] — 2026-06-08

### ✨ Nuevo
- **Estructura Profesional** — nueva plantilla (estructura N°5) inspirada en diseños tipo MentalidadGRC. Incluye:
  - Hero con badge superior configurable, título con acento de color, CTA destacado
  - Sección "Ecosistema 4 Dimensiones" con 4 cards tipo dimensión (tag, título, descripción)
  - Catálogo de Servicios con 3 columnas, ítems con bullet de color acento
  - Plan de Acción en 3 Fases con ícono, número y descripción
  - Footer con layout 2 columnas (info empresa + formulario integrado)
- **Formulario configurable** — nueva pestaña "Formulario" en el editor con dos modos:
  - **Básico** — constructor visual de campos (texto, email, tel, textarea), labels, placeholders, campos requeridos, texto de privacidad, checkbox RGPD, colores de botón y sección
  - **Código Embed** — pegar snippet de HubSpot, Typeform, ActiveCampaign, Mailchimp u otro CRM. Renderiza en el footer de la landing
- **`ProForm` component** — componente React reutilizable que renderiza el formulario según el modo configurado
- **5 estructuras disponibles** en el selector inicial (grid auto-fill)

### 🔧 Modificado
- Footer de estructura Profesional usa layout 2 columnas (info + formulario) en vez del grid 3 columnas clásico
- `buildPreviewHTML` y `LivePreview` manejan la estructura profesional con sus secciones específicas
- Pestaña "Formulario" aparece para todas las estructuras (útil para agregar formulario embed en cualquier landing)
