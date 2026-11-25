// Estilos del formulario modal para publicar materiales.
// Modifica aquí su distribución, colores y campos visuales.
import { StyleSheet } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

export const uploadStyles = StyleSheet.create({
  // Fondo oscurecido y panel modal anclado en la parte inferior.
  overlay: { flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(25, 30, 25, 0.42)' },
  sheet: {
    maxHeight: '90%',
    borderTopLeftRadius: EduShareTheme.radius.large,
    borderTopRightRadius: EduShareTheme.radius.large,
    backgroundColor: EduShareTheme.colors.background,
  },
  handle: { width: 38, height: 4, borderRadius: 2, alignSelf: 'center', backgroundColor: '#C8CCC4', marginTop: 10 },
  // Espaciado del formulario, título y texto de ayuda.
  content: { padding: 22, paddingBottom: 36, gap: 16 },
  title: { color: EduShareTheme.colors.text, fontSize: 24, fontWeight: '900' },
  subtitle: { color: EduShareTheme.colors.muted, fontSize: 13, marginTop: -10 },
  // Acción para elegir un archivo y nombre del PDF seleccionado.
  fileButton: {
    minHeight: 68,
    borderRadius: EduShareTheme.radius.small,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: EduShareTheme.colors.primary,
    backgroundColor: EduShareTheme.colors.primarySoft,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  fileIcon: { color: EduShareTheme.colors.primary, fontSize: 27 },
  fileCopy: { flex: 1, gap: 3 },
  fileTitle: { color: EduShareTheme.colors.text, fontSize: 13, fontWeight: '700' },
  fileHint: { color: EduShareTheme.colors.muted, fontSize: 11 },
  // Mensaje de validación que aparece debajo de los campos.
  error: { color: EduShareTheme.colors.danger, fontSize: 12 },
});
