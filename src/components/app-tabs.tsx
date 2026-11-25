// Navegación inferior nativa para Android/iOS.
// Modifica nombres, iconos o colores de las pestañas aquí.
import { NativeTabs } from 'expo-router/native-tabs';

import { EduShareTheme } from '@/constants/edushare-theme';

// Barra de navegación inferior nativa para iOS y Android.
export default function AppTabs() {
  return (
    // Cada opción lleva a una pantalla gestionada por Expo Router.
    <NativeTabs
      backgroundColor={EduShareTheme.colors.background}
      indicatorColor={EduShareTheme.colors.primarySoft}
      labelStyle={{ selected: { color: EduShareTheme.colors.primary } }}>
      {/* Ruta principal para buscar materiales compartidos. */}
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Descubrir</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/home.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>

      {/* Ruta de biblioteca personal y publicaciones propias. */}
      <NativeTabs.Trigger name="explore">
        <NativeTabs.Trigger.Label>Mi biblioteca</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon
          src={require('@/assets/images/tabIcons/explore.png')}
          renderingMode="template"
        />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
