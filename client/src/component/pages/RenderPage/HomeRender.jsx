import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import Carousel from "react-multi-carousel";
import Skeleton from '@mui/material/Skeleton';
import "react-multi-carousel/lib/styles.css";
import "../../styles/pages/Home/carousel.css";
import "../../styles/pages/Home/Carousel_Home.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4.2
    },
    mobile: {
        breakpoint: { max: 600, min: 0 },
        items: 1.5
    }
};


const elements = ['one', 'two', 'three', "four", 'five', 'six', 'one', 'two', 'three', "four", 'five', 'six'];
export default function HomeRender() {
    const [isDesktop, setIsDesktop] = useState(false);
    function MediaQuery() {
        useEffect(() => {
            const media = window.matchMedia("(min-width: 1040px)");
            const listener = () => setIsDesktop(media.matches);
            listener();
            window.addEventListener("resize", listener);
            return () => window.removeEventListener("resize", listener);
        }, [isDesktop]);

        return <div className="App">{isDesktop ? null : null}</div>;
    }
    return (
        <div style={{ margin: isDesktop ? "30px" : "15px", marginTop: "0px" }}>
            <MediaQuery />
            <div style={{
                display: "flex",
                justifyContent: "space-between",
                paddingLeft: "20px",
                paddingRight: "20px",
                paddingTop: "10px"
            }}>
                <Skeleton variant="text" width={240} height={40} />
                <Skeleton variant="text" width={240} height={40} />
            </div>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {elements.map((datas) =>

                    <div style={{ width: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                        <div style={{
                            display: "flex",
                            height: "160px",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden"
                        }}>
                             <Skeleton variant="rectangular" width={130} height={118} animation="wave"/>
                        </div>
                        <Skeleton variant="text" width={150} height={40} animation="wave"/>
                        <Skeleton variant="text" width={150} height={40} animation="wave"/>
                        <Skeleton variant="text" width={150} height={40} animation="wave"/>
                    </div>

                )}
            </Carousel>
        </div>
    );
}
