import React from "react"

export default function JourProgramme(props) {
    console.log('JourProgramme props: ', props.programme);
    return (
        <>
            <h2>{props.programme.jourTitle}</h2>
            <p>Here comes the big table</p>
        </>
    )
};
