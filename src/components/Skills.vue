<template>
  <div>
      <div class="skills-me">
          <div class="container">
              <h1 class="text-center title-me p-3">Sobre mí</h1>
              <p class="text-left description-me">
                  Mí nombre completo es: Jorge Paúl Maldonado Núñez y soy originario de Guadalajara jal. Soy Desarrollador Frontend, las Tecnologías que más me apacionan son: Javascript y PHP. Soy un apacionado de la Tecnología
                  y me encanta estar aprendiendo constamente sobre nuevos temas y tecnologías.
              </p>
              <div class="row">
                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="html" alt="HTML5" class="card-img-top html">
                      </p>
                      <div class="progress">
                         <div class="progress-bar html-progress" role="progressbar" style="width: 95%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">95%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="css" alt="Css" class="card-img-top css">
                      </p>
                      <div class="progress">
                         <div class="progress-bar css-progress" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="bootstrap" alt="Bootstrap css" class="card-img-top bootstrap">
                      </p>
                      <div class="progress">
                         <div class="progress-bar bootstrap-progress" role="progressbar" style="width: 85%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="javascript" alt="JavaScript" class="card-img-top javascript">
                      </p>
                      <div class="progress">
                         <div class="progress-bar javascript-progress" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="php" alt="PHP" class="card-img-top php">
                      </p>
                      <div class="progress">
                         <div class="progress-bar php-progress" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="vuejs" alt="Vuejs" class="card-img-top vuejs">
                      </p>
                      <div class="progress">
                         <div class="progress-bar vue-progress" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="nodejs" alt="Nodejs" class="card-img-top nodejs">
                      </p>
                      <div class="progress">
                         <div class="progress-bar nodejs-progress" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4">
                          <img :src="mysql" alt="MySql" class="card-img-top mysql">
                      </p>
                      <div class="progress">
                         <div class="progress-bar mysql-progress" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
                      </div>
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
            html: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/html5.svg',
            css: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/css3.svg',
            bootstrap: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/bootstrap.svg',
            javascript: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/javascript.svg',
            php: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/php.svg',
            vuejs: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/vuejs.svg',
            nodejs: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/nodejs.svg',
            mysql: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/mysql.svg',
        }
    }
}
</script>

<style scoped>
    .skills-me {
        background-color:#1F2235;
    }

    .title-me {
        font-size: 2rem;
        color:#FFFFFF;
        font-weight: bold;
    }

    .description-me {
        font-size: 1em;
        color:#BDBDC1;
        font-weight: normal;
        line-height: 30px;
    }

    .html {
        width: 40px;
        height: 40px;
    }

    .html-progress {
        background-color: #E8783B;
    }

    .css {
        width: 40px;
        height: 40px;
    }

    .css-progress {
        background-color: #1572B6;
    }

    .bootstrap {
        width: 40px;
        height: 40px;
    }

    .bootstrap-progress {
        background-color: #563D7C;
    }

    .javascript {
        width: 40px;
        height: 40px;
    }

    .javascript-progress {
        background-color: #F7DF1E;
    }

    .php {
        width: 40px;
        height: 40px;
    }

   .php-progress {
       background-color: #777BB3;
   }

   .vuejs {
        width: 40px;
        height: 40px;
    }

    .vue-progress {
       background-color: #41B883;
   }

   .nodejs {
        width: 40px;
        height: 40px;
    }

    .nodejs-progress {
       background-color: #A9DC6B;
   }

   .mysql {
        width: 40px;
        height: 40px;
    }

    .mysql-progress {
        background-color: #CE8B2C;
    }
</style>