import React from "react";
import "./About.css";
import img from "../../assets/Illustration 1.svg";
import user from "../../assets/Group 1216.svg";
import location from "../../assets/Group 1215.svg";
import server from "../../assets/Group 1217.svg";

const About = () => {
    return (
        <header id="about">
            {/* <div className="container"> */}
            <div className="sect1">
                <div className="about-img">
                    <img src={img} alt={img} />
                </div>
                <div className="text">
                    <h1>
                        Want anything to be
                        <br /> easy with <spam className="bold">LaslesVPN.</spam>
                    </h1>
                    <p>
                        Provide a network for all your needs with ease and fun using
                        <strong> LaslesVPN.</strong><br/> discover interesting features from
                        us.
                    </p>
                    <button>Get Started</button>
                </div>
            </div>
            {/* </div> */}

            <div className="about-900px">
                <div className="about">
                    <div className="about-flex border">
                        <div className="circle"><img src={user} alt={user} height="20px" /></div>
                        <div>
                            <span><b>30+</b></span><br />
                            <span>User</span>
                        </div>
                    </div>
                    <div className="about-flex border">
                        <div className="circle"><img src={location} alt={location} height="20px" /></div>
                        <div>
                            <span><b>50+</b></span><br />
                            <span>Location</span>
                        </div>
                    </div>
                    <div className="about-flex">
                        <div className="circle"><img src={server} alt={server} height="20px" /></div>
                        <div>
                            <span><b>90+</b></span><br />
                            <span>Server</span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default About;
