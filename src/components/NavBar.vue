<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-navbar p-4">
          <a class="navbar-brand" href="#">
            {{ this.NavBarTitle }}
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

<script>
export default {
    data() {
        return {
            NavBarTitle: '${{ JPaúlmn }}'
        }
    }
}
</script>

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
</style>>