#!/usr/bin/env node

// Pregunta cómo conservar los archivos actuales antes de ejecutar el reinicio.
const readline = require("readline");
const { moveDirectories } = require("./reset-project-actions");

// Lee la respuesta, valida la opción y cierra la interfaz interactiva al terminar.
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.question("¿Mover los archivos actuales a /example en vez de eliminarlos? (Y/n): ", (answer) => {
  const choice = answer.trim().toLowerCase() || "y";
  if (choice === "y" || choice === "n") {
    moveDirectories(choice).finally(() => rl.close());
    return;
  }
  console.log("Opción no válida. Escribe 'Y' o 'N'.");
  rl.close();
});
