/**
 * Styles
 */
import aboutStyles from "../../assets/styles/modules/about.module.scss";

/**
 * Components
 */
import Emoji from "../emoji";
import { Circle } from "@branch/neumorphism.ui.circle";
/**
 * Assets
 */
import pic from "../../assets/images/me.jpeg";
import swe from "../../assets/images/swe.png";

export default function About({ refProp }) {
  return (
    <section className={aboutStyles.sec}>
      <div className={aboutStyles.about}>
        <div ref={refProp} className={aboutStyles.half}>
          <p className={aboutStyles.hi}>
            Hello there <Emoji label={"hi"} symbol={"👋"} /> i'm
          </p>
          <h1>Andreas Beuger</h1>
          <div className={aboutStyles.short}>
            Tech lead at
            <a
              href={"https://haveton.com"}
              target={"_blank"}
              style={{ marginLeft: "0.5rem" }}
            >
              Haveton
            </a>
            <Emoji label={"hi"} symbol={"👨‍💻"} />
          </div>
          <p>Always loved frontend but got a fullstack toolbox.</p>
          <p className={aboutStyles.base}>
            Based in <img src={swe.src} />
          </p>
        </div>
        <div className={aboutStyles.portrait}>
          <Circle width={30} type={"concave"} size={"md"} img={pic.src} />
        </div>
      </div>
      <div className={aboutStyles.tech}>
        <h2>Things i'm familiar with</h2>
      </div>
    </section>
  );
}
