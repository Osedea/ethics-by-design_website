import React from "react"

export default function Title(props) {
    return (
        <h2 {...props} style={{ marginBottom: '60px', ...props.style }}>{props.children}</h2>
    )
};
