// Encabezado reutilizable para títulos, subtítulos y acceso al perfil.
// Modifica su jerarquía visual aquí; cada pantalla entrega sus textos.
import { StyleSheet, Text, View } from 'react-native';

import { HapticPressable } from '@/components/haptic-pressable';
import { EduShareTheme } from '@/constants/edushare-theme';

// El subtítulo, la etiqueta superior y la acción del avatar son opcionales.
type ScreenHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  onAvatarPress?: () => void;
};

export function ScreenHeader({ eyebrow, title, subtitle, onAvatarPress }: ScreenHeaderProps) {
  // Oculta el contenido opcional si no se proporciona su valor o función.
  return (
    <View style={styles.container}>
      <View style={styles.copy}>
        {eyebrow ? <Text style={styles.eyebrow}>{eyebrow}</Text> : null}
        <Text style={styles.title}>{title}</Text>
        {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      </View>
      {onAvatarPress ? (
        <HapticPressable
          accessibilityRole="button"
          accessibilityLabel="Abrir perfil"
          onPress={onAvatarPress}
          style={styles.avatar}>
          <Text style={styles.avatarText}>D</Text>
        </HapticPressable>
      ) : null}
    </View>
  );
}

// Tipografía y distribución del encabezado y el avatar.
const styles = StyleSheet.create({
  container: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 16 },
  copy: { flex: 1, gap: 5 },
  eyebrow: { color: EduShareTheme.colors.primary, fontSize: 11, fontWeight: '800', letterSpacing: 1.3 },
  title: { color: EduShareTheme.colors.text, fontSize: 27, lineHeight: 33, fontWeight: '900', letterSpacing: -0.7 },
  subtitle: { color: EduShareTheme.colors.muted, fontSize: 13, lineHeight: 19 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: EduShareTheme.colors.primarySoft,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: { color: EduShareTheme.colors.primary, fontSize: 16, fontWeight: '800' },
});
