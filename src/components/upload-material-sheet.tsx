// Formulario modal para publicar un material después de seleccionar un PDF.
// Modifica campos y datos enviados aquí; la validación del archivo vive en hooks/utils.
import { useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AppButton } from '@/components/app-button';
import { AppInput } from '@/components/app-input';
import { HapticPressable } from '@/components/haptic-pressable';
import { uploadStyles as styles } from '@/styles/upload-material';
import { usePdfPicker } from '@/hooks/use-pdf-picker';
import type { NewMaterial } from '@/types/material';

// `visible` abre o cierra el modal; `onClose` y `onSubmit` delegan acciones a la pantalla.
type UploadMaterialSheetProps = {
  visible: boolean;
  onClose: () => void;
  onSubmit: (material: NewMaterial) => void;
};

// Opciones sugeridas para la materia; actualízalas si cambia el catálogo.
const subjectOptions = ['Matemáticas', 'Biología', 'Historia', 'Física', 'Otra'];

export function UploadMaterialSheet({ visible, onClose, onSubmit }: UploadMaterialSheetProps) {
  // Guarda el texto escrito y el archivo elegido mientras el modal está abierto.
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [course, setCourse] = useState('');
  const { file, error, setError, choosePdf, resetFile } = usePdfPicker();

  // Bloquea el envío incompleto y muestra el motivo junto al selector del PDF.
  const submit = () => {
    if (!title.trim() || !subject || !course.trim() || !file) {
      setError('Completa todos los campos y selecciona un PDF.');
      return;
    }

    // Envía los datos del formulario; la pantalla completa los metadatos restantes.
    onSubmit({
      title: title.trim(),
      subject,
      course: course.trim(),
      uri: file.uri,
      pages: 0,
      emoji: '📄',
      accent: '#E8F0E7',
    });
    // Limpia el formulario para la siguiente publicación y cierra el modal.
    setTitle('');
    setSubject('');
    setCourse('');
    resetFile();
    setError('');
    onClose();
  };

  // La capa exterior cierra el modal; el panel interior contiene campos y acciones.
  return (
    <Modal animationType="slide" onRequestClose={onClose} transparent visible={visible}>
      <View style={styles.overlay}>
        <HapticPressable accessibilityLabel="Cerrar" onPress={onClose} style={StyleSheet.absoluteFill} />
        <View style={styles.sheet}>
          <View style={styles.handle} />
          <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Comparte tus apuntes</Text>
            <Text style={styles.subtitle}>Ayuda a alguien a entender un tema nuevo.</Text>
            {/* Los campos controlados guardan el título, la materia y el curso. */}
            <AppInput label="Nombre del material" onChangeText={setTitle} placeholder="Ej. Guía de álgebra" value={title} />
            <AppInput label="Materia" onChangeText={setSubject} placeholder={subjectOptions.join(', ')} value={subject} />
            <AppInput label="Curso o semestre" onChangeText={setCourse} placeholder="Ej. 2do semestre" value={course} />
            {/* El botón abre el selector del dispositivo y muestra el nombre elegido. */}
            <HapticPressable accessibilityRole="button" onPress={choosePdf} style={styles.fileButton}>
              <Text style={styles.fileIcon}>＋</Text>
              <View style={styles.fileCopy}>
                <Text style={styles.fileTitle}>{file?.name ?? 'Selecciona un archivo PDF'}</Text>
                <Text style={styles.fileHint}>Solo PDF · máximo 10 MB</Text>
              </View>
            </HapticPressable>
            {/* Presenta errores de campos incompletos o de validación del PDF. */}
            {error ? <Text accessibilityRole="alert" style={styles.error}>{error}</Text> : null}
            {/* Publica el material validado y descarta el formulario al terminar. */}
            <AppButton
              label="Publicar material"
              backgroundColor="#426B50"
              textColor="#FFFFFF"
              onPress={submit}
            />
            {/* Cierra el formulario sin publicar. */}
            <AppButton
              label="Cancelar"
              variant="ghost"
              backgroundColor="transparent"
              textColor="#20251F"
              onPress={onClose}
            />
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}
