// Define el contrato del estado de materiales compartido mediante React Context.
// Modifica sus tipos si agregas acciones o campos al estado global.
import { createContext } from 'react';

import type { Material, NewMaterial } from '@/types/material';

// Acciones disponibles para que las pantallas no dependan del proveedor interno.
export type MaterialsContextValue = {
  materials: Material[];
  toggleSaved: (id: string) => void;
  addMaterial: (material: NewMaterial) => void;
  removeMaterial: (id: string) => void;
};

// El valor inicial nulo permite informar claramente si no se configuró el proveedor.
export const MaterialsContext = createContext<MaterialsContextValue | null>(null);
