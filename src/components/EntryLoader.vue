<template>
  <section class="loader">
    <div class="wrapper">
      
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style scoped>
section{
  background: var(--color-scarlet);
}
    .wrapper{
        overflow: hidden;
        height: 100vh;
        width: 100%;
    }
    .wrapper figure{
        height: 100%;
        width: 100%;
    }
    .wrapper img{
        height: 100%;
        width: 100%;
        object-fit: cover;
        object-position: center;
    }
</style>