/**
 * Created by Fary Hurtado on 16/05/2017.
 */

import {
    REQUEST_ZEN,
    RECEIVE_ZEN,
    RECEIVE_ZEN_ERROR,
    requestZenAction,
    receiveZenAction,
    receiveZenErrorAction
} from './ZenActions';
import {fetchZen as fetchZenService} from '../../services/ZenService';


const initialState = {
    zen: null,
    fetching: false,
    error: null
};

export function fetchZen(dispatch) {
    return fetchZenService(dispatch, requestZenAction, receiveZenAction, receiveZenErrorAction);
}

export default function ZenStateReducer(state = initialState, action = {}) {
    switch (action.type) {
        case REQUEST_ZEN:
            return {...state, fetching: true, zen: null, error: null};
        case RECEIVE_ZEN:
            return {...state, fetching: false, error: null, zen: action.payload.data};
        case RECEIVE_ZEN_ERROR:
            return {...state, fetching: false, zen: null, error: action.payload.error};
        default:
            return state;
    }
}