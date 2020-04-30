import React from "react"
import { Link } from "gatsby"

export default function Card(props) {
    const titleClass = props.titleDark ? 'dark' : '';
    let cardClass = 'card';

    if (props.dark) {
        cardClass += ' dark';
    }
    if (props.small) {
        cardClass += ' small';
    }

    let link;

    if (props.internalLink) {
        link = (
            <div className="card-footer">
                <Link to={props.linkTarget}>{props.linkText}</Link>
            </div>
        )
    } else {
        link = (
            <div className="card-footer">
                <a href={props.linkTarget} target='_blank' rel='noopener'>{props.linkText}</a>
            </div>
        )
    }

    return (
        <article className={cardClass}>
            {props.title ? <h2 className={titleClass}>{props.title}</h2> : null}
            <p>{props.content}</p>
            {props.linkText
                ? <div className="card-footer">
                    {link}
                </div>
                : null
            }
        </article>
    )
};
