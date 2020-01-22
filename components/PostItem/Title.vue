<template>
  <h1 class="post-title">{{ title }}</h1>
</template>

<script>
export default {
  name: 'PostItemTitle',
  props: {
    title: String,
    required: true
  }
}
</script>

<style lang="scss" scoped>
.post-title {
  font-size: 40px;
}
</style>
