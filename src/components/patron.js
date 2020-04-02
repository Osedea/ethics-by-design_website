import React from "react"

import Tag from "../components/tag"

export default function Patron(props) {
    return (
        <article className="patron">
            <div className="patron-logo">
                <img src={props.picture} />
            </div>
            <div className="patron-description">
                <p className="speaker-title">{props.title}</p>
                <div className="patron-social">
                    {props.links.map((link) => <Tag link={link.target} value={link.text} />)}
                </div>
            </div>
        </article>
    )
};
