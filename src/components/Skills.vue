<template>
  <div>
      <div class="skills-me">
          <div class="container">
              <div class="row">
                  <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 text-lg-left text-center ml-auto mr-auto">
                      <h1 class="skills-title">Sobre mí</h1>
                      <img :src="imgOverMe" alt="Incono web development" class="d-lg-block d-none icono-web">
                  </div>

                  <div class="col-md-8 col-sm-12 col-lg-8 col-xl-8">
                      <p class="over-me">
                          Mí nombre es Jorge Paúl Maldonado Núñez y soy originario de Guadalajara jal. Soy Desarrollador Frontend, las Tecnologías que más me apacionan son: Javascript y PHP. Soy un apacionado de la Tecnología
                          y me encanta estar aprendiendo constamente sobre nuevos temas y tecnologías.

                      <h5 class="h1 mt-4 skills">Skills</h5>
                      
                      <p class="mt-4 html">HTML5</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 95%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">95%</div>
                      </div>

                      <p class="mt-4 html">CSS</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">Bootstrap Css</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">Materialize Css</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">PHP</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
                      </div>

                      <p class="mt-4 html">JavaScript</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">Node.js</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">Express.js</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">Electron.js</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">MySql</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
                      </div>

                      <p class="mt-4 html">Mongodb</p>
                      <div class="progress">
                         <div class="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">90%</div>
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
            imgOverMe: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/curriculum.svg'
        }
    }
}
</script>

<style scoped>
    .skills-me {
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
    }

    .skills-title {
        font-size: 50px;
        color: #39374E;
        font-weight: bold;
        margin-top: 80px;
    }

    .over-me {
        font-size: 1em;
        color: #39374E;
        font-weight: normal;
        margin-top: 80px;
    }

    .skills {
        font-size: 30px;
        color: #39374E;
        font-weight: bold;
    }

    .html {
        color: #39374E;
    }

    .icono-web {
        width: 100%;
        height: 60vh;
    }
</style>