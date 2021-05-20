<template>
  <p class="btn-shine"><slot></slot></p>
</template>

<script>
export default {
  name: "TextAnimation"
}
</script>

<style scoped>

.btn-shine {
  position: absolute;
  top: 33%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 12px 48px;
  color: #ffffff;
  background: linear-gradient(to right, var(--primary-color) 0, var(--primary-color-lighten) 20%, var(--primary-color) 40%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 32px;
  text-decoration: none;
  white-space: nowrap;
}

@keyframes shine {
  100% {
    background-position: 0 60%;
    background-position: 180px 100%;
    background-position: 180px;
  }
}
</style>
