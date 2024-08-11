import React from "react";
import './compo1-styles.css';

const Component1 = (props) => {
    return (
        <div>
            <h1 className={`${props.className}`}>{props.title}</h1>
            <p className={`${props.nama}`}>{props.description}</p>
        </div>
    )
}
export default Component1