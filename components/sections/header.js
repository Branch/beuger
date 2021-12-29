/**
 * Styles
 */
import menuStyles from "../../assets/styles/modules/menu.module.scss";

/**
 * Components
 */
import {Button} from "@branch/neumorphism.ui.button";
import {Card} from "@branch/neumorphism.ui.card";
import { useState } from "react";
import classNames from 'classnames';

export default function Header({aboutClick, connectClick, projectsClick}) {

    /**
     * Handle mobile menu states and click event
     */
    const [menuOpen, setMenu] = useState(false);
    const toggleClick = () => {
        setMenu(menuOpen !== true)
    }

    return(
        <header className={menuStyles.header}>
            <nav className={menuStyles.menu}>
                <Button
                    hoverable={true}
                    text="About"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    clickHandler={aboutClick}
                />
                <Button
                    hoverable={true}
                    text="Projects"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    clickHandler={projectsClick}
                />
                <Button
                    hoverable={true}
                    text="Connect"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    clickHandler={connectClick}
                />
            </nav>
            <div className={menuOpen === true ? classNames(menuStyles.mobileMenu, menuStyles.mobileMenuActive) : menuStyles.mobileMenu}>
                <Button
                    hoverable={true}
                    text="About"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    clickHandler={aboutClick}
                />
                <Button
                    hoverable={true}
                    text="Projects"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    clickHandler={projectsClick}
                />
                <Button
                    hoverable={true}
                    text="Connect"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    clickHandler={connectClick}
                />
            </div>
            <Card
                type="flat"
                size=""
                padding={[25,25,21,25]}
            >
                <button onClick={toggleClick} className={menuOpen === true ? 'hamburger hamburger--collapse is-active' : 'hamburger hamburger--collapse'} type="button">
                  <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                  </span>
                </button>
            </Card>
        </header>
    )
}