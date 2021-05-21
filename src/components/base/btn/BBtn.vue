<template>
  <div :class="classes" :style="styles" @click.prevent="onClick">
    <div class="b-btn-slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
const delay = ms => new Promise(res => setTimeout(res, ms));
export default {
  name: "BBtn",
  data: () => ({
    classes: {'b-btn': true, 'send': false},
    duration: 300,

  }),
  props: {
    width: String,
    submit: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles() {
      return {'--b-btn-duration': `${this.duration}ms`}
    }
  },
  methods: {
    onClick() {
      console.log('clicked')
      this.transition(true)
        .then(() => delay(this.duration))
        .then(() => this.$emit('click'))
        .then(() => delay(this.duration))
        .then(() => this.transition(false))

      // Object.assign(this.classes, {'send': true})
      // this.$emit('click')
    },
    async transition(val) {
      return await this.submit ? Object.assign(this.classes, {'send': val}) : undefined
    }
  }
}
</script>

<style scoped>
:root {
  --b-btn-duration: 300ms
}
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
  width: 48px;
  height: 48px;
  padding: 12px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid var(--primary-color);
  color: var(--primary-color);
  transition: var(--b-btn-duration) ease-out all;
}

.send::after {
  content: '\2713';
  transition: var(--b-btn-duration) ease-out all;
  line-height: 1;
  width: 48px;
  height: 48px;
  padding: 0;
  margin: 0;
}

.send .b-btn-slot {
  display: none;
}
</style>
