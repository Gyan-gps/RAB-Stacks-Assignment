import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/Logo.svg";
import toggle from "../../assets/toggle.svg";

const features = ["About", "Features", "Pricing", "Testimonials", "Help"];

const Navbar = () => {

  const [expandNavbar, setExPandNavbar] = useState(false);


  return (
    <div className="sticky">
      <div className="flex nav">
        <div className="logo">
          <a href="#home"><img src={logo} alt="logo" height="35" /></a>
        </div>

        <div className="features disable" >
          <ul className="flex">
            {features.map((e, i) => {
              return <a href={"#"+e.toLowerCase()} onClick={() => {
                setExPandNavbar(false)
              }}><li key={i}>{e}</li></a>;
            })}
          </ul>
        </div>
        <div className="form disable" >
          <button>Sign In</button>
          <button>Sign Up</button>
        </div>


        <div>
          <div className='toggle'>
            <button
              onClick={() => {
                setExPandNavbar((prev) => !prev)
              }}
              className='toggle-btn'
            >
              <img src={toggle} alt={toggle} height="30" />
            </button>
          </div>
          <div className="toggle" id={expandNavbar ? "open" : "close"}>
            <div className="features">
              <ul className="flex">
                {features.map((e, i) => {
                  return <a href={"#"+e.toLowerCase()} onClick={() => {
                    setExPandNavbar(false)
                  }}><li key={i}>{e}</li></a>;
                })}
              </ul>
            
            </div>
            <div className="form">
                <button>Sign In</button>
                <button>Sign Up</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
