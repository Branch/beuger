/**
 * Styles
 */
import aboutStyles from "../../assets/styles/modules/about.module.scss";

/**
 * Components
 */
import {Slider} from "@branch/neumorphism.ui.slider";

/**
 * Assets
 */
import sass from "../../assets/images/logos/sass-1.svg";
import github from "../../assets/images/logos/github.svg";
import css from "../../assets/images/logos/css-3.svg";
import javascript from "../../assets/images/logos/javascript.svg";
import php from "../../assets/images/logos/php.svg";
import npm from "../../assets/images/logos/npm.svg";
import jamstack from "../../assets/images/logos/jamstack.svg";
import apache from "../../assets/images/logos/apache-13.svg";
import bootstrap from "../../assets/images/logos/bootstrap-5-1.svg";
import bitbucket from "../../assets/images/logos/bitbucket-icon.svg";
import git from "../../assets/images/logos/git.svg";
import ga from "../../assets/images/logos/google-analytics-4.svg";
import handlebars from "../../assets/images/logos/handlebars.svg";
import heroku from "../../assets/images/logos/heroku-4.svg";
import jira from "../../assets/images/logos/jira-3.svg";
import json from "../../assets/images/logos/json.svg";
import linux from "../../assets/images/logos/linux-tux.svg";
import mariadb from "../../assets/images/logos/mariadb.svg";
import mobx from "../../assets/images/logos/mobx.svg";
import mysql from "../../assets/images/logos/mysql-6.svg";
import netlify from "../../assets/images/logos/netlify.svg";
import next from "../../assets/images/logos/next-js.svg";
import nginx from "../../assets/images/logos/nginx-1.svg";
import react from "../../assets/images/logos/react-2.svg";
import composer from "../../assets/images/logos/composer.svg";
import vagrant from "../../assets/images/logos/vagrant.svg";
import wp from "../../assets/images/logos/wordpress-blue.svg";
import ts from "../../assets/images/logos/typescript-2.svg";

export default function Sliders() {
    return(
        <section className={aboutStyles.sliders}>
            <Slider
                speed={80}
                images={[
                    sass.src,
                    github.src,
                    css.src,
                    javascript.src,
                    php.src,
                    npm.src,
                    jamstack.src,
                    apache.src,
                    bootstrap.src,
                    bitbucket.src,
                    git.src,
                    ga.src,
                    handlebars.src,
                    heroku.src,
                    sass.src,
                    github.src,
                    css.src,
                    javascript.src,
                    php.src,
                    npm.src,
                    jamstack.src,
                    apache.src,
                    bootstrap.src,
                    bitbucket.src,
                    git.src,
                    ga.src,
                    handlebars.src,
                    heroku.src
                ]}
                type={"pressed"}
                size={"md"}
                padding={[100, 0, 100, 0]}
            />

            <Slider
                speed={100}
                images={[
                    jira.src,
                    json.src,
                    linux.src,
                    mariadb.src,
                    mobx.src,
                    mysql.src,
                    netlify.src,
                    next.src,
                    nginx.src,
                    react.src,
                    composer.src,
                    vagrant.src,
                    wp.src,
                    ts.src,
                    jira.src,
                    json.src,
                    linux.src,
                    mariadb.src,
                    mobx.src,
                    mysql.src,
                    netlify.src,
                    next.src,
                    nginx.src,
                    react.src,
                    composer.src,
                    vagrant.src,
                    wp.src,
                    ts.src
                ]}
                type={"pressed"}
                size={"md"}
                padding={[100, 0, 100, 0]}
            />
        </section>
    )
}