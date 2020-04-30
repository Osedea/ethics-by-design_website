import React from "react"

import style from "./section.module.css"

export default function Card(props) {
  console.log(props)

  return (
    <section className={[style.section, props.dark && style.black].join(" ")}>
      <div
        className={[style.container, props.vertical && style.vertical].join(
          " "
        )}
      >
        {props.children}
      </div>
    </section>
  )
}
