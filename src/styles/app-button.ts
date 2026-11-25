// Apariencia predeterminada de AppButton; las propiedades por instancia pueden sobrescribirla.
// Modifica aquí los valores base cuando quieras cambiar todos los botones a la vez.
import { StyleSheet } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

export const buttonStyles = StyleSheet.create({
  // Dimensiones, forma y alineación predeterminadas.
  button: { minHeight: 50, paddingHorizontal: 20, borderRadius: EduShareTheme.radius.pill, justifyContent: 'center', alignItems: 'center' },
  // Tamaño reducido para botones dentro de tarjetas o banners.
  compact: { minHeight: 38, paddingHorizontal: 14 },
  // Colores de fondo según el tipo de acción.
  primary: { backgroundColor: EduShareTheme.colors.primary },
  secondary: { backgroundColor: EduShareTheme.colors.primarySoft },
  ghost: { backgroundColor: 'transparent' },
  danger: { backgroundColor: '#F8EAE8' },
  // Texto base y colores que combinan con cada fondo.
  label: { fontSize: 14, fontWeight: '700' },
  primaryLabel: { color: '#FFFFFF' },
  secondaryLabel: { color: EduShareTheme.colors.primary },
  ghostLabel: { color: EduShareTheme.colors.text },
  dangerLabel: { color: EduShareTheme.colors.danger },
  // Apariencia cuando el botón está desactivado o presionado.
  disabled: { opacity: 0.45 },
  pressed: { opacity: 0.75, transform: [{ scale: 0.98 }] },
});
