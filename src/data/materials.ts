// Documentos de ejemplo que se muestran antes de conectar la aplicación con la API.
import type { Material } from '@/types/material';

// Modifica estos registros para probar autores, cursos, materias y estados de guardado.
export const initialMaterials: Material[] = [
  // Ejemplo de matemáticas guardado por el usuario.
  {
    id: 'material-1',
    title: 'Cálculo diferencial: guía completa',
    subject: 'Matemáticas',
    course: '1er semestre',
    author: 'Valentina R.',
    createdAt: 'Hace 2 h',
    pages: 18,
    downloads: 128,
    emoji: '∑',
    accent: '#E8F0E7',
    isSaved: true,
    isMine: false,
  },
  // Ejemplo de biología disponible para buscar y guardar.
  {
    id: 'material-2',
    title: 'Apuntes de biología celular',
    subject: 'Biología',
    course: '2do semestre',
    author: 'Mateo C.',
    createdAt: 'Ayer',
    pages: 12,
    downloads: 86,
    emoji: '🧬',
    accent: '#F0ECF8',
    isSaved: false,
    isMine: false,
  },
  // Ejemplo de historia con fecha relativa de publicación.
  {
    id: 'material-3',
    title: 'Revolución industrial — resumen',
    subject: 'Historia',
    course: '3er semestre',
    author: 'Sofía M.',
    createdAt: 'Hace 2 días',
    pages: 8,
    downloads: 64,
    emoji: '📜',
    accent: '#F9EEE5',
    isSaved: false,
    isMine: false,
  },
  // Ejemplo que representa una publicación propia.
  {
    id: 'material-4',
    title: 'Fórmulas esenciales de física',
    subject: 'Física',
    course: '1er semestre',
    author: 'Diego C.',
    createdAt: 'Hace 3 días',
    pages: 6,
    downloads: 42,
    emoji: '⚛️',
    accent: '#F6F0DB',
    isSaved: false,
    isMine: true,
  },
];

// Estas materias también aparecen en el filtro de descubrimiento.
export const subjects = ['Todos', 'Matemáticas', 'Biología', 'Historia', 'Física'];
