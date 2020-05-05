import React from "react"
import { Link } from "gatsby"
import LogoDesignersEthiques from "./logo-designers-ethiques"
import PrefixedImage from "./prefixed-image"

import style from "./footer.module.css"

export default function Footer(props) {
  return (
    <footer className={style.footer}>
      <div className={style.logo}>
        <LogoDesignersEthiques />
      </div>
      <div className={style.footerSocial}>
        <ul>
          {props.networks.map(({ url, icon }) => (
            <li key={icon}>
              <a href={url} target="_blank" rel="noopener">
                <PrefixedImage src={icon} />
              </a>
            </li>
          ))}
        </ul>
        <p>
          <Link to="/mentions-legales">Mentions légales</Link>
        </p>
      </div>
    </footer>
  )
}
