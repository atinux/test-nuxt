<template>
  <div class="navbar">
      <div class="inner">
        <nuxt-link to="/" tag="div" class="clickable">
          <Logo/>
        </nuxt-link>
      </div>
  </div>
</template>

<script>
import Logo from './Logo'
export default {
  name: 'TheNavbar',
  components: {
    Logo
  }
}
</script>

<style scoped>
.navbar {
  height: 65px;
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
}
.inner {
  max-width: 1032px;
  margin: auto;
}
.clickable {
  cursor: pointer;
}
</style>
