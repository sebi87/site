<template>
  <div :class="classes" :style="styles" @click.prevent="onClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BBtn",
  data: () => ({
    classes: {'b-btn': true, 'send': false},
    styles: {'--b-btn-duration': '3000ms'}
  }),
  props: {
    width: String,
    submit: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onClick() {
      console.log('clicked')
      Object.assign(this.classes, {'send': true})
      // this.$emit('click')
    }
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

/*noinspection ALL*/
.send {
  transform: scaleX(48px);
  background-color: greenyellow;
  transition: var(--b-btn-duration) ease-in all;
}
</style>
