/**
 * Created by Fary Hurtado on 17/05/2017.
 */

export const REQUEST_ZEN = "REQUEST_ZEN";
export const RECEIVE_ZEN = "RECEIVE_ZEN";
export const RECEIVE_ZEN_ERROR = "RECEIVE_ZEN_ERROR";

export function requestZenAction() {
    return {
        type: REQUEST_ZEN
    };
}

export function receiveZenAction(data) {
    return {
        type: RECEIVE_ZEN,
        payload: {
            data: data
        }
    };
}

export function receiveZenErrorAction(error) {
    return {
        type: RECEIVE_ZEN_ERROR,
        payload: {
            error: error
        }
    };
}