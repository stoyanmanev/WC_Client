<template>
  <section class="matches">
    <div v-if="isLoaded" class="loader">
      <p>Loading...</p>
    </div>
    <div v-else>
      <p v-if="!hasResults">No matches were found for the next 4 days.</p>
      <match-item
        v-for="match in matchesList"
        :key="match.home"
        :match="match"
      ></match-item>
    </div>
  </section>
</template>

<script>
import MatchItem from "./MatchItem.vue";
export default {
  components: {
    MatchItem,
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
        if (responseData.success) {
          await this.$store.dispatch("matches/saveMatchesToDB", responseData);
        }
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

<style scoped>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
