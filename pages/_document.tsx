import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    key="description"
                    name="description"
                    content="DBrew: Brewery Listing Site"
                />
                <link rel="icon" href="/favicon.ico" />

                {/* Fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:200,200italic,300,300italic,regular,italic,600,600italic,700,700italic,900,900italic&display=optional"
                    rel="stylesheet"
                />
            </Head>
            <body>
                <Main />
                <div id="modal" />
                <NextScript />
            </body>
        </Html>
    );
}
