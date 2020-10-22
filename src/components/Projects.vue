<template>
  <section id="section-portafolio">
    <div>
      <div class="container">
        <div class="row mt-4">
          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4">
              <img :src="gestionClient" alt="Gestion de clientes" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sistema de Gestion de clientes</h5>
                <p class="card-text">Sistema de Gestion de clientes creado para empresa
                  Internetmx
                </p>

                <a href="https://internetmx.com.mx/customer/master/index.php/" target="_blank" class="btn btn-botton-color">Visita el sitio web</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4">
              <img :src="sitioWeb" alt="Sitio web personal" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web de la empresa</h5>
                <p class="card-text">Página Web creada para dar a conocer más sobre sus servicios
                  de Internetmx
                </p>

                <a href="https://internetmx.com.mx/" target="_blank" class="btn btn-botton-color">Visita el sitio web</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4">
              <img :src="bytechWeb" alt="Sitio web de bytech" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web de Bytech</h5>
                <p class="card-text">Sitio Web creado para Bytech para mostrar su portafolio web.
                </p>

                <a href="https://bytech-team.github.io/Bytech/" target="_blank" class="btn btn-botton-color">Visita el sitio web</a>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-sm-12 col-lg-4 col-xl-4 d-flex align-items-stretch">
            <div class="card mt-4">
              <img :src="vitalviWeb" alt="Sitio web de viltavi" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">Sitio web para Vitalvi</h5>
                <p class="card-text">Sitio Web creado para empresa Vitalvi.
                </p>
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
      vitalviWeb: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/vitalvi-web.png'
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
      background-color: #3F3D56;
      max-width: 100%;
    }
</style>