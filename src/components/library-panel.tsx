// Perfil, contadores y selector de secciones de la biblioteca en un solo componente.
// Modifica aquí los datos del perfil y las etiquetas de las secciones.
import { Text, View } from 'react-native';

import { HapticPressable } from '@/components/haptic-pressable';
import { libraryPanelStyles as styles } from '@/styles/library-panel';
import type { Material } from '@/types/material';

// Las dos secciones disponibles en la biblioteca.
export type LibrarySection = 'saved' | 'shared';

// Propiedades públicas para que la pantalla controle la sección seleccionada.
type LibraryPanelProps = {
  materials: Material[];
  selected: LibrarySection;
  onSelect: (section: LibrarySection) => void;
};

// Etiquetas de las secciones que se pueden seleccionar.
const sections: { value: LibrarySection; label: string }[] = [
  { value: 'saved', label: 'Guardados' },
  { value: 'shared', label: 'Mis publicaciones' },
];

export function LibraryPanel({ materials, selected, onSelect }: LibraryPanelProps) {
  // Cuenta guardados y publicaciones propias para mantener los números sincronizados.
  const savedCount = materials.filter((material) => material.isSaved).length;
  const sharedCount = materials.filter((material) => material.isMine).length;

  // Muestra los datos del perfil, los contadores y el selector de sección.
  return (
    <>
      <View style={styles.profile}>
        <View style={styles.avatar}><Text style={styles.avatarLetter}>D</Text></View>
        <View style={styles.profileCopy}>
          <Text style={styles.profileName}>Tu perfil</Text>
          <Text style={styles.profileEmail}>Estudiante de EduShare</Text>
        </View>
        <Text style={styles.profileMark}>✦</Text>
      </View>
      <View style={styles.stats}>
        <StatCard value={savedCount} label="Guardados" />
        <StatCard value={sharedCount} label="Compartidos" />
      </View>
      <View style={styles.segment}>
        {sections.map(({ value, label }) => {
          // Resalta la sección activa y avisa su selección a la pantalla.
          const active = selected === value;
          return (
            <HapticPressable
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              key={value}
              onPress={() => onSelect(value)}
              style={[styles.option, active && styles.activeOption]}>
              <Text style={[styles.label, active && styles.activeLabel]}>{label}</Text>
            </HapticPressable>
          );
        })}
      </View>
    </>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  // Tarjeta pequeña reutilizable para mostrar un contador.
  return (
    <View style={styles.statCard}>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}
