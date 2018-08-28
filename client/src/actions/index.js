import axios from 'axios';
import { 
    AUTH_ERROR,

    GENERATE_TEMP,
    FETCH_GRAPH
} from './types';
const ROOT_URL = process.env.API_URI || 'http://localhost:3001';

axios.defaults.baseURL = ROOT_URL;

export function generateTemperature(data){
    return function (dispatch) {
        axios
            .post(`/api/thermometer/generateTemperature`, data)
            .then(res => {
                dispatch({
                    type: GENERATE_TEMP,
                    payload: res
                })

            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Server Error, try later.'})
            });
    }
}

export function getAllTemperature(data){
    return function (dispatch) {
        axios
            .post(`/api/thermometer/getAllTemperature`, data)
            .then(res => {
                dispatch({
                    type: FETCH_GRAPH,
                    payload: res
                })
            })
            .catch(error => {
                console.log(error);
                dispatch({type: AUTH_ERROR, payload: 'Server Error, try later.'})
            });
    }
}

