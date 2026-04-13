# AGARRA Creators - V2 Dinámica

## Para el Equipo de Desarrollo:
Este proyecto está escrito en Vanilla Web Stack (HTML5 nativo, CSS puro y Vanilla JS) para tener un control granular sobre las interacciones 3D avanzadas sin depender de librerías complejas. 

- **Efectos Interactivos**: Las funciones de Paralaje (Parallax), Inclinación 3D (Tilt) vinculada al ratón, Resplandor de iluminación dinámico (Glare) y Zoom extendido cinemático están contenidas directamente en main.js. Modificar los valores allí afectará a nivel general toda la experiencia.
- **Variables Globales**: Los colores base de la Identidad Visual de AGARRA están definidos en variables nativas en la parte superior del style.css bajo :root para un ajuste rápido.
- **Producción**: Listo para producción local e interna al igual que en Vercel, Netlify o un CPanel estándar FTP. Si requieren incorporarlo sobre React, Next.js, etc, la lógica del IntersectionObserver fue aislada modudarmente con clases CSS para facilitar la importación como un hook global (useEffect).
