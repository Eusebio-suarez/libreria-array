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
peso: "peso ",
descuento: 20
}

let libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 20,
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
        precio: 50,
        formato: "Ebook",
        isbn: "978-0451524935",
        descripcion: "Una visión sombría del futuro donde el Gran Hermano todo lo ve.",
        estado: "Como nuevo",
        ubicacion: "Tienda Digital",
        fecha_publicacion: "1949",
        editorial: "Sudamericana",
        paginas: 328,
        dimensiones: "Digital",
        peso: "1 kg"
    },

    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        genero: "Romance",
        idioma: "Inglés",
        precio: 10,
        formato: "Tapa blanda",
        isbn: "978-1503290567",
        descripcion: "Una comedia romántica sobre la sociedad inglesa del siglo XIX.",
        estado: "Nuevo",
        ubicacion: "Librería Romántica",
        fecha_publicacion: "1813",
        editorial: "Sudamericana",
        paginas: 279,
        dimensiones: "13 x 20 cm",
        peso: "0.6 kg"
    },

    {
        titulo: "Harry Potter y la piedra filosofal",
        autor: "J.K. Rowling",
        genero: "Fantasía",
        idioma: "Español",
        precio: 18,
        formato: "Tapa dura",
        isbn: "978-84-9838-177-0",
        descripcion: "El inicio de la saga del famoso mago Harry Potter en el mundo de la magia.",
        estado: "Nuevo",
        ubicacion: "Librería Mágica",
        fecha_publicacion: "1997",
        editorial: "Sudamericana",
        paginas: 254,
        dimensiones: "14 x 22 cm",
        peso: "1.0 kg"
    },

    {
        titulo: "El nombre del viento",
        autor: "Patrick Rothfuss",
        genero: "Fantasía",
        idioma: "Español",
        precio: 28,
        formato: "Tapa dura",
        isbn: "978-84-450-7579-0",
        descripcion: "La crónica de la vida de Kvothe, un joven mago legendario.",
        estado: "Nuevo",
        ubicacion: "Librería de la Universidad",
        fecha_publicacion: "2007",
        editorial: "Sudamericana",
        paginas: 816,
        dimensiones: "16 x 24 cm",
        peso: "1.2 kg"
    },

    {
        titulo: "Rebelion en la granja",
        autor: "George Orwell ",
        genero: "Ficcion militar",
        idioma: "Español",
        precio: 52,
        formato: "Tapa dura",
        isbn: "978-84-450-7479-0",
        descripcion: "La historia del levantamineto bolchevique",
        estado: "Nuevo",
        ubicacion: "Librería de la Universidad",
        fecha_publicacion: "1945",
        editorial: "letra minuscula",
        paginas: 90,
        dimensiones: "20 x 30 cm",
        peso: "0.5 kg"
    },

    {
        titulo: "Emilio y el valle de los colibries",
        autor: "Galiet enoc ",
        genero: "Ficcion",
        idioma: "Español",
        precio: 80,
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
        idioma: "Español",
        precio: 20,
        formato: "Tapa dura",
        isbn: "978-84-376-0495-3",
        descripcion: "Las aventuras del ingenioso hidalgo Don Quijote y su fiel escudero Sancho Panza.",
        estado: "Nuevo",
        ubicacion: "Librería Clásicos Eternos",
        fecha_publicacion: "1605",
        editorial: "letra minuscula",
        paginas: 1056,
        dimensiones: "15 x 22 cm",
        peso: "1.2 kg"
      },

      {
        titulo: "La casa de los espíritus",
        autor: "Isabel Allende",
        genero: "Realismo mágico",
        idioma: "Español",
        precio: 78,
        formato: "Tapa blanda",
        isbn: "978-84-376-0496-0",
        descripcion: "La saga de la familia Trueba en un país latinoamericano sin nombre.",
        estado: "Nuevo",
        ubicacion: "Librería El Almacén de Libros",
        fecha_publicacion: "1982",
        editorial: "letra minuscula",
        paginas: 448,
        dimensiones: "14 x 21 cm",
        peso: "0.9 kg"
      },

      {
        titulo: "Pedro Páramo",
        autor: "Juan Rulfo",
        genero: "Novela",
        idioma: "Español",
        precio: 12,
        formato: "Tapa blanda",
        isbn: "978-84-376-0497-7",
        descripcion: "Una historia de realismo mágico en el pueblo mexicano de Comala.",
        estado: "Usado",
        ubicacion: "Librería Voces de Papel",
        fecha_publicacion: "1955",
        editorial: "letra minuscula",
        paginas: 87,
        dimensiones: "12 x 19 cm",
        peso: "0.4 kg"
      },

      {
        titulo: "Rayuela",
        autor: "Julio Cortázar",
        genero: "Novela",
        idioma: "Español",
        precio: 78,
        formato: "Tapa blanda",
        isbn: "978-84-376-0498-4",
        descripcion: "Una novela experimental que se puede leer de múltiples maneras.",
        estado: "Usado",
        ubicacion: "Librería La Lectura Infinita",
        fecha_publicacion: "1963",
        editorial: "Emecé Editores",
        paginas: 700,
        dimensiones: "13 x 20 cm",
        peso: "1.0 kg"
      },

      {
        titulo: "Ficciones",
        autor: "Jorge Luis Borges",
        genero: "Cuentos",
        idioma: "Español",
        precio: 14,
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
        precio: 16,
        formato: "Tapa dura",
        isbn: "978-84-376-0500-4",
        descripcion: "La historia de amor entre Fermina Daza y Florentino Ariza.",
        estado: "Nuevo",
        ubicacion: "Librería Romance Eterno",
        fecha_publicacion: "1985",
        editorial: "Emecé Editores",
        paginas: 368,
        dimensiones: "14 x 21 cm",
        peso: "0.8 kg"
      },

      {
        titulo: "Sobre héroes y tumbas",
        autor: "Ernesto Sabato",
        genero: "Novela",
        idioma: "Español",
        precio: 13,
        formato: "Tapa blanda",
        isbn: "978-84-376-0501-1",
        descripcion: "Una profunda exploración del alma humana y la historia argentina.",
        estado: "Usado",
        ubicacion: "Librería Horizontes Lejanos",
        fecha_publicacion: "1961",
        editorial: "Emecé Editores",
        paginas: 456,
        dimensiones: "14 x 22 cm",
        peso: "0.9 kg"
      },

      {
        titulo: "El túnel",
        autor: "Ernesto Sabato",
        genero: "Novela",
        idioma: "Español",
        precio: 100,
        formato: "Tapa blanda",
        isbn: "978-84-376-0502-8",
        descripcion: "La historia de un pintor obsesionado con una mujer a quien asesina.",
        estado: "Usado",
        ubicacion: "Librería Luz y Sombra",
        fecha_publicacion: "1948",
        editorial: "Emecé Editoresur",
        paginas: 160,
        dimensiones: "12 x 19 cm",
        peso: "0.4 kg"
      },

      {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        genero: "Novela",
        idioma: "Español",
        precio: 64,
        formato: "Tapa blanda",
        isbn: "978-84-376-0503-5",
        descripcion: "Una novela que narra el asesinato de Santiago Nasar en un pequeño pueblo.",
        estado: "Nuevo",
        ubicacion: "Librería El Relato Oculto",
        fecha_publicacion: "1981",
        editorial: "Planeta",
        paginas: 54,
        dimensiones: "12 x 20 cm",
        peso: "0.4 kg"
      },
  
      {
        titulo: "La sombra del viento",
        autor: "Carlos Ruiz Zafón",
        genero: "Misterio",
        idioma: "Español",
        precio: 12,
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
        precio: 18,
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
        precio: 30,
        formato: "Tapa blanda",
        isbn: "978-0-06-225565-5",
        descripcion: "Un hombre regresa a su hogar de la infancia y recuerda extraños eventos de su niñez.",
        estado: "Usado",
        ubicacion: "Librería Recuerdos Fantásticos",
        fecha_publicacion: "2013",
        editorial: "Planeta",
        paginas: 181,
        dimensiones: "14 x 21 cm",
        peso: "0.5 kg"
      },

      {
        titulo: "El libro de los espejos",
        autor: "E.O. Chirovici",
        genero: "Thriller",
        idioma: "Español",
        precio: 14,
        formato: "Tapa blanda",
        isbn: "978-84-670-4914-4",
        descripcion: "Un manuscrito incompleto desvela un asesinato ocurrido hace décadas.",
        estado: "Nuevo",
        ubicacion: "Librería Misterios Ocultos",
        fecha_publicacion: "2017",
        editorial: "Planeta",
        paginas: 304,
        dimensiones: "13 x 20 cm",
        peso: "0.6 kg"
      }

  ];

