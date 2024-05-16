let libro = {
titulo: "título",
autor: "libro",
genero: "género",
idioma: "idioma ",
precio: "precio",
formato: "El formato en el que se vende el libro (por ejemplo, tapa dura, tapa blanda, ebook, etc.).",
isbn: "número de ISBN ",
descripcion: "descripción",
estado: "estado del libro (por ejemplo, nuevo, usado, como nuevo, etc.).",
ubicacion: "La ubicación donde el libro está disponible para la venta.",
fecha_publicacion: "fecha",
editorial: "editorial",
paginas: "número",
dimensiones: "dimensiones físicas",
peso: "peso "
}

let libros = [
    {
      titulo: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      genero: "Realismo mágico",
      idioma: "Español",
      precio: "$15.00",
      formato: "Tapa blanda",
      isbn: "978-84-376-0494-6",
      descripcion: "La saga familiar de los Buendía en Macondo, una obra maestra de la literatura latinoamericana.",
      estado: "Usado",
      ubicacion: "Librería Páginas Perdidas",
      fecha_publicacion: "1967",
      editorial: "Sudamericana",
      paginas: 432,
      dimensiones: "12 x 20 cm",
      peso: "0.8 kg"
    },

    {
      titulo: "1984",
      autor: "George Orwell",
      genero: "Distopía",
      idioma: "Inglés",
      precio: "$12.00",
      formato: "Ebook",
      isbn: "978-0451524935",
      descripcion: "Una visión sombría del futuro donde el Gran Hermano todo lo ve.",
      estado: "Como nuevo",
      ubicacion: "Tienda Digital",
      fecha_publicacion: "1949",
      editorial: "Secker & Warburg",
      paginas: 328,
      dimensiones: "Digital",
      peso: "1 kg"
    },

    {
      titulo: "Orgullo y prejuicio",
      autor: "Jane Austen",
      genero: "Romance",
      idioma: "Inglés",
      precio: "$10.00",
      formato: "Tapa blanda",
      isbn: "978-1503290567",
      descripcion: "Una comedia romántica sobre la sociedad inglesa del siglo XIX.",
      estado: "Nuevo",
      ubicacion: "Librería Romántica",
      fecha_publicacion: "1813",
      editorial: "Babel Libros",
      paginas: 279,
      dimensiones: "13 x 20 cm",
      peso: "0.6 kg"
    },

    {
      titulo: "Harry Potter y la piedra filosofal",
      autor: "J.K. Rowling",
      genero: "Fantasía",
      idioma: "Español",
      precio: "$18.00",
      formato: "Tapa dura",
      isbn: "978-84-9838-177-0",
      descripcion: "El inicio de la saga del famoso mago Harry Potter en el mundo de la magia.",
      estado: "Nuevo",
      ubicacion: "Librería Mágica",
      fecha_publicacion: "1997",
      editorial: "Salamandra",
      paginas: 254,
      dimensiones: "14 x 22 cm",
      peso: "1.0 kg"
    },

    {
      titulo: "El nombre del viento",
      autor: "Patrick Rothfuss",
      genero: "Fantasía",
      idioma: "Español",
      precio: "$22.00",
      formato: "Tapa dura",
      isbn: "978-84-450-7579-0",
      descripcion: "La crónica de la vida de Kvothe, un joven mago legendario.",
      estado: "Nuevo",
      ubicacion: "Librería de la Universidad",
      fecha_publicacion: "2007",
      editorial: "Plaza & Janés",
      paginas: 816,
      dimensiones: "16 x 24 cm",
      peso: "1.2 kg"
    }
  ];
console.log(libros[1]);
console.log(libros);