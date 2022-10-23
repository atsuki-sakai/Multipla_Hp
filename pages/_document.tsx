import { Html, Head, Main, NextScript,  } from "next/document";

// TODO: - google-site-verificationは必要ない？

const Document = () => {
    return (
        <Html lang="ja">
        <Head>
            <meta name="google-site-verification" content="3Bp4yAh5tu2HNgZYIxu-QrEu9yjF3yg0H47-Cyox3_Y" />
            <meta name="facebook-domain-verification" content="xqc29930rhh4hvlr5uehc2ua23j1om" />
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
        </Html>
    );
};

export default Document;
