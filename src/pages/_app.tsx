import * as React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Head from 'next/head';
import 'nprogress/nprogress.css';
import type { AppProps } from 'next/app';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '../client/store';

const App = ({ Component, pageProps }: AppProps) => {
    React.useEffect(() => {
        Router.events.on('routeChangeStart', () => NProgress.start());
        Router.events.on('routeChangeComplete', () => NProgress.done());
        Router.events.on('routeChangeError', () => NProgress.done());

        return () => {
            Router.events.off('routeChangeStart', () => NProgress.start());
            Router.events.off('routeChangeComplete', () => NProgress.done());
            Router.events.off('routeChangeError', () => NProgress.done());
        };
    }, []);

    return (
        <>
            <Head>
                <title>App Title</title>
            </Head>
            <StoreProvider store={store}>
                <Component {...pageProps} />
            </StoreProvider>
        </>
    );
};

export default App;
