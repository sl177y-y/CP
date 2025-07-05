import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

const Slug = ({ selectedBlogpass,allBlogs }) => {
  const [selectedBlog, setSelectedBlog] = useState(selectedBlogpass);
  const [timetoRead, settimetoRead] = useState(0);
  function shareContent() {
    if (navigator.share) {
      navigator.share({
        title: selectedBlog?.title || 'Blog @Cluster Protocol',
        text: selectedBlog?.description || 'Read this Blog from Cluster Protocol',
        url: window.location.href || 'https://www.clusterprotocol.ai'
      })
      .then(() => console.log('Shared successfully'))
      .catch((error) => console.error('Error sharing:', error));
    } else {
      console.log('Share API not supported on this browser');
    }
  }
  function shareTwitter(){
    console.log(window.location.href);
    const fullintent = `https://twitter.com/intent/post?text=Check this Blog Out by @clusterprotocol %0A&url=${window.location.href || 'https://www.clusterprotocol.ai'}` 
    window.open(fullintent, '_blank');
  }

  useEffect(() => {
    console.log(selectedBlog.blog_id);
    const fetchContent = async () => {
      try {
        const response = await fetch(`${window.location.origin}/api/blog?blogID=${selectedBlog.blog_id}`);
        const blog = await response.json();
        setSelectedBlog(blog);
        updateDisplay(); 
      } catch (error) {
        console.error("Error fetching content:", error);
      }
    }

    if(selectedBlog.content==='_'){
      fetchContent();

    }
    
    updateDisplay();
  }, [selectedBlog]);

  function updateDisplay() {
    
    // alert(blogDataContent);
    var blogContent = selectedBlog?.content || 'nothing';
    blogContent = blogContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    blogContent = blogContent.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    blogContent = blogContent.replace(/\*(.*?)\*/g, "<em>$1</em>");
    blogContent = blogContent.replace(/__(.*?)__/g, "<u>$1</u>");
    blogContent = blogContent.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a class="gPurple" style="font-weight:bold" href="$2" target="_blank">$1🔗</a>');
    blogContent = blogContent.replace(/````(.*?)````/gs, "<blockquote style='border-left: 5px solid rebeccapurple; margin-left: 0; padding-left: 1rem; font-style: italic; font-size: 1.3rem; color: white; '>$1</blockquote>");    blogContent = blogContent.replace(/```(.*?)```/gs, "<pre style='padding: 1.5% 1%; width: 100%; margin-bottom: 0; white-space: pre; background: rgb(255 255 255 / 10%); padding-top: 0; border-radius: 0.3rem; font-weight: bold; font-size: 1rem; overflow-x: scroll;'><code>$1</code></pre>");
    blogContent = blogContent.replace(/!{([^}]+)}\(([^)]+)\)/g, '<img src="$2" style="min-width:10rem;width:100%;margin:1.2rem 0%;border-radius:0.5rem" alt="$1">');
    blogContent = blogContent.replace(/&{([^}]+)}\(([^)]+)\)/g, function (match, altText, timestamp) {
        var imageData = getImageData(timestamp);
        return '<img style="min-width:10rem;width:60%;margin:1.2rem 0;border-radius:1rem" src="' + imageData + '" alt="' + altText + '">';
    });
    blogContent = blogContent.replace(/##(.*?)##/g, function(match, p1) {
        var headingLevel = p1.trim().startsWith('##') ? p1.indexOf('##') + 1 : 1;
        return '<h' + headingLevel + " style='background: transparent; color: white; font-weight: bold ;padding: 1vh 0rem; font-size: 1.9rem; border-radius: 0.6rem;' >" + p1.replace(/##/g, '').trim() + '</h' + headingLevel + '>';
    });
    blogContent = blogContent.replace(/\n/g, "<br>");

    var displayDiv = document.getElementById('displayDiv');
    displayDiv.innerHTML = blogContent;
    settimetoRead(parseInt(((displayDiv.textContent).length)/800));
}






    const [speaking, setSpeaking] = useState(false);
    const [paused, setPaused] = useState(false);
    const [utterance, setUtterance] = useState(null);
    const [text, setText] = useState('');

    // Function to extract text from an element
    function extractText(element) {
      let text = '';
      let lastWasText = false;
      Array.from(element.childNodes).forEach((child) => {
        if (child.nodeType === Node.TEXT_NODE) {
          if (lastWasText) {
            text += ' ';
          }
          text += child.textContent;
          lastWasText = true;
        } else if (child.nodeType === Node.ELEMENT_NODE) {
          text += extractText(child);
          lastWasText = false;
        }
      });
      return text;
    }

    // Function to handle speech synthesis
    function handleSpeech() {
      if (!speaking) {
        window.speechSynthesis.cancel();
        const speechText = extractText(document.getElementById('displayDiv'));
        const newUtterance = new SpeechSynthesisUtterance(speechText);
        newUtterance.addEventListener('end', () => {
          setSpeaking(false);
          setPaused(false);
        });
        window.speechSynthesis.speak(newUtterance);
        setUtterance(newUtterance);
        setSpeaking(true);
      } else {
        if (!paused) {
          window.speechSynthesis.pause();
          setPaused(true);
        } else {
          window.speechSynthesis.resume();
          setPaused(false);
        }
      }
    }

    // Effect hook to clean up speech synthesis on component unmount
    useEffect(() => {
      return () => {
        if (speaking) {
          window.speechSynthesis.cancel();
        }
      };
    }, [speaking]);



  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={selectedBlog?.description || 'Cluster Protocol Blogs. Learn about Depins, Clouds, Decentralized Datasets, GPUs and more. '} />
        <meta name="keywords" content="web3 infrastructure, blockchain network, decentralized finance, block chain, blockchain technology, decentralized storage, blockchain meaning, cryptocurrency meaning, web3 meaning, defi crypto, decentralized exchange, crypto news, crypto money, crypto coin, web 3.0, quick node, cloud mining, web3 technology, nft crypto, nft market, cryptocurrency news, blockchain explained, crypto news today, best crypto to buy now, buy nft, learn about cryptocurrency, investing in cryptocurrency, cryptocurrency investment, decentralized cloud, learn crypto, best cryptocurrency, blockchain development" />

        <meta property="og:title" content={selectedBlog?.title || 'Cluster Protocol @Blogs '} />
        <meta property="og:description" content={selectedBlog?.description || 'Cluster Protocol Blogs. Learn about Depins, Clouds, Decentralized Datasets, GPUs and more. '} />
        <meta property="og:image" content={selectedBlog?.thumbnail || '/assets/FAVICON.png'} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={selectedBlog?.title || 'Cluster Protocol @Blogs '} />
        <meta name="twitter:description" content={selectedBlog?.description || 'Cluster Protocol Blogs. Learn about Depins, Clouds, Decentralized Datasets, GPUs and more. '} />
        <meta name="twitter:image" content={selectedBlog?.thumbnail || '/assets/FAVICON.png'} />

        <meta name="robots" content="index, follow" />
      </Head>
      {!selectedBlog || selectedBlog.content==='_' && (
        <div className="loadingBlog">
          <img src="/assets/verifyLoad.svg" alt="Loading" />
        </div>
      )}
      <main style={{ margin: '20vh auto', width: '95%', maxWidth: '800px' }}>
        <img className="blogThumbnail" src={selectedBlog?.thumbnail || 'Loading'} alt="Blog Thumbnail" />
        <h1 style={{ color: 'white', textAlign: 'center', fontWeight: '600', width: '95%', fontSize: '1.5rem', margin: 'auto' }}>{selectedBlog?.title || 'loading'}</h1>
        <h1 style={{ color: 'grey', textAlign: 'center', fontSize: '1rem', margin: '5vh 0' }}>
          {new Date(selectedBlog?.timestamp * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric', })}
        </h1>
        <div className="blogauthorpanel">
          <h1 style={{ color: 'grey ', textAlign: 'center', fontWeight: '300', fontSize: '1.2rem' }}>by Cluster Protocol</h1>
          <img src="../assets/author.svg" style={{ minWidth: '2vw', height: 'auto' }} alt="Author" />
        </div>
        <div className="blogtoolPanel">
          <div style={{ display: 'flex', gap: '1rem' }}>
          <img src={speaking ? (paused ? "/assets/blogplay.svg" : "/assets/blogpause.svg") : "/assets/blogplay.svg"} alt="blogToolIcon" onClick={handleSpeech} />
            <h2 style={{ color: 'white', fontSize: '1rem', fontWeight: '300', opacity: 0.8, margin:'auto' }}>{timetoRead} min Read</h2>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {/* <img src="../assets/blogclap.svg" alt="blogToolIcon" /> */}
            {/* <img src="../assets/blogComment.svg" alt="blogToolIcon" /> */}
            <img onClick={()=>shareContent()} src="/assets/share.svg" alt="blogToolIcon" />
            <img onClick={()=>shareTwitter()} style={{height: '1.9vw', minHeight: '2.6vh', objectFit: 'contain', margin: 'auto'}} src="/assets/twitter.png" alt="blogToolIcon" />

          </div>
        </div>

        <div id="displayDiv"></div>

      </main>
      <div className="headerTitleContainer" style={{margin:'2rem 0', marginTop:"-2rem"}}>
          <h1 className="gWhite" >READ MORE BLOGS</h1>
        </div>
      <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 1rem', width: '80%', margin: '2rem auto'}}>
          {allBlogs && allBlogs.slice(0,3).map((blog) => (
            <Link key={blog.blog_id} href={`/blog/${blog.blog_id}`}>
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
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;

  try {


    const response = await fetch(`https://blog.server.clusterprotocol.ai/api/getblog/${slug}`);
    const blog = await response.json();
    const response2 = await fetch(`https://www.clusterprotocol.ai/api/blogs`);
    const data = await response2.json();
    
    const selectedBlogpass = {
      title: blog.title,
      blog_id:slug,
      description: blog.description,
      thumbnail: blog.thumbnail,
      timestamp: blog.timestamp,
      content:'_'
    };

    return {
      props: {
        selectedBlogpass,
        allBlogs: data['blogs'],
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        selectedBlogpass: null,
      },
    };
  }
}

export default Slug;
