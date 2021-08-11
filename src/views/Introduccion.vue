<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row  
      .col-lg-7(data-aos="fade-left")
        .tarjeta-idioma.p-5.mb-4
          p According to the Ministry of Commerce, Industry and Tourism, Colombia is a destination that foreign tourists look to visit more and more. People who come from all over the world discover all that this country has to offer at the tourist level. The country has positioned itself as an appropriate destination for tourism and business. Given this dynamic context, the training of human talent with high standards of quality and relevance in English is needed in order to meet the growing demand in the Aeronautical sector. It is essential to strengthen the communication skills that will allow an appropriate service to the foreign and national traveler/client. The main objective is to be able to communicate ideas without limitations and to have enough language to develop conversations that require a high level of understanding and analysis, both at the level of customer service and in the commercial process that involves various aspects.
        p De acuerdo con el Ministerio de Comercio, Industria y Turismo, Colombia es cada vez más un destino muy apetecido por turistas extranjeros, quienes vienen de variadas partes del mundo a conocer todo lo que este país tiene para ofrecer a nivel turístico. El país se ha posicionado como destino apropiado para el turismo y los negocios y ante este dinámico contexto, se ha identificado la necesidad de formar talento humano con altos estándares de calidad y pertinencia en lengua inglesa, a fin de cubrir la creciente demanda en el sector aeronáutico, por lo que es indispensable fortalecer las competencias comunicativas que permitan la atención al viajero/cliente extranjero y nacional. El principal objetivo es estar en capacidad de comunicar ideas sin limitaciones y contar con lenguaje suficiente para desarrollar conversaciones que exigen un alto nivel de comprensión y análisis, tanto a nivel de servicio al cliente, como en el proceso comercial que involucra varios aspectos.
      .col-lg-5: img(src="@/assets/curso/img1.svg")(data-aos="flip-right")

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
