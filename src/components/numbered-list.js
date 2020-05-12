import React from "react"

import style from "./numbered-list.module.css"

import BoxedText from "./boxed-text"
import Inset from "./inset"

export default function NumberedList(props) {
    return (
        <Inset className={style.numbered}>
            {props.items && props.items.length > 0 ?
                <ol start="0">
                    {props.items.map(
                            (item) => (
                                <li key={item.title}>
                                    <div>
                                        <BoxedText>{item.title}</BoxedText>
                                        <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                    </div>
                                </li>
                            )
                        )
                    }
                </ol>
            : <p>Pas de contenu pour le moment.</p>}
        </Inset>
    )
};
