import React from "react"

export default function Address(props) {
    return (
        <div>
            <h4>Adresse</h4>
            <address>{props.address}</address>
            <h4>Accès</h4>
            <p>{props.acces}</p>
            <h4>Horaires d'ouverture</h4>
            <p>{props.horaires}</p>
        </div>
    )
};
