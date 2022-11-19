<template>
  <router-view v-slot="slotProps">
    <transition name="router" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

:root {
  --color-scarlet: #9a1132;
  --color-yellow: #fec310;
  --color-picton-blue: #49bce3;
  --color-boat-blue: #1077c3;
  --color-dark: #212121;
  --color-grey: #b3b3b3;
  --color-light: #ffffff;
  --color-alert: #ff0000;
  --main-font: "Poppins", sans-serif;
  --fs: 16px;
  --lh: 24px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
*::-webkit-scrollbar {
  display: none;
  width: 0;
}
#app {
  font-family: var(--main-font);
  font-size: var(--fs);
  line-height: calc(1em + 10px);
  color: var(--color-dark);
  background: var(--color-light);
  overflow-x: hidden;
}

.btn{
  background-color: var(--color-scarlet);
  color: var(--color-light);
  border-radius: 9px;
  padding: 18px 30px;
  min-width: 201px;
  border: 1px solid var(--color-scarlet);
  cursor: pointer;
  transition: all .45s ease-out;
  margin-bottom: var(--lh);
}

.btn:hover,
.btn:active,
.btn:focus{
  background-color: var(--color-light);
  color: var(--color-scarlet);
}

a {
  color: var(--color-scarlet);
}
a:hover,
a:focus,
a:active {
  color: var(--color-yellow);
}

.router-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.router-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.router-enter-active {
  transition: all 0.45s ease-out;
}
.router-leave-active {
  transition: all 0.45s ease-in;
}
.router-enter-to,
.router-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
