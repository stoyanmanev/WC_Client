import axios from "axios";
import { FETCH_URL } from "@/globals";
import errorResponse from "@/helpers/errorResponse";

export default {
    async fetchMatches(context){
        return axios.get(`${FETCH_URL}/matches`).then(response => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }

            context.commit('setMatches', response.data);
            return true;
        }).catch(error => errorResponse(error));
    }
};