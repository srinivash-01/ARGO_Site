import React, { useState, useEffect } from "react";
import ButtonAppBar from "./component/Navbar/Navbar";
import NavbarHeadline from "./component/Navbar/navbarheadline";

function App() {

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
      <ButtonAppBar />
      {isDesktop ? <NavbarHeadline /> : null}
     
    </div>
  );
}

export default App;
