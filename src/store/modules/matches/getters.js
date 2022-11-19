import filterObjectsByDate from "@/helpers/filterByDate";

export default {
    matches(state){
        state.matches.matches = filterObjectsByDate(state.matches.matches);
        return state.matches;
    },
    finishedMatches(state){
        const completedMatches = Object.keys(state.matches.matches).filter(key => {
            if(state.matches.matches[key].finished) return state.matches.matches[key];
        });

        const responseData = {...state.matches};
        responseData.matches = {};
        completedMatches.forEach(match => {
            responseData.matches[match] = state.matches.matches[match];
        });

        return responseData;
    },
    liveMatches(state){
        const liveMatches = Object.keys(state.matches.matches).filter(key => {
            if(state.matches.matches[key].isPlaying) return state.matches.matches[key];
        });

        const responseData = {...state.matches};
        responseData.matches = {};
        liveMatches.forEach(match => {
            responseData.matches[match] = state.matches.matches[match];
        });

        return responseData;
    }
};