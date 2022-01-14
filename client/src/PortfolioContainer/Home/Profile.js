import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://github.com/nic0mp">
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://twitter.com/nic0mp">
              <i className="fa fa-twitter-square"></i>
            </a>
            <a href="https://www.instagram.com/nic0mp/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/in/nico-mp/">
              <i className="fa fa-linkedin-square"></i>
            </a>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Nico</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic 🏈",
                    1000,
                    "Full Stack",
                    1000,
                    "Enthusiastic",
                    1000,
                    "Enthusiastic",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="NICO PINGUEL 2022 RESUME.pdf" download='NICO PINGUEL 2022 RESUME.pdf'>
                <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
