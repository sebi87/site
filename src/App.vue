<template>
  <div id="app">
    <div>
      <b-image src="logo-rennfreunde.png" alt="logo-rennfreunde" height="100px"/>
      <h1>7 Ligen<br>160 Fahrer</h1>
      <h3>F1 Rennfreunde</h3>
      <p>Du zockst gerne F1 auf der PS4/5? Du hast Lust dich mit anderen Fahrern zu messen? Du willst dein Team nach vorne bringen und möglichst viele Punkte sammeln? Dann bewirb dich bei der geilsten Community im Netz!</p>
      <div class="ctas">
        <b-btn @click="openFlyOut">Mitmachen!</b-btn>
      </div>


    </div>
    <b-overlay v-model="overlayIsOpen"></b-overlay>
  </div>
</template>

<script>

import BImage from "@/components/base/img/BImage";
import BInput from "@/components/base/input/BInput";
import BBtn from "@/components/base/btn/BBtn";
import BOverlay from "@/components/base/overlay/BOverlay";
export default {
  name: 'App',
  // eslint-disable-next-line vue/no-unused-components
  components: {BOverlay, BBtn, BInput, BImage},
  data: () => ({
    input: '',
    overlayIsOpen: false
  }),
  methods: {
    openFlyOut() {
      this.overlayIsOpen = true
    }
  }
}
</script>

<style>
:root{
  --primary-color: rgb(241, 161, 83);
  --primary-color-lighten: rgb(252, 205, 165);
}

#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: hsl(0, 0%, 100%);
  margin: 0;
  padding: 48px 40px;
  height: 100%;
  width: 100%;
  background-color: rgba(45,45,45,0.95);
}

#app h1 {
  font-size: 52px;
  font-weight: 800;
  margin: 32px 0 0 0;
  text-align: center;
}

#app h3 {
  font-size: 18px;
  font-weight: 600;
  color: var(--primary-color);
  margin: 4px 0;
}

#app p {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.72;
  color: #fff;
  margin: 48px 0;
}

.ctas {
  padding-top: 52px;
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
html, body, #app {
  overflow: hidden;
}
*::before, *::after, * {
  box-sizing: border-box;
}
</style>
