import React from "react"

export default function Inset(props) {
    return (
        <div style={{ marginLeft: '60px', marginRight: '60px', ...props.style }} {...props}>
            {props.children}
        </div>
    )
};
