// Pantalla de biblioteca: muestra materiales guardados y publicaciones del usuario.
// Modifica aquí las secciones y acciones de la biblioteca.
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { EmptyState } from '@/components/discovery-widgets';
import { LibraryPanel, type LibrarySection } from '@/components/library-panel';
import { MaterialCard } from '@/components/material-card';
import { ScreenHeader } from '@/components/screen-header';
import { UploadMaterialSheet } from '@/components/upload-material-sheet';
import { AppButton } from '@/components/app-button';
import { EduShareTheme } from '@/constants/edushare-theme';
import { useMaterials } from '@/hooks/use-materials';
import type { Material } from '@/types/material';

// Pantalla de biblioteca para ver materiales guardados y publicaciones propias.
export default function LibraryScreen() {
  // Lee los datos compartidos y controla la sección y el formulario de publicación.
  const { materials, toggleSaved, addMaterial, removeMaterial } = useMaterials();
  const [section, setSection] = useState<LibrarySection>('saved');
  const [uploadVisible, setUploadVisible] = useState(false);
  // Filtra los materiales guardados o los que pertenecen al usuario actual.
  const visibleMaterials = materials.filter((material) =>
    section === 'saved' ? material.isSaved : material.isMine,
  );
  // Confirma el reporte antes de enviar el aviso a la aplicación.
  const openReport = (material: Material) => {
    Alert.alert('Reportar material', `¿Reportar “${material.title}”?`, [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Reportar', onPress: () => Alert.alert('Gracias', 'Tu reporte quedó registrado en esta sesión.') },
    ]);
  };
  // Evita eliminaciones accidentales mediante una confirmación.
  const confirmDelete = (id: string) => {
    // Solo elimina el material si el usuario confirma la acción destructiva.
    Alert.alert('Eliminar publicación', '¿Quieres quitar este material de tu biblioteca?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Eliminar', style: 'destructive', onPress: () => removeMaterial(id) },
    ]);
  };

  // Muestra el perfil, el selector, las tarjetas correspondientes y el formulario.
  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <ScreenHeader eyebrow="TU ESPACIO DE ESTUDIO" title="Mi biblioteca" subtitle="Tus materiales guardados y compartidos, en un solo lugar." />
        {/* El panel cambia la sección y resume guardados y publicaciones. */}
        <LibraryPanel materials={materials} selected={section} onSelect={setSection} />
        {/* En la sección propia, permite abrir el formulario directamente. */}
        {section === 'shared' ? (
          <AppButton
            label="+  Compartir material"
            backgroundColor="#426B50"
            textColor="#FFFFFF"
            onPress={() => setUploadVisible(true)}
          />
        ) : null}
        {/* Renderiza las tarjetas filtradas o la invitación correspondiente. */}
        {visibleMaterials.length ? visibleMaterials.map((material) => (
          <MaterialCard
            key={material.id}
            material={material}
            onToggleSaved={toggleSaved}
            onReport={openReport}
            onDelete={material.isMine ? confirmDelete : undefined}
          />
        )) : (
          <EmptyState
            emoji={section === 'saved' ? '♡' : '📄'}
            title={section === 'saved' ? 'Aún no guardas materiales' : 'Todavía no compartes apuntes'}
            description={section === 'saved' ? 'Guarda recursos que quieras consultar después.' : 'Comparte tu primer PDF y ayuda a otros estudiantes.'}
            action={section === 'shared' ? (
              <AppButton
                label="Compartir un PDF"
                backgroundColor="#426B50"
                textColor="#FFFFFF"
                onPress={() => setUploadVisible(true)}
              />
            ) : undefined}
          />
        )}
      </ScrollView>
      {/* Reutiliza el mismo modal de publicación que la pantalla de descubrimiento. */}
      <UploadMaterialSheet visible={uploadVisible} onClose={() => setUploadVisible(false)} onSubmit={addMaterial} />
    </SafeAreaView>
  );
}

// Espaciado y ancho máximo del contenido de la biblioteca.
const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: EduShareTheme.colors.background },
  content: { width: '100%', maxWidth: 700, alignSelf: 'center', padding: 20, paddingBottom: 30, gap: 17 },
});
