import React from "react"

import style from "./blog-post-content.module.css"

export default function BlogPostContent(props) {
    return (
        <div className={style.content} dangerouslySetInnerHTML={{ __html: props.content }} />
    )
};
