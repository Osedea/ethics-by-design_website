import React from "react"

import style from "./section.module.css"

export default function Card(props) {
  return (
    <section className={[style.section, props.dark && style.black].join(' ')}>
      <div
        className={[style.container, props.vertical && style.vertical, props.horizontal && style.horizontal].join(
          ' '
        )}
      >
        {props.children}
      </div>
    </section>
  )
}
