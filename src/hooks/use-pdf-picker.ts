// Abre el selector del dispositivo y conserva el PDF válido elegido por el usuario.
// Modifica aquí el flujo del selector; el límite y reglas están en utils/pdf-validation.
import { useState } from 'react';
import { Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { getPdfValidationError } from '@/utils/pdf-validation';

type PdfFile = DocumentPicker.DocumentPickerAsset;

export function usePdfPicker() {
  // Guarda el archivo elegido y el mensaje de validación para el usuario.
  const [file, setFile] = useState<PdfFile | null>(null);
  const [error, setError] = useState('');
  // Quita la selección actual cuando se publica o se cierra el formulario.
  const resetFile = () => setFile(null);

  // Abre el selector del dispositivo y valida el archivo seleccionado.
  const choosePdf = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
        copyToCacheDirectory: true,
      });
      // Si el usuario cancela, conserva el archivo actual y no muestra error.
      if (result.canceled) return;

      // Valida los datos del primer archivo seleccionado antes de aceptarlo.
      const selectedFile = result.assets[0];
      const validationError = getPdfValidationError(selectedFile);
      if (validationError) return setError(validationError);

      // Guarda el PDF validado y limpia cualquier error anterior.
      setFile(selectedFile);
      setError('');
    } catch (pickerError) {
      // Informa si falla el selector en vez de aparentar que el archivo se eligió.
      console.error('No se pudo seleccionar el documento.', pickerError);
      Alert.alert('No se pudo abrir el selector', 'Intenta seleccionar el PDF nuevamente.');
    }
  };

  // Expone el estado y las acciones sin acoplar el formulario al selector.
  return { file, error, setError, choosePdf, resetFile };
}
