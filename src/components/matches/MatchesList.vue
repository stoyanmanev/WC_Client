<template>
  <section class="matches">
    <p v-if="isLoaded">Loading...</p>
    <div v-else>
      <p v-if="!hasResults">No matches were found for the next 4 days.</p>
      <match-item v-for="match in matchesList" :key="match.home" :match="match"></match-item>
    </div>
  </section>
</template>

<script>
import MatchItem from './MatchItem.vue';
export default {
  components: {
    MatchItem
  },
  data() {
    return {
      matches: null,
      isLoaded: false,
      hasResults: true,
    };
  },
  computed: {
    matchesList() {
      const data = this.$store.getters["matches/matches"];
      console.log(data);
      return data.matches;
    },
  },
  methods: {
    async loadMatches() {
      this.isLoaded = true;
      try {
        const responseData = await this.$store.dispatch("matches/fetchMatches");
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = false;
      }
    },
  },
  created() {
    this.loadMatches();
  },
};
</script>

<style scoped></style>
