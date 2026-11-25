// Tipos del material compartidos entre pantallas, componentes y estado.
// Modifica estas propiedades cuando cambie el modelo de una publicación.
export type Material = {
  id: string; // Identificador estable para guardar o eliminar el material.
  title: string; // Nombre visible y texto utilizado en la búsqueda.
  subject: string; // Materia usada por los filtros.
  course: string; // Curso o semestre que se muestra y se busca.
  author: string; // Nombre de quien publicó el material.
  createdAt: string; // Fecha de publicación en formato legible.
  pages: number; // Páginas del PDF, o cero si aún no se conocen.
  downloads: number; // Descargas que aparecen en la tarjeta.
  emoji: string; // Ilustración provisional de la portada.
  accent: string; // Color de fondo propio de la portada.
  uri?: string; // Dirección local del PDF seleccionado en este dispositivo.
  isSaved: boolean; // Indica si el usuario actual guardó el material.
  isMine: boolean; // Indica si la publicación pertenece al usuario.
};

// Datos que ingresa el usuario; la aplicación añade los metadatos restantes.
export type NewMaterial = Pick<
  Material,
  'title' | 'subject' | 'course' | 'uri' | 'pages' | 'emoji' | 'accent'
>;
