import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Head from 'next/head'

export default function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled"/>
        </Head>

        <Component {...pageProps} />
    </>
}
