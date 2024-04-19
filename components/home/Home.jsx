"use client";
import React from "react";
import { ReactTyped } from "react-typed";
import Social from "../Social";

const Home = () => {
  return (
    <>
      <div className="tokyo_tm_home">
        <div className="home_content">
          <div className="avatar">
            <div
              className="image avatar_img"
              style={{
                backgroundImage: "url(/img/home/portrait-sromero.jpg)",
              }}
            ></div>
            {/* END AVATAR IMAGE */}
          </div>
          {/* END AVATAR */}
          <div className="details">
            <h3 className="name">Sebastian Romero</h3>
            <h4 className="typer">
              <ReactTyped
                strings={[
                  "Designer",
                  "Developer",
                  "Maker",
                  "Educator",
                ]}
                loop
                typeSpeed={80}
              />
            </h4>

            <p className="job">
              Creative technologist specialized in physical computing and embodied interactions.
            </p>
            {/* END JOB */}
            <Social />
          </div>
          {/* END DETAILS */}
        </div>
        {/* END HOME CONTENT */}
      </div>
      {/* END HOME */}
    </>
  );
};

export default Home;
