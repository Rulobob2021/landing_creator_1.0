# LandingBuilder 🚀

Constructor de landing pages estilo WordPress, construido con **Next.js 14 + React + Bootstrap 5**.

## Características

- 🎨 **4 estructuras de landing**: Clásica, Beneficios, Storytelling, Urgencia
- ✏️ **Editor visual en tiempo real** con panel lateral configurable
- 🖼️ **Carrusel hero** con 3 slides (URL o subida de imagen local)
- 📊 **Parámetros UTM** para tracking de campañas
- 💾 **Guardar landings** con persistencia entre sesiones
- 👁️ **Vista previa completa** antes de exportar
- 📥 **Exportar como HTML** autónomo con Bootstrap CDN
- 🗂️ **Página "Landings Creadas"** con grid de thumbnails y acciones

## Secciones configurables

| Sección | Opciones |
|---|---|
| **Header** | Logo (texto/imagen), colores, menú navegable |
| **Hero** | 3 slides con carrusel, título, descripción, botón CTA |
| **Servicios / Beneficios** | Tarjetas con ícono, título y descripción |
| **Nosotros / Historia** | Imagen o video embed, layout configurable |
| **Urgencia** | Countdown timer, badges de confianza, lista incluida |
| **Footer** | Empresa, contacto, redes sociales, copyright |
| **UTM** | Source, Medium, Campaign, Content, Term |

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/raulverac/landing-creation.git
cd landing-creation

# Instalar dependencias
npm install

# Iniciar en desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## Build para producción

```bash
npm run build
npm start
```

## Estructura del proyecto

```
landing-creation/
├── app/
│   ├── layout.js          # Layout principal Next.js
│   ├── page.js            # Página principal (renderiza LandingBuilder)
│   └── globals.css        # Estilos globales
├── components/
│   └── LandingBuilder.jsx # Componente principal de la app
├── public/                # Archivos estáticos
├── CHANGELOG.md           # Bitácora de cambios
├── next.config.js
└── package.json
```

## Tecnologías

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Bootstrap 5.3](https://getbootstrap.com/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)

## Versión actual

**v0.4.0** — Ver [CHANGELOG.md](./CHANGELOG.md) para historial completo.
