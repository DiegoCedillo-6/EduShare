// Produce una respuesta táctil breve al comenzar una interacción.
// En plataformas sin soporte de vibración, el dispositivo puede ignorarla.
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

export function triggerPressHaptic() {
  // Android usa su efecto de tecla; iOS y web usan la respuesta de selección.
  const feedback = Platform.OS === 'android'
    ? Haptics.performAndroidHapticsAsync(Haptics.AndroidHaptics.Virtual_Key)
    : Haptics.selectionAsync();

  // Informa si la plataforma rechaza la vibración sin interrumpir la acción del botón.
  void feedback.catch((error: unknown) => {
    console.error('No se pudo activar la respuesta táctil.', error);
  });
}
