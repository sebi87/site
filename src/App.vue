<template>
  <div id="app">
<!--    <b-image src="logo-rennfreunde.png" alt="logo-rennfreunde"/>-->

    <text-animation>F1 Rennfreunde</text-animation>
  </div>
</template>

<script>

// import BImage from "@/components/base/img/BImage";
import TextAnimation from "@/components/base/TextAnimation";
export default {
  name: 'App',
  components: {TextAnimation},
  // components: {
  //   BImage
  // }
}
</script>

<style>
:root{
  --primary-color: rgb(241, 144, 49);
  --primary-color-lighten: rgb(252, 205, 165);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(0, 0%, 100%);
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;

  background-color: rgba(45,45,45,0.95);
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  background: url("assets/F12020.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