function agregarLibroALaPila(libro) {
    libros.push(libro);
}

let menu="Menú:\n\n";
    menu+="1. Agregar un libro\n"
    menu+="2. Quitar el libro de encima de la pila\n";
    menu+="3. Mostrar la pila actual de libros\n";
    menu+="4. listar libros\n"
    menu+="5. resumenes de libros\n"
    menu+="6. buscar libros\n"
    menu+="Seleccione una opción (1-6):\n";

let menulistar="listar libros\n\n"
    menulistar+="1.listar por titulo,autor,editorial,\n"
    menulistar+="2.listar por titulo,autor,genero,\n"
    menulistar+="3.listar por titulo,precio,formato,\n"
    menulistar+="4.listar por titulo,estado,precio,\n"
    menulistar+="5.listar por titulo,ubicacion,formato,\n"
    menulistar+="6.listar por titulo,formato,fecha_publicacion,\n"
    menulistar+="7.listar por titulo,formato,precio,\n"
    menulistar+="8.listar por titulo,ubicacion,isbn,\n"
    menulistar+="9.listar por titulo,ubicacion,idioma,\n"
    menulistar+="10.listar por titulo,autor,descripcion,\n"
    menulistar+="11.listar por titulo,ubicacion,isbn,\n" 
    menulistar+="12.listar libros con descuento\n"  
    menulistar+="13.listar libros por titulo, Autor, Editorial, Precio y descuento\n"
    menulistar+="Seleccione una opción (1-13):\n";

