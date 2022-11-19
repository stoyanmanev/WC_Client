import { createStore } from "vuex";
import AuthModule from './modules/auth/index';
import MatchesModule from './modules/matches/index';

const store = createStore({
  modules: {
      auth: AuthModule,
      matches: MatchesModule,
  },
  state(){
      return {
          userName: 'Stoyan'
      }
  }
})

export default store;
