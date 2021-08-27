export default {
  global: {
    componenteFormativo: 'Asesoría al viajero en lengua inglesa',
    descripcionCurso:
      'La industria aérea es cambiante y muy competitiva; por ello, prepararse siempre va a ser la opción más acertada. El dominio de la lengua inglesa no solo abre puertas, sino que permite tener un mejor desempeño de las funciones en un mundo en el que todos los días se está en constante comunicación con extranjeros que llegan a nuestro país.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introduction / Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Recognizing traveler´s needs / Reconocimiento de las necesidades del viajero ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Getting personal information / Identificación de los datos personales ',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'PárrafosAssistance to traveler´s requests / Atención a los requerimientos ',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Information record / Registro de la información ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Portfolio services / Servicios del portafolio',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Guidance on location and characteristics of the destination / Orientación sobre ubicación y características del destino ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Information about tourist destinations / Información de destinos turísticos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Sales process management / Manejo del proceso de venta ',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo:
              'Interpretation of information in the GDS system (Global Distribution System) / Interpretación de la información en el sistema GDS (Global Distribution System) ',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Amadeus S.A.S. (2014). <i>Amadeus Selling Platform Connect – Guía de usuario. Edition 2.1</i>. Amadeus Global Learning Services (Distribution and IT).',
      link: '',
    },
    {
      referencia:
        'Amadeus S.A.S. (2015). <i>Amadeus Selling Platform Connect – User Guide. Edición 5.0.</i> Amadeus Learning Services.',
      link: '',
    },
    {
      referencia:
        'Amadeus S.A.S. (2016). <i>Amadeus Altéa Reservation Desktop Web – User Guide. Edition 3.3.</i> Amadeus Learning Services.',
      link: '',
    },
    {
      referencia:
        'Ompersonal. (1999). <i>Gramática inglesa en español</i>. OM Grammar. ',
      link: 'http://www.ompersonal.com.ar/omgrammar/indicetematico.htm',
    },
  ],
  glosario: [
    {
      termino: 'Attendant',
      termHTML: '<i>Attendant</i>',
      significado: 'asistente/auxiliar',
    },
    {
      termino: 'Customer',
      termHTML: '<i>Customer</i>',
      significado: 'cliente',
    },
    {
      termino: 'Customer service',
      termHTML: '<i>Customer Service</i>',
      significado: 'servicio al cliente',
    },
    {
      termino: 'Flight',
      termHTML: '<i>Flight</i>',
      significado: 'vuelo',
    },
    {
      termino: 'Go sightseeing',
      termHTML: '<i>Go sightseeing</i>',
      significado: 'visitar sitios de interés turístico',
    },
    {
      termino: 'Luggage/baggage',
      termHTML: '<i>Luggage/baggage</i>',
      significado: 'equipaje',
    },
    {
      termino: 'Package holiday',
      termHTML: '<i>Package holiday</i>',
      significado: 'paquete turístico',
    },
    {
      termino: 'Personal informtion',
      termHTML: '<i>Personal informtion</i>',
      significado: 'información personal',
    },
    {
      termino: 'Passenger',
      termHTML: '<i>Passenger</i>',
      significado: 'pasajero',
    },
    {
      termino: 'Souvenir',
      termHTML: '<i>Souvenir</i>',
      significado: '<i>souvenir</i>',
    },
    {
      termino: 'Ticket',
      termHTML: '<i>Ticket</i>',
      significado: 'tiquete',
    },
    {
      termino: 'To book /make a reservation',
      termHTML: '<i>To book /make a reservation</i>',
      significado: 'reservar/hacer una reserva',
    },
    {
      termino: 'Travel agency',
      termHTML: '<i>Travel agency</i>',
      significado: 'agencia de viajes',
    },
    {
      termino: 'Trip/excursion',
      termHTML: '<i>Trip/excursion</i>',
      significado: 'viaje/excursión',
    },
  ],
  complementario: [
    {
      texto:
        'Prodromou, L., Prodromou, P., Cowan, A., y Elliott, R. (s.f.). <i>Flash on English For Tourism</i>. ESP Series. ELI Publishing.',
      tipo: 'Libro',
      link: 'http://www.elionline.com',
    },
    {
      texto:
        'Dubicka, I., y O´Keeffe, M. (2003). <i>English For International Tourism. Pre-intermediate Student´s Book</i>. Pearson Education Limited.',
      tipo: 'Libro',
      link:
        'https://www.pearson.com/english/catalogue/business-english/english-for-international-tourism.html',
    },
    {
      texto:
        'Hernández, L. (2004). <i>Curso Inglés aplicado al sector turístico</i>. Mailxmail.com.',
      tipo: 'Libro',
      link:
        'http://www.mailxmail.com/curso-ingles-aplicado-sector-turistico-2 ',
    },
    {
      texto: 'Ompersonal',
      tipo: 'Sitio Web de consulta de gramática inglesa en español',
      link: 'http://www.ompersonal.com.ar/',
    },
    {
      texto: 'Wordreference',
      tipo: 'Diccionario en línea',
      link: 'http://www.wordreference.com ',
    },
    {
      texto:
        'Amadeus S.A.S. (2016). <i>Amadeus Altéa Reservation Desktop Web – User Guide. Edition</i> 3.3. Amadeus Learning Services.',
      tipo: 'Libro',
      link: 'http://learning@amadeus.com',
    },
    {
      texto: 'Amadeus Service Hub.',
      tipo:
        'Sitio Web con la lista de Códigos para la Solicitud de Servicios Especiales usados en el software Amadeus',
      link:
        'https://servicehub.amadeus.com/c/portal/view-solution/768896/en_US/ssr-codes-and-airline-specific-codes',
    },
    {
      texto:
        'Tourism Innovation Consulting. (2020). <i>Amadeus Connect - Nivel Básico</i>. [Video]. YouTube.',
      tipo: 'Video de youtube sobre el uso de la plataforma Amadeus Connect',
      link:
        'https://www.youtube.com/playlist?list=PLD7plIsSZtvQeQGyPjLOXUL3NrVOcHMa8',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yoao Salazar De La Cruz',
        cargo: 'Instructor Bilingüismo',
        centro: 'Centro Industrial y de Aviación - Regional Atlántico',
      },
      {
        nombre: 'Gloria Amparo López Escudero',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora Instruccional',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capita',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica. - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella ',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Magdi Khalifah Gamboa',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
