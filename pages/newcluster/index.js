import React from 'react';

export default function NewCluster() {
  return (
    <div>
      <img className="backgroundBoxEffect" src="assets/bgeffect.png" alt="Background"></img>
      <div className="navbar">
        <div className="NavbarLogo">
          <img src="https://www.clusterprotocol.ai/_next/image?url=%2Fassets%2FclusterProtocol.png&w=256&q=75" alt="Cluster Protocol Logo"></img>
        </div>
        <div className="navbarLinks">
          <div className="navbarLinksItem">
            <div className="glowBarNavDull glowBarNav"></div>
            <p>Home</p>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull"></div>
            <p>About</p>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull"></div>
            <p>Solution</p>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull"></div>
            <p>Roadmap</p>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull"></div>
            <p>Technology</p>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull"></div>
            <p>Team</p>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull"></div>
            <p>Blogs</p>
          </div>
        </div>
        <div className="navbarMainButton">
          <button className="b1">Join</button>
        </div>
      </div>
      <div className="secHome">
        <div className="secHome1">
          <img src="assets/linewithminifan.png" alt="Line with mini fan"></img>
          <h1 style={{ fontFamily: 'b_demi' }} className="gWhite">DECENTRALIZED <span className="gPurple">AI</span></h1>
          <h1 style={{ fontFamily: 'b_demi' }} className="gWhite">INFRASTRUCTURE</h1>
          <div className="secHomeInfoContainer">
            <img src="assets/sidelinehome.png" alt="Sideline home"></img>
            <div className="secHomeButtoninfoContainer">
              <h1 style={{ fontSize: '1.4rem', fontFamily: 'b_reg', width: '100%', fontWeight: 'normal', marginTop: '2erm' }} className="gGrey">Powered by AltLayer with Underneath EigenLayer.</h1>
              <div className="secHomeButtonContainer">
                <button className="b2" style={{ backgroundImage: 'url(assets/joinbutton.svg)' }}>Join Community</button>
                <button className="b3" style={{ backgroundImage: 'url(assets/docsbutton.svg)' }}>Docs</button>
              </div>
            </div>
          </div>
          <div className="secHomeInfoContainer" style={{ width: '80%', flexDirection: 'column' }}>
            <h2 style={{ fontSize: '1rem' }} className="gWhite">Key Offering</h2>
            <img style={{ marginTop: '2rem', width: '100%', filter: 'drop-shadow(0 0 5rem white)' }} src="assets/keyoffer.svg" alt="Key Offering"></img>
          </div>
        </div>
        <div className="secHome2">
          <img src="assets/heropageelem.png" style={{ width: '100%', marginTop: '-10rem', marginLeft: '-2rem' }} alt="Hero page element"></img>
        </div>
      </div>
      <div className="headerTitleContainer">
        <h1 className="gWhite" style={{ fontSize: '1.4rem', fontFamily: 'b_demi' }}>FEATURES</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 0', width: '95%', margin: '2rem auto' }}>
        <div className="featureCard" style={{ transform: 'scaleX(1) scaleY(1) scaleZ(1) rotateX(7deg) rotateY(2deg) rotateZ(-1deg) translateX(0px) translateY(0px) translateZ(0px) skewX(-3deg) skewY(-3deg)' }}>
          <img src="assets/ts1.png" alt="Feature 1"></img>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.5rem', fontFamily: 'b_bold', marginBottom: '0.5rem' }}>Decentralized Dataset</h1>
            <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem' }}>● Access extensive datasets ...</h1>
          </div>
        </div>
        <div className="featureCard" style={{ boxShadow: '3px -2px 0px #5bb8dab0,1px 1px 5rem #9773d216,-0.4px 1px 0rem white' }}>
          <img src="assets/ts2.png" alt="Feature 2"></img>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.5rem', fontFamily: 'b_bold', marginBottom: '0.5rem' }}>Train Models</h1>
            <h1 className="gGrey" style={{ width: '90%', fontSize: '0.7rem' }}>● Enhance model robustness via collaborative training...</h1>
          </div>
        </div>
        {/* Repeat for other feature cards */}
      </div>
      <div className="headerTitleContainer">
        <h1 className="gWhite" style={{ fontSize: '1.4rem', fontFamily: 'b_demi' }}>PROBLEMS AND SOLUTIONS</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem 1rem', width: '95%', margin: '2rem auto' }}>
        <div className="psCard">
          <div className="psCardTextInfo">
            <h1 className="gWhite" style={{ width: '100%', fontSize: '1.5rem', fontFamily: 'b_demi', marginBottom: '0.5rem', textAlign: 'left' }}>Limited GPU Accessibility</h1>
            <h1 className="gGrey" style={{ width: '100%', fontSize: '0.7rem', textAlign: 'left' }}>High-performance GPUs are expensive assets beyond the reach of many developers, hampering AI innovation.</h1>
            {/* Mini problem solution card */}
          </div>
        </div>
        {/* Repeat for other problem solution cards */}
      </div>
      {/* Remaining sections */}
      <div className="footer">
        <img src="https://www.clusterprotocol.ai/_next/image?url=%2Fassets%2FclusterProtocol.png&w=256&q=75" alt="Cluster Protocol Logo"></img>
        <div className="gWhite" style={{ fontWeight: 'bold', width: '90%', fontSize: '1.2rem' }}>
          Decentralized AI Infrastructure Powered by AltLayer<br></br>
          with Underneath EigenLayer.
        </div>
        <ul className="footerlinks">
          <li className="gPurple"><a href="#">Campaigns</a></li>
          <li className="gPurple"><a href="#">Email Marketing</a></li>
          <li className="gPurple"><a href="#">Branding</a></li>
          <li className="gPurple"><a href="#">Offline</a></li>
          <li className="gPurple"><a href="#">Contact</a></li>
          <li className="gPurple"><a href="#">FAQs</a></li>
        </ul>
        <div className="teamSocialContainer" style={{ justifyContent: 'center', color: 'white' }}>
          <img src="assets/linkedin.svg" alt="LinkedIn" style={{ width: '2rem' }}></img>
          <img src="assets/twitter.svg" alt="Twitter" style={{ width: '1.8rem', opacity: '0.5' }}></img>
        </div>
      </div>
    </div>
  );
}

