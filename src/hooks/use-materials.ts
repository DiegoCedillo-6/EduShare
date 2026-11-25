// Hooks de acceso a materiales y filtrado por texto/materia.
// Modifica aquí la lógica de consulta reutilizable; el estado vive en el proveedor.
import { useContext, useMemo, useState } from 'react';

import { MaterialsContext } from '@/hooks/materials-context';

export function useMaterials() {
  // Lee el estado compartido e informa claramente si falta el proveedor.
  const context = useContext(MaterialsContext);

  if (!context) {
    throw new Error('useMaterials debe usarse dentro de MaterialsProvider.');
  }

  // Devuelve tanto los datos como las acciones de actualización compartidas.
  return context;
}

export function useMaterialSearch() {
  // El texto y la materia seleccionada pertenecen a la pantalla que usa este hook.
  const { materials } = useMaterials();
  const [query, setQuery] = useState('');
  const [subject, setSubject] = useState('Todos');

  // Recalcula coincidencias solo cuando cambian los materiales o los filtros.
  const results = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();

    return materials.filter((material) => {
      // Aplica la materia elegida y busca texto en título, materia y curso.
      const matchesSubject = subject === 'Todos' || material.subject === subject;
      const searchableText = `${material.title} ${material.subject} ${material.course}`.toLocaleLowerCase();
      return matchesSubject && (!normalizedQuery || searchableText.includes(normalizedQuery));
    });
  }, [materials, query, subject]);

  // Expone valores y manejadores controlados por los campos de búsqueda y filtro.
  return { query, setQuery, subject, setSubject, results };
}
