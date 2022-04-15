import React from "react";
import "../Screens/css/buttonstyle.css";

const Button = () => {
  const data = [
    {
      name: "Web App Developer",
      image: "https://i.postimg.cc/j2q47TJT/software-development.png",
    },
    {
      name: "Mobile App Developer",
      image: "https://i.postimg.cc/xj4S11m9/mobile-application.png",
    },
    {
      name: "Game Developer",
      image: "https://i.postimg.cc/bJV4rmsm/game-development.png",
    },
    {
      name: "Cloud App Developer",
      image: "https://i.postimg.cc/3N79KpZt/cloud-service.png",
    },
    {
      name: "Data Science",
      image: "https://i.postimg.cc/KjRj3pQj/dashboard.png",
    },
    {
      name: "Database Developer",
      image: "https://i.postimg.cc/G2shcTpT/server-storage.png",
    },
    {
      name: "DevOps Developer",
      image: "https://i.postimg.cc/yNLSJRBf/refresh.png",
    },
    {
      name: "Design/UX",
      image: "https://i.postimg.cc/1zJGYqXZ/web-design.png",
    },
    {
      name: "Code",
      image: "https://i.postimg.cc/dQ2yM3SS/coding.png",
    },
    {
      name: "Others",
      image: "https://i.postimg.cc/mr7bcz9v/other.png",
    },
  ];

  return (
    <>
      {data.map((data1) => (
        <button className="DevTypesButtons">
          <img src={data1.image} alt="SD" />
          <h1 className="ergi">{data1.name}</h1>
        </button>
      ))}
    </>
  );
};

export default Button;
