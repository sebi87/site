<template>
  <div id="app">
    <div>
      <b-image src="logo-rennfreunde.png" alt="logo-rennfreunde" height="100px"/>
      <h1>{{ content.title }}</h1>
      <h3>{{ content.subtitle }}</h3>
      <p>{{ content.paragraph }}</p>
      <p>{{ api }}</p>
      <div class="ctas">
        <b-btn @click="openFlyOut">{{ content.cta }}</b-btn>
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
    overlayIsOpen: false,
    content: {}
  }),
  methods: {
    openFlyOut() {
      this.overlayIsOpen = true
    }
  },
  mounted() {
    import('@/assets/content').then(v => this.content = v.getHome())
  },
  computed: {
    api() {return process.env.VUE_APP_MAIL_ENDPOINT}
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
