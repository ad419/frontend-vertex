import React from "react";
import fr from "../components/images/fr.png";

import Navbar from "../components/Navbar";

// import "./Home.css";
import "./css/heroSection.css";

const Home = () => {
  return (
    <>
      <Navbar />

      <div className="heroSection">
        <div className="heroContent">
          <h1>
            The best way to get a project done{" "}
            <span className="keyword">faster</span> is to start{" "}
            <span className="keyword">sooner</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id
            leo et risus blandit elementum.Pellentesque pretium, neque ac
            rhoncus porta, lacus mauris fermentum justo, id feugiat ex mi vel
            mauris.
          </p>

          <div className="buttons">
            <button style={{ backgroundColor: "#0C1A2D", color: "#E2E2E2" }}>
              Find Developers
            </button>
            <button>Find Work</button>
          </div>
        </div>

        <div className="HomeHeroImg">
          <img src={fr} alt="heroImage" />
        </div>
      </div>
    </>
  );
};

export default Home;
