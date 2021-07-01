<template>
  <div class="b-input-wrapper" :class="styles">
    <input :id="id"
           v-model="internalValue"
           @focusin="setActive(true)"
           @focusout="setActive(false)">
    <label :for="id">{{ label }}</label>
  </div>
</template>

<script>
import propertyBinding from "@/mixins/propertyBinding";

export default {
  name: "BInput",
  mixins: [propertyBinding],
  data: () => ({
    active: false
  }),
  props: {
    id: String,
    label: String
  },
  methods: {
    setActive(val) {
      this.active = val
    }
  },
  computed: {
    styles() {
      return {
        active: this.active,
        filled: this.active || this.internalValue !== ''
      }
    }
  }
}
</script>

<style scoped>
input {
  background: none;
  outline: none;
  border: none;
  font-size: 16px;
  line-height: 1;
  color: #fff;
  padding: 13px 4px 2px 2px;
  margin: 0;
  width: calc(100% - 2px);
  height: calc(100% - 2px);
  position: absolute;
  top: 1px;
  left: 1px;
}

.b-input-wrapper {
  display: inline-block;
  position: relative;
  height: 48px;
  /*width: 200px;*/
  border-bottom: 1px solid rgba(255,255,255, 0.3);
  /*background: rgba(255,255,255, 0.1);*/



  /*border: 1px solid greenyellow;*/
}

.b-input-wrapper.filled label {
  font-size: 12px;
  top: 0;
  transition: 325ms all ease;
}
.b-input-wrapper.active {
  color: var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
}
.b-input-wrapper label {
  position: absolute;
  top: 20px;
  left: 2px;
  transition: 325ms all ease;
}
</style>
