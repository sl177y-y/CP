import { Html, Head, Main ,NextScript } from "next/document";
import Script from "next/script";


export default function Document() {
  return (
    <Html lang="en">
       <Head>
        <meta name="google-site-verification" content="JwVXdYJqcCJlKvmJvXIMQ1XQyVZO_EyCTPXo62VOi1w" />
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-6MHVHBPH46"></Script>
<Script>
  {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-6MHVHBPH46');`}
</Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
