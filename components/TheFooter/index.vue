<template>
  <div class="footer">
    <div class="inner">
      <img src="/logo-light.png"/>
      <hr class="divider"/>
      <div class="tagline">It's like Medium, but smaller.</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style lang="scss" scoped>
.footer {
  color: rgba(255, 255, 255, 0.95);
  background-color: black;
  height: 180px;
}
.inner {
  max-width: 1032px;
  margin: auto;
  padding-top: 40px;
}
.divider {
  border-color: #282828;
}
.tagline {
  margin-top: 1.5 * $spacing;
}
</style>
