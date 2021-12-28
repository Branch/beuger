import aboutStyles from "../../assets/styles/modules/about.module.scss";
import Emoji from "../emoji";
import {Circle} from "@branch/neumorphism.ui.circle";
import pic from "../../assets/images/me.jpeg";

export default function About() {
    return (
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
    )
}