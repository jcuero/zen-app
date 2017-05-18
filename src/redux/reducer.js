/**
 * Created by Fary Hurtado on 16/05/2017.
 */

import {combineReducers} from 'redux'

import ZenStateReducer from '../modules/zen/ZenState';

export default combineReducers({
    zenState: ZenStateReducer,
})