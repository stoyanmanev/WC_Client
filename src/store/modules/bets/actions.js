import axios from "axios";
import { DB_URL } from "@/globals";
import errorResponse from "@/helpers/errorResponse";

export default {
    async setBet(context, payload){
        return axios.get(`${DB_URL}/bets.json`).then( async(response) => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }


            if(response.data === null){
                response.data = {};
                response.data[`${payload.user.username}`] = {};
            }else if(response.data[`${payload.user.username}`] === undefined){
                response.data[`${payload.user.username}`] = {};
            }
            
            const userBets = response.data[`${payload.user.username}`];

            userBets[`${payload.match.home}-${payload.match.away}:${payload.match.date}`] = `${payload.bet}`;


            const requestData = {
                ...response.data,
                [`${payload.user.username}`]: userBets,
            };
            

            return axios.put(`${DB_URL}/bets.json`, requestData).then(response => {
                if(response.error){
                    const error = new Error(response.message || 'Failed to fetch!');
                    throw error;
                }
                
                context.commit('setBets', response.data);
                return response.data;
            }).catch(error => errorResponse(error));
            
        }).catch(error => errorResponse(error));
    },
    async loadBets(context){
        return axios.get(`${DB_URL}/bets.json`).then( async(response) => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }
            
            context.commit('loadBets', response.data);
            return true;
            
        }).catch(error => errorResponse(error));
    }
};