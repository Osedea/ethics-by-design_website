import React from "react"
import { Link } from "gatsby"

import style from "./articles-list.module.css"

export default function ArticlesList(props) {
  return (
    <div className={style.articlesList}>
      <ul>
        {props.items.map(({ node }) => (
          <li key={node.id}>
            <article>
              <h3>{node.frontmatter.title}</h3>
              <span>Par {node.frontmatter.author}</span>
              <Link to={node.linkTarget}>{node.linkText}</Link>
            </article>
          </li>
        ))}
      </ul>
    </div>
  )
}
