<template>
  <div>
    <h1>{{ post.metadata.title }}</h1>
    <div v-html="post.html" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('/posts/' + params.slug)

    return { post }
  }
}
</script>
