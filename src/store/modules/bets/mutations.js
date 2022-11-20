export default {
    setBets(state, payload){
        state.bets = payload;
    },
    loadBets(state, payload){
        state.betsList = payload;
    }
};