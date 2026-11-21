# Formatear JSON

Ordena y da formato a JSON minificado o desordenado, o compáctalo en una sola línea, todo en tu navegador.

Herramienta gratuita y de código abierto de [SonhoLab](https://sonholab.com). Corre **100 % en el navegador**: los archivos no se suben a ningún servidor.

> Licencia: **MIT** · Autor: Leandro Manuel Perez Montañana · Idiomas de la interfaz: español, inglés, francés, portugués (BR), alemán, hindi, indonesio y ruso.

## Qué hace

Cuando trabajas con APIs, archivos de configuración o datos que vienen de otro sistema, es común recibir un JSON minificado: todo el contenido apretado en una sola línea, imposible de leer a simple vista. Esta herramienta lo reordena con sangría y saltos de línea para que puedas revisarlo con claridad, y también hace el trabajo inverso: comprime un JSON bien formateado en una línea compacta cuando lo necesitas para un archivo de configuración o para ahorrar espacio.

**Cuándo te sirve:**

- Una API devuelve la respuesta como un bloque de texto minificado y necesitas leerla con claridad para encontrar el campo que buscas o depurar un error.
- Alguien te pasó un JSON de configuración copiado de un chat o un foro, todo apretado en una línea, y quieres revisarlo antes de usarlo en tu proyecto.
- Tienes un JSON bien formateado en tu editor y necesitas comprimirlo en una sola línea para pegarlo en una variable de entorno o reducir el tamaño de un archivo.

## Cómo se usa

1. **Pega tu JSON.** Copia el texto JSON, ya sea minificado o mal ordenado, y pégalo en el cuadro de texto. No hace falta que tenga ningún formato en particular: la herramienta lo procesa tal cual llega.
2. **Elige formatear o minificar.** Haz clic en 'Formatear' para ordenarlo con sangría de dos espacios y saltos de línea, o en 'Minificar' si necesitas el resultado contrario: todo comprimido en una sola línea.
3. **Copia el resultado.** El JSON procesado aparece al instante, listo para copiar con un clic y pegarlo donde lo necesites: tu editor de código, la documentación o el archivo de configuración.

## Qué necesita para funcionar

### Para instalarla y compilarla

- [Node.js](https://nodejs.org) 18 o superior (probado con Node 22) y npm.
- Conexión a internet **solo** durante `npm install`. Una vez compilada, la herramienta no pide nada a internet.

### Complementos específicos de esta herramienta

- **Ninguno.** No usa modelos, binarios ni servicios externos: todo está en el código y en dependencias normales de npm.

### En el navegador de quien la usa

- Cualquier navegador moderno (Chrome, Edge, Firefox, Safari). No necesita permisos especiales.

## Instalación

```bash
git clone https://github.com/nanoizax/herramienta-formatear-json.git
cd herramienta-formatear-json
npm install
npm run dev         # servidor de desarrollo en http://localhost:5173
```

Para publicarla:

```bash
npm run build       # genera la carpeta dist/
npm run preview     # probar la versión compilada
```

Esta herramienta **no tiene servidor propio**: todo ocurre en el navegador de quien la usa. Basta con publicar la carpeta `dist/` en cualquier hosting estático (GitHub Pages, Netlify, Cloudflare Pages, Nginx, Apache...).

## Cómo está organizado

```
src/pages/tools/   La página de la herramienta (interfaz y lógica de pantalla)
src/lib/tools/     La lógica de la herramienta, separada de la interfaz
src/components/    Piezas compartidas (zona de arrastre de archivos, botón)
src/locales/       Textos en 8 idiomas (esta herramienta solamente)
src/i18n.ts        Configuración de idiomas
```

## Cómo meterla en tu propia plataforma

1. **Como página aparte:** publica `dist/` en una ruta de tu sitio, por ejemplo `/herramientas/formatear-json/`. Si la sirves en una subcarpeta, define `base` en `vite.config.ts`.
2. **Dentro de tu aplicación React:** copia `src/pages/tools/*Page.tsx`, `src/lib/tools/` y `src/components/` a tu proyecto, instala las mismas dependencias de `package.json` y renderiza la página donde quieras.
3. **Con tu diseño:** el marco de la página (título, ayuda, preguntas frecuentes) está en `src/components/tools/ToolPageLayout.tsx` y es intencionalmente simple. Cámbialo por tu cabecera, tu pie y tus estilos; solo necesita pintar `children`.
4. **Con tu analítica:** `src/lib/hitCounter.ts` no hace nada. Si quieres medir el uso, conéctalo ahí a tu propia herramienta.

## Privacidad

Todo el procesamiento ocurre en el navegador. Esta copia no incluye analítica, cookies, contadores ni llamadas a ningún servidor propio. Los archivos del usuario no salen de su equipo.

## Preguntas frecuentes

**¿El JSON que pego se sube a algún servidor?**  
No. Todo el procesamiento ocurre en tu navegador con JavaScript: el texto nunca viaja por internet ni queda guardado en ningún lado. Si cierras la pestaña, desaparece por completo.

**¿Por qué me dice que mi JSON es inválido si lo copié de una API real?**  
La herramienta solo puede formatear JSON que ya es sintácticamente válido. Errores comunes como una coma sobrante al final, una clave sin comillas o una comilla que falta hacen que el análisis falle, y la herramienta te muestra el mensaje de error exacto y en qué parte del texto está el problema, pero no lo corrige de forma automática.

**¿Formatear JSON es gratis y sin límite de uso?**  
Sí, es gratis y no hay límite de veces que puedas usarlo: como no se sube nada a un servidor, no hay costo que cobrarte. Tampoco pedimos registro ni correo electrónico.

**¿Cuál es la diferencia entre formatear y minificar?**  
Formatear agrega sangría de dos espacios y saltos de línea para que el JSON se lea con claridad. Minificar hace lo contrario: quita todos los espacios y saltos de línea innecesarios para dejarlo en una sola línea compacta, útil cuando el tamaño del archivo importa.

**¿Puede reparar un JSON con errores de sintaxis?**  
No. La herramienta detecta y describe el error, pero no intenta adivinar ni corregir automáticamente comas sobrantes, comillas faltantes o claves sin comillas. Hay que corregir el texto a mano y volver a intentarlo.

## Licencia

Este proyecto se publica bajo la licencia **MIT**. El texto completo está en [LICENSE](LICENSE).

Las dependencias tienen sus propias licencias, listadas en [THIRD-PARTY.md](THIRD-PARTY.md).

## Más herramientas gratuitas

Esta es una de las herramientas gratuitas de SonhoLab. Encuentra el resto, cada una con su repositorio, en https://sonholab.com/es/herramientas.

---

Hecho por Leandro Manuel Perez Montañana.
