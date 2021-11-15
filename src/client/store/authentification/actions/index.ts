import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { getClient, createClientInstance } from '../../../services/client/clientProvider';
import { ActionTypes } from '../types';
import { RootState } from '../../index';

import { IBaseActionCreator } from '../../interfaces';
import { STORAGE } from 'services/storage/StorageAdapter';
import { CheckAutenticationResponseModel, LoginWithPasswordRequestModel, LoginWithPasswordResponseModel } from 'types';

type AutentificationThunkResultModel<R> = ThunkAction<R, RootState, undefined, Action>;

export interface IActionCreator<P> extends IBaseActionCreator<ActionTypes, P> {
    type: ActionTypes;
    payload: P;
}

function actionCreator<T>(actionType: ActionTypes, data: T): IActionCreator<T> {
    return {
        type: actionType,
        payload: data,
    };
}

const setDataLoading = (isLoading: boolean): IActionCreator<boolean> => {
    return actionCreator<boolean>(ActionTypes.SET_DATA_LOADING, isLoading);
};

const setToken = (token: string): IActionCreator<string> => {
    return actionCreator<string>(ActionTypes.SET_TOKEN, token);
};

const setHelperText = (text: string): IActionCreator<string> => {
    return actionCreator<string>(ActionTypes.SET_HELPER_TEXT, text);
};

const setIsAuthenticated = (isAuthenticated: boolean): IActionCreator<boolean> => {
    return actionCreator<boolean>(ActionTypes.SET_IS_AUTHENTICATED, isAuthenticated);
};

const setHasError = (): Action => ({ type: ActionTypes.HAS_ERROR });

const handleError = () => {
    return (dispatch: any) => {
        dispatch(setDataLoading(false));
        dispatch(setHasError());
    };
};

const setTokenToStorage = (token: string) => {
    STORAGE.setToken(token);
};

const getTokenFromStorage = (): string => STORAGE.getToken();

const checkAuthentication = (): AutentificationThunkResultModel<Promise<void>> => async (dispatch, getState) => {
    dispatch(setDataLoading(true));

    const client = getClient();

    try {
        const response: CheckAutenticationResponseModel = await client.getAuthService().checkAuthentication();

        if (response) {
            dispatch(setIsAuthenticated(true));
            dispatch(setToken(response.token));
            setTokenToStorage(response.token);
            createClientInstance();
        }
    } catch (error: any) {
        dispatch(handleError());
        STORAGE.clear();
        window.location.href = '/login';
    } finally {
        dispatch(setDataLoading(false));
    }
};

export const handleLogin =
    (model: LoginWithPasswordRequestModel): AutentificationThunkResultModel<Promise<void>> =>
        async (dispatch) => {
            dispatch(setDataLoading(true));

            const client = getClient();

            try {
                const response: LoginWithPasswordResponseModel = await client.getAuthService().loginWithPassword(model);
                if (response) {
                    dispatch(setToken(response.token));
                    setTokenToStorage(response.token);
                    dispatch(setIsAuthenticated(true));
                    createClientInstance();
                }
            } catch (error: any) {
                console.log('handleLogin', error);
                dispatch(handleError());
            } finally {
                dispatch(setDataLoading(false));
            }
        };

export const setProfileFromStorage = (): AutentificationThunkResultModel<Promise<void>> => async (dispatch) => {
    if (getTokenFromStorage()) {
        dispatch(checkAuthentication());
    } else {
        dispatch(handleLogout());
    }
};

export const handleLogout = () => {
    return (dispatch: any) => {
        STORAGE.clear();
        dispatch(setIsAuthenticated(false));
        dispatch(setToken(null));
    };
};
