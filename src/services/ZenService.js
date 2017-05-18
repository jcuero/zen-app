/**
 * Created by Fary Hurtado on 16/05/2017.
 */

import {API_ZEN} from '../utils/constantes';
import {getAsText} from './BaseService';

export const fetchZen = (dispatch, requestAction, receiveAction, receiveErrorAction) => {
    return getAsText(API_ZEN, dispatch, requestAction, receiveAction, receiveErrorAction);
};