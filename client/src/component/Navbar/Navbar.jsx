import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import Logo from "../images/logo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import AdbRoundedIcon from "@mui/icons-material/AdbRounded";
import Drawer from "./drawer";
import { useNavigate } from 'react-router-dom';
export default function ButtonAppBar() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const navigate = useNavigate();
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


  
  function handleSignIn() {
    navigate("/SignIn");
  };

  return (
    <div>
      <MediaQuery />
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        style={
          isDesktop
            ? { borderBottom: "1px solid #e1dada", height: "80px" }
            : { borderBottom: "1px solid #e1dada", height: "70px" }
        }
      >
        {isDesktop ? null : (
          <div style={{ marginLeft: "10px" }}>
            <Drawer />
          </div>
        )}

        <a
          className="navbar-brand"
          href="/"
          style={
            isDesktop
              ? { marginLeft: "2%", color: "#FF7A8A" }
              : { position: "absolute", color: "#FF7A8A", left: "50px", fontSize: "22px" }
          }
        >
          {/* <img src={Logo} style={!isDesktop ? { height: "50px", width: "150px", marginTop: "0px" } : {
            height: "61px",
            width: "179px", marginTop: "0px"
          }}></img> */}
          <p style={!isDesktop ? { height: "50px", width: "150px", marginTop: "25px", color: "black" } : {
            height: "61px",
            width: "179px", marginTop: "25px", color: "black"
          }}>ARGO FOODS</p>
        </a>
        {!isDesktop ? null : (
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="d-flex input-group w-auto">
              <input
                type="search"
                className="form-control rounded"
                placeholder="Try Saree, Kurti, etc.."
                aria-label="Search"
                aria-describedby="search-addon"
              />
              <span className="input-group-text border-0" id="search-addon">
                <SearchIcon />
              </span>
            </form>
          </div>
        )}

        {!isDesktop ? null : (
          <div className="nav  navbar-right">
            <AdbRoundedIcon style={{ marginTop: "-2px", marginRight: "4px" }} />
            <h6 style={{ marginRight: "25px" }}>Download App</h6>
          </div>
        )}
        {!isDesktop ? null : (
          <Divider
            orientation="vertical"
            style={{
              height: "37px",
              marginRight: "25px",
              borderWidth: "0.3px",
              borderColor: "rgb(236 231 231)",
              opacity: "1"
            }}
          />
        )}
        {!isDesktop ? null : (
          <div className="nav  navbar-right">
            <PhoneIcon style={{ marginTop: "-2px", marginRight: "4px" }} />
            <h6 style={{ marginRight: "25px" }}>Contact</h6>
          </div>
        )}
        {!isDesktop ? null : (
          <Divider
            orientation="vertical"
            style={{
              height: "37px",
              marginRight: "25px",
              borderWidth: "0.3px",
              borderColor: "rgb(236 231 231)",
              opacity: "1"
            }}
          />
        )}

        <ul
          className="nav  navbar-right"
          style={
            isDesktop
              ? { marginRight: "2%" }
              : { position: "absolute", right: "20px" }
          }
        >
          {!isDesktop ? null : (
            <li style={{ marginRight: "35px" }}>
              {isLogged ? <div style={{ textAlign: "center" }}>
                <PermIdentityOutlinedIcon />

                <h6>Profile</h6>

              </div> : <div style={{ textAlign: "center" }}>

                {/* <h6 style={{marginTop: "13px"}}>Sign Up</h6> */}

                

                <button type="button" class="btn btn-danger" style={{ marginTop: "7px", fontWeight: "700" }} onClick={handleSignIn}>SIGN IN</button>
              </div>}

            </li>
          )}
          <li style={{ right: "10px" }}>
            <div style={{ textAlign: "center" }}>
              <ShoppingCartOutlinedIcon />
              {!isDesktop ? null : <h6>Cart</h6>}
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}
