// Ejecuta las operaciones de archivos del comando interactivo de reinicio.
// El usuario elige si los archivos actuales se mueven o se eliminan.
const fs = require("fs");
const path = require("path");
const config = require("./reset-project-config");

// Aplica la opción elegida y vuelve a crear las rutas mínimas de Expo Router.
async function moveDirectories(userInput) {
  const root = process.cwd();
  const examplePath = path.join(root, config.exampleDir);
  try {
    if (userInput === "y") {
      // Prepara las carpetas donde se guardará el código anterior.
      await fs.promises.mkdir(path.join(examplePath, "assets/images"), { recursive: true });
      console.log(`📁 Carpeta /${config.exampleDir} creada.`);
    }

    // Conserva o elimina las carpetas principales, según la respuesta recibida.
    for (const dir of config.oldDirs) {
      const oldPath = path.join(root, dir);
      if (!fs.existsSync(oldPath)) {
        console.log(`➡️ /${dir} no existe; se omite.`);
      } else if (userInput === "y") {
        await fs.promises.rename(oldPath, path.join(examplePath, dir));
        console.log(`➡️ /${dir} se movió a /${config.exampleDir}/${dir}.`);
      } else {
        await fs.promises.rm(oldPath, { recursive: true, force: true });
        console.log(`❌ /${dir} se eliminó.`);
      }
    }

    // Conserva o elimina los recursos de demostración junto con el código anterior.
    for (const asset of config.exampleAssets) {
      const oldPath = path.join(root, "assets/images", asset);
      if (!fs.existsSync(oldPath)) continue;
      if (userInput === "y") {
        await fs.promises.rename(oldPath, path.join(examplePath, "assets/images", asset));
        console.log(`➡️ /assets/images/${asset} se movió a /${config.exampleDir}/assets/images/${asset}.`);
      } else {
        await fs.promises.rm(oldPath, { recursive: true, force: true });
        console.log(`❌ /assets/images/${asset} se eliminó.`);
      }
    }

    // Crea la nueva carpeta de rutas y escribe las plantillas configuradas.
    const appPath = path.join(root, config.newAppDir);
    await fs.promises.mkdir(appPath, { recursive: true });
    console.log("\n📁 Nueva carpeta /src/app creada.");
    await fs.promises.writeFile(path.join(appPath, "index.tsx"), config.indexContent);
    console.log("📄 Se creó src/app/index.tsx.");
    await fs.promises.writeFile(path.join(appPath, "_layout.tsx"), config.layoutContent);
    console.log("📄 Se creó src/app/_layout.tsx.");
    console.log("\n✅ Reinicio terminado. Próximos pasos:");
    console.log(
      `1. Ejecuta \`npx expo start\` para iniciar el servidor.\n2. Edita src/app/index.tsx para modificar la pantalla principal.\n3. Guarda el código de la aplicación en /src; usa /src/app para pantallas y navegación.${
        userInput === "y" ? `\n4. Elimina la carpeta /${config.exampleDir} cuando ya no necesites la copia.` : ""
      }`,
    );
  } catch (error) {
    // Comunica el fallo al usuario y evita informar que el reinicio terminó bien.
    console.error(`Error al reiniciar el proyecto: ${error.message}`);
    process.exitCode = 1;
  }
}

// Expone la operación para que el archivo interactivo mantenga solo la entrada de usuario.
module.exports = { moveDirectories };
