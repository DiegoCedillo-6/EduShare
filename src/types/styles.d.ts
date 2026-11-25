// Declara módulos CSS para permitir importarlos desde TypeScript.
// Modifica estas declaraciones solo si cambia el uso de archivos CSS.
// Permite importar archivos CSS globales desde TypeScript.
declare module '*.css';

// Define los nombres de clase disponibles al importar módulos CSS.
declare module '*.module.css' {
  const classes: Record<string, string>;
  export default classes;
}
