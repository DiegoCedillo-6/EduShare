// Pantalla de descubrimiento: búsqueda, filtros y lista de materiales educativos.
// Modifica el orden de secciones o sus textos aquí; los elementos visuales están en components.
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState, FeatureBanner, SearchField, SubjectFilter } from '@/components/discovery-widgets';
import { MaterialCard } from '@/components/material-card';
import { ScreenHeader } from '@/components/screen-header';
import { UploadMaterialSheet } from '@/components/upload-material-sheet';
import { EduShareTheme } from '@/constants/edushare-theme';
import { subjects } from '@/data/materials';
import { useMaterialSearch, useMaterials } from '@/hooks/use-materials';
import type { Material } from '@/types/material';

// Pantalla de descubrimiento; los controles visuales reutilizables se mantienen en componentes.
export default function DiscoverScreen() {
  // Acciones compartidas de publicaciones y estado local de búsqueda y filtros.
  const { toggleSaved, addMaterial } = useMaterials();
  const { query, setQuery, subject, setSubject, results } = useMaterialSearch();
  const [uploadVisible, setUploadVisible] = useState(false);

  // Mantiene la acción de reportar separada de la presentación de las tarjetas.
  const openReport = (material: Material) => {
    // Pide confirmación antes de registrar el reporte en esta sesión.
    Alert.alert('Reportar material', `¿Reportar “${material.title}”?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Reportar', onPress: () => Alert.alert('Gracias', 'Tu reporte quedó registrado en esta sesión.') },
    ]);
  };

  // Compone la pantalla con búsqueda, promoción, resultados y formulario de publicación.
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenHeader eyebrow="APRENDEMOS EN COMUNIDAD" title="Hola, estudiante" subtitle="Un buen apunte puede cambiarlo todo." />
        <View style={styles.searchSection}>
          {/* La búsqueda y los filtros actualizan el hook que calcula los resultados. */}
          <SearchField value={query} onChangeText={setQuery} />
          <SubjectFilter subjects={subjects} selected={subject} onSelect={setSubject} />
        </View>
        {/* Abre el formulario de publicación desde el banner. */}
        <FeatureBanner onShare={() => setUploadVisible(true)} />
        <View style={styles.resultsHeader}>
          <View style={styles.resultsTitleRow}>
            <Text style={styles.resultsTitle}>{query || subject !== 'Todos' ? 'Resultados' : 'Materiales para ti'}</Text>
            <Text style={styles.resultsCount}>{results.length} {results.length === 1 ? 'material' : 'materiales'}</Text>
          </View>
          <Text style={styles.resultsHint}>Recursos compartidos por estudiantes</Text>
        </View>
        {/* La lista muestra tarjetas o un mensaje cuando no hay coincidencias. */}
        {results.length ? results.map((material) => (
          <MaterialCard key={material.id} material={material} onToggleSaved={toggleSaved} onReport={openReport} />
        )) : (
          <EmptyState emoji="🔎" title="No encontramos materiales" description="Prueba con otra búsqueda o materia." />
        )}
      </ScrollView>
      {/* El modal devuelve el nuevo material a las acciones compartidas. */}
      <UploadMaterialSheet visible={uploadVisible} onClose={() => setUploadVisible(false)} onSubmit={addMaterial} />
    </SafeAreaView>
  );
}

// Espaciado y estilos propios de esta pantalla y del encabezado de resultados.
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: EduShareTheme.colors.background },
  content: { width: '100%', maxWidth: 700, alignSelf: 'center', padding: 20, paddingBottom: 30, gap: 23 },
  searchSection: { gap: 13 },
  resultsHeader: { gap: 4, marginBottom: -8 },
  resultsTitleRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  resultsTitle: { color: EduShareTheme.colors.text, fontSize: 19, fontWeight: '800' },
  resultsCount: { color: EduShareTheme.colors.primary, fontSize: 13, fontWeight: '700' },
  resultsHint: { color: EduShareTheme.colors.muted, fontSize: 12 },
});
