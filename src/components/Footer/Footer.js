import React from "react";
import "./Footer.css";
import logo from "../../assets/Logo.svg";
import facebook from "../../assets/Facebook.svg";
import instagram from "../../assets/Instagram.svg";
import twitter from "../../assets/Twitter.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-flex">
        <div>
          <div className="footer-left">
            <div className="">
              <img src={logo} alt={logo} height="35" />
            </div>
            <p>
              LaslesVPN is a private virtual network that<br/> has unique features and
              has high security.
            </p>

            <div className="icons">
              <img className="icon" src={facebook} alt={facebook} height="34"/>
              <img className="icon" src={twitter} alt={twitter} height="34"/>
              <img className="icon" src={instagram} alt={instagram} height="34"/>
            </div>

            <p>© 2020 LaslesVPN</p>
          </div>
        </div>

        <div className="extra-list">
          <div>
            {/* <h4 className="font-500">Product</h4> */}
            <ul>
            <li className="font-500"><b>Product</b></li>
              <li>Download</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Server</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            {/* <h4 className="font-500">Engage</h4> */}
            <ul>
            <li className="font-500"><b>Engage</b></li>
              <li>LaslesVPN ?</li>
              <li>FAQ</li>
              <li>Tutorials</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>

          <div>
            {/* <h4 className="font-500">Earn Money</h4> */}
            <ul>
            <li className="font-500"><b>Earn Money</b></li>
              <li>Affiliate</li>
              <li>Become Partner</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
