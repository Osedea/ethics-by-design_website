import React from "react"

import Inset from "./inset"

export default function Volunteers(props) {
    return (
        <Inset>
            <p>
                {props.volunteers && props.volunteers.length > 0
                    ? props.volunteers.map((item) => item.name).join(' — ')
                    : <p>Pas de volontaires à afficher pour le moment</p>
                }
            </p>
        </Inset>
    )
};
