import React from "react";
import logo from "./Images/logo.PNG";

const Header = () => {
  return (
    <>
        <div className="header">
            <img src={logo} alt="logo" width="100" height="100" />
            <h1> Summarizer </h1>
        </div>
    </>
  );
};
export default Header;
