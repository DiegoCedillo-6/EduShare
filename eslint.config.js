// Carga las reglas recomendadas por Expo para revisar el código del proyecto.
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

// Evita analizar los archivos generados durante la exportación web.
module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
