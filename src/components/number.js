import React from "react"

export default function Number(props) {
    const leadingZero = props.index < 10 ? '0' : '';
    return (
        <span className="number">{leadingZero}{props.index}</span>
    )
};
