import { useEffect, useState } from 'react';

export const useGetDataAction = <T>(action: () => T, depts: ReadonlyArray<unknown>): boolean => {
    const [dataIsReady, setDataIsReady] = useState(false);
    useEffect(() => {
        (async () => {
            await action();
            setDataIsReady(true);
        })();
    }, depts);

    return dataIsReady;
};
