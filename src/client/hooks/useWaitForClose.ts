import * as React from 'react';
import * as rx from 'rxjs';

export const useWaitForClose = (): rx.Subject<void> => {
    const result = new rx.Subject<void>();

    React.useEffect(() => {
        return () => result.next();
    }, []);

    return result;
};
