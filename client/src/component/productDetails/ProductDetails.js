import React from "react";
import "./productsDetails.css";


import Apple from "../images/apple.jpg";
import Mango from "../images/mango.jpg";
import Orange from "../images/orange.jpg";
import Pomegranate from "../images/pomegranate.jpg";
import Straberry from "../images/straberry.jpg";
import Watermellon from "../images/watermelllon.jpg";
import Banana from "../images/banana.jpg";


import pic1 from "../../assets/p1.jpeg";
import pic2 from "../../assets/p2.jpeg";
import pic3 from "../../assets/p3.jpeg";
import pic4 from "../../assets/p4.jpeg";
import c1 from "../../assets/c1.jpeg";
import c2 from "../../assets/c2.jpeg";
import c3 from "../../assets/c5.jpeg";
import c4 from "../../assets/c4.jpeg";
import c5 from "../../assets/c3.jpeg";
import Skeleton from '@mui/material/Skeleton';
import Avatar from '@mui/material/Avatar';
import { useState } from "react";
import {
  ProductDescription,
  prevPrice,
  currPrice,
  rating,
  productDetailedObj,
  ratingsNum,
  reviewsNum,
} from "../../data/data";

export let customerPics = [c1, c2, c3, c4, c5];
const ProductDetails = ({ openCustomerModal, datasets }) => {
  let pics = [pic1, pic2, pic3, pic4];
  const rating_temp = " 2134 Ratings";
  const reviews_temp = "134 Reviews";
  const discount_temp = "₹50 discount on first order";
  const delivery_temp = "Free Delivery";
  let [displayPicIndex, setDisplayPicIndex] = useState(0);

  let changeImageHandler = (index) => {
    setDisplayPicIndex(index);
  };

  return (
    <div className="productDetails-area pb-5">
      <div className="productDetails-sec">
        {/* row 1  */}
        <div className="row d-flex justify-content-start gap-5 ">
          {/* row 1 col 1  */}
          <div className="row col-lg-6 col-12">
            <div style={{}} className=" d-flex  justify-content-between">
              <div className="col-2 h-100">
                <div
                  className="h-100"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {/* {pics.map((value, index, array) => {
                    return (
                      <div style={{ height: "75px" }}>
                        {!value ? <Skeleton
                          
                          variant="rectangular"
                          width={90}
                          height={70}
                        /> :
                          <img
                            onClick={() => {
                              changeImageHandler(index);
                            }}
                            style={{
                              border: "2px solid black",
                              cursor: "pointer",
                              borderRadius: "5px",
                              borderColor: "#FFB6C1",
                              width: "100%",
                              height: "100%",
                            }}
                            src={value}
                            alt="product"
                          />
                        }

                      </div>
                    );
                  })} */}
                </div>
              </div>
              <div className="col-8  ">
                <div
                  style={{
                    borderRadius: "5px",
                    overflow: "hidden",
                    height: "300px",
                  }}
                >
                  {!datasets.image ? <Skeleton
                    
                    variant="rectangular"
                    width={400}
                    height={380}
                  /> :
                    
                    datasets.type != "apple" ? 
                    datasets.type != "banana" ? 
                    datasets.type != "mango" ? 
                    datasets.type != "orange" ? 
                    datasets.type != "pomegranate" ? 
                    datasets.type != "watermellon" ? 
                    datasets.type != "straberry" ? 
                        null 
                        : 
                        <img src={Straberry} alt="Product Images" style={{ width: "100%", height: "100%" }} />
                        : 
                        <img src={Watermellon} alt="Product Images" style={{ width: "100%", height: "100%" }}/>
                        :  
                        <img src={Pomegranate} alt="Product Images" style={{ width: "100%", height: "100%" }} />
                        :  
                        <img src={Orange} alt="Product Images" style={{ width: "100%", height: "100%" }} />
                        :  
                        <img src={Mango} alt="Product Images" style={{ width: "100%", height: "100%" }} />
                        : 
                        <img src={Banana} alt="Product Images" style={{ width: "100%", height: "100%" }} />
                         :
                        <img src={Apple} alt="Product Images" style={{ width: "100%", height: "100%" }} />
                  }

                </div>
                <div className="pt-4 d-flex align-items-center justify-content-center gap-3">
                  <button className="btn btn-danger">Add To Cart</button>
                  <button className="btn btn-danger">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* row 1 col 2 */}
          <div className="col-lg-5 col-12 ">
            {/* product description  */}
            <div className="product-text-sec">
              {/* product important info  */}
              <div
                className=""
                style={{
                  border: "2px solid rgb(240, 240, 240)",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                {!datasets.title ? <Skeleton variant="text" width={150} height={40} animation="wave" /> : <p className="text-muted">{datasets.title}</p>}

                <div className="d-flex align-items-center gap-3">
                  {!datasets.price ? <Skeleton variant="text" width={150} height={40} animation="wave" /> : <h5 className=" m-0">₹{datasets.price}</h5>}
                  {!prevPrice ? <Skeleton variant="text" width={150} height={40} animation="wave" /> : <strike className="text-muted fs-6  ">₹{prevPrice}</strike>}

                </div>

                {/* rating row  */}
                <div className="d-flex align-items-end justify-content-start gap-3">
                  {/* formatted rating  */}
                  {!rating ? <Skeleton variant="text" width={100} height={40} animation="wave" /> : <div
                    style={{ backgroundColor: "rgb(35, 187, 117)" }}
                    class="badge rounded-pill mt-3 fs-6"
                  >

                    {rating}
                    <i class="ps-1 fa fa-star fs-6" aria-hidden="true"></i>
                  </div>}
                  {!rating_temp ? <Skeleton variant="text" width={100} height={40} animation="wave" /> : <p
                    style={{ fontSize: "14px", fontWeight: "500" }}
                    className="m-0 pb-1 text-muted "
                  >
                    {rating_temp}
                  </p>}
                  {!reviews_temp ? <Skeleton variant="text" width={100} height={40} animation="wave" /> : <p
                    style={{ fontSize: "14px", fontWeight: "500" }}
                    className="m-0 pb-1 text-muted"
                  >
                    {reviews_temp}
                  </p>}

                </div>

                {/* offer  */}
                {!discount_temp ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <div className="d-flex align-items-center justify-content-start gap-1 pt-3">
                  <svg
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    height="16"
                    width="16"
                    color="greenT2"
                    iconsize="20"
                    class="Icon-sc-1iwi4w1-0 gQTsJE"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.833 5.733c0 .186 1.006 1.745 1.006 1.745.215.312-.844 2.27-.844 2.27-.105.151-.168 2.029-.168 2.029-.001.385-1.961 1.317-1.961 1.317-.17.058-1.276 1.54-1.276 1.54-.218.31-2.328-.139-2.328-.139-.17-.057-1.898.462-1.898.462-.352.118-1.806-1.541-1.806-1.541-.105-.151-1.796-.793-1.796-.793-.35-.12-.595-2.356-.595-2.356 0-.186-1.005-1.744-1.005-1.744-.215-.312.844-2.271.844-2.271.104-.151.167-2.029.167-2.029.002-.385 1.962-1.317 1.962-1.317.17-.058 1.275-1.54 1.275-1.54.218-.31 2.089.353 2.089.353.17.058 2.138-.676 2.138-.676l1.805 1.541c.106.151 1.797.793 1.797.793.35.12.594 2.356.594 2.356zM6.761 6.761a.875.875 0 11-1.238-1.237.875.875 0 011.238 1.237zm2.865-1.236a.6.6 0 11.848.849l-4.101 4.1a.6.6 0 11-.849-.848l4.102-4.1zm.846 4.95a.875.875 0 11-1.238-1.238.875.875 0 011.238 1.237z"
                      fill="#06A759"
                    ></path>
                  </svg>
                  <strong className="text-muted">
                    {discount_temp}
                  </strong>
                </div>}


                {/* delivery  */}
                {!delivery_temp ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <div className=" pt-3">
                  {/* <p
                    style={{ fontSize: "13px", fontWeight: "600" }}
                    className="text-capitalize text-muted"
                  >
                    Free Delivery
                  </p> */}
                  <span class="badge rounded-pill bg-success">
                    {delivery_temp}
                  </span>
                </div>}

              </div>

              {/* product detailed description  */}
              <div
                className="mt-4"
                style={{
                  border: "2px solid rgb(240, 240, 240)",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                {!datasets.title ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <p>
                  <strong>Name:</strong> {datasets.title}
                </p>}
                {!datasets.color ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <p>
                  <strong>Color:</strong> {datasets.color}
                </p>}
                {!productDetailedObj.quantity ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <p>
                  <strong>Quantity:</strong> {productDetailedObj.quantity}
                </p>}
                {!productDetailedObj.features ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <p>
                  <strong>Features:</strong> {productDetailedObj.features}
                </p>}
                {!productDetailedObj.origin ? <Skeleton variant="text" width={200} height={40} animation="wave" /> : <p>
                  <strong>Origin:</strong> {productDetailedObj.origin}
                </p>}

              </div>

              {/* product ratings and reviews  */}
              <div
                className="mt-4"
                style={{
                  border: "2px solid rgb(240, 240, 240)",
                  padding: "15px",
                  borderRadius: "5px",
                }}
              >
                <h5>Product Ratings and Reviews</h5>
                <div className="py-3 row d-flex align-items-center ">
                  {/* <div className="col-xxl-3 col-xl-3 col-lg-12 col-3"> */}
                  <div className=" col-10 ">
                    <div className="text-success d-flex align-items-center justify-content-center gap-1 text-center">
                      {rating ? <Skeleton variant="circular" animation="wave">
                        <Avatar />
                      </Skeleton> : <h1 className="m-0">{rating}</h1>}


                      <h1 className="m-0 pb-2">
                        <i class="ps-1 fa fa-star fs-3" aria-hidden="true"></i>
                      </h1>
                    </div>
                    <div className="text-center" style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center"
                    }}>
                      {!ratingsNum ? <Skeleton variant="text" width={80} height={20} animation="wave" /> : <p
                        className="m-0"
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "gray",
                        }}
                      >
                        {ratingsNum} Ratings,
                      </p>}
                      {!reviewsNum ? <Skeleton variant="text" width={80} height={20} animation="wave" /> : <p
                        className="m-0"
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          color: "gray",
                        }}
                      >
                        {reviewsNum} Reviews,
                      </p>}

                    </div>
                  </div>
                  {/* <div className="  col-xxl-9 col-xl-9 col-lg-12 col-9"> */}
                  <div className="   col-10">
                    <div className="">
                      <div className="row py-2 d-flex align-items-center">
                        <div className="col-3">
                          <p
                            className="text-muted m-0"
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Good
                          </p>
                        </div>
                        <div
                          className="m-0 p-0 col-9"
                          style={{
                            width: "75%",
                            height: "8px",
                            borderRadius: "5px",

                            backgroundColor: "rgb(240, 240, 240)",
                          }}
                        >
                          <div
                            style={{
                              width: "60%",
                              height: "100%",
                              borderRadius: "5px",
                              backgroundColor: "green",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center  py-2">
                        <div className="col-3">
                          <p
                            className="text-muted m-0"
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Avg
                          </p>
                        </div>
                        <div
                          className="m-0 p-0 col-9"
                          style={{
                            width: "75%",
                            height: "8px",
                            borderRadius: "5px",

                            backgroundColor: "rgb(240, 240, 240)",
                          }}
                        >
                          <div
                            style={{
                              width: "30%",
                              height: "100%",
                              borderRadius: "5px",
                              backgroundColor: "orange",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div className="row d-flex align-items-center py-2">
                        <div className="col-3">
                          <p
                            className="text-muted m-0"
                            style={{
                              fontSize: "14px",
                              fontWeight: "500",
                            }}
                          >
                            Poor
                          </p>
                        </div>
                        <div
                          className="m-0 p-0 col-9"
                          style={{
                            width: "75%",
                            height: "8px",
                            borderRadius: "5px",

                            backgroundColor: "rgb(240, 240, 240)",
                          }}
                        >
                          <div
                            style={{
                              width: "10%",
                              height: "100%",
                              borderRadius: "5px",
                              backgroundColor: "red",
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* customer images  */}
              <div
                style={{
                  border: "2px solid rgb(240, 240, 240)",
                  padding: "15px",
                  borderRadius: "5px",
                }}
                className="customer-images mt-4"
              >
                <h5>Customer Product Images</h5>
                <div className="row d-flex  justify-content-start gap-2 pt-2 ps-2">
                  {customerPics.map((value, index, arr) => {
                    return (
                      <div
                        key={index}
                        style={{
                          borderRadius: "5px",
                          overflow: "hidden",
                          padding: "0",
                          cursor: "pointer",
                        }}
                        className="col-2"
                        onClick={() => {
                          openCustomerModal(index);
                        }}
                      >
                        {value ? <Skeleton
                          sx={{ bgcolor: 'grey.900' }}
                          variant="rectangular"
                          width={210}
                          height={80}
                        /> :
                          <img
                            style={{
                              height: "100%",
                              width: "100%",
                              cursor: "pointer",
                            }}
                            className="h-100 w-100"
                            src={value}
                            alt="product"
                          />
                        }

                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
