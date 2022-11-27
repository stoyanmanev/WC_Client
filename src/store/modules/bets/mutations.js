export default {
    setBets(state, payload){
        state.bets = payload;
    },
    setUserBets(state, payload){
        state.userBets = payload;
    },
    loadBets(state, payload){
        state.betsList = payload;
    }
};