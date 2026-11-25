// Mantiene los materiales en memoria y ofrece acciones a las pantallas.
// Modifica aquí cómo se agregan, guardan o eliminan materiales.
import { useMemo, useState, type PropsWithChildren } from 'react';

import { initialMaterials } from '@/data/materials';
import { MaterialsContext } from '@/hooks/materials-context';
import type { Material, NewMaterial } from '@/types/material';

export function MaterialsProvider({ children }: PropsWithChildren) {
  // Inicia con datos de ejemplo; más adelante se reemplazará por datos persistentes.
  const [materials, setMaterials] = useState(initialMaterials);

  // Memoriza las acciones y el estado para compartir el valor del contexto.
  const value = useMemo(
    () => ({
      materials,
      toggleSaved: (id: string) => {
        // Cambia únicamente el estado de guardado del material seleccionado.
        setMaterials((current) =>
          current.map((material) =>
            material.id === id ? { ...material, isSaved: !material.isSaved } : material,
          ),
        );
      },
      addMaterial: (newMaterial: NewMaterial) => {
        // Completa los datos automáticos antes de agregar la publicación.
        const material: Material = {
          ...newMaterial,
          id: `material-${Date.now()}`,
          author: 'Tú',
          createdAt: 'Ahora',
          downloads: 0,
          isSaved: false,
          isMine: true,
        };
        setMaterials((current) => [material, ...current]);
      },
      removeMaterial: (id: string) => {
        // Conserva todos los materiales excepto el que se va a eliminar.
        setMaterials((current) => current.filter((material) => material.id !== id));
      },
    }),
    [materials],
  );

  // Comparte los materiales y sus acciones con las pantallas anidadas.
  return <MaterialsContext.Provider value={value}>{children}</MaterialsContext.Provider>;
}
