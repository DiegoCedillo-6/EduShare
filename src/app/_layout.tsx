// Configura el tema global y el estado compartido disponible en todas las pantallas.
// Modifica aquí proveedores o navegación global, no el contenido de cada pantalla.
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useColorScheme } from 'react-native';

import AppTabs from '@/components/app-tabs';
import { MaterialsProvider } from '@/hooks/use-materials-provider';

import '@/global.css';

// El diseño raíz envuelve todas las rutas con el tema y el estado compartido.
export default function TabLayout() {
  // Elige los colores de navegación según la apariencia configurada en el dispositivo.
  const colorScheme = useColorScheme();
  return (
    // ThemeProvider aplica los colores; MaterialsProvider comparte las publicaciones.
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MaterialsProvider>
        <AppTabs />
      </MaterialsProvider>
    </ThemeProvider>
  );
}
