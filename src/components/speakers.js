import React from "react"

import Speaker from "./speaker"
import Grid from "./grid"

export default function Speakers(props) {
    return (
        <Grid columns={3} offsetLeft>
            {props.speakers.map((speaker, index) => (
                <Speaker
                    key={`speaker-${index}`}
                    {...speaker}
                />
            ))}
        </Grid>
    );
}
