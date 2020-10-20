<template>
  <div>
    <Banner />
    <Skills />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
   Banner,
   Skills,
   Footer
  }
}
</script>
