import { createStore } from "vuex";
import AuthModule from './modules/auth/index';
import BetsModule from './modules/bets/index';
import NavigationModule from './modules/navigation/index';
import MatchesModule from './modules/matches/index';
import RankingsModule from './modules/rankings/index';

const store = createStore({
  modules: {
      auth: AuthModule,
      bets: BetsModule,
      rankings: RankingsModule,
      matches: MatchesModule,
      navigation: NavigationModule
  },

})

export default store;
