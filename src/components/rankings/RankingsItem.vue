<template>
  <div :class="`rank ${currentUser}`">
    <div>
      <span class="place">
        {{rank.place}}
      </span>
      <span class="user">
        {{this.rank.nickname}}
      </span>
    </div>
    <div>
      <span class="points">
        {{rank.points}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['rank'],
  computed: {
    currentUser(){
      const storeUser = this.$store.getters['auth/user'].username;
      return this.rank.user === storeUser ? 'myrank' : '';
    }
  }
}
</script>

<style>
  .rank{
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: var(--lh);
    font-size: 24px;
    line-height: calc(1em + 10px);
    padding: 8px 24px;
    z-index: 1;
  }

  .rank:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    
    rgba(154, 17, 50, 0.4) 0%,
    rgba(255, 255, 255, 0.02) 100%
  );
  z-index: -1;
}

.rank.myrank:before{
  background: radial-gradient(
    rgba(154, 17, 50, 0.8) 50%,
    rgba(255, 255, 255, 0.01) 100%
  );
}
  
  .place{
    font-size: 16px;
    line-height: calc(1em + 10px);
    margin-right: 8px;
  }
</style>