<template>
  <div class="b-overlay" :class="iternalIsOpen ? 'b-overlay-isOpen' : ''">
      <b-form class="b-overlay-cta" :fields="fields">
        <b-btn slot="submit" submit @click="close">Absenden!</b-btn>
      </b-form>
  </div>
</template>

<script>
import BBtn from "@/components/base/btn/BBtn";
import BForm from "@/components/base/form/BForm";
import axios from "axios";
export default {
  name: "BOverlay",
  components: {BForm, BBtn},
  data: () => ({
    iternalIsOpen: false,
    fields: [
        {id: "name", label: "Vorname", value: undefined},
        {id: "psn", label: "PSN-ID", value: undefined},
        {id: "tel", label: "Mobilnummer", value: undefined},
    ]
  }),
  props: {
    value: Boolean
  },
  watch: {
    value: {
      immediate: true,
      handler: function (val) {
        this.iternalIsOpen = val
      }
    }
  },
  methods: {
    close() {
      this.iternalIsOpen = false
      this.$emit('input', false)
      this.sendMail()
    },
    arrayToObject(arr, key) {
      return arr.reduce((acc, e) => {
        const newKey = e[key];
        delete e[key]
        Object.assign(acc, {[newKey]: e})
        return acc;
      }, {})
    },
    sendMail() {
      console.log(process.env.VUE_APP_MAIL_ENDPOINT)
      axios.create({baseURL: process.env.VUE_APP_MAIL_ENDPOINT})
          .post("/f1rf/api/mails", this.arrayToObject(this.fields, "id"))
      .then(() => console.log("SUCCESS"))
      .catch(e => console.error(e))
    }
  }
}
</script>

<style scoped>
.b-overlay {
  position: absolute;
  height: 76vh;
  width: 100vw;
  bottom: 0;
  left: 0;
  transform: translateY(90vh);
  transition: 250ms ease-in transform;

  padding: 48px 48px 48px 48px;
  border-top-right-radius: 32px;
  border-top-left-radius: 32px;
  box-shadow: 0px -10px 20px rgba(0,0,0, 0.2);
  background-color: rgb(50,50,50);


}

.b-overlay .b-overlay-cta {
  /*justify-self: flex-end;*/
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 32px;
}

.b-overlay-isOpen {
  transform: translateY(0vh);
  transition: 0.3s ease-out transform;
}
</style>
