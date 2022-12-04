import React, { useCallback } from "react";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Apple from "../images/apple.jpg";
import Mango from "../images/mango.jpg";
import Orange from "../images/orange.jpg";
import Pomegranate from "../images/pomegranate.jpg";
import Straberry from "../images/straberry.jpg";
import Watermellon from "../images/watermelllon.jpg";
import Banana from "../images/banana.jpg";

import LinearProgress from '@mui/material/LinearProgress';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import SortingFilter from "./ListPageComponents/SortingFilter";
import MenuItem from '@mui/material/MenuItem';
import "../styles/pages/ListPage/ListPage.css"
import Pagination from '@mui/material/Pagination';
import ListPagRender from "../pages/RenderPage/ListPageRender";
import Stack from '@mui/material/Stack';
export default function ListPage() {
  const navigate = useNavigate();
  const [page, setPage] = React.useState(1);
  const { id } = useParams();
  const [Datasets, setDatasets] = useState([]);
  const [selectedList, setSelectedList] = useState([]);
  const [selectedSubList, setSubList] = useState([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [age, setAge] = React.useState('');
  const [Catagory, setCatagory] = useState("");
 
  // const [pageCount, setPageCount] = useState(1);
  if (selectedSubList) {
    if (selectedSubList.length % 20) {
      var pageCount = Math.floor(selectedSubList.length / 20 + 1);
    } else {
      var pageCount = selectedSubList.length / 20;
    }
  }

  const handleCatagory = num => {

    setCatagory(current => current + num);
  };

  const [pageReminder, setPagReminder] = useState(0);
  const [pageList, setPageList] = useState(null);
  var temp = [];
  var temp_count = 0;
  const handleChange = (event) => {

    setAge(event.target.value);
  };
  const handlePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);

  };

  function handleListItemNavigate(props) {
    console.log(props);
    navigate("/" + id +"/" + props);
  } 

  async function fetchaxios() {
    try {
      await axios.get("/Datas_Carousel").then(function (response) {
        setDatasets(response.data);
      });
    } catch (error) {
      console.error(error);
    }

    Datasets.map(Datas => {
      if (Datas._id === id) {
        setSelectedList(Datas);
        setSubList(selectedList.datas);
      }
    });
  }


  useEffect(() => {
    fetchaxios();
    if (selectedSubList) {
      ListDataSplit();
    }
    if (page && temp) {
      setPageList(temp[page - 1]);
    }
  }, [selectedSubList, page, temp]);







  function ListDataSplit() {
    let start = 0;
    let end = 20;
    for (let i = 1; i <= pageCount; i += 1) {
      let slicedData = selectedSubList.slice(start, end);
      temp.push(slicedData);
      if (i !== pageCount) {
        start += 20;
        end += 20;
      } else {
        start += 20;
        end += pageReminder;
      }
    }

  }


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
    <div style={{}}>
      <MediaQuery />
      {selectedList ? <p style={{ paddingLeft: "20px", marginTop: "10px", marginBottom: "0px" }}>{selectedList.Title}</p> : null}
      {isDesktop ? <p style={{ paddingLeft: "20px", marginTop: "0px" }}>Showing 1-20 out of 103086 products</p> : null}
      <div style={{ display: "flex", paddingRight: "15px" }}>
        {isDesktop ? <div >

          <div style={{ width: "30%", margin: "12px 62px 0px 40px" }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" >Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10} style={{ backgroundColor: "#fff" }}>Price(High to Low)</MenuItem>
                <MenuItem value={20} style={{ backgroundColor: "#fff" }}>Price(Low to High)</MenuItem>
                <MenuItem value={30} style={{ backgroundColor: "#fff" }}>New Arrivals</MenuItem>
                <MenuItem value={40} style={{ backgroundColor: "#fff" }}>Ratings</MenuItem>
                <MenuItem value={50} style={{ backgroundColor: "#fff" }}>Discount</MenuItem>
              </Select>
            </FormControl>
          </div>

          <div style={{ padding: "12px 62px 0px 40px" }}>

            <div>
              <p>FILTERS</p>
              <p style={{ fontSize: "12px", marginTop: "-15px" }}>1000+ Products</p>
            </div>

            <SortingFilter />
          </div>

        </div> : null}

        <div style={isDesktop ? { width: "85%", marginTop: "-80px", zIndex: "0" } : { width: "100%", padding: "10px" }}>

          <Grid container spacing={{ xs: 2, md: 5 }} columns={{ xs: 4, sm: 8, md: 8 }} style={{marginTop: "20px"}}>

            {pageList ? Object.entries(pageList).map(([key, value]) => {
              return (
                <Grid item xs={2} sm={4} md={2} key={key} style={{ paddingTop: "0px"}} onClick={() =>handleListItemNavigate(value._id)}>
                  <div style={{ width: "auto", textAlign: "center" }}>
                    <div 
                    style={{
                      display: "flex",
                      height: "160px",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden"
                    }}>
                    {!value.image ? <Skeleton variant="rectangular" width={130} height={118} animation="wave"/> : 
                    value.type != "apple" ? 
                    value.type != "banana" ? 
                    value.type != "mango" ? 
                    value.type != "orange" ? 
                    value.type != "pomegranate" ? 
                    value.type != "watermellon" ? 
                    value.type != "straberry" ? 
                        null 
                        : 
                        <img src={Straberry} alt="Product Images" style={{ height: "60%" }} />
                        : 
                        <img src={Watermellon} alt="Product Images" style={{ height: "60%" }} />
                        :  
                        <img src={Pomegranate} alt="Product Images" style={{ height: "60%" }} />
                        :  
                        <img src={Orange} alt="Product Images" style={{ height: "60%" }} />
                        :  
                        <img src={Mango} alt="Product Images" style={{ height: "60%" }} />
                        : 
                        <img src={Banana} alt="Product Images" style={{ height: "60%" }} />
                         :
                        <img src={Apple} alt="Product Images" style={{ height: "60%" }} /> }
                      
                    </div>
                    <p className="para">{value.title}</p>
                    <p className="para" style={{ fontWeight: "700" }}>{value.price}</p>
                    <p className="para" >{value.discription}</p>
                  </div>
                </Grid>
              )

            }) :
              <ListPagRender />
            }
          </Grid>

        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", paddingBottom: "50px", paddingTop: "50px" }}>
      {pageList ? <Stack spacing={2}>
          <Pagination count={pageCount} onChange={handlePage} page={page} />
        </Stack> : <Stack spacing={2}>
          <Pagination count={1} onChange={handlePage} page={page} />
        </Stack>}
        
      </div>
    </div>
  );
}