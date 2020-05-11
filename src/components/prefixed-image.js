import React from "react"
import { pathPrefix } from '../../gatsby-config';

import style from "./prefixed-image.module.css"

export default function PrefixedImage(props) {
    let src;
    if (props.src) {
        src = `${process.env.NODE_ENV !== 'development' ? pathPrefix || '' : ''}${props.src}`;
    }

    if (!props.alt) {
        console.error('You should provide an alt text');
    }
    if (!props.description) {
        console.error('You should provide a description text');
    }

    if (props.cover) {
        return (
            <div className={style.background} style={{ backgroundImage: `url(${src})` }} />
        );
    }

    return (
        <img {...props} src={src} />
    );
};
