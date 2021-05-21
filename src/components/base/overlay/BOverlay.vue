<template>
  <div class="b-overlay" :class="isOpen ? 'b-overlay-isOpen' : ''">
    OVERLAY FÜR ANMELDUNG
    <br>
    <br>
    <br>
    [WIP]
    <div></div>
    <div></div>
    <div class="b-overlay-cta"><b-btn>Absenden!</b-btn></div>
  </div>
</template>

<script>
import BBtn from "@/components/base/btn/BBtn";
export default {
  name: "BOverlay",
  components: {BBtn},
  props: {
    isOpen: Boolean
  }
}
</script>

<style scoped>
.b-overlay {
  position: absolute;
  height: 90vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  transform: translateY(90vh);
  transition: 250ms ease-in transform;

  padding: 48px;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  box-shadow: 0px -10px 20px rgba(0,0,0, 0.2);
  background-color: rgb(50,50,50);


  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.b-overlay .b-overlay-cta {
  justify-self: flex-end;
}

.b-overlay-isOpen {
  transform: translateY(0vh);
  transition: 0.3s ease-out transform;
}
</style>
