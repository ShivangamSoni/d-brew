import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import StateProvider from "../src/Context/Context";
import reducer from "../src/Context/store";
import Layout from "../src/Site/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>DBrew</title>
            </Head>

            <StateProvider reducer={reducer}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </StateProvider>
        </>
    );
}
