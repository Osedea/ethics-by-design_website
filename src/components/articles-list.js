import React from "react"
import { Link } from "gatsby"

import style from "./articles-list.module.css"
import PrefixedImage from "./prefixed-image"

export default function ArticlesList(props) {
  return (
    <div className={style.articlesList}>
      <ul>
        {props.items.map(({ path, title, author }) => (
          <li key={path}>
            <article>
                <Link to={path}>
                    <h3>{title}</h3>
                    <span>Par {author}</span>
                    <PrefixedImage src="/assets/arrow-right.png" alt="Flèche vers la droite" />
                </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
