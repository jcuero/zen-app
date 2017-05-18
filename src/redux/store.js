/**
 * Created by Fary Hurtado on 16/05/2017.
 */
import {createStore} from 'redux'
import reducers from './reducer';

const store = createStore(reducers);

export default store;
