import React from "react";
import Label from "./Label";

const AppFeatures = () => {
  return (
    <section className="features">
      <div className="features-texts">
        <h3 className="heading-app general-h3">App Features</h3>
        <p className="heading-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum sit
          qui quisquam exercitationem accusamus, molestiae dignissimos iste qui
          quisquam exercitationem accusamus, molestiae dignissimos iste qui
          quisquam exercitationem accusamus, molestiae dignissimos iste
        </p>
      </div>
      <Label
        className="labeling1"
        img="img/chatimg.png"
        title="FULL FREE CHAT"
        subTitle="Lorem ipsum dolor sit amet consectetur"
      />
      <div className="labeling2">
        <Label
          className="sub-labeling2a"
          img="img/phone.png"
          title="UNLIMITED FEATURES"
          subTitle="Lorem ipsum dolor sit amet consectetur"
        />
        <Label
          className="sub-labeling2b"
          img="img/phone.png"
          title="ISO & ANDRIOD VERSION"
          subTitle="Lorem ipsum dolor sit amet consectetur"
        />
      </div>
      <div className="image">
        <img src="img/App.png" alt="" />
      </div>

      <div className="labeling3">
        <Label
          className="sub-labeling3a"
          img="img/designtool.png"
          title="AWESOME UI DESIGN"
          subTitle="Lorem ipsum dolor sit amet consectetur"
        />
        <Label
          className="sub-labeling3b"
          img="img/eye-scanner 1.png"
          title="RETINA READY GRAPHICS"
          subTitle="Lorem ipsum dolor sit amet consectetur"
        />
      </div>
      <Label
        className="labeling4"
        img="img/male-telemarketer.png"
        title="24/7 SUPPORT BY REAL PEOPLE"
        subTitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea."
      />
    </section>
  );
};

export default AppFeatures;
