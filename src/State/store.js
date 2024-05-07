import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import { authReducer } from './Auth/Reducer.js';
import { customerProductReducer } from './Product/Reducer.js';
import { cartReducer } from './Cart/Reducer.js';
import { orderReducer } from './Order/Reducer.js';

const rootReducer = combineReducers({
    auth:authReducer,
    products:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));