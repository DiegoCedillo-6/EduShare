// Estilos de la navegación web para mantener su presentación fuera del componente.
// Modifica aquí la posición de la barra y el aspecto de las pestañas.
import { StyleSheet } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

export const tabStyles = StyleSheet.create({
  // Barra flotante centrada en la parte inferior de la página.
  tabListContainer: {
    position: 'absolute',
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  // Fila interior con marca, pestañas y fondo común.
  innerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 32,
    borderRadius: 32,
    flexDirection: 'row',
    alignItems: 'center',
    flexGrow: 1,
    gap: 8,
    maxWidth: 800,
    backgroundColor: EduShareTheme.colors.surface,
  },
  // Mantiene la marca a la izquierda y las pestañas agrupadas a la derecha.
  brandText: { marginRight: 'auto' },
  // Reduce la opacidad de una pestaña durante la pulsación.
  pressed: { opacity: 0.7 },
  // Espaciado común de cada pestaña y apariencia de la opción seleccionada.
  tabButtonView: { paddingVertical: 4, paddingHorizontal: 16, borderRadius: 16 },
  tabLabel: { color: EduShareTheme.colors.muted, fontSize: 13 },
  selectedTab: { backgroundColor: EduShareTheme.colors.primarySoft },
  selectedLabel: { color: EduShareTheme.colors.primary, fontWeight: '700' },
});
