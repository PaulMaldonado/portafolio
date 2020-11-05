<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-navbar p-2">
          <a class="navbar-brand" href="/">
            <img src="https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/foto-curriculum.jpg" 
            class="d-inline-block align-top paul-logo" 
            alt="logo" 
            loading="lazy">
          </a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
              <ul class="navbar-nav">
                  <li class="nav-item active">
                      <router-link to="/" class="nav-link link">Inicio</router-link>
                  </li>

                  <li class="nav-item active">
                    <router-link to='/portafolio' class="nav-link link">Portafolio</router-link>
                  </li>
              </ul>
          </div>
      </nav>
  </div>
</template>

<style scoped>
    .bg-navbar {
        background-color: #FFFFFF;
    }

    .link {
        font-size: 1.5em;
    }

    .navbar-brand {
        font-size: 1.5em;
    }

    .paul-logo {
        width: 80px;
        height: 80px;
        border-radius: 150px;
        border: 5px solid #243746;
    }

    .bg-navbar {
        -webkit-box-shadow: 0 0 9px rgba(0, 0, 0, 0.3) !important;
        -moz-box-shadow: 0 0 9px rgba(0, 0, 0, 0.3) !important;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.3) !important;
    }   
</style>>