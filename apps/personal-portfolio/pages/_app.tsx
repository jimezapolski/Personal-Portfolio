import { Preloader } from '@msanvarov/core-components';
import { persistor, store } from '@msanvarov/store';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'next-themes';
import { AppProps } from 'next/app';
import { Lato } from 'next/font/google';
import Head from 'next/head';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {
  registerDebugBearRUM,
  registerGTM,
  registerHotjar,
  registerMicrosoftClarity,
  registerVercelAnalytics,
} from '../utils/tracking.utils';
import './styles-light.scss';
import './styles.scss';

const font = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

const CustomApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    AOS.init();

    registerHotjar();
  }, []);

  useEffect(() => {
    // Page transition
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setTimeout(() => setLoading(false), 250);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);

    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, [Router]);

  return (
    <Provider {...{ store }}>
      <PersistGate loading={<Preloader />} {...{ persistor }}>
        <ThemeProvider
          {...{
            defaultTheme: 'dark',
          }}
        >
          <Head>
            <title>Jimena Zapolski - Portfolio</title>
            <meta name="title" content="Jimena Zapolski" />
            <meta
              name="description"
              content="Diseñadora UX/UI y Full Stack Dev junior enfocada en crear experiencias que nunca han visto antes."
            />

            {/* <!-- Open Graph / Facebook --> */}
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://www.jimenazapolski.com/" />
            <meta property="og:title" content="Jimena Zapolski" />
            <meta
              property="og:description"
              content="Diseñadora UX/UI y Full Stack Dev junior enfocada en crear experiencias que nunca han visto antes."
            />
            <meta
              property="og:image"
              content="/assets/hola.png"
            />

      <link rel="icon" href="/assets/logo/jzlogo.png" />


            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/iconoir/6.9.0/css/iconoir.min.css"
            />
            {registerDebugBearRUM()}
            {registerMicrosoftClarity()}
          </Head>
          {registerGTM()}
          <AnimatePresence mode="wait" initial={false}>
            <main className={font.className}>
              {loading ? <Preloader /> : <Component {...pageProps} />}
              {registerVercelAnalytics()}
            </main>
          </AnimatePresence>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default CustomApp;