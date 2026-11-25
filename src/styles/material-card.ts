// Estilos visuales de la tarjeta de material.
// Modifica aquí espaciado, colores y tamaños sin tocar su lógica.
import { StyleSheet } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

export const materialCardStyles = StyleSheet.create({
  // Fondo principal de la tarjeta y distribución horizontal.
  card: {
    backgroundColor: EduShareTheme.colors.surface,
    borderRadius: EduShareTheme.radius.medium,
    padding: 14,
    borderWidth: 1,
    borderColor: EduShareTheme.colors.border,
    gap: 12,
  },
  main: { flexDirection: 'row', gap: 14 },
  // Vista previa del documento y su etiqueta PDF.
  cover: {
    width: 82,
    height: 104,
    borderRadius: EduShareTheme.radius.small,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  coverEmoji: { color: EduShareTheme.colors.primary, fontSize: 31, fontWeight: '800' },
  pdfBadge: {
    position: 'absolute',
    bottom: 7,
    left: 7,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 6,
  },
  pdfText: { color: EduShareTheme.colors.danger, fontSize: 9, fontWeight: '900' },
  // Título, materia, autor y estadísticas.
  details: { flex: 1, justifyContent: 'center', gap: 5 },
  title: { color: EduShareTheme.colors.text, fontSize: 15, fontWeight: '800', lineHeight: 20 },
  subject: { color: EduShareTheme.colors.primary, fontSize: 12, fontWeight: '700' },
  meta: { color: EduShareTheme.colors.muted, fontSize: 11 },
  stats: { flexDirection: 'row', gap: 14, marginTop: 2 },
  stat: { color: EduShareTheme.colors.muted, fontSize: 11 },
  // Acciones inferiores y texto para reportar.
  actions: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  report: { color: EduShareTheme.colors.muted, fontSize: 12, fontWeight: '600' },
});
