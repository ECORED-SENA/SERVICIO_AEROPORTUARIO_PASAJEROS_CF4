<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Portfolio services / Servicios del portafolio
    .row.mb-5
      .col-lg-7
        .tarjeta-idioma.px-5.py-4.mb-4
          p.mb-0 The airlines have a variety of services focused on the satisfaction and enjoyment of the trip in order to retain their customers. The great challenge of those who guide the tourist activity is preparing themselves to guarantee a positive travel experience for passengers, providing accurate information and thus obtaining efficient results with customers.
        p Las empresas aéreas tienen una variedad de servicios enfocados a la satisfacción y disfrute del viaje con el fin de fidelizar sus clientes. El gran reto de quien orienta la actividad turística es la responsabilidad de prepararse para garantizar una experiencia positiva de viaje a los pasajeros, brindando una información precisa y obtener unos resultados eficientes con los clientes.
      .col-lg-5: img(src="@/assets/curso/img17.svg")(data-aos="flip-up")
    #t_2_1.titulo-segundo
      h2 2.1 Guidance on location and characteristics of the destination / Orientación sobre ubicación y características del destino
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Once the travel needs of your clients have been identified, it is very important to provide clear, precise and adequate information, both in your native language and in English, about the destination, flights, connections, transfers, accommodation, excursions, language, etc. The priority is to ensure that the traveler has both a memorable stay and experience.
    p.mb-5 Una vez identificadas las necesidades de viaje de los clientes es muy importante brindar información clara, precisa y adecuada, tanto en la lengua nativa como en inglés, acerca del destino, vuelos, conexiones, traslados, alojamiento, excursiones, idioma y todo lo que se requiera. La prioridad es garantizar que el viajero tenga tanto una estancia como una experiencia memorable.
    h3 A. Relevant vocabulary / Vocabulario relevante
    .row.mb-5
      .col-lg-7
        .tarjeta-idioma.px-5.py-4.mb-4
          p.mb-0 Let´s explore some vocabulary connected with tourism. 
        p Ahora, se exploran algunos términos relacionados con el turismo.
      .col-lg-5: img(src="@/assets/curso/img18.svg")(data-aos="flip-up")
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-botones.--borde.p-5.h-100.hover-transform
          .tarjeta-numerada__numero.p-2
            img(src='@/assets/curso/img19.svg' style='width: 49px').m-auto
          h4 Countries and
              br
              |Nationalities 
          p.text-small Argentina – Argentinian - Brazil – Brazilian  China – Chinese - Egypt – Egyptian - France – French - The UK/The United Kingdom – British - Ireland – Irish - Italy – Italian - Japan – Japanese - Mexico – Mexican - Peru – Peruvian - Poland – Polish - Russia – Russian - Scotland – Scottish - Spain – Spanish - Switzerland – Swiss - Turkey – Turkish - The US/The United States – American - Colombia – Colombian.
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.--borde.p-5.h-100.hover-transform
          .tarjeta-numerada__numero.p-2.d-flex
            img(src='@/assets/curso/img20.svg' style='width: 55px').m-auto
          h4 Tourism terminology to book (make a reservation)
          p.text-small Guidebook - luggage/baggage - package holiday - passport - sightseeing - souvenir - tickets - travel agency - trip/excursion.
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-acento-botones.--borde.p-5.h-100.hover-transform
          .tarjeta-numerada__numero.align-items-center.d-flex
            img(src='@/assets/curso/img21.svg' style='width: 55px').m-auto
          h4 Places
          p.text-small Airport - amusement park - apartment - bank - bus station - train station - art gallery - bakery - bar - beach - beauty parlor - bookstore - cafe - clothing store - castle - church - city - city hall - Gym - drugstore/pharmacy - movie theater - restaurant.
      .col-md-6.col-xl.mb-4.mb-xl-0
        //- .tarjeta-numerada debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-numerada.color-secundario.--borde.p-5.h-100.hover-transform
          .tarjeta-numerada__numero.p-2.d-flex
            img(src='@/assets/curso/img22.svg' style='width: 55px').m-auto
          h4 Transport 
          p.text-small boat - bus - car - coach - helicopter - motorbike - plane - ship - taxi - train - tram - underground/Subway - van.
    //todo: Solucionar problema de la tarjeta en desktops
    h3 B. Words connected with tourism / Términos relacionados con el turismo
    p.mb-5 A continuación, se podrán revisar diversos términos que se utilizan con frecuencia en el área del turismo:
    SlyderD.mb-5(:datos="datosSlyder")
    h3 C. Prepositions / Preposiciones
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 We will now look into different types of prepositions to talk about location, time and to give directions. 
    p.mb-5 Ahora se examinarán diferentes tipos de preposiciones para hablar de ubicación, tiempo y dar direcciones.
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0.text-white SOME USEFUL PREPOSITIONS 
          table
            tr
              th
                h4 I. From – To (Desde…Hasta / De...Hasta) 
                p We travel <i>from</i> our place <i>to</i> our destination.
                  br
                  | They drove/flew/walked from Bogota to Cali
            tr
              th
                h4 II. Arrive at/in (Llegar a)
                p We <i>arrive in</i> Colombia/Barranquilla.
                  br
                  | We arrived <i>at the</i> airport/at the hotel/at the bus station.
            tr
              th
                h4 III. By, on (En – un medio de transporte)
                p <i>We travel by car</i> (by bus, train, plain, helicopter, etc. and <i>by sea/air.</i>
                  br
                  | We can <i>walk</i> or <i>go on foot</i>.
                  br
                  | We can <i>cycle</i> or <i>go on a bicycle or by bicycle</i>.
                  br
                  | We can <i>ride</i> or <i>go on horseback</i>
            tr
              th
                h4 IV. Get in/into/on/onto Get off/out of (Subirse Bajarse – de algún tipo de vehículo)
                p We <i>get into</i> a private or public vehicle
                  br
                  | We <i>get on</i> a public vehicle,
                  br
                  | But we <i>go on board</i> a boat.
                  br
                  | We <i>get on/onto a horse</i>, camel, bicycle.
                  br
                  |
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tabla-b.color-acento-botones.mb-5
          .tabla-b__header
            h5.mb-0.text-white PREPOSITIONS ON, IN, AT
          table
            tr
              th
                h4 I. On (El, los, en el – para hablar de fechas y día)
                p Preposition <b><i>ON</i></b> is used with:
                ul.lista-ul--color.fw-normal
                  li 
                    i.fas.fa-check
                    p.mb-0 days of week (  
                      spam.italic on 
                      | Monday/Tuesday/Wednesday)
                  li 
                    i.fas.fa-check
                    p.mb-0 dates (
                      spam.italic on  
                      |20th of July/August/December)
                  li 
                    i.fas.fa-check
                    p.mb-0 names of holidays if it contains the word Day (
                      spam.italic on 
                      | Christmas Day)
                  li 
                    i.fas.fa-check
                    p.mb-0 expressions on the weekend and 
                      spam.italic on 
                      |weekends (American English)
            tr
              th
                h4 II. In (en – para referirse a años, meses, estaciones y diferentes momentos del día)
                p Preposition <b><i>IN</i></b> is used with:
                ul.lista-ul--color.fw-normal
                  li 
                    i.fas.fa-check
                    p.mb-0 year (
                      spam.italic in  
                      | 2019)
                  li 
                    i.fas.fa-check
                    p.mb-0 months (
                      spam.italic in  
                      |January, 
                      spam.italic in  
                      | May, 
                      spam.italic in  
                      | July)
                  li 
                    i.fas.fa-check
                    p.mb-0 times of the day (
                      spam.italic in  
                      |  the morning, 
                      spam.italic in  
                      |  the afternoon,  
                      spam.italic in  
                      |  the evening¸)
                  li 
                    i.fas.fa-check
                    p.mb-0 seasons (
                      spam.italic in  
                      | summer, 
                      spam.italic in  
                      | fall/autumn, 
                      spam.italic in  
                      | winter, 
                      spam.italic in  
                      | spring )
            tr
              th
                h4 III. At (A las, a la, al, en la, en el, en – cuando hablamos de la hora, ciertos períodos del día, temporadas del año y otras expresiones)
                p Preposition <b><i>AT</i></b> is used with:
                ul.lista-ul--color.fw-normal
                  li 
                    i.fas.fa-check
                    p.mb-0 time (
                      spam.italic at
                      |   4 o'clock)
                  li 
                    i.fas.fa-check
                    p.mb-0 certain times of the day (
                      spam.italic at 
                      | night, 
                      spam.italic at 
                      |sunset)
                  li 
                    i.fas.fa-check
                    p.mb-0 holiday periods (
                      spam.italic at 
                      | Christmas)
                  li 
                    i.fas.fa-check
                    p.mb-0 expressions  
                      spam.italic at 
                      | the weekend and 
                      spam.italic at 
                      | weekends (British English)
    h3 D. Asking for and giving directions / Pedir y dar direcciones
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Learn how to ask for and give directions to someone, using certain words and phrases.
    p.mb-5 A continuación, se aprenderá a pedir y dar instrucciones a alguien, usando ciertas palabras y frases.
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tabla-b.color-acento-botones.mb-5
          .tabla-b__header
            h5.mb-0.text-white Asking for directions (Pidiendo direcciones)
          table
            tr
              th
                h4 How can I get to the bank? 
                p
                  b ¿Cómo se llega al banco?
            tr
              th
                h4 Where is the nearest drugstore? 
                p
                  b ¿Dónde queda la farmacia más cercana?
            tr
              th
                h4 How far is the bus stop from Simon Bolivar park? 
                p
                  b ¿Qué tan lejos está la parada del bus del parque Simón Bolívar?
            tr
              th
                h4 Is there a restaurant around here? 
                p
                  b ¿Hay algún restaurante cerca de aquí?
            tr
              th
                h4 How do I find the barbershop? 
                p
                  b ¿Cómo llego a la barbería?
            tr
              th
                h4 Which is the best way to the Shopping Center? 
                p
                  b ¿Cuál es la mejor ruta para llegar al Centro Comercial?
            tr
              th
                h4 Excuse me, I’m lost. How do I get to the Hilton Hotel? 
                p
                  b Disculpe, estoy perdido. ¿Cómo puedo llegar al Hotel Hilton?
            tr
              th
                h4 Excuse me, do you know where the bus terminal is? 
                p
                  b Disculpe, ¿usted sabe dónde queda la terminal de transporte?
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tabla-b.color-primario.mb-5
          .tabla-b__header
            h5.mb-0 Giving directions (Dando direcciones)
          table
            tr
              th 
                p Along 
                  b (a lo largo de).
            tr
              th.ms-5.ps-5 
                p 
                  b Go straight 
                  | (siga derecho); 
                  b Go straight that way 
                  | (siga ese camino derecho); 
                  b Go straight ahead 
                  |(siga hacia adelante).
            tr
              th 
                p 
                  b Turn right / Turn left  
                  | (Gire a la derecha / Gire a la izquierda).
            tr
              th 
                p 
                  b Take the first/second road on the left/right
                  br
                  | (Toma la primera/segunda calle a la izquierda/derecha).
            tr
              th 
                p 
                  b Go past… 
                  |(Pasando, después de…).
            tr
              th 
                p 
                  b Walk two/three/four blocks…  
                  | (Camine dos/tres/cuatro cuadras…).
            tr
              th 
                p 
                  b Across…   
                  |(Cruzando…). 
            tr
              th 
                p 
                  b It’s on the left/right.  
                  |(Está a la izquierda/derecha).
            tr
              th 
                p 
                  b In front of…   
                  |(Enfrente de…). 
            tr
              th 
                p 
                  b At the corner of…    
                  | (En la esquina de…).
            tr
              th 
                p 
                  b Between    
                  |(Entre dos puntos de referencia).
            tr
              th 
                p 
                  b Opposite    
                  |(Al frente, en frente).
            tr
              th 
                p 
                  b Block    
                  | (Cuadra, manzana, bloque).
            tr
              th 
                p 
                  b It’s in the middle of the block.     
                  |(Está a mitad de cuadra). 
            tr
              th
                p 
                  b It’s at the end of the block.      
                  |(Está al final de la cuadra).
    h3 E. Practice the asking for and giving directions with the following four mini-dialogues / Se debe practicar el pedir y dar direcciones con los siguientes cuatro minidiálogos
    .cuadro-dialogos.mb-3
      .row.mb-5.align-items-center
        .col-lg-5: img(src="@/assets/curso/img33.svg").mt-3
        .col-lg-7.p-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--morado
                span.text-white A:
              p.mb-0.texto--4 Excuse me, ma'am, where is the nearest Davivienda Bank?
            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--naranja
                span.text-white B:
              p.mb-0.texto--5 Go straight ahead, then take the first road on the left. Go past the library. It´s the building next to the library, on the left. 
    .cuadro-dialogos.mb-3
      .row.mb-5.align-items-center
        .col-lg-7.p-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--morado
                span.text-white A:
              p.mb-0.texto--4 Excuse me, sir, is there a Chinese restaurant around here?

            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--naranja
                span.text-white B:
              p.mb-0.texto--5 Walk two blocks and turn left at the traffic lights. You will see a supermarket on the right. Go past that. The Chinese restaurant is on the right, next to the supermarket. 
        .col-lg-5: img(src="@/assets/curso/img34.svg").mt-3
    .cuadro-dialogos.mb-3
      .row.mb-5.align-items-center
        .col-lg-5: img(src="@/assets/curso/img33.svg").mt-3
        .col-lg-7.p-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--morado
                span.text-white A:
              p.mb-0.texto--4 Excuse me, where is the souvenir shop?

            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--naranja
                span.text-white B:
              p.mb-0.texto--5 Go straight that way, until you get to the main road. Turn right. The souvenir shop is in the middle of the block, across from the Police Station.
    .cuadro-dialogos.mb-5
      .row.mb-5.align-items-center
        .col-lg-7.p-5
          ol.lista-ol--cuadro
            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--morado
                span.text-white A:
              p.mb-0.texto--4 Excuse me, Miss. I am lost. How can I get to the Hilton Hotel?


            li 
              .lista-ol--cuadro__vineta.cuadro-listados--1.lista--naranja
                span.text-white B:
              p.mb-0.texto--5 Walk along Murillo Street for three blocks. Then turn right at the corner of Murillo Street and La Sabana Avenue. The Hilton Hotel is at the end of the block. 
        .col-lg-5: img(src="@/assets/curso/img34.svg").mt-3
    #t_2_2.titulo-segundo
      h2 2.2 Information about tourist destinations / Información de destinos turísticos
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Being prepared to answer, both in our native language and in English, the most common tourism questions is very useful during customer service at the airport. The traveler always hopes to receive enough information about airports, places of interest related to their the destination, weather, transportation, itineraries, tourist information points, restaurants, etc. Therefore, it is necessary to manage a specific vocabulary of the places that the passenger wishes to visit.
    p.mb-5 Estar preparados para responder, tanto en la lengua nativa como en inglés, a las preguntas más habituales de turismo es de gran utilidad durante la atención al cliente en el aeropuerto. El viajero siempre espera poder recibir suficiente información sobre los aeropuertos, sitios de interés en el destino, clima, transporte, itinerarios, puntos de información turística, restaurantes, etc. Se debe, por lo tanto, tener manejo de un vocabulario específico de los lugares que el pasajero desea visitar. 
    h3 A. The verb “CAN” / El Verbo “PODER”
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Let´s explore the use of the verb CAN for giving information on tourist destinations and activities. 
    p.mb-5 Ahora, se explorará el uso del verbo PODER para dar información sobre destinos y actividades turísticas.
    .row.mb-5.justify-content-center
      .col-lg-8
        .tabla-b.color-acento-contenido.mb-5
          .tabla-b__header
            h5.mb-0.text-white MODAL VERB “CAN”
          table
            tr
              th
                h4 I. We us CAN for possible options (I have the option to do something)
                p 
                  b Example: 
                  | <i>You can visit some museums and some art galleries when you visit London</i>
            tr
              th
                h4 II. We use CAN for suggestions
                p 
                  b Example: 
                  | <i>You can have lunch at one of the seafood restaurants near the beach.</i>
    p.mb-5 A continuación, se podrá explorar el uso del verbo “PODER” en diversas actividades en sitios turísticos de Colombia. 
    .titulo-sexto.color-secundario
      h5.fw-normal 
        spam.color-amarillo.p-2 The verb <b>“can”</b> – El verbo <b>“poder”</b>.
    .row.mb-4.justify-content-center
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img35.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | take a trip to the countryside.
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img36.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | visit a botanical garden in Bogota.
    .row.mb-4.justify-content-center
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img37.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | go hiking at Tayrona National Park.
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img38.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | go swimming at Tayrona National Park.
    .row.mb-4.justify-content-center
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img39.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | go trekking in the Cocora Valley.
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img40.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              |  take a boat trip.
    .row.mb-5.justify-content-center
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img41.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | wander through the streets of
              br
              |Old Town Cartagena.
      .col-lg-6
        .tarjeta-destinos.p-3.d-flex.align-items-center
          img(src='@/assets/curso/img42.svg', alt='Texto que describa la imagen' style='width: 190px')
          .tarjeta-destinos__textos.p-3
            h5 SOME DESTINATIONS AND THINGS TO DO
            p.mb-0 You 
              span.texto--3 can 
              | see some ruins in the Lost City.
    h3 B. Useful verbs and other activities / Verbos muy utilizados y otras actividades
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Here we have some verbs that are normally used to talk about activities tourists can do in different places.
    p.mb-5 Aquí hay algunos verbos utilizados normalmente para hablar de actividades que los turistas pueden hacer en diferentes lugares.
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img43.svg' alt='AvatarTop' style='height: 144px')
          .tarjeta.color-acento-contenido2.w-100
            .p-4
              h2.text-center Useful verbs 
              p • Enjoy 
                br
                |• Go on a sightseeing around 
                br
                |• Stroll/Walk around 
                br
                |• Have a picnic 
                br
                |• Go to 
                br
                |• Relax 
                br
                |• Meditate 
                br
                |• Do sports 
                br
                |• Go verb+ing 
                br
                |• Explore 
                br
                |• Try 
                br
                |• Ride
      .col-lg-4
        .tarjeta-avatar
          img(src='@/assets/curso/img44.svg' alt='AvatarTop')
          .tarjeta.color-secundario2.w-100
            .p-4
              h2.text-center Other activities
              p • You <b>can ride</b> a giant Ferris wheel. 
                br
                |• You <b>can try</b> local food and drink. 
                br
                |• You <b>can take</b> photos 
                br
                |• You <b>can explore</b> a science and technology museum. 
                br
                |• You <b>can relax</b> at the beach 
                br
                |• You <b>can go to</b> the zoo 
                br
                |• You <b>can have</b> picnic 
                br
                |• You <b>can enjoy</b> street art in the big city
                br
                |• You <b>can go on a sightseeing</b> around London
                br
                |• You <b>can go jogging</b> around the park
    #t_2_3.titulo-segundo
      h2 2.3 Sales process management / Manejo del proceso de ventas  
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 The sales process is important within the value chain in providing a high quality service. For this reason, it is of great importance to have knowledge of the English language, in order to understand the client's needs. Without the command of English, we can make mistakes during this first point of contact with the traveler.
    p.mb-5 El proceso de venta es importante dentro de la cadena de valor en la prestación de un servicio de alta calidad. Por tal razón, es de gran relevancia tener conocimiento en lengua inglesa para entender y comprender la necesidad del cliente. Sin el dominio del inglés, se pueden cometer errores en este primer punto de contacto con el viajero.
    h3 A. Selling a package holiday – Part I / Vendiendo un paquete turístico – Parte I
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Here is the first part of a conversation between a travel agent and a customer booking a package holiday. Use a dictionary to look up any words you do not know. 
    p.mb-5 Aquí está la primera parte de una conversación entre un agente de viajes y un cliente que reserva un paquete de vacaciones. Se sugiere usar un diccionario para buscar cualquier palabra que no se conozca.
    .row.align-items-center 
      .col-lg-5: img(src="@/assets/curso/img45.svg")
      .col-lg-7 
        .tarjeta-idioma.px-5.py-4.mb-4
          p.mb-0 Package holiday to Santa Marta – Part I
        p.mb-5 Paquete turístico a Santa Marta – Parte I
    .cuadro-dialogos.p-5.mb-5
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic I would like to book a package holiday.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 any specific destination in mind?

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic the family wants a place near the sea and where the weather is good. 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 O.K. Do you have any specific dates for your holiday?
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic not really. We have a lot of flexibility.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 well, we have some last minute package deals to Santa Marta, Cartagena and San Andres Island.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic any of those would be O.K. with us.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 let me tell you about the accommodation options in each. You could stay in a hotel, a self-catering apartment or a B&B.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic I am sure the family would like the self-catering apartment option.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 at the moment we have that option in resorts in Santa Marta and Cartagena but not in San Andres Island. 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic how does the cost compare in Santa Marta and Cartagena?
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 they’re pretty similar, but the cost of living is a bit cheaper in Santa Marta than in Cartagena.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic so tell me about the Santa Marta packages then. 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 well, we have a self-catering apartment in the popular resort of Irotama in Playa Bello Horizonte, where there are some beautiful beaches.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic how would we get there from the airport?
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 it’s about 1 hour from Simon Bolivar International Airport, but there would be a complimentary transportation service directly to your resort.
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic that sounds fantastic! I’ll book it! 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 O.K. I just need a few personal details from you…
    h3 B. Selling a package holiday – Part II / Vendiendo un paquete turístico – Parte II
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Here is the second part of the conversation between a travel agent and a customer booking a package holiday. Use a dictionary to look up any words you do not know. 
    p.mb-5 Aquí está la segunda parte de la conversación entre un agente de viajes y un cliente que reserva un paquete de vacaciones. Se sugiere usar un diccionario para buscar cualquier palabra que no se conozca.
    .row.align-items-center 
      .col-lg-5: img(src="@/assets/curso/img46.svg")
      .col-lg-7 
        .tarjeta-idioma.px-5.py-4.mb-4
          p.mb-0 Package holiday to Santa Marta – Part II
        p.mb-5 Paquete turístico a Santa Marta – Parte II
    .cuadro-dialogos.p-5.mb-5
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 first, I need the full names of all the people travelling, please.

      .row.justify-content-center
        .col-lg-2.justify-content-end 
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic my name is John Pawson. My wife´s name is Gisela Pawson. My two daughters are Nathania Pawson and Taliana Pawson.
 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 can I also have the dates of birth of you all, please?

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic my date of birth is 7th June 1977; Gisela’s is 23 November 1980; Nathania´s is 10th October 2009 and Taliana´s 18th March 2012.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 now your passport numbers and expiry dates.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic oh! I’m afraid I do not have that information at the moment.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 not a problem. You can either email them to me or send them via WhatsApp later.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic O.K. Thanks
 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 so your holiday is a one-week, all-inclusive package to the Irotama Resort.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic what’s included in the package?
 
      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 return flights; transfers to and from Simon Bolivar Airport; a self-catering apartment, which will be cleaned twice a week and use of a communal swimming pool.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic fantastic! What about the local amenities?

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 there is a variety of shops, bars and restaurants and plenty of activities like diving, market trips and excursions to Tayrona National Park and other sightseeing trips.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic Good!

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--4.mb-2 Travel agent:
        .col-lg-6
          p.texto--4.mb-2 so, I’ll need a 50% deposit now and the balance at least 14 days before the holiday date.

      .row.justify-content-center
        .col-lg-2.justify-content-end
          h5.texto--5.mb-2 Customer:
        .col-lg-6
          p.texto--5.mb-2.fst-italic OK. Here’s my credit card.
    h3 C. Useful phrases / Expresiones comunes
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Let´s explore some vocabulary and phrases connected with selling a package holiday. 
    p.mb-5 Ahora se explorarán algunos términos y expresiones relacionados con la venta de un paquete turístico.
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          .tarjeta.color-primario2
            .px-4
              img(src="@/assets/curso/img47.svg" style="width: 59px").
            .p-4
              h2 Parte I
              p 
                b A place near the sea / 
                | Un lugar cerca al mar
                br
                b Good weather / 
                |Buen clima
                br
                b Last minute package deals /  
                | Ofertas de paquetes de última hora
                br
                b Accommodation options / 
                |Opciones de alojamiento
                br
                b Stay in a hotel / 
                |Hospedarse en un hotel
                br
                b Stay in a self-catering apartment / 
                |Hospedarse en un apartamento con cocina
                br
                b Stay in a B&B / 
                |Hospedarse en un alojamiento B&B  <i>(Bed and Breakfast</i> /Cama y Desayuno)
                br
                b Complimentary transportation service / 
                |Transporte de cortesía.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover-transform
          .tarjeta.color-acento-contenido2
            .px-4
              img(src="@/assets/curso/img47.svg" style="width: 59px").
            .p-4
              h2 Parte II
              p 
                b A one-week, all-inclusive package / 
                |Un paquete de una semana todo incluido
                br
                b Return flights / 
                |Tiquetes ida y vuelta 
                br
                b Transfers to and from / 
                |Traslados desde y hacia
                br
                b Communal swimming pool / 
                |Piscina comunitaria 
                br
                b Local amenities / 
                |Servicios locales
                br
                b A 50% deposit / 
                |Un depósito del 50%
                br
                b The balance / 
                |El saldo
    #t_2_4.titulo-segundo
      h2 2.4 Interpretation of information in the GDS system (Global Distribution System) / Interpretación de la información en el sistema GDS <i>(Global Distribution System)</i>
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 The GDS or Global Distribution System for this industry has all its components and tools in English. It is important to become familiar with the terms it contains.
    p.mb-5 El GDS o Sistema de Distribución Global para esta industria tiene todos sus componentes y herramientas en lengua inglesa, por esto es importante familiarizarse con los términos que este contiene. 
    .row.mb-5.justify-content-center
      .col-lg-8: img(src="@/assets/curso/img48.svg")(data-aos="zoom-in-up" )
    h3 A. Coomands, functions and features in amadeus software / Comandos, funciones y características del <i>software Amadeus</i>
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 The travel industry is full of acronyms and key terms. They play a fundamental role in the flight booking industry, therefore, they are very important to know. In this section, we will look at some of the ones used in Amadeus Platform both in English and Spanish. 
    p.mb-5 La industria de viajes está llena de siglas y términos clave que desempeñan un papel fundamental en la industria de la reserva de vuelos, por lo que es muy importante conocerlos. En esta sección, se verán algunos de los que se utilizan en la plataforma Amadeus, tanto en inglés como en español.
    h3 PNR search / Búsqueda de PNR <i>(Passenger Name Record)</i>
    ImagenInfografica.color-secundario.mb-5

      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/img49.jpg', alt='Texto que describa la imagen')

      .tarjeta.color-secundario.px-3.py-3(x="27%" y="15%")
        .h5.mb-2.text-center.mb-0 Buscar
      .tarjeta.color-secundario.px-3.py-3(x="22%" y="31%")
        .h5.mb-2.mb-0 Passenger Name Record 
          br
          |(Registro de Nombres de Pasajeros)
      .tarjeta.color-secundario.px-3.py-3(x="22%" y="41%")
        .h5.mb-2.mb-0 Flujo de reserva del PNR
      .tarjeta.color-secundario.px-3.py-3(x="22%" y="70%")
        .h5.mb-2.p-3.mb-0 Recuperar/ Modificar
          br
          |Colas
          br
          |Configuración
          br
          |Calcular y Convertir
          br
          |Herramientas
          br
          |Enlaces
    h3 Retrieve /Modify drop-down list / Menú desplegado de recuperar y modificar
    .small-dots
      ImagenInfografica.color-secundario.mb-5

        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/img50.jpg', alt='Texto que describa la imagen')

        .tarjeta.color-secundario.px-3.py-3(x="33%" y="13%")
          .h5.mb-2.text-center.mb-0 Crear nuevo
        .tarjeta.color-secundario.px-3.py-3(x="25.9%" y="48.5%")
          .h5.mb-2.text-center.mb-0 PNR de un grupo
        .tarjeta.color-secundario.px-3.py-3(x="25.9%" y="53.5%")
          .h5.mb-2.text-center.mb-0 PNR asociado
        .tarjeta.color-secundario.px-3.py-3(x="25.9%" y="58.5%")
          .h5.mb-2.text-center.mb-0 Miembro
        .tarjeta.color-secundario.px-3.py-3(x="25.9%" y="63.6%")
          .h5.mb-2.text-center.mb-0 Tiquete electrónico
        .tarjeta.color-secundario.px-3.py-3(x="25.9%" y="68.8%")
          .h5.mb-2.text-center.mb-0.fw-normal 
            b (Electronic Miscellaneous Document)
            br
            |Documentos electrónicos
    h3 Finding flights using an availability search / Búsqueda de vuelos mediante una búsqueda de disponibilidad 
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 
        b An availability search displays
        | a list of available or scheduled flights for up to 16 city pairs on given dates. You can define additional search options to help return the most accurate results for your search.
        br
        br
        |Tomado de 
        b Amadeus Selling Platform Connect – User Guide 18.1 - Publicado por Amadeus Learning Services (Distribution and IT) - Edition 5.0, p. 21.
    p.mb-5 
      b Una búsqueda por disponibilidad 
      | muestra una lista de vuelos disponibles o programados para hasta 16 pares de ciudades en unas fechas determinadas. Puede definir opciones de búsqueda adicionales para obtener unos resultados más precisos en la búsqueda.
      br
      br
      |Tomado de 
      b Amadeus Selling Platform Connect – Guía de Usuario 17.1 - Publicado por Amadeus Global Learning Services (Distribution and IT) - Edition 2.1, p. 18.
    .small-dots
      ImagenInfografica.color-secundario.mb-5

        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/img51.jpg', alt='Texto que describa la imagen')

        .tarjeta.color-secundario.px-3.py-3(x="25%" y="8%")
          .h5.mb-2.text-center.mb-0 Búsqueda de vuelos
        .tarjeta.color-secundario.px-3.py-3(x="20%" y="33%")
          .h5.mb-2.text-center.mb-0 Seleccione el tipo de búsqueda
        .tarjeta.color-secundario.px-3.py-3(x="49%" y="40%")
          .h5.mb-2.mb-0 Disponibilidad
            br
            |Venta directa
            br
            |Pantalla de tarifas
            br
            |Venta del segmento fantasma, pasivo y de información
            br
            |Tarificación informativa
            br
            |Tarificación y disponibilidad informativa 
            br
            |Tarifas bajas
            br
            |Horario
            br
            |Programación
    h3 Flights availability / Disponibilidad de vuelos 
    figure.mb-5 
      img(src='@/assets/curso/img52.jpg', alt='Texto que describa la imagen')
    figure.mb-5
      img(src='@/assets/curso/img53.svg', alt='Texto que describa la imagen')
    h3 Finding flights using a timetable search / Búsqueda de vuelos mediante una búsqueda de programación
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 According to Amadeus Selling Platform Connect – User Guide -Edition 5.0 (2015, p.25), “<b>a timetable search</b> returns a list of flights and airlines for a specific origin and destination on a given date. The results show a list of flights for seven days from the date specified in the search. For each day, a green tick shows the availability or a red cross shows the unavailability of the flight corresponding to that day.”
    p.mb-5 De acuerdo con el manual de <i>Amadeus Selling Platform Connect (2014)</i>. Guía de Usuario -Edition 2.1: “<b>una búsqueda por programación</b> devuelve una lista de vuelos y líneas aéreas para un origen y un destino específicos en una fecha determinada. En los resultados se muestra una lista de vuelos para siete días a partir de la fecha especificada en la búsqueda. Para cada uno de los días, una marca de color verde indica la disponibilidad, y una cruz de color rojo indica la no disponibilidad del vuelo para ese día”.
    figure.mb-5
      img(src='@/assets/curso/img54.jpg', alt='Texto que describa la imagen')
    figure.mb-5
      img(src='@/assets/curso/img55.svg', alt='Texto que describa la imagen')
    h3 B. Currency exchange and taxes calculation / Cambio de divisas y cálculo de impuestos
    h3 Names and symbols for currencies around the world  / Nombres y símbolos de monedas del mundo 
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Look at the chart below with some of the names and symbols for currencies around the world. Try to identify the country the currency belongs to. Practice the pronunciation with your instructor. 
    p.mb-5 A continuación, se puede observar una tabla con algunos de los nombres y símbolos de las monedas de todo el mundo. Intente identificar el país al que pertenece la moneda. Practica la pronunciación con tu instructor.
    .tabla.mb-5 
          table
            thead.text-white.bg-head.text-center
              tr
                th COUNTRY
                th CURRENCY
                th SYMBOL
                th ISO CODE
                th Spanish
            tbody.text-center
              tr
                td Argentina
                td Argentine peso
                td $
                td.fw-bold ARS
                td Peso argentino

              tr
                td Australia
                td Australian dollar

                td $

                td.fw-bold AUD
                td Dólar australiano
              tr
                td Brazil
                td Brazilian real
                td R$
                td.fw-bold BRL
                td Real brasileño
              tr
                td Canada
                td Canadian dollar
                td $
                td.fw-bold  CAD
                td Dólar canadiense

              tr
                td China
                td China yuan 
                td ¥
                td.fw-bold CNY
                td Yuan chino
              tr
                td Colombia
                td Colombian peso
                td $
                td.fw-bold COP
                td Peso colombiano
              tr
                td Euro Member Countries
                td Euro
                td €
                td.fw-bold EUR
                td Euro
              tr
                td Indonesia
                td Indonesia rupiah
                td Rp
                td.fw-bold IDR
                td Rupia indonesia
              tr
                td India

                td India rupiah

                td ₹
                td.fw-bold INR
                td Rupia india

              tr
                td Israel
                td Israel shekel

                td ₪

                td.fw-bold ILS
                td Nuevo séquel

              tr
                td Japan
                td Japan yen

                td ¥
                td.fw-bold JPY
                td Yen japonés

              tr
                td Malaysia
                td Malaysia ringgit

                td RM
                td.fw-bold MYR

                td Ringit

              tr
                td Mexico
                td Mexico peso

                td $
                td.fw-bold MXN
                td Peso mexicano

              tr
                td New Zealand

                td New Zealand dollar

                td $
                td.fw-bold NZD
                td Dólar de nueva zelanda

              tr
                td Norway
                td Norwegian krone

                td kr
                td.fw-bold NOK
                td Corona noruega

              tr
                td Russia

                td Russian ruble

                td ₽
                td.fw-bold RUB
                td Rublo ruso

              tr
                td Sweden

                td Sweden krona

                td kr
                td.fw-bold SEK
                td Corona sueca

              tr
                td Switzerland
                td Switzerland franc

                td SFr
                td.fw-bold CHF
                td Franco suizo

              tr
                td Thailand

                td Thailand baht

                td ฿
                td.fw-bold THB
                td Bat
              tr
                td Turkey

                td Turkish lira

                td ₺
                td.fw-bold Try
                td Lira turca

              tr
                td United Kingdom

                td Pounds sterling

                td £

                td.fw-bold GBP
                td Libra esterlina

              tr
                td United States
                td US dollar
                td $
                td.fw-bold USD
                td Dólar americano
    h3 Calculate and convert  / Calcula y convierte 
    .small-dots
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          .row.mb-5.justify-content-center
            .col-lg-8
              figure
                img(src='@/assets/curso/img56.jpg', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.px-3.py-3(x="33%" y="46%")
          .h5.mb-2.text-center.mb-0 Calcula y Convierte
        .tarjeta.color-secundario.px-3.py-3(x="33%" y="55%")
          .h5.mb-2.mb-0 Convertidor de Monedas
            br
            |Tasas por exceso de equipaje
            br
            |Cálculo de Millaje
            br
            |Información acerca de los Impuestos
            br
            |Convertidor Horario
    h3 Tax information / Información sobre los impuestos 
    figure.mb-5
      img(src='@/assets/curso/img57.jpg', alt='Texto que describa la imagen')
    h4.mb-5 Información sobre los impuestos
    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-acento-contenido.color-acento-contenido3.p-4.mb-4
          .h5 Para tu información:
          p para ver el sobrecargo de combustible, llene solamente el campo que dice país y deje en blanco donde dice código del impuesto.
            br
            b Impuestos y cargos adicionales del destino cargos por el servicio a pasajeros
            br
            b Ciudad / Aeropuerto
            br
            b País código de impuesto
    h3 Pricing  / Cotización o tarificación 
    .small-dots2.red-dots
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/img58.jpg', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.px-3.py-3(x="20%" y="19%")
          .h5.mb-2.text-center.mb-0 Búsqueda de vuelos
        .tarjeta.color-secundario.px-3.py-3(x="30%" y="19%")
          .h5.mb-2.text-center.mb-0  Tiquete almacenado transitoriamente
        .tarjeta.color-secundario.px-3.py-3(x="39%" y="19%")
          .h5.mb-2.text-center.mb-0  Documento de información diversa 
        .tarjeta.color-secundario.px-3.py-3(x="14%" y="30%")
          .h5.mb-2.text-center.mb-0 Precio mínimo
        .tarjeta.color-secundario.px-3.py-3(x="29%" y="30%")
          .h5.mb-2.text-center.mb-0 Tarificación avanzada
        .tarjeta.color-secundario.px-3.py-3(x="87%" y="36%")
          .h5.mb-2.text-center.mb-0 Resumen del TST
        .tarjeta.color-secundario.px-3.py-3(x="93%" y="36%")
          .h5.mb-2.text-center.mb-0 Descripción de la forma de pago
        .tarjeta.color-secundario.px-3.py-3(x="10%" y="46%")
          .h5.mb-2.text-center.mb-0 Código de tipo de pasajero
        .tarjeta.color-secundario.px-3.py-3(x="22%" y="44%")
          .h5.mb-2.text-center.mb-0 Bebé
        .tarjeta.color-secundario.px-3.py-3(x="29%" y="44%")
          .h5.mb-2.text-center.mb-0 Descuento
        .tarjeta.color-secundario.px-3.py-3(x="41%" y="46%")
          .h5.mb-2.text-center.mb-0 Sector
        .tarjeta.color-secundario.px-3.py-3(x="88%" y="46%")
          .h5.mb-2.text-center.mb-0 Estado
        .tarjeta.color-secundario.px-3.py-3(x="8.2%" y="73.3%")
          .h5.mb-2.text-center.mb-0 Precio según lo reservado
        .tarjeta.color-secundario.px-3.py-3(x="16%" y="73.3%")
          .h5.mb-2.text-center.mb-0 Mejor precio
        .tarjeta.color-secundario.px-3.py-3(x="21.8%" y="73.3%")
          .h5.mb-2.text-center.mb-0 Tarifa más baja (reservable o no)
        .tarjeta.color-secundario.px-3.py-3(x="12.8%" y="78.3%")
          .h5.mb-2.text-center.mb-0 Tipo de tarifa
        .tarjeta.color-secundario.px-3.py-3(x="32.8%" y="78.3%")
          .h5.mb-2.text-center.mb-0 Impuestos
        .tarjeta.color-secundario.px-3.py-3(x="53.8%" y="78.3%")
          .h5.mb-2.text-center.mb-0 Cobro obligatorio
        .tarjeta.color-secundario.px-3.py-3(x="77.8%" y="78.3%")
          .h5.mb-2.text-center.mb-0 Recargo, cargo adicional
        .tarjeta.color-secundario.px-3.py-3(x="8.2%" y="82.6%")
          .h5.mb-2.text-center.mb-0 Pública
        .tarjeta.color-secundario.px-3.py-3(x="13.5%" y="82.6%")
          .h5.mb-2.text-center.mb-0 Negociada/Privada
    .small-dots2.red-dots
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/img59.jpg', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.px-3.py-3(x="20.5%" y="37.5%")
          .h5.mb-2.text-center.mb-0 Tipo de restricción de la tarifa
        .tarjeta.color-secundario.px-3.py-3(x="37%" y="37.5%")
          .h5.mb-2.text-center.mb-0 Anulación
        .tarjeta.color-secundario.px-3.py-3(x="64%" y="37.5%")
          .h5.mb-2.text-center.mb-0 Anular moneda
        .tarjeta.color-secundario.px-3.py-3(x="85%" y="37.5%")
          .h5.mb-2.text-center.mb-0 Tipo de viaje
        .tarjeta.color-secundario.px-3.py-3(x="29.3%" y="42%")
          .h5.mb-2.text-center.mb-0 Fecha de emisión del tiquete
        .tarjeta.color-secundario.px-3.py-3(x="50.3%" y="42%")
          .h5.mb-2.text-center.mb-0 Convertir tarifa a
        .tarjeta.color-secundario.px-3.py-3(x="29.3%" y="48%")
          .h5.mb-2.text-center.mb-0 Punto de venta
        .tarjeta.color-secundario.px-3.py-3(x="36.3%" y="48%")
          .h5.mb-2.text-center.mb-0 Punto de emisión del tiquete
        .tarjeta.color-secundario.px-3.py-3(x="50.3%" y="48%")
          .h5.mb-2.text-center.mb-0 Tarifa guardada
        .tarjeta.color-secundario.px-3.py-3(x="21%" y="59.2%")
          .h5.mb-2.text-center.mb-0 Código de tipo de pasajero          
        .tarjeta.color-secundario.px-3.py-3(x="22%" y="69.2%")
          .h5.mb-2.text-center.mb-0 Confirmar precio volverá a reservar y confirmará la tarifa correspondiente
        .tarjeta.color-secundario.px-3.py-3(x="17%" y="77.2%")
          .h5.mb-2.text-center.mb-0 Tarifas disponibles
        .tarjeta.color-secundario.px-3.py-3(x="22.5%" y="84.5%")
          .h5.mb-2.text-center.mb-0 Base de la tarifa
        .tarjeta.color-secundario.px-3.py-3(x="33.5%" y="84.5%")
          .h5.mb-2.text-center.mb-0 Familia de tarifas
        .tarjeta.color-secundario.px-3.py-3(x="11.5%" y="88.5%")
          .h5.mb-2.text-center.mb-0 Adulto
    h3 <i>Fare Note (FRN)</i> / Nota de condiciones de la tarifa 
    .row.mb-5.justify-content-center
      .col-lg-9
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/img60.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0.fst-italic Amadeus Altéa Reservation Desktop Web – User Guide - Edition 3.3 (2016, p.151) tells us that 
              b.texto--3 “Fare notes contain the conditions and regulations applicable to a specific fare.” 
              br
              br
              | El manual Amadeus Altéa Reservation Desktop Web – User Guide - Edition 3.3 (2016, p. 151) explica que 
              b.texto--3 “las notas de tarifa contienen las condiciones y regulaciones aplicables a una tarifa específica”.
    .tarjeta-idioma.px-5.py-4.mb-4
      p.mb-0 Have a look at the following Fare Note for that itinerary. Make a guided reading of each one of the conditions you can see in it. For guidance, please, refer to the spanish version underneath the following screen. 
    p.mb-5 Se sugiere dar un vistazo a la siguiente nota de tarifa para ese itinerario y hacer una lectura guiada de cada una de las condiciones que se pueden ver en ella. A manera de apoyo, consultar la versión en español debajo del siguiente pantallazo.
    .small-dots
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/img61.jpg', alt='Texto que describa la imagen')
        .tarjeta.color-secundario.px-3.py-3(x="16.8%" y="14.9%")
          .h5.mb-2.text-center.mb-0 Clase de reserva
        .tarjeta.color-secundario.px-3.py-3(x="31.7%" y="14.9%")
          .h5.mb-2.text-center.mb-0 Base de la tarifa
        .tarjeta.color-secundario.px-3.py-3(x="48.7%" y="14.9%")
          .h5.mb-2.text-center.mb-0 Tipo de tarifa
        .tarjeta.color-secundario.px-3.py-3(x="65.7%" y="14.9%")
          .h5.mb-2.text-center.mb-0 Tarifa
        .tarjeta.color-secundario.px-3.py-3(x="72.9%" y="14.9%")
          .h5.mb-2.text-center.mb-0 Regla
        .tarjeta.color-secundario.px-3.py-3(x="92.9%" y="14.9%")
          .h5.mb-2.text-center.mb-0 Tipo de pasajero
        .tarjeta.color-secundario.px-3.py-3(x="53%" y="21.2%")
          .h5.mb-2.text-center.mb-0 Excursión regular
        .tarjeta.color-secundario.px-3.py-3(x="89.9%" y="21.2%")
          .h5.mb-2.text-center.mb-0 Adulto
        .tarjeta.color-secundario.px-3.py-3(x="40.9%" y="31.2%")
          .h5.mb-2.text-center.mb-0 Penalidades
        .tarjeta.color-secundario.px-3.py-3(x="31.9%" y="51.2%")
          .h5.mb-2.mb-0 Penalidades entre Estados Unidos y Sudamérica para tarifas LEO00RIS
          .h6 Cancelaciones
          p En cualquier momento un cargo de usd 175.00 para reembolso exención por cambio de horario/enfermedad o muerte de un pasajero o familiar.
          p 
            b Nota
            br
            |El miembro de la familia debe ser pariente en primer grado. la exención también se aplica para el acompañante de viaje. 
            br
            |las exenciones por enfermedad/muerte deben ser confirmadas con un certificado médico de muerte válido. 
            br
            br
            b Nota 
            br
            | Ver descuento para niños/bebés en las reglas de tarifa para determinar si es aplicable.
    h3 C. Most commonly used terms / Términos más utilizados
    h4 Part 1 / Parte 1
    .color-primario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img62.jpg")
        .col-lg-8
          p 
            
            b Baggage 
            |/ Equipaje
            br
            b PTEC (Pet in Cabin) 
            |/ Mascota en cabina
            br
            b AVIH (Animal in Hold) 
            |/ Animal en bodega
            br
            b Cabine baggage 
            |/ Equipaje de cabina
            br
            b BGSC (Baggage Service Compensation) 
            |/ Compensación por servicio de equipaje
            br
            b Compensation 
            |/ Compensación 
            br
            b Oversize 
            |/ Sobredimensionado
            br
            b Sports equipment 
            |/ Equipo/Implementos deportivos
    .color-primario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img69.jpg")
        .col-lg-8
          p 
            br
            b Prepaid overweight 
            |/ Pagar por anticipado exceso de peso
            br
            b SJDT_SJO departure TAX 
            |/ Impuesto de salida
            br
            b PENF penalty fee 
            |/ Pago por penalidad 
            br
            b RSVT Residual value 
            |/ Valor residual
            br
            b CTSC Customer service 
            |/ Atención al cliente
    h4 Part 2 / Parte 2
    .color-secundario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img64.jpg")
        .col-lg-8
          p 
            b FQTR Redemption 
            |/ Redención o canjeo de millas o puntos 
            br
            b FQTU Upgrade 
            |/ Ascenso en la categoría de viajero frecuente
            br
            b FQTV Accrual 
            |/ Programa de acumulación de millas de viajero frecuente
    .color-secundario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img63.jpg")
        .col-lg-8
          p 
            b Meals 
            |/ Comidas
            br
            b Medical Case 
            |/ Caso médico
            br
            b TRSA 
            |/ Tarjeta de turismo para viajeros a la Isla de San Andrés
            br
            b DEPO Deposit Down Payment 
            |/ Pago de depósito
    h4 Part 3 / Parte 3      
    .color-primario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img66.jpg")
        .col-lg-8
          p 
            b Passenger assistance 
            | / Asistencia al pasajero
            br
            b Wheelchair 
            | / Silla de ruedas
            br
            b CKIN check in 
            | / Información de registro
            br
            b Upgrade 
            | / Mejora (subir de categoría)
            br
            b Unaccompanied minor 
            | / Menor no acompañado
    .color-primario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img67.jpg")
        .col-lg-8
          p 
            br
            b Passenger información 
            | / Información (detalles) del pasajero
            br
            b API (Advanced Passenger Information) 
            | / Información avanzada del pasajero
            br
            b Emergency contact 
            | / Contacto en caso de emergencia
            br
            b Form of identification 
            | / Forma de identificación
            br
            b Child 
            | / Niño
            br
            b Infant 
            | / Bebé
            br
            b Seaman 
            | / Marinero
            br
            b Reason for travel 
            | / Motivo del viaje
            br
            b Language 
            | / Idioma
            br
            b PENC – Name change 
            | / Cambio o actualización del nombre de un pasajero
            br
            b Seats 
            | / Asientos
            br
            b Seat map 
            | / Mapa de asientos
            br
            b Seat preference 
            | / Preferencia de asientos
            br
            b Bassinet 
            | / Cuna
            br
            b Extra seat 
            | / Asiento adicional
            br
            b ATO (Airport Ticket Office) reserved seat chargeable 
            | / Asiento reservado con cargo en la oficina de tiquetes del aeropuerto
            br
            b Empty seat (EMST) 
            | / Asiento vacío
    h4 Part 4 / Parte 4
    .color-secundario3.mb-5.p-5
      .row.align-items-end
        .col-lg-4: img(src="@/assets/curso/img68.jpg")
        .col-lg-8
          p 
            b EMER pax flying on emergency 
            |/ Pasajero volando de emergencia
            br
            b SPAX influential passengers 
            |/ Pasajeros de alto valor
            br
            b MEDI pax flying with medical limitations 
            |/ Pasajero volando con limitaciones médicas
            br
            b SPEM special meal on board 
            |/ Comida especial a bordo
            br
            b GRUP pax flying in group 
            |/ Pasajero viajando en grupo





</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'To book:',
        texto: 'to reserve (for example, a room in a hotel or a flight).',
        imagen: require('@/assets/curso/img23.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Guidebook:',
        texto: 'a book that gives tourist information.',
        imagen: require('@/assets/curso/img24.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Luggage/Baggage: ',
        texto: 'the bags you take on holiday. ',
        imagen: require('@/assets/curso/img25.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },

      {
        titulo: 'Package holiday: ',
        texto:
          'a holiday where everything is included – the transport, hotel, etc.',
        imagen: require('@/assets/curso/img26.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Passport: ',
        texto:
          'an official document for travelling with your photo and your nationality. ',
        imagen: require('@/assets/curso/img27.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Sightseeing: ',
        texto:
          'travelling around to visit monuments and other interesting places.',
        imagen: require('@/assets/curso/img28.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Souvenir: ',
        texto: 'something that you buy or keep to remember a place or holiday.',
        imagen: require('@/assets/curso/img29.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Tickets: ',
        texto:
          'papers that show you can use a type of transport or enter a place.',
        imagen: require('@/assets/curso/img30.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Travel agency: ',
        texto: 'a business that helps people to plan holidays',
        imagen: require('@/assets/curso/img31.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Trip/Excursion: ',
        texto: 'when you visit an interesting place for a short time.',
        imagen: require('@/assets/curso/img32.jpg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.tarjeta-numerada__numero
  width: 85px
  height: 85px
  background-color: $color-secundario !important
.lista
  &--naranja
    background-color: #FF7A36
    color: #FF7A36
  &--morado
    background-color: $color-acento-botones
    color: $color-acento-botones
.tarjeta-destinos
  background-color: #FFF6DB
  border-radius: 0px 10px 10px 0px
  transition: background-color 0.3s
  &:hover
    background-color: #E2DAFC
.color-primario2
  background-color: #FFEDB8
.color-primario3
  background-color: #FFF6DB
.color-secundario2
  background-color: #FFDBA5
.color-secundario3
  background-color: #FFEDD2
.color-acento-contenido2
  background-color: #C5B5F8
.color-acento-contenido3
  background-color: #E2DAFC
.color-amarillo
  background-color: #FFDC72
</style>
