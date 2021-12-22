<template>
  <section id="section-portafolio">
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="gestionClient" alt="Gestion de clientes" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sistema de Gestión de clientes para InternetMx</h5>
                <p class="card-text">Tecnologias usadas</p>
                <img :src="php" alt="tecnología PHP" class="card-img-top card-link php">
                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="mysql" alt="Tecnología MySql" class="card-img-top card-link mysql">
              </div>

              <div class="card-footer">
                <a href="https://internetmxsis.internetmx.com.mx/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="sitioWeb" alt="Sitio web personal" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web personal de InternetMx</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="javascript" alt="Tecnología Javascript" class="card-img-top card-link javascript">
              </div>

              <div class="card-footer">
                <a href="https://internetmx.com.mx/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="bytechWeb" alt="Sitio web de bytech" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web personal de Bytech</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="javascript" alt="Tecnología Javascript" class="card-img-top card-link javascript">
                <img :src="php" alt="tecnología PHP" class="card-img-top card-link php">
              </div>

              <div class="card-footer">
                 <a href="https://bytech-team.github.io/Bytech/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="vitalviWeb" alt="Sitio web de viltavi" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web personal de empresa Vitalvi San Luis Potosí</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="javascript" alt="Tecnología Javascript" class="card-img-top card-link javascript">
              </div>
            </div>
          </div>

          

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="techDesign" alt="Sitio web para tech design" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web desarrollado para TechDesign</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="javascript" alt="Tecnología Javascript" class="card-img-top card-link javascript">
                <img :src="vuejs" alt="Tecnología Vuejs" class="card-img-top card-link vuejs">
              </div>

              <div class="card-footer">
                <a href="https://techdesign.netlify.app/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="buyPayments" alt="Sitio web creado con expressjs" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sistema de ventas Online</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="javascript" alt="Tecnología Javascript" class="card-img-top card-link javascript">
                <img :src="nodejs" alt="Tecnología Nodejs" class="card-img-top card-link nodejs">
                <img :src="vuejs" alt="Tecnología Vuejs" class="card-img-top card-link vuejs">
                <img :src="mysql" alt="Tecnología MySql" class="card-img-top card-link mysql">
                <img :src="stripe" alt="Tecnología Stripe" class="card-img-top card-link stripe">
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img :src="billar" alt="Sitio web creado con expressjs" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sistema de inventario para billar los núñez</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                <img :src="html" alt="Tecnología HTML" class="card-img-top card-link html">
                <img :src="css" alt="Tecnología CSS" class="card-img-top card-link css">
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="javascript" alt="Tecnología Javascript" class="card-img-top card-link javascript">
                <img :src="vuejs" alt="Tecnología Vuejs" class="card-img-top card-link vuejs">
                <img :src="php" alt="tecnología PHP" class="card-img-top card-link php">
                <img :src="mysql" alt="Tecnología MySql" class="card-img-top card-link mysql">
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img src="../../public/image-web/summary.png" alt="Sitio web creado con expressjs" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Order Summary</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">

              </div>

               <div class="card-footer">
                <a href="https://summary-order.vercel.app/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img src="../../public/image-web/form.png" alt="Sitio web creado con expressjs" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Component signup</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">

              </div>

               <div class="card-footer">
                <a href="https://component-signup.vercel.app/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>


          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img src="../../public/image-web/young-app.png" alt="Sitio web creado con expressjs" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Young app</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="vuejs" alt="Tecnología Vuejs" class="card-img-top card-link vuejs">
              </div>

               <div class="card-footer">
                <a href="https://comunidad-young.vercel.app/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>


          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4 shadow-card">
              <img src="../../public/image-web/qrcode.png" alt="Sitio web creado con expressjs" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Generate qr code</h5>
                <p class="card-text">
                  Tecnologias usadas
                </p>

                
                <img :src="bootstrap" alt="Tecnología Bootstrap" class="card-img-top card-link bootstrap">
                <img :src="vuejs" alt="Tecnología Vuejs" class="card-img-top card-link vuejs">
              </div>

               <div class="card-footer">
                <a href="https://generate-qr-site.netlify.app/" target="_blank" class="btn btn-botton-color btn-block btn-lg">Visitar el sitio</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br>
  </section>
</template>

<script>
export default {
  data() {
    return {
      gestionClient: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/gestion-clientes-web.png',
      sitioWeb: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/sitio-web-internetmx.png',
      bytechWeb: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/bytech-web.png',
      vitalviWeb: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/vitalvi-web.png',
      cbta: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/cbta258.png',
      techDesign: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/tech-design.png',
      buyPayments: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/buy-payments.png',
      php: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/php.svg',
      html: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/html5.svg',
      css: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/css3.svg',
      bootstrap: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/bootstrap.svg',
      mysql: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/mysql.svg',
      javascript: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/javascript.svg',
      ruby: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/ruby.svg',
      vuejs: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/vuejs.svg',
      nodejs: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/nodejs.svg',
      stripe: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/stripe.svg',
      billar: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/billar-nuñez.png',
    }
  }
}
</script>

<style scoped>
    .btn-botton-color {
      background-color: #152032;
      color: white;
    }

    #section-portafolio {
      background-color:#23263A;
    }

    .projects {
      margin-top: 95px;
    }

    .border-for-projects {
      border: 4px solid #75D797;
    }

    .php {
      width: 40px;
      height: 40px;
    }

    .html {
      width: 50px;
      height: 50px;
    }

    .css {
      width: 40px;
      height: 40px;
    }

    .bootstrap {
      width: 40px;
      height: 40px;
    }

    .mysql {
      width: 50px;
      height: 50px;
    }

    .javascript {
      width: 40px;
      height: 40px;
    }

    .ruby {
      width: 40px;
      height: 40px;
    }

    .vuejs {
      width: 40px;
      height: 40px;
    }

    .nodejs {
      width: 50px;
      height: 50px;
    }

    .stripe {
      width: 50px;
      height: 50px;
    }

    .shadow-card {
      box-shadow: 10px 5px 5px black;
    }
</style>