import React from "react"

export default function JourProgramme(props) {
    return (
        <React.Fragment>
            <h2>{props.children}</h2>
            <p>Here comes the big table</p>
        </React.Fragment>
    )
};
