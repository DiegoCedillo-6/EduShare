// Carga las reglas recomendadas por Expo para revisar el código del proyecto.
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');

// Combina la configuración de Expo y excluye la salida compilada de la revisión.
module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
]);
