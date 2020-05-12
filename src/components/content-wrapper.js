import React from "react"

import Inset from "./inset"

export default function ContentWrapper(props) {
    return (
        <Inset>
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Inset>
    )
};
