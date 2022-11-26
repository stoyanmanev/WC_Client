<template>
  <router-view v-slot="slotProps">
    <the-navigation v-if="isShowNavigation"></the-navigation>
    <transition name="router" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
import TheNavigation from "./layout/TheNavigation.vue";
export default {
  components: { TheNavigation },
  data() {
    return {
      showNavigation: this.$store.getters['navigation/navigationState'],
    };
  },
  computed: {
    isShowNavigation(){
      return this.$store.getters['navigation/navigationState'];
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");

:root {
  --color-scarlet: #9a1132;
  --color-dark-scarlet: #1c020c;
  --color-yellow: #fec310;
  --color-picton-blue: #49bce3;
  --color-boat-blue: #1077c3;
  --color-dark: #0c0006;
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
body {
  background: rgba(28, 2, 12, 1);
  background: radial-gradient(
    circle,
    var(--color-dark-scarlet) 50%,
    var(--color-dark) 100%
  );
}
#app {
  font-family: var(--main-font);
  font-size: var(--fs);
  line-height: calc(1em + 10px);
  color: var(--color-light);
  max-width: 1048px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 50px 0;
}

.btn {
  background-color: var(--color-scarlet);
  color: var(--color-light);
  border-radius: 9px;
  padding: 18px 30px;
  min-width: 201px;
  border: 1px solid var(--color-scarlet);
  cursor: pointer;
  transition: all 0.45s ease-out;
  margin-bottom: var(--lh);
}

.btn:hover,
.btn:active,
.btn:focus {
  background-color: var(--color-dark-scarlet);
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
