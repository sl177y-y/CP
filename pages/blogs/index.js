import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

const Blogs = ({ allBlogs }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={'Cluster Protocol Blogs. Learn about Depins, Clouds, Decentralized Datasets, GPUs and more. '} />
        <meta name="keywords" content="web3 infrastructure, blockchain network, decentralized finance, block chain, blockchain technology, decentralized storage, blockchain meaning, cryptocurrency meaning, web3 meaning, defi crypto, decentralized exchange, crypto news, crypto money, crypto coin, web 3.0, quick node, cloud mining, web3 technology, nft crypto, nft market, cryptocurrency news, blockchain explained, crypto news today, best crypto to buy now, buy nft, learn about cryptocurrency, investing in cryptocurrency, cryptocurrency investment, decentralized cloud, learn crypto, best cryptocurrency, blockchain development" />

        <meta property="og:title" content={'Cluster Protocol @Blogs '} />
        <meta property="og:description" content={'Cluster Protocol Blogs. Learn about Depins, Clouds, Decentralized Datasets, GPUs and more. '} />
        <meta property="og:image" content={'/assets/FAVICON.png'} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />

        <meta name="twitter:title" content={'Cluster Protocol @Blogs '} />
        <meta name="twitter:description" content={'Cluster Protocol Blogs. Learn about Depins, Clouds, Decentralized Datasets, GPUs and more. '} />
        <meta name="twitter:image" content={'/assets/FAVICON.png'} />

        <meta name="robots" content="index, follow" />
      </Head>
      <main style={{ margin: '20vh auto', width: '90%' }} id="CONblog">
        {/* <img className="blogThumbnail" src='assets/nebula.jpg' alt="Blog Thumbnail" /> */}
        <div className="headerTitleContainer" id='blog'>
          <h1 className="gWhite">FEATURED BLOGS</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 1rem', width: '95%', margin: '2rem auto'}}>
          {allBlogs && allBlogs.slice(0,3).map((blog) => (
            <Link key={blog.blog_id} href={`blog/${blog.blog_id}`}>
              <div className="FeatureblogCard  " style={{ boxShadow: '3px -2px 0px #5bb8dab0,1px 1px 5rem #9773d216,-0.4px 1px 0rem white' }}>
                <img src={blog.thumbnail} alt={blog.title}></img>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center',margin:'auto' }}>
                  <h1 className="gWhite" style={{ width: '80%', fontSize: '1rem', fontFamily: 'b_bold', margin: '0.5rem auto' }}>✦ {blog.title}</h1>
                  <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem', margin: 'auto' }}>{blog.description.substring(0,100)}...</h1>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
        <div className="headerTitleContainer">
          <h1 className="gWhite" >ALL BLOGS</h1>
        </div>
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 1rem', width: '95%', margin: '2rem auto'}}>
          {allBlogs && allBlogs.map((blog) => (
            <Link key={blog.blog_id} href={`blog/${blog.blog_id}`} style={{width:'100%'}}>
              <div className="blogCard  ">
                <img src={blog.thumbnail} alt={blog.title}></img>
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', margin: 'auto'}}>
                  <h1 className="gWhite" style={{width: '80%', fontSize: '1rem', fontFamily: 'b_bold', margin: '0.5rem auto'}}>✦ {blog.title}</h1>
                  <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem', margin: 'auto'}}>{blog.description.substring(0,100)}...</h1>
                </div>
              </div>
              
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export async function getServerSideProps() {
  try {
    // const response = await fetch(`http://localhost:3000/api/blogs`);
    const response = await fetch(`https://www.clusterprotocol.ai/api/blogs`);
    // const response = await fetch(`https://clusterbackend.vercel.app/api/getblogpage/1`);
    const data = await response.json();
    console.log(data['blogs']);
    // data.reverse()

    return {
      props: {
        allBlogs: data['blogs'],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        allBlogs: null,
      },
    };
  }
}

export default Blogs;
