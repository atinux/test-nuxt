<template>
  <div class="post-card" @click="$router.push(post.path)">
    <h4 class="post-title">{{ post.metadata.title }}</h4>
    <p class="post-description">{{ post.metadata.description }}</p>
    <div class="post-footer">
      <div class="post-tags">
        <span v-for="(tag, id) in post.metadata.tags" :key="id" class="post-tag">{{ tag }}</span>
      </div>
      <div class="post-date">
        {{ post.metadata.date | formatDate }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostPreviewItem',
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    formatDate(d) {
      return new Date(d).toDateString()
    }
  }
}
</script>

<style lang="scss" scoped>
.post-card {
  margin-top: 3 * $spacing;
  border-radius: 2 * $radius;
  padding: 2 * $spacing;
  cursor: pointer;
  transition: 0.1s ease-in;
  &:hover {
    background-color: #fcfcfc;
  }
}
.post-title {
  font-size: 16px;
}
.post-description {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.54);
}
.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.post-tags {
  display: flex;
  justify-content: space-around;
  .post-tag {
    font-size: 11px;
    padding: 3px 4px;
    margin-right: $spacing;
    border-radius: $radius;
    background-color: #e9e9e9;
  }
}
.post-date {
  font-size: 11px;
}
</style>
