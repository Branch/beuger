import Head from 'next/head'
import Emoji from '../components/emoji';

import classNames from 'classnames/bind';




/**
 * Neu style components
 */
import { Circle } from '@branch/neumorphism.ui.circle';

/**
 * Styles
 */

import aboutStyles from '../assets/styles/modules/about.module.scss';

/**
 * Images
 */
import pic from '../assets/images/me.jpeg';

import php from '../assets/images/logos/php.svg';
import jquery from '../assets/images/logos/jquery-1.svg';
import javascript from '../assets/images/logos/javascript.svg';
import jamstack from '../assets/images/logos/jamstack.svg';
import github from '../assets/images/logos/github-2.svg';
import css from '../assets/images/logos/css-3.svg';
import sass from '../assets/images/logos/sass-1.svg';

import apache from '../assets/images/logos/apache-13.svg';
import bitbucket from '../assets/images/logos/bitbucket-icon.svg';
import git from '../assets/images/logos/git.svg';
import ga from '../assets/images/logos/google-analytics-4.svg';
import handlebars from '../assets/images/logos/handlebars.svg';
import heroku from '../assets/images/logos/heroku-4.svg';
import jira from '../assets/images/logos/jira-3.svg';
import json from '../assets/images/logos/json.svg';
import linux from '../assets/images/logos/linux-tux.svg';
import mariadb from '../assets/images/logos/mariadb.svg';
import mobx from '../assets/images/logos/mobx.svg';
import mysql from '../assets/images/logos/mysql-6.svg';
import netlify from '../assets/images/logos/netlify.svg';
import next from '../assets/images/logos/next-js.svg';
import nginx from '../assets/images/logos/nginx-1.svg';
import react from '../assets/images/logos/react-2.svg';
import bootstrap from '../assets/images/logos/bootstrap-5-1.svg';
import vagrant from '../assets/images/logos/vagrant.svg';
import wp from '../assets/images/logos/wordpress-blue.svg';
import ts from '../assets/images/logos/typescript-2.svg';
import composer from '../assets/images/logos/composer.svg';


export default function Home() {

    const cx = classNames.bind(aboutStyles);
    const fastTrack = cx({
        track: true,
        fast: true
    })
    const slowTrack = cx({
        track: true,
        slow: true
    })


    return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <nav>
          <a>About</a>
          <a>Projects</a>
          <a>Connect</a>
        </nav>
      </header>

      <main>
        <section className={aboutStyles.sec}>
            <div className={aboutStyles.about}>
                <div className={aboutStyles.half}>
                    <p className={aboutStyles.hi}>Hello there <Emoji label={"hi"} symbol={"👋"} /> i'm</p>
                    <h1>
                        Andreas Beuger
                    </h1>
                    <div className={aboutStyles.short}>Fullstack developer + Team lead <Emoji label={"hi"} symbol={"👨‍💻"} /></div>
                    <p>I do everything from the ground up. From idea to implementation, frontend, backend and project management.</p>
                    <p>In short, <span className={aboutStyles.highlight}>I do web.</span></p>
                    <p className={aboutStyles.base}>Based in <Emoji symbol={"🇸🇪"} /></p>
                </div>
                <Circle
                    width={30}
                    type={"concave"}
                    size={"md"}
                    img={pic.src}
                />
            </div>
            <div className={aboutStyles.tech}>
                <h2>
                    Stuff i'm familiar with
                </h2>
            </div>
        </section>


          <div className={aboutStyles.slider}>
              <div className={fastTrack}>
                  <div className={aboutStyles.slide}>
                      <img src={sass.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={github.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={css.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={javascript.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={php.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={jquery.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={jamstack.src} alt=""/>
                  </div>
                  <div placeholder={"apache"} className={aboutStyles.slide}>
                      <img src={apache.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={bootstrap.src} alt="" aria-label={"Adobe XD"}/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={bitbucket.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={git.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={ga.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={handlebars.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={heroku.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={sass.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={github.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={css.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={javascript.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={php.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={jquery.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={jamstack.src} alt=""/>
                  </div>
                  <div placeholder={"apache"} className={aboutStyles.slide}>
                      <img src={apache.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={bootstrap.src} alt="" aria-label={"Adobe XD"}/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={bitbucket.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={git.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={ga.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={handlebars.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={heroku.src} alt=""/>
                  </div>
              </div>
          </div>
          <div className={aboutStyles.slider}>
              <div className={slowTrack}>
                  <div className={aboutStyles.slide}>
                      <img src={jira.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={json.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={linux.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={mariadb.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={mobx.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={mysql.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={netlify.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={next.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={nginx.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={react.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={composer.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={vagrant.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={wp.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={ts.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={jira.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={json.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={linux.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={mariadb.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={mobx.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={mysql.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={netlify.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={next.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={nginx.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={react.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={composer.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={vagrant.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={wp.src} alt=""/>
                  </div>
                  <div className={aboutStyles.slide}>
                      <img src={ts.src} alt=""/>
                  </div>
              </div>
          </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #e0e0e0;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
