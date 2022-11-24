import React from "react";
import "./body.css";
import free from "../../assets/Free.svg";
import check from "../../assets/07352bb9-d9b5-4aee-9202-b1789486c483.jpg";

const Section1 = () => {
  return (
    <section id="pricing">
      <div>
        <div style={{paddingTop:"20px"}}>
            <h1>Choose Your Plan</h1>
            <p>
            Let's choose the package that is best for you and explore it happily
            and cheerfully.
            </p>
        </div>
      </div>
      <div className="price-flex">
        <div className="card">
          <div className="p-img">
            <img src={free} alt={free} height="200" />
            <h3>Free Plan</h3>
          </div>
          <div style={{ marginLeft:"15px" }}>
            <ul>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Unlimited Bandwidth
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Encrypted Connection
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                No Traffic Logs
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Works on All Devices
              </li>
            </ul>
          </div>
          <div className="text-center my-5 mt-60">
              <h2 className="mb-3">Free</h2>
              <button className="btn" >
                Sign Up{" "}
              </button>
            </div>
        </div>

        <div className="card">
          <div className="p-img">
            <img src={free} alt={free} height="200" />
            <h3>Standard Plan</h3>
          </div>
          <div style={{ marginLeft:"15px" }}>
            <ul>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Unlimited Bandwidth
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Encrypted Connection
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                No Traffic Logs
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Works on All Devices
              </li><li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Connect Anyware
              </li>
            </ul>
          </div>
          <div className="text-center my-5 mt-50">
            <h2 className="mb-3">
              $9<span class="text-900">/mo</span>
            </h2>
            <button className="btn" >
              Sign Up{" "}
            </button>
          </div>
        </div>

        <div className="card">
          <div className="p-img">
            <img src={free} alt={free} height="200" />
            <h3>Premium Plan</h3>
          </div>
          <div style={{marginLeft:"15px"}}>
            <ul>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Unlimited Bandwidth
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Encrypted Connection
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                No Traffic Logs
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Works on All Devices
              </li>
              <li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Connect Anyware
              </li><li className="i-flex">
                <span>
                  <img src={check} alt={check} />
                </span>
                Get New Features
              </li>
            </ul>
          </div>
          <div className="text-center my-5">
            <h2 className="mb-3">
              $12<span class="text-900">/mo</span>
            </h2>
            <button class="btn" >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section1;
