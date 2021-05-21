<template>
  <div class="b-btn" v-on="$listeners">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BBtn",
  props: {
    width: String
  }
}
</script>

<style scoped>
.b-btn {
  height: 48px;
  padding: 12px 30px;
  display: inline-block;
  cursor: pointer;
  border-radius: 24px;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background-color: var(--primary-color);
}
</style>
