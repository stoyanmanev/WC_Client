import axios from "axios";
import { FETCH_URL } from "@/globals";
import { DB_URL } from "@/globals";
import errorResponse from "@/helpers/errorResponse";

export default {
    async fetchMatches(){
        return axios.get(`${FETCH_URL}/matches`).then( response => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }
            
            return response.data;
            
        }).catch(error => errorResponse(error));
    },
    async saveMatchesToDB(context, payload){
        const requestData = {
            success: payload.success,
            error: payload.error,
            matches: {},
            haveResults: payload.haveResults
        };

        /// new matches from api
        payload.matches.forEach(match => {
            requestData.matches[`${match.home}-${match.away}:${match.date}`] = match;
        });

        /// merge api and db results
        const mergeResults = await axios.get(`${DB_URL}/matches/matches.json`).then(response => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }

            requestData.matches = {
                ...response.data,
                ...requestData.matches
            }

            return requestData;
        }).catch(error => errorResponse(error));


        return axios.put(`${DB_URL}/matches/matches.json`, mergeResults.matches).then(response => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }

            mergeResults.matches = response.data;
            context.commit('setMatches', mergeResults);
            return mergeResults;

        }).catch(error => errorResponse(error));
    }
};