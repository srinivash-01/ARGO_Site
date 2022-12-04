import React, { useState, useEffect } from "react";
import ButtonAppBar from "./component/Navbar/Navbar";
import NavbarHeadline from "./component/Navbar/navbarheadline";
import DisplayItems from "./component/pages/ListDatas";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./component/pages/Home";
import ListPage from "./component/pages/ListPage";
import Footer from "./component/pages/HomeComponents/Footer";
import SignIn from "./component/pages/SignIn";
import SignUp from "./component/pages/SignUp";
export default function Rout() {


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
        <div>
            <MediaQuery />
            <BrowserRouter>



                <Routes>
                    <Route path="/" element={<div>
                        <ButtonAppBar />
                        {/* {isDesktop ? <NavbarHeadline /> : null} */}
                        <Home />
                    </div>} />
                    <Route path="/list/:id" element={<div>
                        <ButtonAppBar />
                        {/* {isDesktop ? <NavbarHeadline /> : null} */}
                        <ListPage />
                    </div>} />
                    <Route path="/:id/:ItemId" element={<div>
                        <ButtonAppBar />
                        {/* {isDesktop ? <NavbarHeadline /> : null} */}
                        <DisplayItems />
                            </div>
                        } />
                    <Route path="/SignUp" element={<div><ButtonAppBar /><SignUp /></div>} />
                    <Route path="/SignIn" element={<div><ButtonAppBar /><SignIn /></div>} />
                </Routes>
            </BrowserRouter>
            {/* <Footer /> */}
        </div>

    );

}
