<template>
  <div>
      <div class="hero-banner">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 text-lg-left text-center ml-auto mr-auto">
                      <h1 class="title-banner mt-4">!Hola✌! soy Jorge Paúl.</h1>
                      <hr>
                      <p class="description-over-me mt-2">
                          Soy Frontend Developer actualmente estoy enfocado al mundo del desarrollo web con JavaScript,
                          Vue.js y Express.js, entre otros más. 
                          <br><br>

                          Mi objetivo es poder seguir aprediendo y mejorando mis habilidades como Desarrollador Frontend.
                          <br><br>

                          Si te gustaria saber más sobre mí, buscame en mis redes sociales que las podras encontrar
                          en el footer.
                      </p>
                  </div>

                  <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8 d-lg-block d-none">
                      <img :src="heroImage" alt="hero image" class="d-lg-block d-none hero-image img-responsive">
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            heroImage: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/code-banner.svg'
        }
    }
}
</script>

<style scoped>
    .hero-banner {
        background-color: rgb(255, 255, 255);
        max-width: 100%;
        height: 70vh;
    }

    .title-banner {
        font-size: 50px;
        color: #243746;
        font-weight: bold;
       
    }

    .description-over-me {
        font-size: 18px;
        color: #243746;
        font-weight: normal;
    }

    .hero-image {
        max-width: 100%;
        height: 70vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    }

    hr {
        background-color: #5DD286;
        padding: 4px;
    }
</style>