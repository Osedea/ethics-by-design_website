import React from "react"
import LogoDesignersEthiques from "./logo-designers-ethiques"
import { Link } from "gatsby"

export default function Footer(props) {
    return (
        <footer>
            <div className="footer-logo">
                <LogoDesignersEthiques />
            </div>
            <div className="footer-social">
                <ul>
                    <li>
                        <Link to={props.slack}>
                            <img src="/assets/slack.svg" />
                        </Link>
                    </li>
                    <li>
                        <Link to={props.linkedin}>
                            <img src="/assets/linkedin.svg" />
                        </Link>
                    </li>
                    <li>
                        <Link to={props.twitter}>
                            <img src="/assets/twitter.svg" />
                        </Link>
                    </li>
                    <li>
                        <Link to={props.mastondon}>
                            <img src="/assets/mastondon.svg" />
                        </Link>
                    </li>
                </ul>
                <p><Link to="/mentions-legales">Mentions légales</Link></p>
            </div>
        </footer>
    )
};
