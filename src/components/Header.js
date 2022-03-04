import React from "react";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="curve">
      <header>
        <NavBar />
      </header>
      <section className="grow">
        <div className="converge">
          <div className="side-one">
            <h2>Grow Your Money With Ballon Africa</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor ea
              consequuntur tempore sapiente sunt, eaque unde maxime molestiae
            </p>
            <span>
              <button className="black">
                <i className="fa-brands fa-apple"> </i>
                <div className="download">
                  <span>Download on the</span>
                  <b>App Store</b>
                </div>
              </button>
              <button className="white">
                <i className="fa-brands fa-apple"></i>
                <div className="download">
                  <span>Download on the</span>
                  <b>App Store</b>
                </div>
              </button>
            </span>
          </div>
          <div className="side-two">
            <img src="img/arrow.png " alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