let menuresumenes="resumir libros\n"
    menuresumenes+="1.libros mayores a 50 dolares\n"
    menuresumenes+="2.resumen de libros por titulo,autor,editorial,paginas mayor nomero de paginas\n"
    menuresumenes+="3.Ordenar los libros por numero de paginas de mayor a menor\n"
    menuresumenes+="4.por titulo mayores de 11 dolares, resumirlos por titulo, autor, precio.\n"
    menuresumenes+="5.menos de 100 paginas resumirlos por titulo, autor, editorial y paginas.\n"
    menuresumenes+="6.mayores a 20 dolares de mayor a menor resumirlos por titulo, autor, precio.\n"
    menuresumenes+="7. por numero mas alto de paginas resumirlos por titulo, autor, editorial, paginas ordenados de mayor a menor.\n"
    menuresumenes+="Seleccione una opción (1-7):\n";

let menuBuscar="Buscar libros\n\n"
    menuBuscar+="1.buscar por titulo\n"     
    menuBuscar+="2.buscar por autor\n"
    menuBuscar+="3.buscar por fecha de publicacion\n"
    menuBuscar+="4.buscar por genero\n"
    menuBuscar+="5.buscar por idioma\n"
    menuBuscar+="6.buscar por precio\n" 
    menuBuscar+="7.buscar por formato\n"       
    menuBuscar+="8.buscar por numero de ISBN\n"    
    menuBuscar+="9.buscar por descripcion\n"    
    menuBuscar+="10.buscar por ubicacion\n"    
    menuBuscar+="11.buscar por estado\n"    
    menuBuscar+="12.buscar por editorial\n"                    
    menuBuscar+="13.buscar por #paginas\n"    
    menuBuscar+="14.buscar por peso\n"    
    menuBuscar+="15.buscar por dimenciones\n"
    menuBuscar+="Seleccione una opcion (1-15):\n"        


const listaLibros = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        autor:libro.autor,
        editorial:libro.editorial,
        precio:libro.precio
      }
    })
