// Estilos del conjunto de controles de descubrimiento.
// Ajusta aquí la búsqueda, los chips, el banner y el mensaje vacío.
import { StyleSheet } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

export const discoveryStyles = StyleSheet.create({
  // Campo de búsqueda y filtros de materias con desplazamiento horizontal.
  search: { height: 54, flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 16, borderRadius: EduShareTheme.radius.medium, backgroundColor: EduShareTheme.colors.surface, borderWidth: 1, borderColor: EduShareTheme.colors.border },
  searchIcon: { color: EduShareTheme.colors.primary, fontSize: 28 },
  input: { flex: 1, color: EduShareTheme.colors.text, fontSize: 14 },
  subjectList: { gap: 8, paddingRight: 20 },
  chip: { paddingHorizontal: 16, paddingVertical: 10, borderRadius: EduShareTheme.radius.pill, backgroundColor: EduShareTheme.colors.surface, borderWidth: 1, borderColor: EduShareTheme.colors.border },
  activeChip: { backgroundColor: EduShareTheme.colors.primary, borderColor: EduShareTheme.colors.primary },
  chipLabel: { color: EduShareTheme.colors.muted, fontSize: 13, fontWeight: '600' },
  activeChipLabel: { color: '#FFFFFF' },
  // Banner promocional y su botón independiente para compartir.
  banner: { minHeight: 174, backgroundColor: EduShareTheme.colors.primarySoft, borderRadius: EduShareTheme.radius.large, padding: 20, flexDirection: 'row', alignItems: 'center', overflow: 'hidden' },
  bannerCopy: { flex: 1, alignItems: 'flex-start', justifyContent: 'center', gap: 7, zIndex: 1 },
  eyebrow: { color: EduShareTheme.colors.primary, fontSize: 9, fontWeight: '900', letterSpacing: 1.1 },
  bannerTitle: { maxWidth: 230, color: EduShareTheme.colors.text, fontSize: 20, lineHeight: 24, fontWeight: '900' },
  bannerBody: { color: EduShareTheme.colors.muted, fontSize: 11 },
  shareButton: { marginTop: 6, minHeight: 37, paddingHorizontal: 13 },
  books: { fontSize: 53, transform: [{ rotate: '-9deg' }] },
  // Mensaje que aparece cuando la búsqueda o el filtro no encuentra materiales.
  empty: { alignItems: 'center', padding: 25, gap: 10, backgroundColor: EduShareTheme.colors.surface, borderRadius: EduShareTheme.radius.medium },
  emptyEmoji: { fontSize: 30 },
  emptyTitle: { color: EduShareTheme.colors.text, fontSize: 15, fontWeight: '800', textAlign: 'center' },
  emptyDescription: { color: EduShareTheme.colors.muted, fontSize: 12, lineHeight: 18, textAlign: 'center' },
});
