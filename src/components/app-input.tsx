// Campo de formulario compartido con etiqueta y mensaje de error opcional.
// Modifica estilos aquí; cada formulario controla el valor y su validación.
import { StyleSheet, Text, TextInput, View, type TextInputProps } from 'react-native';

import { EduShareTheme } from '@/constants/edushare-theme';

// Amplía el campo nativo con una etiqueta visible y un mensaje de error opcional.
type AppInputProps = TextInputProps & {
  label: string;
  error?: string;
};

export function AppInput({ label, error, style, ...inputProps }: AppInputProps) {
  // La etiqueta nombra el campo; las propiedades restantes configuran el TextInput.
  return (
    <View style={styles.group}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        accessibilityLabel={label}
        placeholderTextColor={EduShareTheme.colors.muted}
        // El borde cambia cuando se muestra un error; `style` permite personalizar el campo.
        style={[styles.input, error && styles.inputError, style]}
        {...inputProps}
      />
      {/* El error solo aparece cuando el formulario entrega un mensaje. */}
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

// Dimensiones y colores comunes; cada formulario puede sobrescribir el estilo.
const styles = StyleSheet.create({
  group: { gap: 7 },
  label: { color: EduShareTheme.colors.text, fontSize: 13, fontWeight: '700' },
  input: { minHeight: 50, borderWidth: 1, borderColor: EduShareTheme.colors.border, borderRadius: EduShareTheme.radius.small, paddingHorizontal: 15, backgroundColor: EduShareTheme.colors.surface, color: EduShareTheme.colors.text, fontSize: 15 },
  inputError: { borderColor: EduShareTheme.colors.danger },
  error: { color: EduShareTheme.colors.danger, fontSize: 12 },
});
