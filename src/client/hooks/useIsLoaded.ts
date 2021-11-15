import { useEffect, useState } from 'react';

export const useIsLoaded = (): boolean => {
    const [loaded, setLoaded] = useState(false);
    useEffect(() => setLoaded(true), []);
    return loaded;
};
