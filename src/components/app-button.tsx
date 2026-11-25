// Botón compartido con respuesta táctil; cada uso puede personalizar su apariencia.
// Cambia las propiedades disponibles aquí; cada pantalla proporciona su acción.
import {
  Text,
  type ColorValue,
  type DimensionValue,
  type PressableProps,
  type TextStyle,
  type ViewStyle,
} from 'react-native';

import { HapticPressable } from '@/components/haptic-pressable';
import { buttonStyles as styles } from '@/styles/app-button';

// Propiedades para personalizar cada botón sin modificar los demás.
type AppButtonProps = PressableProps & {
  label: string; // Texto visible del botón.
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'; // Apariencia según importancia o tipo de acción.
  compact?: boolean; // Reduce el alto y el espacio horizontal.
  backgroundColor?: ColorValue; // Permite cambiar el fondo solo de este botón.
  textColor?: ColorValue; // Permite cambiar el color del texto solo de este botón.
  width?: DimensionValue; // Ancho opcional; acepta números o porcentajes.
  height?: number; // Alto opcional.
  paddingHorizontal?: number; // Espacio horizontal interior.
  borderRadius?: number; // Redondeo de las esquinas.
  fontSize?: number; // Tamaño del texto.
  style?: ViewStyle; // Estilos extra del contenedor.
  textStyle?: TextStyle; // Estilos extra del texto.
};

// Combina las propiedades de accesibilidad y eventos de Pressable con los estilos del botón.
export function AppButton({
  label,
  variant = 'primary',
  compact = false,
  disabled,
  backgroundColor,
  textColor,
  width,
  height,
  paddingHorizontal,
  borderRadius,
  fontSize,
  style,
  textStyle,
  ...pressableProps
}: AppButtonProps) {
  // El rol mejora accesibilidad, `disabled` bloquea la acción y se propagan eventos extra.
  // Los estilos combinan la variante, el estado de pulsación y los ajustes de esta instancia.
  return (
    <HapticPressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.button, // Forma y alineación base para todas las variantes.
        compact && styles.compact, // Tamaño reducido opcional.
        styles[variant], // Color de fondo seleccionado por `variant`.
        disabled && styles.disabled, // Apariencia visual de botón desactivado.
        pressed && !disabled && styles.pressed, // Efecto temporal mientras se presiona.
        {
          backgroundColor,
          width,
          height,
          minHeight: height ?? (compact ? 38 : 50),
          paddingHorizontal,
          borderRadius,
        },
        style, // Estilo adicional enviado por quien usa el componente.
      ]}
      {...pressableProps}>
      {/* El texto combina la variante con los estilos exclusivos de este botón. */}
      <Text style={[
        styles.label,
        styles[`${variant}Label`],
        // Estos valores solo afectan la etiqueta de esta instancia.
        { color: textColor, fontSize },
        textStyle,
      ]}>{label}</Text>
    </HapticPressable>
  );
}
