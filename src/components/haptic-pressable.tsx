// Pressable reutilizable que activa respuesta táctil al comenzar cada pulsación.
// Úsalo para controles interactivos que no sean AppButton.
import { Pressable, type PressableProps } from 'react-native';

import { triggerPressHaptic } from '@/utils/press-haptics';

export function HapticPressable({ disabled, onPressIn, ...props }: PressableProps) {
  // Conserva las propiedades originales y vibra al tocar, salvo que esté desactivado.
  return (
    <Pressable
      {...props}
      disabled={disabled}
      onPressIn={(event) => {
        if (!disabled) triggerPressHaptic();
        onPressIn?.(event);
      }}
    />
  );
}
