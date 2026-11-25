// Estilos del panel combinado de perfil, estadísticas y pestañas de biblioteca.
// Modifica aquí su distribución y apariencia.
import { StyleSheet } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

export const libraryPanelStyles = StyleSheet.create({
  // Encabezado del perfil, avatar e identidad del estudiante.
  profile: {
    minHeight: 76,
    padding: 14,
    borderRadius: EduShareTheme.radius.medium,
    backgroundColor: EduShareTheme.colors.surface,
    borderWidth: 1,
    borderColor: EduShareTheme.colors.border,
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
  },
  avatar: { width: 46, height: 46, borderRadius: 23, backgroundColor: EduShareTheme.colors.primarySoft, alignItems: 'center', justifyContent: 'center' },
  avatarLetter: { color: EduShareTheme.colors.primary, fontSize: 18, fontWeight: '900' },
  profileCopy: { flex: 1, gap: 4 },
  profileName: { color: EduShareTheme.colors.text, fontSize: 14, fontWeight: '800' },
  profileEmail: { color: EduShareTheme.colors.muted, fontSize: 12 },
  profileMark: { color: EduShareTheme.colors.primary, fontSize: 18 },
  // Contadores de materiales guardados y compartidos.
  stats: { flexDirection: 'row', gap: 10 },
  statCard: { flex: 1, padding: 15, backgroundColor: EduShareTheme.colors.surface, borderRadius: EduShareTheme.radius.medium, borderWidth: 1, borderColor: EduShareTheme.colors.border, gap: 4 },
  statValue: { color: EduShareTheme.colors.text, fontSize: 22, fontWeight: '900' },
  statLabel: { color: EduShareTheme.colors.muted, fontSize: 11 },
  // Selector de secciones y etiquetas seleccionadas o inactivas.
  segment: { padding: 4, borderRadius: EduShareTheme.radius.pill, backgroundColor: '#ECEEE8', flexDirection: 'row' },
  option: { flex: 1, minHeight: 41, alignItems: 'center', justifyContent: 'center', borderRadius: EduShareTheme.radius.pill },
  activeOption: { backgroundColor: EduShareTheme.colors.surface },
  label: { color: EduShareTheme.colors.muted, fontSize: 12, fontWeight: '700' },
  activeLabel: { color: EduShareTheme.colors.text },
});
