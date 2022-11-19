<template>
  <section class="login">
    <form @submit.prevent="submitForm">
      <label for="username" class="inp">
        <input type="text" id="username" placeholder="&nbsp;" v-model="username" @blur="username !== '' && clearError(isErrorUsername)"/>
        <span :class="`label ${isErrorUsername && 'error'}`">Username</span>
        <span class="focus-bg"></span>
      </label>
      <label for="password" class="inp">
        <input type="text" id="inp" placeholder="&nbsp;" v-model="password" @blur="password !== '' && clearError(isErrorPassword)"/>
        <span :class="`label ${isErrorPassword && 'error'}`">Password</span>
        <span class="focus-bg"></span>
      </label>
      <button type="submit" class="btn">Login</button>
    </form>
    <transition name="msg">
      <p v-if="errorMsg" class="error-message">{{errorMsg}}</p>
    </transition>
  </section>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      isError: false,
      isErrorUsername: false,
      isErrorPassword: false,
      errorMsg: null
    };
  },
  methods:{
    async submitForm(){
      this.isError = false;
      this.errorMsg = null;
      
      if(this.username === ''){
        this.isErrorUsername = true;
        this.isError = true;
      }
      if(this.password === ''){
        this.isErrorPassword = true;
        this.isError = true;
      }
      if(this.isError) return;
      
      try {
        const isUserExist = await this.$store.dispatch('auth/userExist', {username: this.username, password: this.password});
        if(!isUserExist){
          return this.errorMsg = 'Wrong username or password';
        }else{
          this.$router.replace('/');
        }
      } catch (error) {
        console.log(error);
      }
    },

    clearError(field){
      this.errorMsg = null;
      this[field] = false;
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

form{
  border-radius: 9px;
  padding: 25px 48px 1px;
  box-shadow:  20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
}

.inp {
  position: relative;
  margin: auto;
  display: inline-block;
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 8px;

}

.label {
  position: absolute;
  top: 8px;
  left: 12px;
  font-size: 16px;
  color: rgba(var(--color-dark), 0.5);
  font-weight: 500;
  transform-origin: 0 0;
  transform: translate3d(0, 0, 0);
  transition: all 0.2s ease;
  pointer-events: none;
}

.label.error{
  color: var(--color-alert);
}

.focus-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(var(--color-dark), 0.05);
  z-index: -1;
  transform: scaleX(0);
  transform-origin: left;
}

input {
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  border: 0;
  font-family: inherit;
  padding: 16px 12px 0 12px;
  height: 56px;
  font-size: 16px;
  font-weight: 400;
  background: rgba(var(--color-dark), 0.02);
  box-shadow: inset 0 -1px 0 rgba(var(--color-dark), 0.3);
  color: var(--color-dark);
  transition: all 0.15s ease;
}

input:hover {
  background: rgba(var(--color-dark), 0.04);
  box-shadow: inset 0 -1px 0 rgba(var(--color-dark), 0.5);
}

input:not(:placeholder-shown) + .label {
  color: rgba(var(--color-dark), 0.5);
  transform: translate3d(0, -12px, 0) scale(0.75);
}

input:focus {
  background: rgba(var(--color-dark), 0.05);
  outline: none;
  box-shadow: inset 0 -2px 0 var(--color-scarlet);
}
input:focus + .label {
  color: var(--color-scarlet);
  transform: translate3d(0, -12px, 0) scale(0.75);
}
input:focus + .focus-bg {
  transform: scaleX(1);
  transition: all 0.1s ease;
}

.error-message{
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 15px;
  background: var(--color-alert);
  color: var(--color-light);
  display: inline-block;
  border-radius: 9px;
}

.msg-enter-from {
  opacity: 0;
  transform: translate(-50%, -30px);
}
.msg-leave-to {
  opacity: 0;
  transform: translate(-50%, -30px);
}
.msg-enter-active {
  transition: all 0.45s ease-out;
}
.msg-leave-active {
  transition: all 0.45s ease-in;
}
.msg-enter-to,
.msg-leave-from {
  opacity: 1;
  transform: translate(-50%, 0);
}
</style>
