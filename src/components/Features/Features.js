import React from "react";
import "./Features.css";
import img from "../../assets/Illustration 2.svg";
import check from "../../assets/Group 1120.svg";

const point = [
  "Powerfull online protection.",
  "Internet without borders.",
  "Supercharged VPN.",
  "Internet without borders.",
];

const Features = () => {
  return (
    <section id="features">
      {/* <div className="container"> */}
        <div className="sect2">
          <div className="features-img">
            <img src={img} alt={img} height="337" />
          </div>
          <div className="text">
            <h1>
              We Provide Many <br />
              Features You Can Use
            </h1>
            <p>
              You can explore the features that we provide with fun and <br/> have
              their own functions each feature.
            </p>
            
            <div className="feature-list">
            <div >
              {point.map((e, i) => {
                return (
                    <div key={i} className="point">
                    <span className="img">
                      <img src={check} alt={check} height="20" />
                    </span>
                    <div>{e}</div>
                  </div>
                );
              })}
              
              </div>
            </div>
          </div>
        </div>
      {/* </div> */}
    </section>
  );
};

export default Features;

