import React from "react";
import Logo from "../images/logo.png";
import NestedList from "./NestedList";
// import component 👇
import Drawer from "react-modern-drawer";
import MenuIcon from "@mui/icons-material/Menu";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import "../styles/drawer.css";
export default function DrawerComp() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <MenuIcon onClick={toggleDrawer} />
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
        style={{ overflow: "scroll" }}
      >
        <div style={{ marginLeft: "6%", color: "#FF7A8A" }} className="navbar-brand">
          <img src={Logo}  alt= "navbar-brand" style={{
            height: "50px",
            width: "150px",
            marginBottom: "45px"
          }}></img>
        </div>
        {/* <hr style={{
          marginTop: "-3rem",
          marginBottom: "1rem",
          border: "0",
          borderTop: "1px solid rgb(0 0 0 / 100%)"
        }} /> */}
        {/* <NestedList /> */}
        <NestedList />
      </Drawer>
    </>
  );
}
