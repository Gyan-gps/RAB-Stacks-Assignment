import React from "react";
import "./Trusted.css";
import ellipse1 from "../../assets/Ellipse 175.png";
import ellipse2 from "../../assets/Ellipse 175 (1).png";
import ellipse3 from "../../assets/Ellipse 175 (2).png";
import arrow from "../../assets/arrow-left.svg";
import star from "../../assets/bea48ed5-1153-4c9f-bfdd-75fff3cc5404.jpg";

const Trusted = () => {
  return (
    <section id="testimonials">
      <div>
        <h1>Trusted by Thousands of<br/> Happy Customer</h1>
        <p>
          These are the stories of our customers who have joined us with great<br/>
          pleasure when using this crazy feature.
        </p>
      </div>

      <div className="card-flex">
        <div className="Card">
          <div className="p">
            <div className="ellipse">
                <div className="icon">
                <img src={ellipse1} alt={ellipse1} height="50" />
                <div className="detail">
                    <span><b>Viezh Robert</b></span>
                    <span>arsaw,Poland</span>
                </div>
                </div>
                <div>
                <span>4.5</span>
                <img src={star} alt={star} />
                </div>
            </div>
            <p className="sentence">
                “Wow...I am very happy to use this VPN, it turned out to be more
                than my expectations and so far there have been no problems.
                LaslesVPN always the best”.
            </p>
            </div>
        </div>

        <div className="Card">
          <div className="p">
            <div className="ellipse">
                <div className="icon">
                <img src={ellipse2} alt={ellipse2} height="50" />
                <div className="detail">
                    <span><b>Yessica Christy</b></span>
                    <span>Shanxi, China</span>
                </div>
                </div>
                <div>
                <span>4.5</span>
                <img src={star} alt={star} />
                </div>
            </div>
            <p className="sentence">
            “I like it because I like to travel far and still can connect with high speed.”.
            </p>
            </div>
        </div>

        <div className="Card">
          <div className="p">
            <div className="ellipse">
                <div className="icon">
                <img src={ellipse3} alt={ellipse3} height="50" />
                <div className="detail">
                    <span><b>Kim Young Jou</b></span>
                    <span>Seoul, South Korea</span>
                </div>
                </div>
                <div>
                <span>4.5</span>
                <img src={star} alt={star} />
                </div>
            </div>
            <p className="sentence">
            “This is very unusual for my business that currently requires a virtual private network that has high security.”.
            </p>
            </div>
        </div>
      </div>



      <div className="controls">
          <div className="controls-flex">
            <div className="dots disabled">
              <div className="dot active"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>

            <div className="arrows">
              <div className="arrow-left">
                <div><img src={arrow} alt=""/></div>
              </div>
              <div className="arrow-right">
                <div><img src={arrow} alt=""/></div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Trusted;
