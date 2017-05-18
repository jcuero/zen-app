/**
 * Created by Fary Hurtado on 16/05/2017.
 */

import {isFunction} from '../utils/utils';

export const getAsText = (api, dispatch, requestCallback, receiveCallback, receiveErrorCallback) => {
    return get(api, 'text', dispatch, requestCallback, receiveCallback, receiveErrorCallback);
};

export const getAsJson = (api, dispatch, requestCallback, receiveCallback, receiveErrorCallback) => {
    return get(api, 'json', dispatch, requestCallback, receiveCallback, receiveErrorCallback);
};

const get = (api, typeResponse, dispatch, requestCallback, receiveCallback, receiveErrorCallback) => {

    if (isFunction(requestCallback)) {
        dispatch(requestCallback());
    }

    return fetch(api, {method: 'GET'})
        .then(data => {
            if (typeResponse === 'text') {
                return data.text();
            } else if (typeResponse === 'json') {
                return data.json();
            } else {
                return data;
            }
        })
        .then(textResponse => {
            if (isFunction(receiveCallback)) {
                dispatch(receiveCallback(textResponse));
            }
        })
        .catch(error => {
            if (isFunction(receiveErrorCallback)) {
                dispatch(receiveErrorCallback(error));
            }
        })
};