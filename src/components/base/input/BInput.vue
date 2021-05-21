<template>
  <div class="b-input-wrapper">
    <input :id="id" v-model="internalValue">
    <label :for="id">Input</label>
  </div>
</template>

<script>
import propertyBinding from "@/mixins/propertyBinding";

export default {
  name: "BInput",
  mixins: [propertyBinding],
  props: {
    id: String
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
  padding: 7.5px 16px;
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
  height: 36px;
  width: 200px;
  border-bottom: 1px solid rgba(255,255,255, 0.3);
  background: rgba(255,255,255, 0.05);



  /*border: 1px solid greenyellow;*/
}
.b-input-wrapper label {
  position: absolute;
  top: 0;
  left: 16px;
}
</style>
