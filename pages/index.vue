<template>
  <div>
    <PostPreviewItem v-for="post of posts" :post="post" :key="post.path"/>
  </div>
</template>

<script>
import PostPreviewItem from '@/components/PostPreviewItem'

export default {
  async asyncData({ $content }) {
    const posts = await $content('/posts')

    return { posts }
  },
  components: {
    PostPreviewItem
  }
}
</script>
