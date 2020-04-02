import React from "react"
import { Link } from "gatsby"

export default function ArticlesList(props) {
    return (
        <div className="articles">
            <ul>
                {props.items.map(
                    (item) => (
                        <li>
                            <article>
                                <h3>{item.title}</h3>
                                <span>Par {item.author}</span>
                                <Link to={item.linkTarget}>{item.linkText}</Link>
                            </article>
                        </li>
                    )
                )}
            </ul>
        </div>
    )
};
