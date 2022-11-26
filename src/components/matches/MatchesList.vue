<template>
  <section class="matches">
    <div v-if="isLoaded" class="loader">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div v-if="hasLiveMatches" class="live-results-wrapper">
        <h2>Резултати на Живо</h2>
        <match-item
          v-for="match in liveMatchesList"
          :key="match.home"
          :match="match"
        ></match-item>
      </div>
      <div class="upcoming-matches-wrapper">
        <div v-if="!hasResults" class="no-results-wrapper">
          <h2>Няма предстоящи мачове за следващите 4 дни.</h2>
        </div>
        <div v-else class="wrapper">
          <h2>Предстоящи мачове</h2>
          <match-item
            v-for="match in matchesList"
            :key="match.home"
            :match="match"
            :bet="true"
          ></match-item>
        </div>
      </div>
      <div v-if="hasCompletedMatches" class="finished-results-wrapper">
        <h2>Резултати</h2>
        <match-item
          v-for="match in finishedMatchesList"
          :key="match.home"
          :match="match"
        ></match-item>
      </div>
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
      hasCompletedMatches: true,
      hasLiveMatches: true,
      isLoaded: false,
      hasResults: true,
    };
  },
  computed: {
    matchesList() {
      const data = this.$store.getters["matches/matches"];
      const upcomingMatches = data.matches.filter(match => !match.finished && !match.isPlaying);
      return upcomingMatches;
    },
    finishedMatchesList(){
      const data = this.$store.getters["matches/finishedMatches"];
      if(Object.keys(data.matches).length === 0) this.hasCompletedMatches = false;
      return data.matches;
    },
    liveMatchesList(){
      const data = this.$store.getters["matches/liveMatches"];
      if(Object.keys(data.matches).length === 0) this.hasLiveMatches = false;
      return data.matches;
    }
  },
  methods: {
    async loadMatches() {
      this.isLoaded = true;
      try {
        const responseData = await this.$store.dispatch("matches/fetchMatches");
        if (responseData.success) {
          await this.$store.dispatch("matches/saveMatchesToDB", responseData);
          this.$store.dispatch("navigation/setNavigationState", true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = false;
      }
    }
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
.no-results-wrapper{
  text-align: center;
}

.finished-results-wrapper{
  margin-top: 98px;
}
.live-results-wrapper{
  margin-bottom: 98px;
}
.finished-results-wrapper h2,
.upcoming-matches-wrapper h2,
.live-results-wrapper h2{
  text-align: center;
  margin-bottom: 48px;
}
</style>
