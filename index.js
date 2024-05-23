let libro = {
titulo: "título",
autor: "libro",
genero: "género",
idioma: "idioma ",
precio: "precio",
formato: "El formato en el que se vende)",
isbn: "número de ISBN ",
descripcion: "descripción",
estado: "estado del libro)",
ubicacion: "La ubicación donde el libro está disponible para la venta",
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
        precio: "$15.000",
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
        precio: "$12.000",
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
        precio: "$10.000",
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
        precio: "$18.000",
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
        precio: "$28.000",
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
    },

    {
        titulo: "Rebelion en la granja",
        autor: "George Orwell ",
        genero: "Ficcion militar",
        idioma: "Español",
        precio: "$22.000",
        formato: "Tapa dura",
        isbn: "978-84-450-7479-0",
        descripcion: "La historia del levantamineto bolchevique",
        estado: "Nuevo",
        ubicacion: "Librería de la Universidad",
        fecha_publicacion: "1945",
        editorial: "Skala",
        paginas: 135,
        dimensiones: "20 x 30 cm",
        peso: "0.5 kg"
    },

    {
        titulo: "Emilio y el valle de los colibries",
        autor: "Galiet enoc ",
        genero: "Ficcion",
        idioma: "Español",
        precio: "$80.000",
        formato: "Tapa blanda",
        isbn: "978-8410059146",
        descripcion: "Andrés San Clemente fue secuestrado por las FARC.",
        estado: "Nuevo",
        ubicacion: "Librería de la Universidad",
        fecha_publicacion: "1945",
        editorial: "letra minuscula",
        paginas: 418,
        dimensiones: "20 x 40 cm",
        peso: "2 kg"
    },

    {
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        genero: "Novela",
        dioma: "Español",
        recio: "$20.000",
        formato: "Tapa dura",
        isbn: "978-84-376-0495-3",
        descripcion: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
        estado: "Nuevo",
        ubicacion: "Librería Clásicos Eternos",
        fecha_publicacion: "1605",
        editorial: "Francisco de Robles",
        paginas: 1056,
        dimensiones: "15 x 22 cm",
        peso: "1.2 kg"
      },

      {
        titulo: "La casa de los espíritus",
        autor: "Isabel Allende",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: "$18.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0496-0",
        descripcion: "La saga de la familia Trueba en un país latinoamericano sin nombre.",
        estado: "Nuevo",
        ubicacion: "Librería El Almacén de Libros",
        fecha_publicacion: "1982",
        editorial: "Plaza & Janés",
        paginas: 448,
        dimensiones: "14 x 21 cm",
        peso: "0.9 kg"
      },

      {
        titulo: "Pedro Páramo",
        autor: "Juan Rulfo",
        genero: "Novela",
        idioma: "Español",
        precio: "$12.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0497-7",
        descripcion: "Una historia de realismo mágico en el pueblo mexicano de Comala.",
        estado: "Usado",
        ubicacion: "Librería Voces de Papel",
        fecha_publicacion: "1955",
        editorial: "Fondo de Cultura Económica",
        paginas: 124,
        dimensiones: "12 x 19 cm",
        peso: "0.4 kg"
      },

      {
        itulo: "Rayuela",
        autor: "Julio Cortázar",
        genero: "Novela",
        idioma: "Español",
        precio: "$17.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0498-4",
        descripcion: "Una novela experimental que se puede leer de múltiples maneras.",
        estado: "Usado",
        ubicacion: "Librería La Lectura Infinita",
        fecha_publicacion: "1963",
        editorial: "Sudamericana",
        paginas: 736,
        dimensiones: "13 x 20 cm",
        peso: "1.0 kg"
      },

      {
        titulo: "Ficciones",
        autor: "Jorge Luis Borges",
        genero: "Cuentos",
        idioma: "Español",
        precio: "$14.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0499-1",
        descripcion: "Una colección de cuentos que exploran laberintos, bibliotecas y espejos.",
        estado: "Nuevo",
        ubicacion: "Librería Mundo Fantástico",
        fecha_publicacion: "1944",
        editorial: "Emecé Editores",
        paginas: 224,
        dimensiones: "12 x 18 cm",
        peso: "0.5 kg"
      },

      {
        titulo: "El amor en los tiempos del cólera",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        idioma: "Español",
        precio: "$16.000",
        formato: "Tapa dura",
        isbn: "978-84-376-0500-4",
        descripcion: "La historia de amor entre Fermina Daza y Florentino Ariza.",
        estado: "Nuevo",
        ubicacion: "Librería Romance Eterno",
        fecha_publicacion: "1985",
        editorial: "Sudamericana",
        paginas: 368,
        dimensiones: "14 x 21 cm",
        peso: "0.8 kg"
      },

      {
        titulo: "Sobre héroes y tumbas",
        autor: "Ernesto Sabato",
        genero: "Novela",
        idioma: "Español",
        precio: "$13.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0501-1",
        descripcion: "Una profunda exploración del alma humana y la historia argentina.",
        estado: "Usado",
        ubicacion: "Librería Horizontes Lejanos",
        fecha_publicacion: "1961",
        editorial: "Seix Barral",
        paginas: 456,
        dimensiones: "14 x 22 cm",
        peso: "0.9 kg"
      },

      {
        titulo: "El túnel",
        autor: "Ernesto Sabato",
        genero: "Novela",
        idioma: "Español",
        precio: "$10.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0502-8",
        descripcion: "La historia de un pintor obsesionado con una mujer a quien asesina.",
        estado: "Usado",
        ubicacion: "Librería Luz y Sombra",
        fecha_publicacion: "1948",
        editorial: "Sur",
        paginas: 160,
        dimensiones: "12 x 19 cm",
        peso: "0.4 kg"
      },

      {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        idioma: "Español",
        precio: "$14.000",
        formato: "Tapa blanda",
        isbn: "978-84-376-0503-5",
        descripcion: "Una novela que narra el asesinato de Santiago Nasar en un pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Librería El Relato Oculto",
        fecha_publicacion: "1981",
        editorial: "Sudamericana",
        paginas: 144,
        dimensiones: "12 x 20 cm",
        peso: "0.4 kg"
      },
  
      {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Misterio",
        idioma: "Español",
        precio: "$12.000",
        formato: "Tapa blanda",
        isbn: "978-84-233-3332-6",
        descripcion: "Un joven descubre un misterioso libro que cambiará su vida para siempre.",
        estado: "Usado",
        ubicacion: "Librería Enigmas del Pasado",
        fecha_publicacion: "2001",
        editorial: "Planeta",
        paginas: 576,
        dimensiones: "13 x 20 cm",
        peso: "0.8 kg"
      },

      {
        titulo: "Las hijas del capitán",
        autor: "María Dueñas",
        genero: "Histórico",
        idioma: "Español",
        precio: "$18.000",
        formato: "Tapa dura",
        isbn: "978-84-233-5417-8",
        descripcion: "La historia de tres hermanas españolas que emigran a Nueva York en los años 30.",
        estado: "Nuevo",
        ubicacion: "Librería Vientos de Cambio",
        fecha_publicacion: "2018",
        editorial: "Planeta",
        paginas: 624,
        dimensiones: "15 x 23 cm",
        peso: "1.1 kg"
      },

      {
        titulo: "El océano al final del camino",
        autor: "Neil Gaiman",
        genero: "Fantasía",
        idioma: "Inglés",
        precio: "$16.000",
        formato: "Tapa blanda",
        isbn: "978-0-06-225565-5",
        descripcion: "Un hombre regresa a su hogar de la infancia y recuerda extraños eventos de su niñez.",
        estado: "Usado",
        ubicacion: "Librería Recuerdos Fantásticos",
        fecha_publicacion: "2013",
        editorial: "William Morrow",
        paginas: 181,
        dimensiones: "14 x 21 cm",
        peso: "0.5 kg"
      },

      {
        titulo: "El libro de los espejos",
        autor: "E.O. Chirovici",
        genero: "Thriller",
        idioma: "Español",
        precio: "$14.000",
        formato: "Tapa blanda",
        isbn: "978-84-670-4914-4",
        descripcion: "Un manuscrito incompleto desvela un asesinato ocurrido hace décadas.",
        estado: "Nuevo",
        ubicacion: "Librería Misterios Ocultos",
        fecha_publicacion: "2017",
        editorial: "Ediciones B",
        paginas: 304,
        dimensiones: "13 x 20 cm",
        peso: "0.6 kg"
      }

  ];
