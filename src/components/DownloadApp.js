import React from "react";

const DownloadApp = () => {
  return (
    <main className="container">
      <section className="downloadapp">
        <div className="aside1">
          <h3 className="general-h3">DOWNLOAD APP NOW</h3>
          <p className="main-p">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi enim
            voluptates distinctio qui, eaque quibusdam tempora nam odio beatae
            inventore blanditiis veniam sunt aperiam esse nesciunt placeat
            repellendus sequi itaque?
          </p>
          <div className="buttons">
            <button className="black first">
              <i className="fa-brands fa-apple"> </i>
              <div className="download1">
                <span>Download on the</span>
                <b>App Store</b>
              </div>
            </button>
            <button className="black">
              <i className="fa-brands fa-apple"> </i>
              <div className="download1">
                <span>Download on the</span>
                <b>App Store</b>
              </div>
            </button>
          </div>
          <div className="container9">
            <div className="sub-container9 first1">
              <img src="img/download.png " alt="" />
              <h3>59865</h3>
              <p>DOWNLOAD</p>
            </div>
            <div className="sub-container9">
              <img src="img/likefinger.png" alt="" />
              <h3>29852</h3>
              <p>LIKE</p>
            </div>
            <div className="sub-container9">
              <img src="img/star.png" alt="" />
              <h3>1500</h3>
              <p>5 STAR RATING</p>
            </div>
          </div>
        </div>
        <div className="aside2">
          <img src="img/Gravity-Scene-iPhone-12-Mockup 1.png" alt="" />
        </div>
      </section>
    </main>
  );
};

export default DownloadApp;
