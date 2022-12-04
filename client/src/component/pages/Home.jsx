import React, { useState, useEffect } from "react";
import CarouselHome from "./HomeComponents/Carousel_Home";
import ImageCarousel from "./HomeComponents/imageCarousel";
import HomeRender from "./RenderPage/HomeRender";
import axios from "axios";
export default function Home() {
const [axiosData, setaxiosData] = useState(true);
  // const [Datasets, setDatasets] = useState([]);
  const [Datas, setDatas] = useState([]);
  // var carouselDataset = Datasets;


  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 768px)").matches
  )

  useEffect(() => {
    window
      .matchMedia("(min-width: 768px)")
      .addEventListener('change', e => setMatches(e.matches));
    
    axios.get("/Datas_Carousel").then(function (response) {
      if(response.data){
        setDatas(response.data);
      }
      
    }).catch(function (error) {
      if (error.response) {
        setaxiosData(false);
      }
    })


  }, []);


  console.log(axiosData);
  return (
    <div>
      {/* <ImageCarousel /> */}
      
      {axiosData ? Datas.map((Datas) => <CarouselHome datas={Datas} title="Discounts for You" />) : <div><HomeRender/> <HomeRender/> <HomeRender/></div>}
      
      
    </div>
  );
};