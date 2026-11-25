# EduShare

## Problema
Muchos estudiantes tienen dificultades para encontrar apuntes, resúmenes, guías y otros materiales que les ayuden a estudiar. Esto ocurre especialmente cuando faltan a clases, no comprenden algún tema o necesitan prepararse para una evaluación. Además, no existe un espacio organizado donde puedan compartir fácilmente sus materiales con otros compañeros.

## Solución
EduShare será una plataforma web donde los estudiantes podrán compartir, buscar, consultar y descargar materiales educativos de diferentes asignaturas. Permitirá organizar los documentos por materias y cursos, facilitando el acceso a información útil. También promoverá la colaboración entre compañeros, el aprendizaje independiente y el apoyo académico.

## Objetivos
- Implementar el registro validando que todos los campos obligatorios estén completos antes de guardar la cuenta.
- Desarrollar el inicio de sesión concediendo acceso solo con credenciales correctas y rechazando las erróneas.
- Configurar Multer para aceptar exclusivamente archivos PDF de hasta 10 MB y rechazar otros formatos o tamaños.
- Construir el buscador filtrando por nombre, asignatura y curso para retornar únicamente los registros coincidentes.
- Habilitar la descarga de archivos configurando la ruta del servidor para entregar el documento original sin alteraciones.
- Clasificar los documentos vinculándolos automáticamente en la base de datos según la asignatura seleccionada.
- Configurar la vista de perfil programando la consulta por ID de usuario para mostrar solo los archivos de la cuenta activa.
- Garantizar la persistencia conectando SQLite y la carpeta local del servidor para mantener los datos tras un reinicio.
- Implementar el módulo de denuncias guardando los reportes en la base de datos y listándolos en el panel administrativo.
- Proteger los recursos validando la sesión para impedir que un usuario modifique o elimine publicaciones ajenas.
- Diseñar una interfaz responsiva utilizando CSS para asegurar una correcta visualización en diferentes dispositivos.

## Habilidades
- Lenguaje TypeScript para el desarrollo.
- Node.js y Express para el backend.
- Multer y pdf-parse para validar archivos PDF.
- Bcrypt para el cifrado de contraseñas.
- SQLite con sqlite3 para la base de datos.
- HTML, CSS y TypeScript en el frontend.
- Git y GitHub para control de versiones.
- Visual Studio Code como entorno de trabajo.
- Diseño de esquemas relacionales.
- Pruebas funcionales y de usabilidad locales.

## Alcance inicial
Registro e inicio de sesión de usuarios.

Publicación de documentos PDF con límite de tamaño.

Búsqueda de documentos por nombre, materia y curso.

Visualización y descarga de documentos compartidos.

## Restricciones
- Solo se permitirán archivos con formato PDF validados mediante Multer en el servidor.
- Cada documento tendrá un tamaño máximo estricto de 10 MB controlado por restricciones de middleware.
- Será necesario iniciar sesión activa para publicar, descargar o gestionar documentos.
- Los archivos físicos se almacenarán localmente en la carpeta uploads del servidor Node.js.
- La base de datos SQLite guardará los registros de usuarios, metadatos y reportes.
- El proyecto se desarrollará localmente ejecutando TypeScript compilado desde Visual Studio Code.
- El control de versiones del código se gestionará exclusivamente mediante Git.
- La moderación de contenido ofensivo o inapropiado se gestionará mediante filtros manuales y denuncias de los usuarios.
- La revisión de reportes y eliminación de contenido será realizada por el administrador en su panel.
- La primera versión funcionará de manera local sin utilizar servicios de almacenamiento en la nube.

## Desarrollo de la aplicación

La interfaz está creada con Expo y React Native para poder ejecutarse en web, Android e iOS. Para iniciar el proyecto:

```bash
npm install
npm run web
```

Para abrir el menú de desarrollo de Expo en lugar de iniciar directamente la versión web, usa `npm start`.

### Estructura del código

- `src/app/`: pantallas y navegación basada en archivos de Expo Router.
- `src/components/`: piezas reutilizables de interfaz, como tarjetas, filtros, formularios y botones; componentes usados juntos en una sola pantalla se agrupan cuando simplifica el código.
- `src/components/app-button.tsx` y `src/components/app-input.tsx`: botón y campo de formulario compartidos.
- Cada uso de `AppButton` puede definir sus propios colores y tamaños mediante propiedades como `backgroundColor`, `textColor`, `height` y `borderRadius`, sin cambiar otros botones.
- Los botones y controles pulsables dan una respuesta háptica al presionarlos; depende de que el dispositivo y el navegador tengan soporte de vibración.
- `src/components/discovery-widgets.tsx`: búsqueda, filtros, banner y estados vacíos de la pantalla de descubrimiento.
- `src/styles/`: estilos reutilizables de componentes.
- `src/hooks/`: estado compartido de materiales y lógica de búsqueda/filtros.
- `src/utils/`: funciones auxiliares compartidas, como la validación del tipo y tamaño del PDF.
- `src/data/`: datos de ejemplo para desarrollar la interfaz.
- `src/types/`: tipos compartidos entre pantallas, componentes y hooks.
- `src/constants/`: colores y estilos compartidos.

Los archivos de código dentro de `src` se mantienen en un máximo de 100 líneas y las funciones también se limitan a 100 líneas. Los estilos reutilizables están en `src/styles/` y las funciones auxiliares compartidas viven en `src/utils/`. Las pantallas se componen con estos módulos para que los cambios de estilo y comportamiento se puedan hacer sin concentrar toda la aplicación en `index.tsx`.

### Estado de esta versión

La interfaz permite explorar y filtrar materiales de ejemplo, guardar recursos en la biblioteca y probar el formulario de publicación con la selección de PDF y límite de 10 MB. Los datos se mantienen solo mientras la aplicación está abierta. La autenticación real, SQLite, el almacenamiento local del servidor, la descarga desde el servidor y la moderación persistente todavía requieren conectar la API descrita en los objetivos; la validación del cliente no sustituye la validación de seguridad del servidor.
