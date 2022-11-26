<template>
  <section class="matches">
    <div v-if="isLoaded" class="loader">
      <p>Loading...</p>
    </div>
    <div v-else>
      <div class="matches-navi">
        <ul>
          <li>
            <span @click="() => switchListMatches('upcoming-matches')">Предстоящи</span>
          </li>
          <li>
            <span @click="() => switchListMatches('live-matches')">На живо</span>
          </li>
          <li>
            <span @click="() => switchListMatches('compleated-matches')">Резултати</span>
          </li>
        </ul>
      </div>
      <div class="matches-wrapper">
        <div v-if="activeTab === 'live-matches'" class="live-results-wrapper">
          <div v-if="!hasLiveMatches" class="no-results-wrapper">
            <h2>В момента няма мачове на живо</h2>
          </div>
          <div v-else>
            <h2>Резултати на Живо</h2>
            <match-item
              v-for="match in liveMatchesList"
              :key="match.home"
              :match="match"
            ></match-item>
          </div>
        </div>
        <div v-if="activeTab === 'upcoming-matches'" class="upcoming-matches-wrapper">
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
        <div v-if="activeTab === 'compleated-matches'" class="finished-results-wrapper">
          <div v-if="!hasCompletedMatches" class="no-results-wrapper">
            <h2>Все още няма резултати за изминали мачове</h2>
          </div>
          <div v-else>
            <h2>Резултати</h2>
            <match-item
              v-for="match in finishedMatchesList"
              :key="match.home"
              :match="match"
            ></match-item>
          </div>
        </div>
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
      activeTab: 'upcoming-matches',
    };
  },
  computed: {
    matchesList() {
      const data = this.$store.getters["matches/matches"];
      const bets = this.$store.getters["bets/userBets"];

      const upcomingMatches = data.matches.filter(match => {
        match.bet = bets.hasOwnProperty(match.key) ? bets[match.key] : null;
        return !match.finished && !match.isPlaying
      });

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
          await this.$store.dispatch("bets/loadUserBets");
          this.$store.dispatch("navigation/setNavigationState", true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = false;
      }
    },
    switchListMatches(type){
      this.activeTab = type;
    }
  },
  created() {
    this.loadMatches();
  }
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

.matches-wrapper{
  margin-top: 50px;
}

.finished-results-wrapper{
  margin-bottom: 98px;
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
.matches-navi{
  position: fixed;
  top: 15px;
  left: 15px;
  z-index: 999;
  opacity: 1;
  visibility: visible;
  pointer-events: none;
}
.matches-navi ul{
  display: flex;
  list-style: none;
  padding: 15px;
  pointer-events: all;
  border-radius: 9px;
  background: var(--color-dark);
}
.matches-navi li{
  margin-right: 14px;
  cursor: pointer;
  font-size: 12px;
  line-height: 1em;
}
.matches-navi li:last-child{
  margin-right: 0;
}

</style>
