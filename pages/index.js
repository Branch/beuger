import Head from 'next/head';
import Script from 'next/script';
import React, {useRef, useEffect} from 'react';

/**
 * Styles
 */
import containerStyles from '../assets/styles/modules/container.module.scss'


/**
 * Sections
 */
import Header from '../components/sections/header';
import About from '../components/sections/about';
import Sliders from '../components/sections/sliders';
import Projects from '../components/sections/projects';
import Connect from '../components/sections/connect';
import MobileSliders from "../components/sections/mobileSliders";

export default function Home() {

  const aboutRef = useRef(null)
  const projectRef = useRef(null)
  const connectRef = useRef(null)

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth'});
  }

  return (
    <div className={containerStyles.container}>
      <Head>
        <title>Andreas Beuger</title>
        <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@800&display=swap" rel="stylesheet" />

          <!-- Global site tag (gtag.js) - Google Analytics -->
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-2BRJFFC95P" />
          <Script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-2BRJFFC95P');
          </Script>
      </Head>
      <Header
        aboutClick={() => scrollToRef(aboutRef)}
        projectsClick={() => scrollToRef(projectRef)}
        connectClick={() => scrollToRef(connectRef)}
      />
      <main>
        <About refProp={aboutRef} />
        <Sliders />
        <MobileSliders />
        <Projects refProp={projectRef} />
        <Connect refProp={connectRef} />
      </main>
    </div>
  )
}
