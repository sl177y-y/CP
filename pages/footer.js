import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className="columnFooter">
        <img
          style={{ width: '12vw', margin: '2vh 0', minWidth: '6rem' }}
          loading="lazy"
          src="/assets/clusterProtocol.webp"
          alt="Cluster Protocol"
        />
        <meta name="google-site-verification" content="FDje1JpmzCynbbeUvRJLsdDR5yXbP9C9zhZKtN5_Dv0" />
        <div
          id="navbarSocials"
          style={{ width: '65%', justifyContent: 'flex-start', gap: '15%' }}
        >
          <a target="_blank" href="https://t.me/clusterprotocolchat"><img src="/assets/telegram.svg" alt="telegram"/></a>
          <a target="_blank" href="https://twitter.com/ClusterProtocol"><img src="/assets/twitter 2.svg" alt="Twitter"/></a>
          <a target="_blank" href="https://cluster-protocol.gitbook.io/whitepaper/"><img src="/assets/docs.svg" alt="Book"/></a>
          <a target="_blank" href="https://medium.com/@clusterprotocol.io"><img src="/assets/medium.webp" style={{height:'1.7rem'}} alt="Medium"/></a>

        </div>
      </div>

      <div className="columnFooter">
        <h3>Community</h3>
        <ul>
          {/* <li><a target="_blank" href="/waitlist">Join Waitlist</a></li> */}
          <li><a target="_blank" href="https://twitter.com/ClusterProtocol">Twitter</a></li>
          <li><a target="_blank" href="https://t.me/clusterprotocolchat">Telegram</a></li>
          <li><a target="_blank" href="https://testnet.clusterprotocol.ai">Try Testnet</a></li>

        </ul>
      </div>
          

      <div className="columnFooter">
        <h3>Company</h3>
        <ul>
          <li><Link href="/">About Us</Link></li>
          {/* <li><Link href="/glossary">Glossary</Link></li> */}
          <li><Link href="/brandkit">Brandkit</Link></li>
          <li><a target="_blank" href="https://cluster-protocol.gitbook.io/whitepaper/">Whitepaper</a></li>
        </ul>
      </div>
      <div style={{ margin: '2vh 0', display: 'flex', justifyContent: 'space-between', width: '100vw', flexWrap: 'wrap' }}>
        <h4 style={{ fontWeight: '200' }}><strong>Email: </strong>support@Clusterprotocol.ai</h4>
        <h4 style={{ fontWeight: '200' }}>© Copyright Cluster Protocol 2025</h4>
      </div>
    </footer>
  );
};

export default Footer;