const listaLibros1 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        autor:libro.autor,
        genero:libro.genero,
      }
    })
    const listaLibros2 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        precio:libro.precio,
        formato:libro.formato
      }
    })
    const listaLibros3 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        estado:libro.estado,
        precio:libro.precio
      }
    })
    const listaLibros4 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        ubicacion:libro.ubicacion,
        formato:libro.formato
      }
    })
    const listaLibros5 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        formato:libro.formato,
        fecha_publicacion:libro.fecha_publicacion
      }
    })
    const listaLibros6 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        formato:libro.formato,
        precio:libro.precio
      }
    })
    const listaLibros7 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        ubicacion:libro.ubicacion,
        isbn:libro.isbn
      }
    })
    const listaLibros8 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        ubicacion:libro.ubicacion,
        idioma:libro.idioma
      }
    }) 
    const listaLibros9 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        autor:libro.autor,
        descripcion:libro.descripcion
      }
    })
    const listaLibros10 = libros.map(libro=>{
      return{
        titulo:libro.titulo,
        ubicacion:libro.ubicacion,
        isbn:libro.isbn
      }
    })
    
    //Manejo de Array Methods + spreed operator.
    
    const librosConDescuento=libros.map(libro=>{
      return{
        ...libro,
        descuento: 20,
      }
    })
    const listaConDescuento = librosConDescuento.map(libro=>{
      return{
        titulo:libro.titulo,
        autor:libro.autor,
        editorial:libro.editorial,
        precio:libro.precio,
        descuento:libro.descuento
      }
    })
    
    //Manejo de Array methods Filter()
    const librosCaros = libros.filter((libro) => {
        return libro.precio > 50
    })
    const librosCarosOrdenados = libros.sort((a,b) =>  b.paginas-a.paginas)
    .map((titulo) => {
      return{
        titulo:titulo.titulo,
        autor:titulo.autor,
        editorial:titulo.editorial,
        paginas:titulo.paginas
      }
    })
    
    //Manejo de Array methods sort()
    
    const librosOrdenados= libros.sort((a,b) =>  b.paginas-a.paginas)
    .map((paginas) => {
      return{
        titulo:paginas.titulo,
        paginas:paginas.paginas
      }
    })
    
    //Manejo Array Methods encadenados.
    const librosCaross = libros.filter((libro) => {
      return libro.precio > 11 })
      .map((titulo) => {
        return{
          titulo:titulo.titulo,
          autor:titulo.autor,
          precio:titulo.precio,
        }
      })  
    
    
    const librosMenosde100 = libros.filter((libro) => {
      return libro.paginas < 100 })
      .map((paginas) => {
        return{
          titulo:paginas.titulo,
          autor:paginas.autor,
          editorial:paginas.editorial,
          paginas:paginas.paginas,
        }
      }) 
    
    
      const librosMayores20 = libros.filter((libro) => {
        return libro.precio > 20 })
        .map((titulo) => {
          return{
            titulo:titulo.titulo,
            autor:titulo.autor,
            precio:titulo.precio,
          }
        })  
        .sort((a,b) =>b.precio-a.precio)
    
       
    
      const libroMayorpagina=libros.sort((a,b) => b.paginas-a.paginas)
      .map((paginas) => {
        return{
          titulo:paginas.titulo,
          autor:paginas.autor,
          editorial:paginas.editorial,
          paginas:paginas.paginas,
        }
      })

      //Manejo de Array methods find()
      let tituloBuscar
      let buscartitulo = libros.find((libro) => {
        return libro.titulo == tituloBuscar;
      });

      let autorBuscar
      let buscarautor = libros.find((libro) => {
        return libro.autor == autorBuscar ;
      });

      
      let fechaBuscar
      let buscarfecha = libros.find((libro) => {
        return libro.fecha_publicacion == fechaBuscar ;
      });

      let generoBuscar
      let buscargenero = libros.find((libro) => {
        return libro.genero == generoBuscar ;
      });

      let idiomaBuscar
      let buscaridioma = libros.find((libro) => {
        return libro.genero == idiomaBuscar ;
      });

      let precioBuscar
      let buscarprecio = libros.find((libro) => {
        return libro.precio == precioBuscar ;
      });

      let formatoBuscar
      let buscarformato = libros.find((libro) => {
        return libro.formato == formatoBuscar ;
      });

      let isbnBuscar
      let buscarISBN = libros.find((libro) => {
        return libro.formato == isbnBuscar ;
      });

      let descripcionBuscar
      let buscardescripcion= libros.find((libro) => {
        return libro.descripcion == descripcionBuscar ;
      });

      let ubicacionBuscar
      let buscarubicacion= libros.find((libro) => {
        return libro.ubicacion == ubicacionBuscar;
      });

      let estadoBuscar
      let buscarestado= libros.find((libro) => {
        return libro.estado == estadoBuscar;
      });

      let editorialBuscar
      let buscareditorial= libros.find((libro) => {
        return libro.editorial == editorialBuscar;
      });
      
      let paginasBuscar
      let buscarpaginas= libros.find((libro) => {
        return libro.paginas == paginasBuscar;
      });

      let pesoBuscar
      let buscarpeso= libros.find((libro) => {
        return libro.peso == pesoBuscar;
      });

      let dimencionesBuscar
      let buscardimenciones= libros.find((libro) => {
        return libro.dimensiones == dimencionesBuscar;
      });



      



      
    
