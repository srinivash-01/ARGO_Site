import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import axios from "axios";
import Carousel from "react-multi-carousel";
import Skeleton from '@mui/material/Skeleton';
import Apple from "../../images/apple.jpg";
import Mango from "../../images/mango.jpg";
import Orange from "../../images/orange.jpg";
import Pomegranate from "../../images/pomegranate.jpg";
import Straberry from "../../images/straberry.jpg";
import Watermellon from "../../images/watermelllon.jpg";
import Banana from "../../images/banana.jpg";
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
        items: 6.8
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



export default function CarouselHome(props) {
    const Datas = props.datas;
    const DataArray = Datas.datas;

    const navigate = useNavigate();
    const [Title, setTitle] = useState(Datas.Title);
    const [id, setid] = useState(Datas._id);
    const [Datasets, setDatasets] = useState([]);
    const [isDesktop, setIsDesktop] = useState(false);
    const [itemId, setItemId] = useState("");
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

    function handleItemClick(props) {

        navigate("/" + id + "/" + props);
    }
    function handleViewAll() {
        navigate("/list/" + id);
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
                {!Title ? <Skeleton variant="text" width={240} height={40} animation="wave"/> : <p style={{ fontSize: "25px" }}>{Title}</p>}

                {!Title ? <Skeleton variant="text" width={240} height={40} animation="wave" /> : <button type="button" class="btn btn-danger" onClick={handleViewAll} style={{ height: "40px" }}>View All</button>}


            </div>
            <Carousel responsive={responsive} removeArrowOnDeviceType={["tablet", "mobile"]}>
                {DataArray.map((datas) =>

                    <div style={{ width: "auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => handleItemClick(datas._id)}>
                        <div style={{
                            display: "flex",
                            height: "160px",
                            alignItems: "center",
                            justifyContent: "center",
                            overflow: "hidden"
                        }}>
                        {!datas.image ? <Skeleton variant="rectangular" width={130} height={118} animation="wave"/> : 
                        datas.type != "apple" ? 
                        datas.type != "banana" ? 
                        datas.type != "mango" ? 
                        datas.type != "orange" ? 
                        datas.type != "pomegranate" ? 
                        datas.type != "watermellon" ? 
                        datas.type != "straberry" ? 
                        null 
                        : 
                        <img src={Straberry} alt="Product Images" style={{ height: "90%" }} />
                        : 
                        <img src={Watermellon} alt="Product Images" style={{ height: "90%" }} />
                        :  
                        <img src={Pomegranate} alt="Product Images" style={{ height: "90%" }} />
                        :  
                        <img src={Orange} alt="Product Images" style={{ height: "90%" }} />
                        :  
                        <img src={Mango} alt="Product Images" style={{ height: "90%" }} />
                        : 
                        <img src={Banana} alt="Product Images" style={{ height: "90%" }} />
                         :
                        <img src={Apple} alt="Product Images" style={{ height: "90%" }} /> }
                        </div>
                        {!datas.title ? <Skeleton variant="text" width={120} height={40} animation="wave"/> : <p className="para">{datas.title}</p>}
                        {!datas.title ? <Skeleton variant="text" width={120} height={40} animation="wave"/> : <p className="para" style={{ fontWeight: "700" }}> ₹ {datas.price}</p>}
                        {!datas.title ? <Skeleton variant="text" width={120} height={40} animation="wave" /> : <p className="para" >{datas.rating}</p>}
                        {!datas.title ? <Skeleton variant="text" width={120} height={40} animation="wave" /> : <p className="para" >{datas.discription}</p>}
                    </div>
                )}
            </Carousel>
        </div >
    );
}
