<template>
  <div>
      <div class="skills-me p-5">
          <div class="container">
              <h1 class="text-center title-me p-3">Mis skills</h1>
              <div class="row">
                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 html-text">
                          HTML
                      </p>
                      <div class="progress">
                         <div class="progress-bar html-progress" role="progressbar" style="width: 95%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">95%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 css-text">
                          Css
                      </p>
                      <div class="progress">
                         <div class="progress-bar css-progress" role="progressbar" style="width: 70%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">70%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 bootstrap-text">
                          Bootstrap css
                      </p>
                      <div class="progress">
                         <div class="progress-bar bootstrap-progress" role="progressbar" style="width: 85%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">85%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 javascript-text">
                          JavaScript
                      </p>
                      <div class="progress">
                         <div class="progress-bar javascript-progress" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 php-text">
                          PHP
                      </p>
                      <div class="progress">
                         <div class="progress-bar php-progress" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">60%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 vue-text">
                          Vue js
                      </p>
                      <div class="progress">
                         <div class="progress-bar vue-progress" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">80%</div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 node-text">
                         Node js
                      </p>
                      <div class="progress">
                         <div class="progress-bar nodejs-progress" role="progressbar" style="width: 80%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span class="skill-count">80%</span></div>
                      </div>
                  </div>

                  <div class="col-md-3 col-sm-12 col-lg-3 col-xl-3">
                      <p class="mt-4 mysql-text">
                          MySql
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
            
        }
    }
}
</script>

<style scoped>
    .skills-me {
        background-color:#1F2235;
    }

    span.skill-count {
        font-size: 12px;
        font-weight: 500;
        color: #fff;
    }

    .html-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .mysql-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .node-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .vue-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .php-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .bootstrap-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .javascript-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .title-me {
        font-size: 2rem;
        color:#FFFFFF;
        font-weight: bold;
    }

    .html-progress {
        background-color:#A92B37;
    }

    .css-text {
        color: #FFF8D8;
        font-weight: 500;
    }

    .css-progress {
        background-color:#A92B37;
    }

    .bootstrap-progress {
        background-color:#A92B37;
    }

    .javascript-progress {
        background-color:#A92B37;
    }

   .php-progress {
       background-color:#A92B37;
   }

    .vue-progress {
       background-color:#A92B37;
   }

    .nodejs-progress {
       background-color:#A92B37;
   }

    .mysql-progress {
        background-color:#A92B37;
    }
</style>