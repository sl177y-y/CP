import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { LuPanelRight, LuPanelTopClose, LuPanelTopOpen } from "react-icons/lu";

import { useEffect, useState } from 'react';
const Navbar = () => {
  
  const router = useRouter();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavOpen(!isNavOpen);

  };
  useEffect(() => {
    (router.pathname === "/blogs")||(router.pathname.includes("/blog/"))?  document.getElementById("NAVblog").classList.add('glowBarNav'):document.getElementById("NAVblog").classList.remove('glowBarNav');;
    const sections = ['CONhome','CONfeatures', 'CONtechnology', 'CONroadmap', 'CONsolutions', 'CONteam'];

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const navElement = document.getElementById(`NAV${entry.target.id.replace("CON","")}`);
        if (entry.isIntersecting && entry.intersectionRatio >= 0.9) {
          navElement.classList.add('glowBarNav'); // Add glow class if in view
        } else {
          navElement.classList.remove('glowBarNav'); // Remove glow class if not in view
        }
      });
    }, { threshold: 0.9 });

    sections.forEach(section => {
      const element = document.getElementById(section);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [router.pathname]);
  
    return (
      <div className="navbar">
        <div className="NavbarLogo">
        <Link href='/' onClick={()=>setIsNavOpen(false)}>
          <img src="/assets/clusterProtocol.webp" alt="Cluster Protocol Logo"></img>
          </Link>
        </div>
        {
          !isNavOpen?
          <LuPanelRight onClick={toggleNavbar}></LuPanelRight>
          :
          <LuPanelTopClose onClick={toggleNavbar}></LuPanelTopClose>

        }

        <div className="navbarLinks HIDEmobileView"  style={isNavOpen ? { display: "flex" } : {}}>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVhome'></div>
            <Link href='/' onClick={()=>setIsNavOpen(false)}>
            <p>Home</p>
            </Link>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVfeatures'></div>
            <Link href="/#features" onClick={()=>setIsNavOpen(false)}><p>Features</p></Link>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVsolutions'></div>
            <Link href="/#solutions" onClick={()=>setIsNavOpen(false)}><p>Solution</p></Link>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVroadmap'></div>
            <Link href="/#roadmap" onClick={()=>setIsNavOpen(false)}><p>Roadmap</p></Link>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVtechnology'></div>
            <Link href="/#technology" onClick={()=>setIsNavOpen(false)}><p>Technology</p></Link>
          </div>
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVteam'></div>
            <Link href="/#team" onClick={()=>setIsNavOpen(false)}><p>Team</p></Link>
          </div>
          
          <div className="navbarLinksItem">
            <div className="glowBarNavDull" id='NAVblog'></div>
            <Link href='/blogs' onClick={()=>setIsNavOpen(false)}>
            <p>Blogs</p>
            </Link>
          </div>
        </div>
        {/* <div className="navbarMainButton">
        <Link href={"https://t.me/clusterprotocolchat"} target='_blank_'><button className="b1">Join</button></Link>
        </div> */}
      </div>
      );
    };
    

export default Navbar;
