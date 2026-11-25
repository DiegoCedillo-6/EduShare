// Tarjeta de material con metadatos y acciones de guardar, reportar o eliminar.
// Modifica el contenido interactivo aquí y su apariencia en src/styles/material-card.ts.
import { Alert, Text, View } from 'react-native';

import { AppButton } from '@/components/app-button';
import { HapticPressable } from '@/components/haptic-pressable';
import { materialCardStyles as styles } from '@/styles/material-card';
import type { Material } from '@/types/material';

// Las funciones de guardar, reportar y eliminar las controla la pantalla que usa la tarjeta.
type MaterialCardProps = {
  material: Material;
  onToggleSaved: (id: string) => void;
  onReport: (material: Material) => void;
  onDelete?: (id: string) => void;
};

export function MaterialCard({ material, onToggleSaved, onReport, onDelete }: MaterialCardProps) {
  // Actualmente informa el estado del documento; la vista previa real requiere un servidor.
  const handleOpen = () => {
    if (material.uri) {
      Alert.alert('Documento listo', 'Este archivo se seleccionó en este dispositivo.');
      return;
    }

    Alert.alert('Vista previa', 'La descarga estará disponible cuando se conecte el servidor.');
  };

  // Separa los datos del documento de las acciones de guardar, reportar y eliminar.
  return (
    <View style={styles.card}>
      {/* La portada y los metadatos abren el documento al tocarlos. */}
      <HapticPressable accessibilityRole="button" onPress={handleOpen} style={styles.main}>
        <View style={[styles.cover, { backgroundColor: material.accent }]}>
          <Text style={styles.coverEmoji}>{material.emoji}</Text>
          <View style={styles.pdfBadge}>
            <Text style={styles.pdfText}>PDF</Text>
          </View>
        </View>
        <View style={styles.details}>
          <Text numberOfLines={2} style={styles.title}>
            {material.title}
          </Text>
          <Text style={styles.subject}>
            {material.subject} · {material.course}
          </Text>
          <Text style={styles.meta}>
            {material.author} · {material.createdAt}
          </Text>
          <View style={styles.stats}>
            <Text style={styles.stat}>
              {material.pages > 0 ? `▤ ${material.pages} páginas` : 'Documento PDF'}
            </Text>
            <Text style={styles.stat}>↓ {material.downloads}</Text>
          </View>
        </View>
      </HapticPressable>
      {/* Muestra eliminar para publicaciones propias; guardar para las demás. */}
      <View style={styles.actions}>
        {material.isMine && onDelete ? (
          <AppButton
            label="Eliminar"
            compact
            backgroundColor="#F8EAE8"
            textColor="#A34E46"
            onPress={() => onDelete(material.id)}
          />
        ) : (
          <AppButton
            label={material.isSaved ? '♥ Guardado' : '♡ Guardar'}
            compact
            backgroundColor={material.isSaved ? '#E8F0E7' : 'transparent'}
            textColor={material.isSaved ? '#426B50' : '#20251F'}
            borderRadius={999}
            onPress={() => onToggleSaved(material.id)}
          />
        )}
        {!material.isMine ? (
          <HapticPressable
            accessibilityRole="button"
            accessibilityLabel={`Reportar ${material.title}`}
            onPress={() => onReport(material)}
            hitSlop={8}>
            <Text style={styles.report}>Reportar</Text>
          </HapticPressable>
        ) : null}
      </View>
    </View>
  );
}
