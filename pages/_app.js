/**
 * Styles
 */
import '../assets/styles/global.scss'

/**
 * Functions
 */
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: 'GTM-KV78M6Z' });
    }, []);
    return <Component {...pageProps} />
}

export default MyApp