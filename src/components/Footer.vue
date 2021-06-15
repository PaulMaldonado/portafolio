<template>
  <div>
      <footer class="bg-footer">
            <footer class="page-footer font-small pt-4">
                <div class="container text-center text-md-left">
            
                  <div class="row">
              
                
                    <div class="col-md-6 col-lg-6 mr-auto my-md-4 my-0 mt-4 mb-1">
              
                      <img src="../../public/paul-logo.jpg" alt="Logo" class="img-responsive logo-footer"><br><br>
                      <h5 class="font-weight-bold text-uppercase mb-4 title-footer">Jorge Paúl</h5>
                      <p class="text-description">
                        Soy Frontend Developer actualmente estoy enfocado al mundo del desarrollo web con JavaScript,
                        Vue.js y Express.js, entre otros más.
                      </p>
              
                    </div>
              
                    <hr class="clearfix w-100 d-md-none border-color">
              
              
                    <div class="col-md-4 col-lg-4 mx-auto my-md-4 my-0 mt-4 mb-1">
              
                      <h5 class="font-weight-bold text-uppercase mb-4 socials">Redes sociales</h5>
              
                      <ul class="list-unstyled">
                        <li>
                        <p>
                            <a class="text-muted" href="https://twitter.com/jpaulmn" target="_blank">
                                <div>
                                  <img :src="iconTwitter" alt="Twitter" class="card-img-top twitter">
                                  <span class="twitter-text">Twitter</span>
                                </div>
                            </a>
                         </p>
                        </li>
                        <li>
                          <p>
                            <a class="text-muted" href="https://github.com/PaulMaldonado" target="_blank">
                                <div>
                                  <img :src="iconGithub" alt="GitHub" class="card-img-top github">
                                  <span class="github-text ml-2">GitHub</span>
                                </div>
                            </a>
                          </p>
                        </li>
                      </ul>
              
                    </div>
              
        
              
                  </div>
              
                </div>
              
                <div class="footer-copyright text-center py-3 text-reserved">
                    © 2020 - 2021 Jorge Paúl Todos los derechos Reservados
                </div>
              
              </footer>
        </footer>
  </div>
</template>

<script>
export default {
     data() {
        return {
            iconTwitter: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/twitter-icon.svg',
            iconGithub: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/github-icon.svg',
            iconInstagram: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/instagram-icon.svg'
        }
    }
}
</script>

<style scoped>
    .text-reserved {
      color:#BDBDC1;
    }

    .twitter {
       width: 40px;
       height: 40px;
    }

    .twitter-text {
      color:#BDBDC1;
    }

    .github {
       width: 40px;
       height: 40px;
    }

    .github-text {
      color:#BDBDC1;
    }

    .logo-footer {
        width: 80px;
        height: 80px;
        border-radius: 300px;
        border: 2px solid#BDBDC1;
    }

    .title-footer {
        color:#FFFFFF;
    }

    .socials {
        color:#FFFFFF;
    }

    .text-description {
      color:#BDBDC1;
    }

    .border-color {
        border: 1px solid#243746;
    }

    .bg-footer {
      background-color: #24263B;
    }
</style>