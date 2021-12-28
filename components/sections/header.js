import menuStyles from "../../assets/styles/modules/menu.module.scss";
import {Link} from "@branch/neumorphism.ui.link";

export default function Header() {
    return(

        <header>
            <nav className={menuStyles.menu}>
                <Link
                    hoverable={true}
                    text="About"
                    url="https://bit.dev"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    newWindow={true}
                />
                <Link
                    hoverable={true}
                    text="Projects"
                    url="https://bit.dev"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    newWindow={true}
                />
                <Link
                    hoverable={true}
                    text="Connect"
                    url="https://bit.dev"
                    type="flat"
                    padding={[10, 20, 10, 20]}
                    size={"sm"}
                    newWindow={true}
                />
            </nav>
        </header>
    )
}