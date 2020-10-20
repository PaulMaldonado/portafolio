<template>
  <div id="app">
    <div>
      <NavBar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
