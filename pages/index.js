/**
 * Components
 */
import Head from 'next/head';
import React, {useRef} from 'react';

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
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={"true"} />
          <link href="https://fonts.googleapis.com/css2?family=Baloo+Thambi+2:wght@800&display=swap" rel="stylesheet" />
          <meta property="og:description" content="Portfolio / experimental site" key="description" />
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
