<template>
  <section class="home">
    <p>Home</p>
    <matches-list></matches-list>
  </section>
</template>

<script>
import MatchesList from '@/components/matches/MatchesList.vue';
export default {
  components: {
    MatchesList
  }
}
</script>
