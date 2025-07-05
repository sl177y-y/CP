import "@/styles/globals.css";
import Footer from "./footer";
import Navbar from "./navbar";
import Script from "next/script";
import NextNProgress from 'nextjs-progressbar';
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return (
  <>

  <Head>
        <meta charSet="utf-8" />
        {/* <meta name="description" content={"World's first decentralized infrastructure for AI and DePINs and Github for AI models"} />
        <meta name="keywords" content="web3 infrastructure, blockchain network, decentralized finance, block chain, blockchain technology, decentralized storage, blockchain meaning, cryptocurrency meaning, web3 meaning, defi crypto, decentralized exchange, crypto news, crypto money, crypto coin, web 3.0, quick node, cloud mining, web3 technology, nft crypto, nft market, cryptocurrency news, blockchain explained, crypto news today, best crypto to buy now, buy nft, learn about cryptocurrency, investing in cryptocurrency, cryptocurrency investment, decentralized cloud, learn crypto, best cryptocurrency, blockchain development" />

        <meta property="og:title" content={'Cluster Protocol'} />
        <meta property="og:description" content={"World's first decentralized infrastructure for AI and DePINs and Github for AI models"} />
        <meta property="og:image" content={'/thumbnail.png'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={'Cluster Protocol'} />
        <meta name="twitter:description" content={"World's first decentralized infrastructure for AI and DePINs and Github for AI models"} />
        <meta name="twitter:image" content={'/thumbnail.png'} /> */}

        <meta name="robots" content="index, follow" />
      </Head>

{/* 
  <div id="circleCursor"></div>
  <Script src="./circleCursor.js"  strategy='afterInteractive'></Script> */}
    <NextNProgress color="#9773d2" />
    <Navbar></Navbar> 
    <Component {...pageProps} />
    <Footer></Footer>
  </>

  )
  
}


