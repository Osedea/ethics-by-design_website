import React from "react"

import Speaker from "./speaker"
import Grid from "./grid"
import style from "./speakers.module.css"

export default function Speakers(props) {
  return (
    <div className={style.container}>
        <Grid columns={3}>
            {props.speakers.map((speaker, index) => (
                <Speaker
                    key={`speaker-${index}`}
                    {...speaker}
                />
            ))}
        </Grid>
    </div>
  )
}
