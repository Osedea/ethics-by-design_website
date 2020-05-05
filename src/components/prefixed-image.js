import React from "react"
import { pathPrefix } from '../../gatsby-config';

export default function PrefixedImage(props) {
    let src;
    if (props.src) {
        src = `${process.env.NODE_ENV !== 'development' ? pathPrefix || '' : ''}${props.src}`;
    }
    console.log(src);


    return (
        <img {...props} src={src} />
    );
};
