import axios from "axios";
import errorResponse from "./errorResponse";

const fetcher = (url, data, method) => {
    return axios[method](url, data || {}).then(response => {
        if(response.status !== 200) {
          // if response failed
          const error = {
            error: true,
            status: response.status,
            message: response.message || 'Failed to fetch'
          }
          return error;
        }
        
        return response.data
      }).catch(error => errorResponse(error));
}

export default fetcher;