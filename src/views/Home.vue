<template>
  <div>
    <Banner />
    <Skills />
    <About />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner'
import Skills from '@/components/Skills'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
   Banner,
   Skills,
   About,
   Footer
  }
}
</script>
