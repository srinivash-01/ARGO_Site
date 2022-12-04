import React, { useState } from "react";
import Headlines from "../store/headline";
import "../styles/navbarHeadline.css";
// import HoverSubMenu from "../Navbar/hoverSubMenu";
const datas = ["Women Ethnic", "Women Western", "Jewellery & Accessories", "Men", "Beauty & Health", "Bags & Footwear", "Home & Kitchen", "Kids", "Electronics"];
function NavbarHeadline() {
    const [isShown, setIsShown] = useState(false);
    const [hoveredIndex, sethoverIndex] = useState("");
    return (
        <div>
            <div style={{ display: "flex", justifyContent: "space-around", borderBottom: "1px solid #ece7e7" }}>
                {datas.map((data, index) =>
                    <div className="subHeadingsBackground" onMouseEnter={() => {
                        setIsShown(true)
                        sethoverIndex(index);
                    }}
                        onMouseLeave={() => {
                            setIsShown(false)
                        }}>
                        <p style={{ marginTop: "10px" }} className="subHeadings">{data}</p>
                    </div>)}

            </div>
            {isShown ? <div style={{
                display: "flex",
                height: "250px",
                backgroundColor: "#ffff",
                position: "absolute",
                right: "20px",
                left: "20px",
                zIndex: "11",
                borderStyle: "solid",
                borderColor: "rgb(215, 215, 224)",
                borderWidth: "0px 0.5px 0.5px",
                boxShadow: "rgb(0 0 0 / 5%) 2px 2px 4px 0px",
                animation: "200ms ease-in 0s 1 normal none running fadeIn",
                justifyContent: "space-around"
            }} onMouseEnter={() => {
                setIsShown(true)
            }} onMouseLeave={() => {
                setIsShown(false)
            }}>
                {Headlines.map((data, index) =>
                    index === hoveredIndex ?
                        data.map((title) =>
                            <div>
                                <p style={{ color: "#ea2a6b", marginTop: "10px" }} className="subHeadings">{title.h1}</p>
                                {title.h2.map((data) => <p>{data.h}</p>)}
                            </div>
                        )
                        : null
                )}
            </div> : null}
        </div>);
};
export default NavbarHeadline;