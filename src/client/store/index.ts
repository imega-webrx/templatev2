import { Action, applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk, { ThunkDispatch } from 'redux-thunk';

import authentication from './authentification/reducers';
import tariffs from './tariffs/reducers';
import partners from './partners/reducers';
import common from './common/reducers';

const rootReducer = combineReducers({
    authentication: authentication,
    tariffs,
    partners,
    common,
});

const configureStore = () => createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export const makeStore = () => configureStore();

export const store = makeStore();

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;
export type RootThunkDispatch = ThunkDispatch<RootState, undefined, Action>;
