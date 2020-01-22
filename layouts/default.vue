<template>
  <div class="site">
    <TheNavbar />
      <div class="site-content">
        <Container>
          <nuxt/>
        </Container>
      </div>
    <TheFooter />
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar'
import TheFooter from '@/components/TheFooter'
import Container from '@/components/Container'

export default {
  name: 'LayoutDefault',
  components: {
    TheNavbar,
    TheFooter,
    Container
  }
}
</script>

<style scoped>
.site {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

.site-content {
  flex: 1;
}
</style>
