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
                    {props.networks.map(({ url, icon }) => (
                        <li key={icon}>
                            <Link to={url}>
                                <img src={icon} />
                            </Link>
                        </li>
                    ))}
                </ul>
                <p><Link to="/mentions-legales">Mentions légales</Link></p>
            </div>
        </footer>
    )
};
