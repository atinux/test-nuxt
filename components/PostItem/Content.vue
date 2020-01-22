<template>
    <div v-html="html" />
</template>

<script>
export default {
  name: 'PostItemContent',
  props: {
    html: String,
    required: true
  }
}
</script>

<style lang="scss" scoped>
</style>
