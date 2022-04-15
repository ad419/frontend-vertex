import React from "react";
import fr from "../components/images/1.png";
// import "./hiredeveloper.css"
import Navbar from "../components/Navbar";
// import "./Home.css";
import "./css/heroSection.css";

const HireDeveloper = () => {
  return (
    <>
      <Navbar />

      <div className="heroSection">
        <div className="heroContent">
          <h1>
            Hiring a developer for a project has never been{" "}
            <span className="keyword">easier</span>
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
            <button>Hire Developers</button>
          </div>
        </div>

        <div className="HireDevHeroImg">
          <img className="img-1" src={fr} alt="ergi" />
        </div>
      </div>
    </>
  );
};

export default HireDeveloper;
