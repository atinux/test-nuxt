<template>
  <div>
    <PostItem :post="post" />
  </div>
</template>

<script>
import PostItem from '@/components/PostItem'

export default {
  async asyncData({ $content, params }) {
    const post = await $content('/posts/' + params.slug)

    return { post }
  },
  components: {
    PostItem
  }
}
</script>
