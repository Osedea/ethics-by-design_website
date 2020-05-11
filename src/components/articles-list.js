import React from "react"
import { Link } from "gatsby"

import style from "./articles-list.module.css"
import PrefixedImage from "./prefixed-image"

export default function ArticlesList(props) {
  return (
    <div className={style.articlesList}>
      <ul>
        {props.items.map(({ node }) => (
          <li key={node.id}>
            <article>
                <Link to={node.frontmatter.path}>
                    <h3>{node.frontmatter.title}</h3>
                    <author>Par {node.frontmatter.author}</author>
                    <PrefixedImage src="/assets/arrow-right.png" alt="Flèche vers la droite" />
                </Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
