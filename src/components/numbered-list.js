import React from "react"

import Number from "./number"
import BoxedText from "./boxed-text"

export default function NumberedList(props) {
    return (
        <div className="numbered">
            <ol>
                {props.items.map(
                    (item, index) => (
                        <li>
                            <Number index={index} />
                            <div>
                                <BoxedText>{item.title}</BoxedText>
                                <p>{item.text}</p>
                            </div>
                        </li>
                    )
                )}
            </ol>
        </div>
    )
};
