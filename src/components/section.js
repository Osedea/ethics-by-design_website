import React from "react"

export default function Card(props) {
    const sectionClass = props.dark ? 'dark' : '';

    return (
        <section className={sectionClass}>
            {props.children}
        </section>
    )
};
