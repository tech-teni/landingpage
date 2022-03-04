import React from "react";
import MiniCard from "./MiniCard";

const Product = () => {
  return (
    <section className="product">
      <div className="container4">
        <h3 className="heading3 general-h3">Our Products</h3>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia cum sit
          qui quisquam exercitationem accusamus, molestiae dignissimos iste t
          amet consectetur adipisicing elit. Quia cum sit qui quisquam
          exercitationem accusamus, molestiae dignissimos iste
        </p>
        <div className="max">
          <div className="cards">
            <MiniCard
              title="Search doctor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea.
        Ratione, est placeat re?"
              image="img/search.png"
            />
            <MiniCard
              title="Search doctor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea.
        Ratione, est placeat re?"
              image="img/drugbottle.png"
            />
            <MiniCard
              title="Search doctor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea.
        Ratione, est placeat re?"
              image="img/consultation.png"
            />
            <MiniCard
              title="Search doctor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea.
        Ratione, est placeat re?"
              image="img/detail.png"
            />
            <MiniCard
              title="Search doctor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea.
        Ratione, est placeat re?"
              image="img/emergencycare.png"
            />
            <MiniCard
              title="Search doctor"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ea.
        Ratione, est placeat re?"
              image="img/tracking.png"
            />
          </div>
        </div>
      </div>
      <button>Sign Up</button>
    </section>
  );
};

export default Product;
