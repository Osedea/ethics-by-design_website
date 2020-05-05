import React from "react"

import style from "./volunteers.module.css"

export default function Volunteers(props) {
    return (
        <div className={style.volunteers}>
            {props.volunteers && props.volunteers.length > 0
                ? <ul>
                    {props.volunteers.map((item) => <li>{item.text}</li>)}
                </ul>
                : <p>Pas de volontaires à afficher pour le moment</p>
            }
        </div>
    )
};
