// Navegación web con las mismas rutas que móvil; aquí se ajustan etiquetas y estilos.
import {
  Tabs,
  TabList,
  TabTrigger,
  TabSlot,
  TabTriggerSlotProps,
  TabListProps,
} from 'expo-router/ui';
import { View, Text } from 'react-native';

import { HapticPressable } from '@/components/haptic-pressable';
import { tabStyles as styles } from '@/styles/app-tabs-web';

// Organiza el contenido de cada ruta y la barra de navegación inferior.
export default function AppTabs() {
  return (
    <Tabs>
      {/* Renderiza la pantalla activa ocupando el alto disponible. */}
      <TabSlot style={{ height: '100%' }} />
      {/* Sustituye la lista de pestañas por la barra visual personalizada. */}
      <TabList asChild>
        <CustomTabList>
          {/* Cada disparador conecta una etiqueta con su ruta de Expo Router. */}
          <TabTrigger name="index" href="/" asChild>
            <TabButton>Descubrir</TabButton>
          </TabTrigger>
          <TabTrigger name="explore" href="/explore" asChild>
            <TabButton>Mi biblioteca</TabButton>
          </TabTrigger>
        </CustomTabList>
      </TabList>
    </Tabs>
  );
}

// Una pestaña web; el estado seleccionado controla su resaltado.
export function TabButton({ children, isFocused, ref: _slotRef, ...props }: TabTriggerSlotProps) {
  // Ignora el ref del disparador y conserva el resto de sus eventos y propiedades.
  return (
    <HapticPressable {...props} style={({ pressed }) => pressed && styles.pressed}>
      <View style={[styles.tabButtonView, isFocused && styles.selectedTab]}>
        <Text style={[styles.tabLabel, isFocused && styles.selectedLabel]}>{children}</Text>
      </View>
    </HapticPressable>
  );
}

// Contenedor de la marca EduShare y los enlaces de navegación.
export function CustomTabList(props: TabListProps) {
  // Conserva los disparadores recibidos y los coloca junto a la marca.
  return (
    <View {...props} style={styles.tabListContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.brandText}>EduShare</Text>
        {props.children}
      </View>
    </View>
  );
}
