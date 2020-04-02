import React from "react"
import { Link } from "gatsby"

export default function Tag(props) {
    return (
        <span className="tag">
            <Link to={props.link}>{props.text}</Link>
        </span>
    )
};
