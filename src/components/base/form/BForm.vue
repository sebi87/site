<template>
<form>
  <div class="form-wrapper">
    <b-input
        v-for="field in fields"
        :key="field.id"
        :id="field.id"
        :label="field.label"
        v-model="field.value"></b-input>
  </div>
  <slot name="submit"></slot>
</form>
</template>

<script>
import BInput from "@/components/base/input/BInput";
export default {
  name: "BForm",
  components: {BInput},
  props: {
    fields: Array
  }
}
</script>

<style scoped>
.form-wrapper {
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 16px;
}

</style>
