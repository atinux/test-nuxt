<template>
  <div :style="{ backgroundImage: `url(${imgPath})` }" class="post-image"></div>
</template>

<script>
export default {
  name: 'PostItemCover',
  props: {
    imgPath: String
  }
}
</script>

<style lang="scss" scoped>
.post-image {
  border-radius: $radius;
  height: 400px;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
