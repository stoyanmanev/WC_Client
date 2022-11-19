import {DB_URL} from "@/globals";
import errorResponse from "@/helpers/errorResponse";
import axios from "axios";

export default {
    async userExist(context, payload){
        return axios.get(`${DB_URL}/users.json`).then(response => {
            if(response.error){
                const error = new Error(response.message || 'Failed to fetch!');
                throw error;
            }
            
            const {username, password} = payload;

            if(response.data[username] && response.data[username].password === password){
                context.commit('setUser', {username, ...response.data[username]});
                return true;
            }
            
            return false;
        }).catch(error => errorResponse(error));
    }
};