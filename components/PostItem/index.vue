<template>
  <div>
    <PostItemTitle :title="post.metadata.title"/>
    <PostItemCover :imgPath="post.metadata.cover_image" v-if="hasCover"/>
    <PostItemContent :html="post.html"/>
  </div>
</template>

<script>
import PostItemTitle from './Title'
import PostItemCover from './Cover'
import PostItemContent from './Content'

export default {
  name: 'PostItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  components: {
    PostItemTitle,
    PostItemCover,
    PostItemContent
  },
  computed: {
    hasCover() {
      return this.post.metadata.cover_image
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