let libroeliminado
let opcionbuscar
let opcionresumenes
let opcion;
while (opcion !== "si") {
    opcion = prompt(menu);
    switch (opcion) {
        case "1":
            let titulo = prompt("Ingrese el título del libro:");
            let autor = prompt("Ingrese el autor del libro:");
            let genero = prompt("ingrese el genero del libro")
            let idioma = prompt("ingrese el idioma del libro")
            let precio = prompt("ingrese el precio del libro")
            let formato = prompt("ingrese el formato del libro")
            let isbn = prompt("ingrese el numero de isbn del libro")
            let descripcion = prompt("ingrese el idioma del libro")
            let estado = prompt("ingrese el estado del libro")
            let ubicacion = prompt("ingrese la ubicacion del libro")
            let fecha_publicacion = prompt("ingrese el año de publicacion del libro")
            let editorial = prompt("ingrese la editorial del libro")
            let paginas = prompt("ingrese el numero de paginas del libro")
            let dimensiones = prompt("ingrese las dimenciones del libro")
            let peso = prompt("ingrese el peso del libro")

            let nuevoLibro = {titulo: titulo, autor: autor, genero: genero, idioma: idioma, precio: parseInt(precio),
              formato: formato, isbn: isbn, descripcion: descripcion, estado: estado, ubicacion: ubicacion,
              fecha_publicacion: fecha_publicacion, editorial: editorial, paginas: parseInt(paginas),
              dimensiones: dimensiones, peso: peso};
            agregarLibroALaPila(nuevoLibro);
            console.log("Libro agregado a la pila:",nuevoLibro);
            opcion=prompt("desea salir? escriba si/no")
            break;
        case "2":
            libroeliminado=libros.pop()
            console.log("Libro eliminado de la pila:",libroeliminado);
            opcion=prompt("desea salir? escriba si/no")
            break;
        case "3":
            console.log(libros)
            opcion=prompt("desea salir? escriba si/no")
            break;
        case "4":
            let opcionlistar=prompt(menulistar)
            switch (opcionlistar){
                case "1":
                console.table(listaLibros)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "2":
                console.table(listaLibros1)
                opcion=prompt("desea salir? escriba si/no")
                    break  
                case "3":
                console.table(listaLibros2)
                opcion=prompt("desea salir? escriba si/no")
                    break  
                case "4":
                console.table(listaLibros3)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "5":
                console.table(listaLibros4)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "6":
                console.table(listaLibros5)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "7":
                console.table(listaLibros6)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "8":
                console.table(listaLibros7)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "9":
                console.table(listaLibros8)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "10":
                console.table(listaLibros9)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "11":
                console.table(listaLibros10)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "12":
                console.table(librosConDescuento)
                opcion=prompt("desea salir? escriba si/no")
                    break
                case "13":
                console.table(listaConDescuento)
                opcion=prompt("desea salir? escriba si/no")
                    break
                }
            break
        case "5":
            opcionresumenes=prompt(menuresumenes)
            switch(opcionresumenes){
            case "1":
              console.table(librosCaros)
              opcion=prompt("desea salir? escriba si/no")
              break
            case "2":
              console.table(librosCarosOrdenados)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"3":
              console.table(librosOrdenados)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"4":
              console.table(librosCaross)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"5":
              console.table(librosMenosde100)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"6":
              console.table(librosMayores20)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"7":
              console.table(libroMayorpagina)
              opcion=prompt("desea salir? escriba si/no")
              break
            }    
            break;
        case "6":
            opcionbuscar=prompt(menuBuscar)
            switch(opcionbuscar){
            case "1":
              let tituloBuscar=prompt("ingrese el titulo del libro a buscar")
              let buscartitulo = libros.find((libro) => {
                return libro.titulo === tituloBuscar;
              });
              console.table(buscartitulo)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"2":
            let autorBuscar=prompt("ingrese el autor del libro")
            buscarautor = libros.find((libro) => {
              return libro.autor == autorBuscar ;
            });
              console.table(buscarautor)
              opcion=prompt("desea salir? escriba si/no")
              break
            case "3":  
              let fechaBuscar=prompt("ingrese el año de publicacion a buscar")
              buscarfecha = libros.find((libro) => {
                return libro.fecha_publicacion == fechaBuscar ;
              });
              console.table(buscarfecha)
              opcion=prompt("desea salir? escriba si/no")
              break
            case "4":
              let generoBuscar=prompt("ingrese el genero del libro a buscar")
              buscargenero = libros.find((libro) => {
                return libro.genero == generoBuscar ;
              });
              console.table(buscargenero)
              opcion=prompt("desea salir? escriba si/no")
              break
            case "5":
              let idiomaBuscar=prompt("ingrese el idioma del libro a buscar")
              buscaridioma = libros.find((libro) => {
                return libro.idioma == idiomaBuscar ;
              });
              console.table(buscaridioma)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"6":  
              let precioBuscar=prompt("ingrese el precio del libro a buscar")
              buscarprecio = libros.find((libro) => {
                return libro.precio == precioBuscar ;
              });
              console.table(buscarprecio)
              opcion=prompt("desea salir? escriba si/no")
              break
            case "7":
              let formatoBuscar=prompt("ingrese el formato del libro a buscar")
              buscarformato = libros.find((libro) => {
                return libro.formato == formatoBuscar ;
              });
              console.table(buscarformato)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"8":
              let isbnBuscar=prompt("ingrese el ISBN del libro a buscar")
              buscarISBN = libros.find((libro) => {
                return libro.isbn == isbnBuscar ;
              });
              console.table(buscarISBN)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"9":
            let descripcionBuscar=prompt("ingrese la descripcion del libro a buscar")
            buscardescripcion= libros.find((libro) => {
              return libro.descripcion == descripcionBuscar ;
            });
              console.table(buscardescripcion)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"10":
            let ubicacionBuscar=prompt("ingrese la ubicacion de el libro a buscar")
            buscarubicacion= libros.find((libro) => {
              return libro.ubicacion == ubicacionBuscar;
            }); 
              console.table(buscarubicacion)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"11":  
              let estadoBuscar=prompt("ingrese el estado de el libro a buscar")
              buscarestado= libros.find((libro) => {
                return libro.estado == estadoBuscar;
              });
              console.table(buscarestado)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"12":
              let editorialBuscar=prompt("ingrese la editorial del libro a buscar")
              buscareditorial= libros.find((libro) => {
                return libro.editorial == editorialBuscar;
              });
              console.table(buscareditorial)
              opcion=prompt("desea salir? escriba si/no")
              break
            case"13":
              let paginasBuscar=prompt("ingrese el # de paginas del libro a buscar")
              buscarpaginas= libros.find((libro) => {
                return libro.paginas == paginasBuscar;
              });
              console.table(buscarpaginas)
              opcion=prompt("desea salir? escriba si/no")
              break  
            case"14":
              let pesoBuscar=prompt("ingrese el peso del libro a buscar")
              buscarpeso= libros.find((libro) => {
                return libro.peso == pesoBuscar;
              });
              console.table(buscarpeso)
              opcion=prompt("desea salir? escriba si/no")
              break  
            case"15":
              let dimencionesBuscar=prompt("ingrese las dimenciones del libro a buscar")
              buscardimenciones= libros.find((libro) => {
                return libro.dimensiones == dimencionesBuscar;
              });
              console.table(buscardimenciones)
              opcion=prompt("desea salir? escriba si/no")
              break
            }
        break    
       }
}














































