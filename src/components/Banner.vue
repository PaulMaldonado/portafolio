<template>
  <div>
      <div class="hero-banner">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 text-lg-left text-center ml-auto mr-auto">
                      <h1 class="title-banner">Hola soy Jorge Paúl Maldonado Núñez</h1>
                      <hr>
                      <p class="description-over-me mt-4">Web Developer y un apasionado de la tecnólogía.</p>

                      <a class="btn btn-lg btn-color mt-4">Ver curriculum</a>
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
            heroImage: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/hero-image.svg'
        }
    }
}
</script>

<style scoped>
    .hero-banner {
        background: #141E30;
        background: -webkit-linear-gradient(to right, #243B55, #141E30);
        background: linear-gradient(to right, #243B55, #141E30);
        max-width: 100%;
        height: 90vh;
    }

    .title-banner {
        font-size: 50px;
        color: #FFFFFF;
        font-weight: bold;
        margin-top: 120px;
    }

    .description-over-me {
        font-size: 18px;
        color: #FFFFFF;
        font-weight: normal;
    }

    .hero-image {
        width: 100%;
        height: 90vh;
    }

    .btn-color {
        background-color: #D0CDE1;
        color:#1F1F1F;
    }

    hr {
        background-color:  #FFFFFF;
        padding: 2px;
    }
</style>