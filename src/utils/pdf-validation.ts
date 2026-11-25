// Validación reutilizable del nombre, tipo MIME y tamaño máximo del PDF.
// Modifica aquí las reglas del archivo; el límite actual está definido en MAX_FILE_SIZE.
import type * as DocumentPicker from 'expo-document-picker';

// Mantiene el límite de la interfaz alineado con el máximo de 10 MB del servidor.
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Devuelve un mensaje claro cuando el archivo elegido no es un PDF permitido.
export function getPdfValidationError(file: DocumentPicker.DocumentPickerAsset): string | null {
  // Comprueba la extensión y el tipo MIME cuando el selector proporciona este dato.
  const isPdfExtension = file.name.toLocaleLowerCase().endsWith('.pdf');
  const isPdfMimeType = !file.mimeType || file.mimeType === 'application/pdf';

  if (!isPdfExtension || !isPdfMimeType) return 'El archivo debe ser un PDF.';
  // Algunos proveedores omiten el tamaño; si se conoce, rechaza archivos que superen el límite.
  if (file.size !== undefined && file.size > MAX_FILE_SIZE) {
    return 'El archivo supera el límite de 10 MB.';
  }
  return null;
}
