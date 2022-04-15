// import React, { useState } from "react";
import img1 from "../components/images/gh.png";
import Navbar from "../components/Navbar";
import "./css/heroSection.css";

const FindWork = () => {
  return (
    <>
      <Navbar />

      <div className="heroSection">
        <div className="heroContent">
          <h1>
            Find great software development{" "}
            <span className="keyword">work</span>
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>

          <div className="buttons">
            <button className="button-1">Find Developers</button>
          </div>
        </div>

        <div className="FindWorkHeroImg">
          <img src={img1} alt="ok" />
        </div>
      </div>
    </>
  );
};

export default FindWork;
