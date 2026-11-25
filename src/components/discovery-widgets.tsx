// Elementos pequeños que solo utiliza la pantalla de descubrimiento.
// Modifica búsqueda, filtros, banner o mensajes vacíos aquí; sus estilos están en src/styles/discovery.ts.
import type { ReactNode } from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';

import { HapticPressable } from '@/components/haptic-pressable';
import { discoveryStyles as styles } from '@/styles/discovery';
import { EduShareTheme } from '@/constants/edushare-theme';
import { AppButton } from '@/components/app-button';

// Propiedades del componente que muestra una lista sin resultados.
type EmptyStateProps = { emoji: string; title: string; description: string; action?: ReactNode };

// El campo de búsqueda avisa a la pantalla cuando cambia el texto.
export function SearchField({ value, onChangeText }: { value: string; onChangeText: (value: string) => void }) {
  // Conserva el valor controlado por la pantalla y le notifica cada cambio.
  return (
    <View style={styles.search}>
      <Text style={styles.searchIcon}>⌕</Text>
      <TextInput accessibilityLabel="Buscar por material, materia o curso" placeholder="Busca apuntes, materias..." placeholderTextColor={EduShareTheme.colors.muted} value={value} onChangeText={onChangeText} style={styles.input} returnKeyType="search" />
    </View>
  );
}

// Los filtros horizontales informan a la pantalla qué materia se seleccionó.
export function SubjectFilter({ subjects, selected, onSelect }: { subjects: string[]; selected: string; onSelect: (value: string) => void }) {
  // Marca la materia activa y comunica cualquier selección a la pantalla.
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.subjectList}>
      {subjects.map((subject) => {
        const active = selected === subject;
        return <HapticPressable accessibilityRole="button" accessibilityState={{ selected: active }} key={subject} onPress={() => onSelect(subject)} style={[styles.chip, active && styles.activeChip]}><Text style={[styles.chipLabel, active && styles.activeChipLabel]}>{subject}</Text></HapticPressable>;
      })}
    </ScrollView>
  );
}

// Invita a compartir; la pantalla decide qué hacer al tocar el botón.
export function FeatureBanner({ onShare }: { onShare: () => void }) {
  // El botón delega la apertura del formulario a quien usa el banner.
  return (
    <View style={styles.banner}>
      <View style={styles.bannerCopy}>
        <Text style={styles.eyebrow}>¿TIENES APUNTES?</Text>
        <Text style={styles.bannerTitle}>Lo que sabes puede ayudar.</Text>
        <Text style={styles.bannerBody}>Comparte tus materiales con tu comunidad.</Text>
        <AppButton
          label="+  Compartir material"
          compact
          backgroundColor="#426B50"
          textColor="#FFFFFF"
          height={37}
          borderRadius={12}
          onPress={onShare}
          style={styles.shareButton}
        />
      </View>
      <Text style={styles.books}>📚</Text>
    </View>
  );
}

// Mensaje reutilizable para resultados vacíos; `action` permite añadir un botón.
export function EmptyState({ emoji, title, description, action }: EmptyStateProps) {
  // Muestra un mensaje alternativo y una acción opcional cuando no hay resultados.
  return <View style={styles.empty}><Text style={styles.emptyEmoji}>{emoji}</Text><Text style={styles.emptyTitle}>{title}</Text><Text style={styles.emptyDescription}>{description}</Text>{action}</View>;
}
