import React from "react"

export default function Volunteers(props) {
    return (
        <div className="volunteers">
            <ul>
                {props.volunteers.map((item) => <li>{item.text}</li>)}
            </ul>
        </div>
    )
};
