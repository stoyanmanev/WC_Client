<template>
  <div class="rank">
    <div>
      <span class="place">
        {{rank.place}}
      </span>
      <span class="user">
        {{rank.user}}
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
  props: ['rank']
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
    text-transform: uppercase;
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
  
  .place{
    font-size: 16px;
    line-height: calc(1em + 10px);
    margin-right: 8px;
  }
</style>