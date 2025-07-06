import React from 'react';
import { useState } from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Link from 'next/link';
import Head from "next/head";
import { LuSparkles } from 'react-icons/lu';
import Image from 'next/image';

const TeamCard = ({ name, role, imageSrc, linkedinProfile }) => {
  return (
    <div className="teamCard">
      <img className="teamImage" src={imageSrc} alt={name} />
      <div className="teamInfoCard">
        <span style={{ color: '#9773d2', fontSize: '1.5rem' }}>◣</span>
        <h1 className="gWhite">{name}</h1>
        <h2 className="gGrey">{role}</h2>
        <div className="teamSocialContainer">
          <a  target="_blank" href={linkedinProfile}>
            <LazyLoadImage src="assets/linkedin.svg" style={{ width: '2rem' }} alt="LinkedIn" />
          </a>
          {/* Add other social icons here */}
        </div>
      </div>
    </div>
  );
};

function FAQItem({ question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [isSelected, setIsSelected] = useState(false);


  const toggleAnswer = () => {
    setIsAnswerVisible(!isAnswerVisible);
    setIsSelected(!isSelected);
  };

  return (
    <div className={`faqItem ${!isSelected ? 'selected' : 'faqitemSelected'}`}>
      <div className="faqItemQuestion">
        <h1>{question}</h1>
        <div className="faqItemCircle" onClick={toggleAnswer}>
          <LazyLoadImage src="assets/arrowright.svg" alt="Arrow" style={{ transform: isAnswerVisible ? 'rotate(90deg)' : 'rotate(0deg)' }} />
        </div>
      </div>
      {isAnswerVisible && (
        <div className="faqItemAnswer">
          <h1>{answer}</h1>
        </div>
      )}
    </div>
  );
}




export default function Homepage() {
  const faqData = {
    "What is Cluster Protocol?": "Cluster Protocol is a proof of compute protocol and Open Source community for decentralized AI models. In simple words, we are a decentralized hub of everything AI.",
    "Can I monetize the models I create and train using Cluster?": "Yes, you retain ownership of any models you develop on Cluster Protocol and can easily deploy them for revenue generation using our integrated services.",
    "Will Cluster Protocol support training models with private, sensitive datasets?": "Yes, Cluster Protocol will enable controlled, secure model training using private datasets via encryption and federated learning techniques that keep data localized.",
    "How does Cluster Protocol ensure the security of datasets and models?": "We utilize encryption, access controls, and data partitioning to protect assets. Models and data never reside in one place, and nodes are validated using proofs-of-compute.",
    "Where can I find Cluster Protocol on Twitter?": "You can find us on Twitter at twitter.com/clusterprotocol.",
    "Where can I connect with Cluster Protocol on LinkedIn?": "You can connect with us on LinkedIn at linkedin.com/in/clusterprotocol.",
    "Where can I access the Cluster Protocol whitepaper?": "You can access the Cluster Protocol whitepaper at cluster-protocol.gitbook.io/whitepaper."
  };
  
  const [searchTerm, setSearchTerm] = useState('');
  const [matchedQuestion, setMatchedQuestion] = useState('');
  const [matchedAnswer, setMatchedAnswer] = useState('');
  
  // Function to handle search and find the closest match
  const handleSearch = () => {
    let maxSimilarity = -1;
    let bestMatchedQuestion = '';
    
    for (const question in faqData) {
      const similarity = cosineSimilarity(searchTerm.toLowerCase(), question.toLowerCase());
      if (similarity > maxSimilarity) {
        maxSimilarity = similarity;
        bestMatchedQuestion = question;
      }
    }
  
    if (maxSimilarity > 0) {
      setMatchedQuestion(bestMatchedQuestion);
      setMatchedAnswer(faqData[bestMatchedQuestion]);
    } else {
      setMatchedQuestion("Sorry, We Couldn't Find It");
      setMatchedAnswer("Try again with something different.");
    }
  };
  
  // Function to calculate cosine similarity between two strings
  const cosineSimilarity = (str1, str2) => {
    const getWordFrequency = (str) => {
      const words = str.split(/\s+/);
      const frequency = {};
      words.forEach((word) => {
        frequency[word] = (frequency[word] || 0) + 1;
      });
      return frequency;
    };
  
    const frequency1 = getWordFrequency(str1);
    const frequency2 = getWordFrequency(str2);
  
    let dotProduct = 0;
    let magnitude1 = 0;
    let magnitude2 = 0;
  
    for (const word in frequency1) {
      if (frequency2[word]) {
        dotProduct += frequency1[word] * frequency2[word];
      }
      magnitude1 += frequency1[word] ** 2;
    }
  
    for (const word in frequency2) {
      magnitude2 += frequency2[word] ** 2;
    }
  
    magnitude1 = Math.sqrt(magnitude1);
    magnitude2 = Math.sqrt(magnitude2);
  
    return dotProduct / (magnitude1 * magnitude2);
  };
    
  const [selectedCompany, setSelectedCompany] = useState(null);

  const openPartnerPopup = (company) => {
    setSelectedCompany(company);
  };

  const closePartnerPopup = () => {
    setSelectedCompany(null);
  };

   const backers =[
      
      // {"url": "https://gd10.capital/", "name": "GD 10"},
      // {"url": "https://moonedge.finance/", "name": "Moonedge"},
      
      {"url": "https://0xpivot.com/", "name": "Pivot Ventures"},
      {"url": "https://mapleblock.capital/", "name": "Mapleblock Capital"},
      {"url": "https://mavencapital.io/", "name": "Maven Capital"},
      {"url": "https://fusion7.vc/", "name": "Fusion"},
      {"url": "https://www.fairumventures.com/", "name": "Fairum Ventures"},
      // {"url": "https://unrealcapital.vc/", "name": "Unreal Capital"},
      // {"url": "https://halvingscapital.com/", "name": "Halving Capital"},
      // {"url": "https://spicy.capital/", "name": "Spicy Capital"},
      // {"url": "https://dutchcryptoinvestors.com/", "name": "DCI"},
      // {"url": "https://gemhead.capital/", "name": "Gemhead Capital"},
      // {"url": "https://www.genesiscapital.vc/", "name": "Genesis Capital"},
  ]

  const companies = [
    {"name": "TheoriqAI", "url": "https://x.com/TheoriqAI", "blog":null},
    {"name": "Arenaweb3", "url": "https://x.com/Arenaweb3", "blog":null},
    {"name": "Agent Layer", "url": "https://x.com/Agent_Layer", "blog":null},
    {"name": "AITProtocol", "url": "https://x.com/AITProtocol", "blog":null},
    {"name": "AILayerXYZ", "url": "https://x.com/AILayerXYZ", "blog":null},
    {"name": "Artherachain", "url": "https://x.com/artherachain", "blog":null},
    {"name": "AspectaId", "url": "https://x.com/aspecta_id", "blog": null},
  {"name": "AzenProtocol", "url": "https://x.com/azen_protocol", "blog": null},
  {"name": "LearnBrainedge", "url": "https://x.com/learn_brainedge", "blog": null},
  {"name": "0XCapx", "url": "https://x.com/0xCapx", "blog": null},
  {"name": "CESSStorage", "url": "https://x.com/CESS_Storage", "blog": null},
  {"name": "ColdstackIo", "url": "https://x.com/coldstack_io", "blog": null},
  {"name": "DinLol", "url": "https://x.com/din_lol_", "blog": null},
  {"name": "DmailOfficial", "url": "https://x.com/Dmailofficial", "blog": null},
  {"name": "EMCProtocol", "url": "https://x.com/EMCprotocol", "blog": null},
  {"name": "FizenApp", "url": "https://x.com/fizenapp", "blog": null},
  {"name": "FluenceProject", "url": "https://x.com/fluence_project", "blog": null},
  {"name": "FraxFinance", "url": "https://x.com/fraxfinance", "blog": null},
  {"name": "IQWiki", "url": "https://x.com/IQWIKI", "blog": null},
  {"name": "GlacierLabs", "url": "https://x.com/Glacier_Labs", "blog": null},
  {"name": "BuildOnHybrid", "url": "https://x.com/BuildOnHybrid", "blog": null},
  {"name": "Hypergpt", "url": "https://x.com/hypergpt", "blog": null},
  {"name": "Initverse", "url": "https://x.com/initverse", "blog": null},
  {"name": "INTOverse", "url": "https://x.com/INTOverse_", "blog": null},
  {"name": "JamboTechnology", "url": "https://x.com/JamboTechnology", "blog": null},
  {"name": "KimaNetwork", "url": "https://x.com/KimaNetwork", "blog": null},
  {"name": "KoiiFoundation", "url": "https://x.com/KoiiFoundation", "blog": null},
  {"name": "LighthouseWeb3", "url": "https://x.com/LighthouseWeb3", "blog": null},
  {"name": "MarlinProtocol", "url": "https://x.com/MarlinProtocol", "blog": null},
  {"name": "Micro3Io", "url": "https://x.com/Micro3io", "blog": null},
  {"name": "NeurochainAI", "url": "https://x.com/NeurochainAI", "blog": null},
  {"name": "NeuroMeshInfo", "url": "https://x.com/NeuroMeshInfo", "blog": null},
  {"name": "NodeOpsHQ", "url": "https://x.com/NodeOpsHQ", "blog": null},
  {"name": "OpenFabricAI", "url": "https://x.com/openfabricai", "blog": null},
  {"name": "OptopiaAI", "url": "https://x.com/Optopia_AI", "blog": null},
  {"name": "Port3Network", "url": "https://x.com/Port3Network", "blog": null},
  {"name": "GXChainGlobal", "url": "https://x.com/GXChainGlobal", "blog": null},
  {"name": "RivalzAI", "url": "https://x.com/Rivalz_AI", "blog": null},
  {"name": "ScriptNetwork", "url": "https://x.com/script_network", "blog": null},
  {"name": "SkillfulAI", "url": "https://x.com/SkillfulAI", "blog": null},
  {"name": "SpheronFDN", "url": "https://x.com/SpheronFDN", "blog": null},
  {"name": "StarProtocolHQ", "url": "https://x.com/StarProtocol_HQ", "blog": null},
  {"name": "StratosNetwork", "url": "https://x.com/Stratos_Network", "blog": null},
  {"name": "ThreeProtocol", "url": "https://x.com/ThreeProtocol", "blog": null},
  {"name": "TectumSocial", "url": "https://x.com/tectumsocial", "blog": null},
  {"name": "UniultraXyz", "url": "https://x.com/uniultra_xyz", "blog": null},
  {"name": "0XVirtualLabs", "url": "https://x.com/0xVirtualLabs", "blog": null},
  {"name": "YOM Official", "url": "https://x.com/YOM_Official", "blog": null},
  {"name": "YourTokens", "url": "https://x.com/yourtokens", "blog": null},
  {"name": "ZeshApps", "url": "https://x.com/ZeshApps", "blog": null},
  
    // {"name": "web3go", "url": "https://web3go.xyz/", "blog": null},
    // {"name": "gpt360", "url": "https://gpt360.io/", "blog": null},
    // {"name": "iq wiki", "url": "https://iq.wiki/", "blog": "/blog/cluster-protocol-announces-its-strategic-partnership-with-iqwiki-1712848847"},
    // {"name": "pop planet", "url": "https:s//popp.club/home", "blog": "/blog/cluster-protocol-and-pop-planet-join-forces-to-redefine-web3-monetization-1712927689"},
    // {"name": "ispolink", "url": "https://www.ispolink.com/", "blog": "/blog/cluster-protocol-and-ispolink-forge-a-strategic-partnership-1713278907"},
    // {"name": "openfabric", "url": "https://openfabric.ai/", "blog": "/blog/cluster-protocol-announces-its-strategic-partnership-with-openfabric-ai-1713341957"},
    // {"name": "spheron network", "url": "https://www.spheron.network/", "blog": "/blog/powering-innovation-spheron-network-and-cluster-protocol-forge-to-change-the-way-we-approach-ai-with-industrial-grade-gpus-including-a100s-and-h100s-1713197479"},
    // {"name": "plasm ai", "url": "https://plasm.ai/", "blog": "/blog/revolutionizing-gaming-the-plasm-ai-and-cluster-protocol-partnership-1713886763"},
    // {"name": "aspecta id", "url": "https://aspecta.id/", "blog": "/blog/the-dynamic-partnership-of-cluster-protocol-and-aspecta-1713543014"},
    // {"name": "lilAI", "url": "https://lilai.co/", "blog": "/blog/cluster-protocol-and-lilai-partnership-pioneering-community-safety-and-engagement-1713967604"},
    // {"name": "octavia", "url": "https://octavia.one/", "blog": "blog/cluster-protocol-announces-its-strategic-partnership-with-octavia-1714055721"},
    // {"name": "resistor ai", "url": "https://resistorai.org/", "blog": "/blog/-empowering-ai-innovation-the-resistor-ai-and-cluster-protocol-partnership-1713716243"},
    // {"name": "dmail", "url": "https://dmail.ai/", "blog": "/blog/cluster-protocol--dmail-joins-forces-to-empower-ai-development-1714141162"},
    // {"name": "hypergpt", "url": "https://hypergpt.ai/", "blog": null},
    // {"name": "laika ai", "url": "https://www.laika-ai.io/", "blog": null},
    // {"name": "stratos", "url": "https://www.stratos.xyz/", "blog": "/blog/bridging-ai-and-web3-the-stratos-network-and-cluster-protocol-partnership-1714492484"},
    // {"name": "ait protocol", "url": "https://aitprotocol.ai/", "blog": "/blog/cluster-protocol-announces-its-strategic-partnership-with-ait-protocol-1714726382"},
    // {"name": "xally ai", "url": "https://xally.ai/", "blog": "/blog/cluster-protocol-announces-its-strategic-partnership-with-xally-1714484760"},
    // {"name": "power browser", "url": "https://powerbrowserapp.com/", "blog": "/blog/cluster-protocol-announces-its-strategic-partnership-with-power-browser-1714580652"},
    // {"name": "Synesis One", "url": "https://www.synesis.one/", "blog": "/blog/cluster-protocol-and-synesis-one-revolutionizing-ai-data-processing-and-decentralized-models-1714805543"},
    // {"name": "Glacier", "url": "https://www.glacier.io/", "blog": "/blog/partnership-announcement-glacier-network-joins-forces-with-cluster-protocol-1715012959"},
    // {"name": "hybrid", "url": "https://buildonhybrid.com/", "blog": "/blog/cluster-protocol-announces-its-strategic-partnership-with-hybrid--1715097720"},
    // {"name": "KIMA Network", "url": "https://kima.finance/", "blog": null},
    // {"name": "Nuno Cloud", "url": "https://x.com/nucocloud", "blog": "https://clusterprotocol.ai/blog/cluster-protocols-partnership-with-nucocloud-a-leap-towards-decentralized-computing-and-ai-1716821376"},
    // {"name": "Koi", "url": "https://x.com/Koi_BTC", "blog": "https://clusterprotocol.ai/blog/a-new-era-in-social-gaming-and-ai-the-koi-and-cluster-protocol-partnership-1716563983"},
    // {"name": "Micro3", "url": "https://x.com/Micro3io", "blog": null},
    // {"name": "Your Ai", "url": "https://x.com/yourtokens", "blog": "https://medium.com/@clusterprotocol.io/cluster-protocol-partners-with-your-ai-to-revolutionize-e-commerce-content-ac4d96b45a32"},
    // {"name": "Mint", "url": "https://x.com/Mint_Blockchain", "blog": "https://medium.com/@clusterprotocol.io/cluster-protocol-announces-its-partnership-with-mint-blockchain-5f4b1e21ce09"},
    // {"name": "Rivalz Network", "url": "https://x.com/Rivalz_AI", "blog": "https://clusterprotocol.ai/blog/partnership-announcement-rivalz-and-cluster-protocol-joinforces-1715956617"},
    // {"name": "YOM", "url": "https://x.com/YOM_Official", "blog": "https://clusterprotocol.ai/blog/powering-next-gen-gaming-the-strategic-partnership-between-yom-and-clusterprotocol-1715784179"},
    // {"name": "Unmarshal", "url": "https://x.com/UnmarshalAI", "blog": "https://clusterprotocol.ai/blog/cluster-protocol-partners-with-unmarshal-to-revolutionize-data-access-and-ai-deployment-1715616514"},
    // {"name": "Byte AI", "url": "https://x.com/ByteAIToken", "blog": "https://clusterprotocol.ai/blog/cluster-protocol-and-byteai-partnership-reshaping-artificial-intelligence-ai-and-news-distribution-1715439661"},
  ];
  
  return (
    <>
    <Head>
      <title>Cluster Protocol </title>
      {/* <meta name="google-site-verification" content="JJGvDA-BM8tLfcKzOkRdenbMYi956rPw8WHFVMZhueE"></meta> */}
      {/* <meta name='description' content="Proof of Compute Protocol"></meta> */}
      <meta property="og:description" content={"World's first decentralized infrastructure for AI and DePINs and Github for AI models"} />
      <meta property="og:image" content={'/thumbnail.png'} />
      <link type='image' rel='icon' href="assets/BRAND MARK/PNG/02_WHITE.png"></link>
    </Head>
     <div>
      <LazyLoadImage className="backgroundBoxEffect" src="assets/bgeffect.png" alt="Background"></LazyLoadImage>
      <div className="secHome" id='home'>
        <div className="secHome1" id='CONhome'>
        <video autoPlay loop muted playsinline className='HIDEmobileView' style={{maxWidth:'33rem', marginLeft:"-4rem"}}> <source src="./clusterasset/minifan.webm" type="video/webm"/></video>

        {/* <LottiePlayer autoplay loop src="./clusterasset/minifananim.json" style={{maxWidth:'100%'}}></LottiePlayer> */}
          {/* <LazyLoadImage style={{maxWidth:'100%'}} className='HIDEmobileView' src="assets/linewithminifan.png" alt="Line with mini fan"></LazyLoadImage> */}
          <h1 style={{ fontFamily: 'b_demi' }} className="gWhite">CO-ORDINATION LAYER</h1>
          <h1 style={{ fontFamily: 'b_demi' }} className="gWhite">FOR <span className="gPurple">AI</span> AGENTS</h1>

          <div className="secHomeInfoContainer">
            <LazyLoadImage src="assets/sidelinehome.png" alt="Sideline home" className='HIDEmobileView'></LazyLoadImage>
            <div className="secHomeButtoninfoContainer">
              <h1  className="tagline gGrey">Powered by <Image src="/chains/arbitrum.png" width={23} height={23} /> Arbitrum & <Image src="/chains/eigenlayer.png" width={18} height={20} /> Eigenlayer's DA.</h1>
              <div className="secHomeButtonContainer">
                  <div className='animated-border-box-container'>
                    <div className="animated-border-box-glow"></div>
                    <div className="animated-border-box">
                      <Link href={"https://t.me/clusterprotocolchat"} target='_blank_'><h1>Join Community</h1></Link>
                    </div>
                  </div>
                {/* <button className="b2" style={{ backgroundImage: 'url(assets/joinbutton.svg)' }}>Join Community</button> */}
                <Link href={"https://cluster-protocol.gitbook.io/whitepaper/"} target='_blank_'><button className="b3" style={{ backgroundImage: 'url(assets/docsbutton.svg)' }}>Docs</button></Link>
              </div>
            </div>
          </div>
          <div className="secHomeInfoContainer keyofferingContainer" >
            <h2 style={{ fontSize: '1rem' }} className="gWhite">Key Offering</h2>
            <video autoPlay loop muted playsInline className=''  style={{maxWidth:'100%',  marginTop: '2rem', marginLeft:'0rem'}}> <source src="./clusterasset/keyoffering.webm" type="video/webm"/></video>

            {/* <LazyLoadImage className='SHOWmobileView' style={{marginTop: '2rem', width: '100%', filter: 'drop-shadow(0 0 5rem white)' }} src="assets/keyoffer.svg" alt="Key Offering"></LazyLoadImage> */}
          </div>
        </div>
        <div className="secHome2">
          {/* <LazyLoadImage src="assets/heropageelem.png" style={{ width: '100%', marginTop: '-10rem', marginLeft: '-2rem' }} alt="Hero page element"></LazyLoadImage> */}
          <video autoPlay loop muted playsinline className='gpuMain' ><source src="./clusterasset/GPU.webm" type="video/webm"/></video>

        </div>
      </div>
      <div className="headerTitleContainer" id='features'>
        <h1 className="gWhite">FEATURES</h1>
      </div>
      <div id='CONfeatures' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 0', width: '95%', margin: '2rem auto' }}>
        {/* Feature Card 1 */}
        <div className="featureCard" style={{ transform: 'scaleX(1) scaleY(1) scaleZ(1) rotateX(7deg) rotateY(2deg) rotateZ(-1deg) translateX(0px) translateY(0px) translateZ(0px) skewX(-3deg) skewY(-3deg)' }}>
          <LazyLoadImage src="assets/ts1.png" alt="Feature 1"></LazyLoadImage>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.2rem', fontFamily: 'b_bold', marginBottom: '0.5rem' }}>Decentralized Dataset</h1>
            <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem' }}>● Access extensive datasets <br/> ● Host and control private, proprietary data <br/> ● Maintain personal Data Vaults<br/> ● Integrate with training workflows<br/> ● Annotate data and evaluate models<br/></h1>
          </div>
        </div>
        {/* Feature Card 2 */}
        <div className="featureCard" style={{ boxShadow: '3px -2px 0px #5bb8dab0,1px 1px 5rem #9773d216,-0.4px 1px 0rem white' }}>
          <LazyLoadImage src="assets/ts2.png" alt="Feature 2"></LazyLoadImage>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.2rem', fontFamily: 'b_bold', marginBottom: '0.5rem' }}>Train Models</h1>
            <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem' }}>● Enhance model robustness via collaborative training<br/> ● Support secure, privacy-preserving techniques<br/> ● Track model lineage across versions<br/> ● Integrate with Decentralised Dataset<br/> ● Maintain transparency via Proof-of-Compute<br/></h1>
          </div>
        </div>
        {/* Feature Card 3 */}
        <div className="featureCard" style={{ transform: 'scaleX(1) scaleY(1) scaleZ(1) rotateX(7deg) rotateY(2deg) rotateZ(-1deg) translateX(0px) translateY(0px) translateZ(0px) skewX(-3deg) skewY(0deg)' }}>
          <LazyLoadImage src="assets/ts1.png" alt="Feature 3"></LazyLoadImage>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.2rem', fontFamily: 'b_bold', marginBottom: '0.5rem' }}>Rent GPU Infra</h1>
            <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem' }}>● Access global network of consumer & enterprise GPUs <br/> ● Optimized for AI model building<br/> ● Handles diverse computational workloads<br/> ● Developer APIs for programmatic control<br/> ● Annotate data and evaluate models<br/></h1>
          </div>
        </div>
        {/* Feature Card 4 */}
        <div className="featureCard" style={{ boxShadow: '-3px 0px 0px #5bb8dab0,1px 1px 5rem #9773d216,-0.4px 1px 0rem white' }}>
          <LazyLoadImage src="assets/ts3.png" alt="Feature 4"></LazyLoadImage>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.2rem', fontFamily: 'b_bold', marginBottom: '0.5rem' }}>AI Agents Template Library</h1>
            <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem' }}>● Access ready-made AI agents for quick deployment.<br/> ● Modify templates to suit your specific needs.<br/> ● Seamlessly integrate agents into your workflows in seconds.<br/> ● Share, collaborate, and evolve agents with the global community.<br/></h1>
          </div>
        </div>
      </div>



      <div className="headerTitleContainer" id='solutions'>
        <h1 className="gWhite" >PROBLEMS AND SOLUTIONS</h1>
      </div>
      <div id='CONsolutions' style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 1rem', width: '100%', margin: '2rem auto', overflowX: 'hidden', paddingBottom: '2rem'}}>
        {/* Problem and Solution Card 1 */}
        <div className="psCard">
          <div className="psCardTextInfo">
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.5rem', fontFamily: 'b_demi', marginBottom: '0.5rem' }}>Limited GPU Accessibility</h1>
            <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem' }}>High-performance GPUs are expensive assets beyond the reach of many developers, hampering AI innovation.</h1>
            <div className="minipsCard">
              <div className="minipsCardTextInfo">
                <h1 className="gWhite" style={{ width: '100%', fontSize: '1.1rem', fontFamily: 'b_demi', marginBottom: '0.5rem' }}>Democratized GPU Access</h1>
                <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem' }}>We enable anyone to leverage GPUs on-demand for all their compute needs, opening up AI capabilities.</h1>
              </div>
            </div>
            <LazyLoadImage className="psCardasset" src="assets/gpu.png" alt="GPU"></LazyLoadImage>
          </div>
        </div>
        {/* Problem and Solution Card 2 */}
        <div className="psCard" style={{ background: 'radial-gradient(#33333380, black)', boxShadow: '0px 2px 0px #5bb8dab0,1px 1px 5rem #9773d216,-0.4px 0px 0rem white' }}>
          <div className="psCardTextInfo">
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.5rem', fontFamily: 'b_demi', marginBottom: '0.5rem', textAlign: 'center' }}>Scarce Training Data</h1>
            <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem', textAlign: 'center' }}>Quality datasets required for robust model training remain siloed, making access a challenge.</h1>
            <div className="minipsCard" style={{ transform: 'scaleX(1) scaleY(1) scaleZ(1) rotateX(31deg) rotateY(33deg) rotateZ(-1deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(-13deg)' }}>
              <div className="minipsCardTextInfo">
                <h1 className="gWhite" style={{ width: '100%', fontSize: '1.1rem', fontFamily: 'b_demi', marginBottom: '0.5rem' }}>Decentralized Data Sharing</h1>
                <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem' }}>Our platform unlocks dataset sharing in a secure, governed way to advance collective knowledge.</h1>
              </div>
            </div>
            <LazyLoadImage className="psCardasset" src="assets/cloud.png" alt="Cloud"></LazyLoadImage>
          </div>
        </div>
        {/* Problem and Solution Card 3 */}
        <div className="psCard" style={{ background: 'radial-gradient(#33333380, black)', boxShadow: '0px 2px 0px #5bb8dab0,1px 1px 5rem #9773d216,-0.4px 0px 0rem white' }}>
          <div className="psCardTextInfo">
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.5rem', fontFamily: 'b_demi', marginBottom: '0.5rem', textAlign: 'right' }}>Monetization Hurdles</h1>
            <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem', textAlign: 'right' }}>Developers lack straightforward ways to deploy models and generate revenue from their AI work.</h1>
            <div className="minipsCard" style={{ right: 'auto', transform: 'scaleX(1) scaleY(1) scaleZ(1) rotateX(31deg) rotateY(31deg) rotateZ(-1deg) translateX(0px) translateY(0px) translateZ(0px) skewX(0deg) skewY(-13deg) rotate(-10deg)', left: '-3rem' }}>
              <div className="minipsCardTextInfo">
                <h1 className="gWhite" style={{ width: '100%', fontSize: '1.1rem', fontFamily: 'b_demi', marginBottom: '0.5rem' }}>Seamless Model Monetization</h1>
                <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem' }}>We empower developers to easily deploy models, integrate with apps, and earn rewards for their creations.</h1>
              </div>
            </div>
            <LazyLoadImage className="psCardasset" src="assets/coins.png" alt="Coins" style={{ left: 'auto', right: '-5rem', bottom: '-3rem', height: '13rem' }}></LazyLoadImage>
          </div>
        </div>
      </div>

      {/* PRICE COMPARISON CHART */}
      {/* <div className="headerTitleContainer">
        <h1 className="gWhite">PRICE COMPARISON CHART</h1>
      </div>
      <div className="graphContainer">
        <LazyLoadImage  className="HIDEmobileView" src="assets/gputable.svg" style={{ flex: 1, minWidth: '300px' }} alt="GPU Table"></LazyLoadImage>
        <LazyLoadImage src="assets/gputableMOBILE.svg" className="gpuMobilegraph" style={{ flex: 1, minWidth: '300px' }} alt="GPU Table"></LazyLoadImage>
        <LazyLoadImage src="assets/graphtable.svg" style={{ flex: 0.8, minWidth: '300px', margin: '0 auto' }} alt="Graph Table"></LazyLoadImage>
      </div> */}


      {/* ARCHITECTURE */}
      <div className="headerTitleContainer HIDEmobileView" id='technology'>
        <h1  id='CONtechnology' className="gWhite" >ARCHITECTURE</h1>
      </div>
      <div className="archContainer HIDEmobileView">
        <LazyLoadImage src="assets/archleft.svg" className="archLeft" alt="Architecture Left"></LazyLoadImage>
        <div className='archVideo-border-box-container'>
            <div className="archVideo-border-box-glow"></div>
            <div className="archVideo-border-box">
              <video src="./assets/arch.webm" className='archMain' autoPlay muted loop></video>

            </div>
          </div>
        <LazyLoadImage src="assets/archright.svg" className="archRight" alt="Architecture Right"></LazyLoadImage>
      </div>


      {/* ROADMAP */}
      <div className="headerTitleContainer" id='roadmap'>
        <h1 id='CONroadmap'className="gWhite" >ROADMAP</h1>
      </div>
      <Image src="/assets/roadmapDesktop.svg" className="roadmapDesktop HIDEmobileView" alt="Roadmap Desktop" width={1500} height={800}></Image>
      <Image src="/assets/roadmapMobile.svg" className="roadmapMobile SHOWmobileView" alt="Roadmap Desktop"  width={900} height={900}></Image>

      
      {/* MEET OUR TEAM */}
      <div className="headerTitleContainer" id='team'>
        <h1 className="gWhite" >CORE TEAM AND BACKERS</h1>
      </div>
      <div id='CONteam' style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem 1rem', width: '95%', margin: '2rem auto', marginBottom:'10rem' }}>
        {/* Team Member Card 1 */}
        <div className="teamMainCard" style={{ zIndex: 2 }}>
        <LazyLoadImage className="teamImage" style={{borderRadius:'1rem'}} src="./clusterasset/people/yatharth.jpg" alt="Yatharth Jain"></LazyLoadImage>
          <div className="teamInfoCard">
            <span style={{ color: '#9773d2', fontSize: '1.5rem' }}>◣</span>
            <h1 className="gWhite">Yatharth Jain</h1>
            <h2 className="gGrey">CEO & Founder</h2>
            <div className="teamSocialContainer">
            <a target="_blank" href="https://www.linkedin.com/in/depindaddy/" ><LazyLoadImage src="assets/linkedin.svg" style={{ width: '2rem' }} alt="LinkedIn"></LazyLoadImage></a>
            <a target="_blank" href="https://twitter.com/depindaddy/" ><LazyLoadImage src="assets/twitter.svg" style={{ width: '1.8rem', opacity: 0.5 }} alt="Twitter"></LazyLoadImage></a>
            </div>
          </div>
        </div>
        {/* Team Member Card 2 */}
        <div className="teamMainCard" style={{ transform: 'rotate(-2deg) translate(0rem, 2rem)', zIndex: 1 }}>
          <LazyLoadImage className="teamImage" style={{borderRadius:'1rem'}} src="./clusterasset/people/nelson.jpg" alt="Yatharth Jain"></LazyLoadImage>
          <div className="teamInfoCard">
            <span style={{ color: '#9773d2', fontSize: '1.5rem' }}>◣</span>
            <h1 className="gWhite">Nelson Paul</h1>
            <h2 className="gGrey">CMO</h2>
            <div className="teamSocialContainer">
            <a target="_blank" href="https://www.linkedin.com/in/nelsonpaul005/" ><LazyLoadImage src="assets/linkedin.svg" style={{ width: '2rem' }} alt="LinkedIn"></LazyLoadImage></a>
            <a target="_blank" href="https://x.com/nelsonpaul_tez" ><LazyLoadImage src="assets/twitter.svg" style={{ width: '1.8rem', opacity: 0.5 }} alt="Twitter"></LazyLoadImage></a>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', width: '90%', margin: '5rem auto 1rem' }}>
      <TeamCard
        name="Marcello Mari"
        role="Founder & CEO   @SingularityDAO "
        imageSrc="./clusterasset/people/marcello.jpeg"
        linkedinProfile="https://www.linkedin.com/in/marcellomari/"
      />
       <TeamCard
        name="Sander Gortjes"
        role="Co-owner @HELLO Labs"
        imageSrc="./clusterasset/people/sander.jpeg"
        linkedinProfile="https://www.linkedin.com/in/sandergortjes/"
      /> 
      <TeamCard
      name="Ryan Horn"
      role="Founder @N3ON,Ex-Binance"
      imageSrc="./clusterasset/people/ryan.jpg"
      linkedinProfile="https://www.linkedin.com/in/hornryan/"
    />
      <TeamCard
        name="Tal Cohen"
        role="Kraken USA Managing Director"
        imageSrc="./clusterasset/people/tal.jpg"
        linkedinProfile="https://www.linkedin.com/in/talcohenprofile/"
      />
      <TeamCard
        name="Tomer Warschauer"
        role="Forbes, Cointelegraph Contributor & CMO Kima Network"
        imageSrc="./clusterasset/people/tomer.jpg"
        linkedinProfile="https://www.linkedin.com/in/tomernuni/"
      />

      <TeamCard
        name="Anshul Dhir"
        role="Ex-EasyFi, Founder @Pivot"
        imageSrc="./clusterasset/people/anshul.jpg"
        linkedinProfile="https://www.linkedin.com/in/anshuldhirr/"
      />
      <TeamCard
        name="Ashish Sood"
        role="CPO @Polytrade"
        imageSrc="./clusterasset/people/ashish.jpg"
        linkedinProfile="https://www.linkedin.com/in/ashish-sood-65051911b/"
      />
      <TeamCard
        name="Vijay Pravin"
        role="Founder @bitsCrunch"
        imageSrc="./clusterasset/people/vijay.jpg"
        linkedinProfile="https://www.linkedin.com/in/vijaypravin/"
      />
      <TeamCard
        name="Sundeep Krishna"
        role="Director of Launchpads @ TrustSwap"
        imageSrc="./clusterasset/people/sundeep.jpg"
        linkedinProfile="https://www.linkedin.com/in/sundeep-krishna-siripurapu-95575862/"
      />
      <TeamCard
        name="Vijay Garg"
        role="Founding Partner @Mapleblock Capital"
        imageSrc="./clusterasset/people/vijaygarg.jpg"
        linkedinProfile="https://www.linkedin.com/in/vijaygarg86/"
      />
    </div>
    <h1 className="gWhite" style={{textAlign:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"5rem",fontSize:"1rem"}}>MANY MORE+</h1>


      <div className='partnerDIV'>
      {backers.map((company, index) => (
        <a target="_blank" href={company.url}>
          <img key={index} src={`./clusterasset/partners/${company.name}.png`} alt={company.name} />
        </a>

      ))}
    </div>   
    <h1 className="gWhite" style={{textAlign:"center",marginLeft:"auto",marginRight:"auto",marginBottom:"5rem",fontSize:"1rem"}}>AND MANY MORE</h1>   

      {/* PARTNERS */}
      <div className="headerTitleContainer">
        <h1 className="gWhite" >PARTNERS AND CLIENTS</h1>
      </div>
      <div className='partnerDIV'>
      {companies.map((company) => {
  return (
    
      <a key={company.name} href={company.url} target="_blank" rel="noopener noreferrer">
        <img
          src={`./clusterasset/partners/${company.name}.png`}  
          alt={`Logo of ${company.name}`}  
      
        />
      </a>
    
  );
})}


    </div>
        <h1 className="gWhite" style={{textAlign:"center",marginLeft:"auto",marginRight:"auto",fontSize:"1rem"}}>+400 MORE</h1>
    {selectedCompany  && (
        <div className="PartnerPopup">
          <div className="PartnerPopupContent">
            <span className="PartnerClose" onClick={closePartnerPopup}>
              &times;
            </span>
            <h2>{selectedCompany.name} <span style={{color: '#9773d2', fontSize: '1rem'}}>◣</span> </h2>
            <img
              src={`./clusterasset/partners/${selectedCompany.name}.png`}
              alt={selectedCompany.name}
            />
            <div className='PartnerPopupButtonContainer'>
            <a target="_blank" href={selectedCompany.url}>
              <p>🌐 Website</p>
            </a>
            {selectedCompany.blog?
            <a target="_blank" href={selectedCompany.blog}>
              <p>✦ Read Partnership Blog</p>
            </a>
            :""
            }
            </div>
          </div>
        </div>
      )}

        

      {/* FAQS */}
      <div className="headerTitleContainer">
        <h1 className="gWhite" >FAQS</h1>
      </div>
      <div className="FaqMasterContainer">
          <div className="faqsContainer">
          <FAQItem
            question="What is Cluster Protocol?"
            answer="Cluster Protocol is the co-ordination layer for AI agents, a carnot engine fueling the AI economy making sure the AI developers are monetized for their AI models and users get an unified seamless experience to build that next AI app/ agent within a virtual disposable environment facilitating the creation of modular, self-evolving AI agents.  "
          />
          <FAQItem
            question="Can I monetize the models I create and train using Cluster?"
            answer="Yes, you retain ownership of any models you develop on Cluster Protocol and can easily deploy them for revenue generation using our integrated services."
          />
          <FAQItem
            question="Will Cluster Protocol support training models with private, sensitive datasets?"
            answer="Yes, Cluster Protocol will enable controlled, secure model training using private datasets via encryption and federated learning techniques that keep data localized."
          />
        </div>
        {/* <div className="askQuestionContainer">
          <h1>Didn't Find your Question?</h1>
          <div className="askQuestionContainerInputDiv">
            <input placeholder="Type your Question"></input>
            <button>
              Search
            </button>
          </div>
              <div className="faqItem faqitemSelected" style={{width: '100%', margin: '0'}}>
                <div className="faqItemQuestion">
                  <h1>{"User's question goes here!"}</h1>
                  <div className="faqItemCircle">
                    <LuSparkles size={25} color='#5BB8DA'></LuSparkles>
                  </div>
                </div>
                  <div className="faqItemAnswer">
                    <h1>{"A Sample AI generated answer will go here!"}</h1>
                  </div>
              </div>
        </div> */}

        <div className="askQuestionContainer">
              <h1>Didn't Find your Question?</h1>
              <div className="askQuestionContainerInputDiv">
                <input
                  placeholder="Start Typing.."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={()=>handleSearch()}>Search</button>
              </div>
              {matchedQuestion && (
                <div className="faqItem faqitemSelected" style={{ width: '100%', margin: '0' }}>
                  <div className="faqItemQuestion">
                    <h1>{matchedQuestion}</h1>
                    <div className="faqItemCircle">
                      <LuSparkles size={20}></LuSparkles>
                    </div>
                  </div>
                  <div className="faqItemAnswer">
                    <h1>{matchedAnswer}</h1>
                  </div>
                </div>
              )}
            </div>

      </div>
      
    </div>
  </>
  );
}

