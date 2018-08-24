import {
    GET_USER_PROFILE,
    UPDATE_USER_PROFILE_GOOD,
    UPDATE_USER_PROFILE_FAIL,
    GENERATE_TEMP,
    FETCH_GRAPH
} from '../actions/types';

let INITIAL_STATE = {
    updateProfileFailMsg: '',
    profile: null,
    generateTemp: null,
    graph: [
        {
            index: 0,
            temperature: 0,
            timestamp: new Date()
        }
    ]
}

export default function(state=INITIAL_STATE, action) {
    switch (action.type) {
        case GET_USER_PROFILE:
            return { ...state, profile: action.payload }
        case UPDATE_USER_PROFILE_GOOD:
            return { ...state, updateProfileFailMsg: '' }
        case UPDATE_USER_PROFILE_FAIL:
            return { ...state, updateProfileFailMsg: 'Incorrect Password' }

        case GENERATE_TEMP: 
            return state = {
                ...state,
                generateTemp: action.payload
            }
        case FETCH_GRAPH:
            console.log(action.payload)
            return state = {
                ...state,
                graph: action.payload.data.final
            }
        default:
            return state
    }
}