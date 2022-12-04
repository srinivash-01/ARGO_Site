import React from "react";

function HoverSubMenu(props) {
    return (<div style={{height: "100px",
        backgroundColor: "red",
        position: "absolute",
        right: "20px",
        left: "20px",
        zIndex: "11"}}>
        {props.data}
    </div>);
}

export default HoverSubMenu;