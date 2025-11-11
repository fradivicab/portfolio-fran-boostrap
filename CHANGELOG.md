# Historial de Cambios (Changelog)

Todos los cambios notables en este proyecto serán documentados en este archivo.
El formato se basa en "Keep a Changelog", y este proyecto adhiere al versionado semántico.

## [Desarrollo - coderh-4] - 2025-11-11

### Añadido (Added)
- Nuevas imagenes de apple y de asuncion

### Cambiado (Changed)
- Refactorización de todas las paginas html buscando usar fuentes modernas y bootstrap

### Corregido (Fixed)
- Corregida la ortografia de algunos puntos


## [Desarrollo - coderh-2] - 2025-11-10

### Añadido (Added)
- Integración de la sección "Acerca de" con componente Accordion de Bootstrap.
- Implementación de la funcionalidad mailto: con asunto predefinido.
- Se agregó el archivo .gitignore.

### Cambiado (Changed)
- Refactorización de todas las rutas de recursos (imágenes, CSS, JS) a rutas relativas (usando `../` en subcarpetas) para asegurar el correcto funcionamiento en GitHub Pages.
- Se ajustó el sistema de espaciado en la Navbar para usar `ms-auto` solo en el contenedor principal, solucionando el problema de la separación excesiva en escritorio.

### Corregido (Fixed)
- Solucionado el problema de visibilidad en móvil: se unificó el contenido de las dos secciones colapsables (`navbarSupportedContent` y `navbarSupportedContent2`) en un solo ID.
- Corregida la URL del enlace de WhatsApp a `wa.me`.

## [v1.0.0 - Lanzamiento Inicial] - 2025-11-09

### Añadido (Added)
- Estructura base del Portafolio con Bootstrap 5.
- Componente Navbar totalmente responsivo.
- Sección principal con texto de bienvenida y alineación de imagen.
- Inclusión de utilidades de margen (`mt-5`, `mb-3`) para espaciado consistente.