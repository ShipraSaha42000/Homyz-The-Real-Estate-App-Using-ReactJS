import React from "react";
import "./Companies.css";

const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        <img src="./prologis.png" alt="Company prologis image" />
        <img src="./tower.png" alt="Company tower image" />
        <img src="./equinix.png" alt="Company equinix image" />
        <img src="./realty.png" alt="Company realty image" />
      </div>
    </section>
  );
};

export default Companies;
