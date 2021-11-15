import * as React from 'react';

import { useRouter } from 'next/router';
import { createContext, PropsWithChildren } from 'react';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { STORAGE } from 'services/storage/StorageAdapter';

export interface IAuthContext extends Record<string, unknown> {}

export const AuthContext = createContext<IAuthContext>({});

export const AuthContextProvider = ({ children }: PropsWithChildren<IAuthContext>): JSX.Element => {
    const router = useRouter();
    const { setProfileFromStorage } = useActions();
    const { isAuthenticated } = useTypedSelector((state: { authentification: any; }) => state.authentification);

    const setProfileFromStorageAsync = React.useCallback(async () => await setProfileFromStorage(), [setProfileFromStorage]);

    React.useEffect(() => {
        if (!STORAGE.getToken()) {
            router.push('/login');
        }

        if (STORAGE.getToken() && !isAuthenticated) {
            const setProfileFromStorage = async () => await setProfileFromStorageAsync();
            setProfileFromStorage();
        }
    }, []);

    return <AuthContext.Provider value={{}}>{isAuthenticated && children}</AuthContext.Provider>;
};
