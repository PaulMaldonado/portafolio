<template>
  <div>
      <footer class="pt-4 border-top footer">
        <div class="container">
            <div class="row">
            <div class="col-12 col-md">
                <h5 class="mb-2">{{ this.logo }}</h5>
                <img :src="footerLogo" alt="Logo footer" class="logo-footer">
                <small class="d-block mb-3 text-muted">&copy; 2020-2021</small>
            </div>
            <div class="col-6 col-md">
                <h5>Twitter</h5>
                <ul class="list-unstyled text-small">
                    <li>
                        <a class="text-muted" href="https://twitter.com/jpaulmn" target="_blank">
                            <img :src="iconTwitter" alt="Twitter" class="twitter">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>GitHub</h5>
                <ul class="list-unstyled text-small">
                    <li>
                        <a class="text-muted" href="https://github.com/PaulMaldonado" target="_blank">
                            <img :src="iconGithub" alt="GitHub" class="github">
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Instagram</h5>
                <ul class="list-unstyled text-small">
                    <li>
                        <a class="text-muted" href="https://www.instagram.com/jpaulmn" target="_blank">
                            <img :src="iconInstagram" alt="Instagram" class="instagram">
                        </a>
                    </li>
                </ul>
            </div>
         </div>
        </div>
      </footer>
    </div>
</template>


<script>
export default {
    data() {
        return {
            logo: '${{ JPaúlmn }}',
            footerLogo: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/logo-footer.svg',
            iconTwitter: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/twitter-icon.svg',
            iconGithub: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/github-icon.svg',
            iconInstagram: 'https://cdn.jsdelivr.net/gh/PaulMaldonado/img-web/img/instagram-icon.svg'
        }
    }
}
</script>


<style scoped>
    .footer {
        margin-top: 100px;
        background-color: #1D2E45 !important;
    }

    .twitter {
       width: 40px;
       height: 40px;
    }

    .github {
       width: 40px;
       height: 40px;
    }

    .instagram {
       width: 40px;
       height: 40px;
    }

    .logo-footer {
        width: 140px;
        height: 140px;
    }

    h5 {
        color: #FFFFFF;
    }

    small {
        color: #D0CDE1;
    }
</style>