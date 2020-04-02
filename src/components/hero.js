import React from "react"

export default function Hero(props) {
    return (
        <article className="hero">
            <div className="hero-title">{props.title}</div>
            {props.hasVideo
                ? <div className="media video">{props.video}</div>
                : <div className="media image">
                    <img src={props.image} />
                </div>
            }
            <div className="hero-side">
                <p>{props.sideContent}</p>
                {/* Logos? */}
            </div>
        </article>
    )
};
