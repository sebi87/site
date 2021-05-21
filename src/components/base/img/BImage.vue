<template>
    <img :src="resolved(src)" alt="alt" :width="width" :height="height">
</template>

<script>
export default {
  name: "BImage",
  props: {
    src: String,
    alt: String,
    height: String,
    width: String
  },

  methods: {
    resolved: (src) => {
      return require(`@/assets/${src}`)
    }
  }
}
</script>

<style scoped>

</style>
