<template>
  <div>
      <div class="hero-banner p-5 p-lg-0 pt-lg-5 text-center text-sm-start">
          <div class="container">
            <div class="d-sm-flex align-items-centerjustify-content-between">
                <div>
                    <h1 class="title-banner mt-4">!Hola✌! soy Jorge Paúl.</h1>
                    <hr>
                    <p class="description-over-me lead my-4">
                        Soy FullStack Developer actualmente estoy enfocado al mundo del desarrollo web con JavaScript,
                        Vue.js y Express.js, entre otros más.
                    </p>
                </div>

                <img src="../../public/image-web/hero-image.svg" alt="hero image" class="ml-4 img-fluid w-50 d-none d-sm-block">
            </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    }
}
</script>

<style scoped>
    .hero-banner {
        background-color: #24263B;
    }

    .title-banner {
        font-size: 46px;
        color: #FFFFFF;
        font-weight: 700;
    }

    .description-over-me {
        font-size: 26px;
        color:#DFDFDF;
        font-weight: 300;
        line-height: 40px;
    }

    .hero-image {
        max-width: 100%;
        height: 70vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }

    hr {
        background-color:#572839;
        padding: 2px;
        width: 90%;
    }
</style>