
import Script from 'next/script';
import Link from 'next/link';
import Head from 'next/head';
const HomePage = () => (
    <>
    <Head>
    <title>Homepage</title>
    <meta name='Brandkit @ClusterProtocol' content="Official Brandkit of Cluster Protocol"></meta>
    </Head>




    <h1
    style={{color: 'white', fontSize: '2rem', marginTop: '7rem', marginBottom: '-1rem', textAlign: 'center'}}
  >
    Branding  
  </h1> 
  <div className="headerTitleContainer" id='features' style={{marginTop:'5rem'}}>
        <h1 className="gWhite" style={{ fontSize: '1.4rem', fontFamily: 'b_demi' }}>Logos</h1>
      </div>
  <div className="cardHolder-brandkit">
    <div className="card-brandkit">
      {/* Color */}
      <img
        src="./assets/BRAND MARK/PNG/01_COLOR.png"
        alt="Brand Mark - Color"
      />
      <a
        className="download-btn-brandkit"
        href="./assets/BRAND MARK/PNG/01_COLOR.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/BRAND MARK/SVG/01_COLOR.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* White */}
      <img
        src="./assets/BRAND MARK/PNG/02_WHITE.png"
        alt="Brand Mark - White"
      />
      <a
        className="download-btn-brandkit"
        href="./assets/BRAND MARK/PNG/02_WHITE.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/BRAND MARK/SVG/02_WHITE.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* Black */}
      <img
        src="./assets/BRAND MARK/PNG/03_BLACK.png"
        alt="Brand Mark - Black"
      />
      <a
        className="download-btn-brandkit"
        href="./assets/BRAND MARK/PNG/03_BLACK.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/BRAND MARK/SVG/03_BLACK.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    {/* Full Logo */}
    <div className="card-brandkit">
      {/* Color */}
      <img src="./assets/FULL LOGO/PNG/01_COLOR.png" alt="Full Logo - Color" />
      <a
        className="download-btn-brandkit"
        href="./assets/FULL LOGO/PNG/01_COLOR.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/FULL LOGO/SVG/01_COLOR.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* White */}
      <img src="./assets/FULL LOGO/PNG/02_WHITE.png" alt="Full Logo - White" />
      <a
        className="download-btn-brandkit"
        href="./assets/FULL LOGO/PNG/02_WHITE.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/FULL LOGO/SVG/02_WHITE.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* Black */}
      <img src="./assets/FULL LOGO/PNG/03_BLACK.png" alt="Full Logo - Black" />
      <a
        className="download-btn-brandkit"
        href="./assets/FULL LOGO/PNG/03_BLACK.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/FULL LOGO/SVG/03_BLACK.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    {/* Word Mark */}
    <div className="card-brandkit">
      {/* Color */}
      <img src="./assets/WORD MARK/PNG/01_COLOR.png" alt="Word Mark - Color" />
      <a
        className="download-btn-brandkit"
        href="./assets/WORD MARK/PNG/01_COLOR.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/WORD MARK/SVG/01_COLOR.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* White */}
      <img src="./assets/WORD MARK/PNG/02_WHITE.png" alt="Word Mark - White" />
      <a
        className="download-btn-brandkit"
        href="./assets/WORD MARK/PNG/02_WHITE.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/WORD MARK/SVG/02_WHITE.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* Black */}
      <img src="./assets/WORD MARK/PNG/03_BLACK.png" alt="Word Mark - Black" />
      <a
        className="download-btn-brandkit"
        href="./assets/WORD MARK/PNG/03_BLACK.png"
        download=""
      >
        Download PNG{" "}
      </a>
      <a
        className="download-btn-brandkit"
        href="./assets/WORD MARK/SVG/03_BLACK.svg"
        download=""
      >
        Download SVG{" "}
      </a>
    </div>
  </div>
  {/* <h1 style="color:grey;font-family:sephora;font-size:2rem; margin-top:6vh;margin-bottom:3vh;text-align:center">Fonts</h1> */}
  <div className="headerTitleContainer" id='features'>
        <h1 className="gWhite" style={{ fontSize: '1.4rem', fontFamily: 'b_demi' }}>Fonts</h1>
      </div>
  <div className="cardHolder-brandkit">
    <div className="card-brandkit">
      {/* POPPINS */}
      <img src="assets/brandkit/poppins.png" alt="Brand Mark - Color" />
      <a
        className="download-btn-brandkit"
        href="assets/brandkit/poppins.ttf"
        download=""
      >
        Download Poppins Font{" "}
      </a>
    </div>
    <div className="card-brandkit">
      {/* SEPHORA */}
      <img
        src="assets/brandkit/sephora.png"
        alt="Brand Mark - Color"
        style={{ height: "9vh" }}
      />
      <a
        className="download-btn-brandkit"
        href="assets/brandkit/Sephora.ttf"
        download=""
      >
        Download Sephora Font{" "}
      </a>
    </div>
  </div>
  <div className="headerTitleContainer" id='features'>
        <h1 className="gWhite" style={{ fontSize: '1.4rem', fontFamily: 'b_demi' }}>Brand Guidelines</h1>
      </div>
  <div className="guidleinessTexts">
  <h1>Logo Variants:</h1>
  <ol>
    <li>
      <h2>Colored Logo:</h2>
      <h3>Primary Usage:</h3>
      <p>Use the colored logo on a white background whenever possible.</p>
      <p>
        Ensure there is enough contrast to maintain visibility and legibility.
      </p>
      <h3>Secondary Usage:</h3>
      <p>
        If the background is dark or busy, use the black or white logo for
        better visibility.
      </p>
    </li>
    <li>
      <h2>Black Logo:</h2>
      <h3>Primary Usage:</h3>
      <p>Use the black logo on light or neutral backgrounds.</p>
      <p>
        It is suitable for printed materials or when color reproduction is
        limited.
      </p>
      <h3>Secondary Usage:</h3>
      <p>
        Avoid using the black logo on a dark background to maintain clarity.
      </p>
    </li>
    <li>
      <h2>White Logo:</h2>
      <h3>Primary Usage:</h3>
      <p>Use the white logo on dark backgrounds for optimal visibility.</p>
      <p>Ensure there is enough contrast to maintain legibility.</p>
      <h3>Secondary Usage:</h3>
      <p>Avoid using the white logo on a light or busy background.</p>
    </li>
  </ol>
  <h1>Color Palette:</h1>
  <ul>
    <h3>Rebeccapurple</h3>
    <p> Primary Brand Color. Use for headings, highlights, and accents.</p>
    <h3>Black</h3>
    <p> Secondary Brand Color. Use for body text, borders,and details.</p>
  </ul>
  <h1>Fonts:</h1>
  <ul>
    <li>
      <strong>Primary Font:</strong> Sephora - Use for headlines and prominent
      text.
    </li>
    <li>
      <strong>Body Fonts:</strong> Poppins (for digital media) and Exo 2 (for
      print materials).
    </li>
  </ul>
  <p>
    By adhering to these brand guidelines and adopting the recommended voice and
    tone, we ensure a cohesive and recognizable identity for Cluster Protocol,
    reinforcing its position as a leading Proof of Compute protocol.
  </p>
</div>



    </>
  );

  
  export default HomePage;