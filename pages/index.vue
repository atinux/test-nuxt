<template>
  <div>
    <h1>NuxtJS Test</h1>
    <ul>
      <li v-for="post of posts" :key="post.path">
        <nuxt-link :to="post.path">{{ post.metadata.title }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const posts = await $content('/posts')

    return { posts }
  }
}
</script>
