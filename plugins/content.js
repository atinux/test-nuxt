export default function (context, inject) {
  // See https://axios.nuxtjs.org/extend#create-new-axios-instance-based-on-defaults
  const api = context.$axios.create({})
  const getContent = (path) => {
    return api.$get('/_content-api' + path)
  }

  // Add this.$content(path)
  inject('content', getContent)
  // Add $content in context
  context.$content = getContent
}