let menuOpciones = "PILA DE LIBROS\n\n"
    menuOpciones += " 1 . Agregar un libro encima de la pila\n"
    menuOpciones += " 2 . Quitar un libro de encima de la Pila\n"
    menuOpciones += " 3 . Ver la pila de libros Actual\n"
    menuOpciones += " 4 . Salir del menu de Opciones\n\n"
    menuOpciones += " Ingrese  el numero de la opcion a Realizar"

let menunlibro=`ingrese los siguientes datos separados por , y los valores en ""\n\n`
    menunlibro +="titulo\n"
    menunlibro +="auto\n"
    menunlibro +="genero\n"
    menunlibro +="idioma\n"
    menunlibro +="precio\n"
    menunlibro +="formato\n"
    menunlibro +="isbn\n"
    menunlibro +="descripcion\n"
    menunlibro +="estado\n"
    menunlibro +="ubicacion\n"
    menunlibro +="fecha_publicacion\n"
    menunlibro +="editorial\n"
    menunlibro +="paginas\n"
    menunlibro +="dimensiones\n"
    menunlibro +="peso\n\n"

let salir="no"
let option = parseInt(prompt(menuOpciones))
let NuevoLibro
let libroEliminado 

//do{
    //switch (option){

        //case 1:
            //NuevoLibro= prompt(menunlibro)
            //libros.push(NuevoLibro)
            //console.log(NuevoLibro)
       // break
    
        //case 2: 
            //libroEliminado=libros.pop()
            //console.log(`El libro fue eliminado`)
        //break
    
        //case 3:
            //console.log(libros)
        //break
    
        //case 4:
            //salir="si"
        //break
   // }

  //}while(salir=="no")
