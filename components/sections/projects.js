/**
 * Styles
 */
import projectStyles from "../../assets/styles/modules/projects.module.scss";

/**
 * Components
 */
import {Card} from "@branch/neumorphism.ui.card";
import {Link} from "@branch/neumorphism.ui.link";

/**
 * Assets
 */
import motogp from "../../assets/images/projects/gpresults.png";
import bit from "../../assets/images/projects/bit.png";
import portfolio from "../../assets/images/projects/portfolio.png";

export default function Projects({refProp}) {
    return(
        <section ref={refProp} className={projectStyles.projects} id={'projects'}>
            <h2>
                Some of my personal projects
            </h2>
            <div className={projectStyles.feed}>
                <Card
                    heading="Simple MotoGP results"
                    text="SPA used to get session data for MotoGP. MotoGP provides no api so this is done by parsing data from their results page. This can therefore break at any time."
                    type="flat"
                    size=""
                    padding={[15,15,15,15]}
                    image={motogp.src}
                    tags={['Netlify', 'React', 'Express', 'Sass']}
                >
                    <div className={projectStyles.links}>
                        <Link
                            hoverable={true}
                            text="View live"
                            url="https://gpresults.info/"
                            type="flat"
                            padding={[10, 20, 10, 20]}
                            size={""}
                            newWindow={true}
                        />
                        <Link
                            hoverable={true}
                            text="View on Github"
                            url="https://github.com/Branch/motogp"
                            type="flat"
                            padding={[10, 20, 10, 20]}
                            size={""}
                            newWindow={true}
                        />
                    </div>
                </Card>
                <Card
                    heading="Component library"
                    text="A neumorphism style component library built using bit.dev"
                    type="flat"
                    size=""
                    padding={[15,15,15,15]}
                    image={bit.src}
                    tags={['React', 'Typescript', 'Bit.dev', 'CSS Modules', 'Sass']}
                >
                    <div className={projectStyles.links}>
                        <Link
                            hoverable={true}
                            text="View live"
                            url="https://bit.dev/branch/neumorphism/pages/welcome"
                            type="flat"
                            padding={[10, 20, 10, 20]}
                            size={""}
                            newWindow={true}
                        />
                        <Link
                            hoverable={true}
                            text="View on Github"
                            url="https://github.com/Branch/component-lib"
                            type="flat"
                            padding={[10, 20, 10, 20]}
                            size={""}
                            newWindow={true}
                        />
                    </div>
                </Card>
                <Card
                    heading="My website"
                    text="Main use is for me to try out new frontend stuff and experiment with different things."
                    type="flat"
                    size=""
                    padding={[15,15,15,15]}
                    image={portfolio.src}
                    tags={['Netlify', 'React', 'Next.js', 'CSS modules', 'Sass']}
                >
                    <div className={projectStyles.links}>
                        <Link
                            hoverable={true}
                            text="View on Github"
                            url="https://github.com/Branch/beuger"
                            type="flat"
                            padding={[10, 20, 10, 20]}
                            size={""}
                            newWindow={true}
                        />
                    </div>
                </Card>
            </div>
        </section>
    )
}
