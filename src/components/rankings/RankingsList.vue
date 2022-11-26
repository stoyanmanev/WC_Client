<template>
  <section class="rankings">
    <div v-if="isLoaded" class="loader">
      <p>Loading...</p>
    </div>
    <rankings-item
      v-for="rank in rankingsList"
      :key="rank"
      :rank="rank"
      v-else
    ></rankings-item>
  </section>
</template>

<script>
import RankingsItem from "./RankingsItem.vue";
export default {
  components: {
    RankingsItem,
  },
  data() {
    return {
      isLoaded: false,
    };
  },
  computed: {
    rankingsList() {
      const data = this.$store.getters["rankings/rankings"];
      const m = data.map((result, i) => {
        return{
            user: result.key,
            nickname: result.nickname,
            place: i + 1,
            points: result.points
        }
      });
      return m;
    },
  },
  methods: {
    async loadRankigs() {
      this.isLoaded = true;
      try {
        await this.$store.dispatch("rankings/loadRankings");
      } catch (error) {
        console.log(error);
      } finally {
        this.isLoaded = false;
      }
    },
  },
  created() {
    this.loadRankigs();
  },
};
</script>

<style></style>
