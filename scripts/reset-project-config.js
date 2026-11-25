// Configuración y plantillas que utiliza el comando para reiniciar el proyecto Expo.
// Modifica estas rutas si cambian las carpetas o archivos de demostración.

// Define las carpetas que se conservan como ejemplo o se eliminan al reiniciar.
const oldDirs = ["src", "scripts"];
const exampleDir = "example";
const newAppDir = "src/app";

// Enumera recursos de demostración que también se mueven o eliminan.
const exampleAssets = [
  "expo-badge.png",
  "expo-badge-white.png",
  "expo-logo.png",
  "logo-glow.png",
  "react-logo.png",
  "react-logo@2x.png",
  "react-logo@3x.png",
  "tutorial-web.png",
  "tabIcons",
];

// Contenido inicial de la pantalla vacía que se crea después del reinicio.
const indexContent = `import { Text, View, StyleSheet } from "react-native";

// Pantalla de inicio vacía para continuar desarrollando después del reinicio.
export default function Index() {
  return <View style={styles.container}><Text>Edit src/app/index.tsx to edit this screen.</Text></View>;
}

// Centra el contenido de ejemplo en toda la pantalla.
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
`;

// Diseño raíz que Expo Router utiliza para presentar la pantalla inicial.
const layoutContent = `import { Stack } from "expo-router";

// Pila de navegación raíz que Expo Router usa para las pantallas.
export default function RootLayout() {
  return <Stack />;
}
`;

// Comparte la configuración sin ejecutar ninguna acción del sistema de archivos.
module.exports = { oldDirs, exampleDir, newAppDir, exampleAssets, indexContent, layoutContent };
