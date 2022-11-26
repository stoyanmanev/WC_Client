import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

export default {
    namespaced: true,
    state(){
        return {
            bets: null,
            userBets: null,
            betsList: null,
        }
    },
    mutations,
    actions,
    getters
};