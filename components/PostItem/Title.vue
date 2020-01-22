<template>
  <h1>{{ title }}</h1>
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
</style>
