import { createStore } from "vuex";
import AuthModule from './modules/auth/index';
import BetsModule from './modules/bets/index';
import MatchesModule from './modules/matches/index';

const store = createStore({
  modules: {
      auth: AuthModule,
      bets: BetsModule,
      matches: MatchesModule,
  },
  state(){
      return {
          userName: 'Stoyan'
      }
  }
})

export default store;
