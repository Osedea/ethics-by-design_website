import React from "react"
import { Link } from "gatsby"

import LogoDesignersEthiques from "./logo-designers-ethiques"

export default function BoxDesignersEthiques(props) {
    return (
        <div className="box-designers-ethiques">
            <div className="box">
                <LogoDesignersEthiques />
            </div>
            <div className="box">
                {props.content}
            </div>
        </div>
    )
};
