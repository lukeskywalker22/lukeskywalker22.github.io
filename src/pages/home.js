import "./template.css";

import pfp from "../assets/profile/pfp.jpg";
import ig from "../assets/socials/ig.png";
import linkedin from "../assets/socials/linkedin.png";

import nyjc from "../assets/profile/nyjc.png";
import inc from "../assets/ccas/inc.png";
import robo from "../assets/ccas/robo.png";
import council from "../assets/ccas/council.png";
import gym from "../assets/ccas/gym.png";
import moe from "../assets/competitions/moe.png";
import nycomp from "../assets/ccas/nycomp.png";

import sstlogo from "../assets/competitions/sstlogo.png";
import abrsm from "../assets/competitions/abrsm.png";

import asencio from "../assets/work/asencio.png";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.compat.css";
import { TypeAnimation } from "react-type-animation";
// import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="titleBar">
        <img src={pfp} alt="profile" height={220} className="pic" />
        <ScrollAnimation animateIn="fadeInRight">
          <div className="horizontalSection">
            <div>
              <TypeAnimation
                sequence={[
                  "Hey, I'm Luke",
                  250,
                  "Hey, I'm Luke, a student in Singapore!",
                  500,
                  "",
                  250,
                ]}
                wrapper="span"
                speed={50}
                className="card-title"
                style={{
                  paddingBlock: "0.25em",
                  fontSize: "3em",
                  display: "block",
                  fontFamily: "Space Grotesk",
                }}
                repeat={Infinity}
              />
              <span className="bodyText">
                In my free time, I find new ways to do things, build creations
                using code to improve my life, and work on projects aligned with
                my interests!
              </span>
            </div>
          </div>
          <div className="horizontalSection">
            {/* Social media buttons */}
            <button
              onClick={() =>
                window.open("https://www.instagram.com/luk_e.1/", "_blank")
              }
              className="card-title"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "1.2em",
                padding: "0.5em 1.5em",
                marginRight: "0.25em",
                borderRadius: "0.5em",
                border: "none",
                background: "#222",
                color: "#f5f5f5",
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.25em",
              }}
            >
              {/* Placeholder for icon */}
              <img
                src={ig}
                width={25}
                alt=""
                style={{ borderRadius: 0.25 + "em", marginRight: 0.25 + "em" }}
              />
              Instagram
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/luke-yeo-337204244/",
                  "_blank",
                )
              }
              className="card-title"
              style={{
                fontFamily: "Space Grotesk",
                fontSize: "1.2em",
                padding: "0.5em 1.5em",
                borderRadius: "0.5em",
                border: "none",
                background: "#222",
                color: "#f5f5f5",
                boxShadow: "0 2px 8px rgba(0,0,0,0.18)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.25em",
              }}
            >
              {/* Placeholder for icon */}
              <img
                src={linkedin}
                width={25}
                alt=""
                style={{ borderRadius: 0.25 + "em", marginRight: 0.25 + "em" }}
              />
              LinkedIn
            </button>
          </div>
        </ScrollAnimation>
      </div>

      <div className="main">
        <h1 className="sectionheader">My Education Journey</h1>

        <div className="horizontalSection">
          <div className="card" style={{ minHeight: 700 }}>
            <h2 className="card-title">Pre-University education</h2>
            <img src={nyjc} className="logo" height={100} alt="nyjc" />
            <h2 className="card-title">Nanyang Junior College</h2>
            <h2 className="card-title">2025-2026</h2>
            <h3 className="card-subtitle">GCE A-level certificate</h3>
          </div>

          <div>
            <h2 className="card-subtitle">Co-curricular activities</h2>

            <div className="horizontalSection">
              <div className="card">
                <h2 className="card-title">Gym Club</h2>
                <img
                  src={gym}
                  alt=""
                  className="logo"
                  height={80}
                  style={{ margin: "0" }}
                />
                <h3 className="card-subtitle">Vice-President</h3>
                <h3 className="card-subtitle">2025-2026</h3>
              </div>
              <div className="card">
                <h2 className="card-title">CCA Leaders Council</h2>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/11/Nanyang_Junior_College_Logo.svg/1280px-Nanyang_Junior_College_Logo.svg.png"
                  className="logo"
                  height={80}
                  alt="nyjc"
                />
                <h3 className="card-subtitle">2025-2026</h3>
              </div>
            </div>

            <div className="horizontalSection">
              <div className="card">
                <h2 className="card-title">NTU Nanyang Research Programme</h2>
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/960px-Nanyang_Technological_University_coat_of_arms_vector.svg.png"
                  className="logo"
                  style={{
                    margin: "0.25em",
                  }}
                  height={90}
                  alt="ntu"
                />
                <h3 className="card-subtitle">Silver Award</h3>
                <h3 className="card-subtitle">2025-2026</h3>
              </div>
              <div className="card">
                <h2 className="card-title">Nanyang System Developers</h2>
                <img
                  src={nycomp}
                  alt=""
                  className="logo"
                  height={80}
                  style={{ margin: "0" }}
                />
                <h3 className="card-subtitle">Leader (Quality Assurance)</h3>
                <h3 className="card-subtitle">2025-2026</h3>
              </div>
            </div>
          </div>
        </div>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card" style={{ minHeight: 700 }}>
              <h2 className="card-title">Secondary education</h2>
              <img src={sstlogo} className="logo" height={100} alt="sst" />
              <h2 className="card-title">
                School of Science and Technology, Singapore
              </h2>
              <h2 className="card-title">2021-2024</h2>
              <h3 className="card-subtitle">GCE O-level certificate</h3>
            </div>

            <div>
              <h2 className="card-subtitle">Co-curricular activities</h2>

              <div className="horizontalSection">
                <div className="card">
                  <h2 className="card-title">Robotics @ APEX</h2>
                  <img src={robo} alt="" height={50} />
                  <h3 className="card-subtitle">2021-2024</h3>
                </div>
              </div>

              <div className="horizontalSection">
                <div className="card">
                  <h2 className="card-title">SST Incorporated</h2>
                  <img
                    src={inc}
                    alt=""
                    className=""
                    height={60}
                    style={{ padding: "1em" }}
                  />
                  <h3 className="card-subtitle">Exco Member</h3>
                  <h3 className="card-subtitle">2021-2024</h3>
                </div>

                <div className="card">
                  <h2 className="card-title">Student Council</h2>
                  <img
                    src={council}
                    alt=""
                    className="logo"
                    height={80}
                    style={{ margin: "0.5em" }}
                  />
                  <h3 className="card-subtitle">2022-2024</h3>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        <h1 className="sectionheader">Scholarships</h1>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">MOE ETPS Scholarship</h2>
              <img
                src={moe}
                height={170}
                alt=""
                style={{ margin: 1.5 + "em" }}
              />
              <h3 className="card-subtitle">2025-2026</h3>
            </div>
            <div className="card">
              <h2 className="card-title">CSIT JC Computing Scholarship</h2>
              <img
                src="https://www.csit.gov.sg/images/default-source/csit-logo-and-icon/9559_csit-logo_fa-01.png?sfvrsn=948591f4_1"
                height={140}
                style={{
                  borderRadius: "1em",
                  marginTop: "1.5em",
                  marginBottom: "1.5em",
                }}
                alt=""
              />
              <h3 className="card-subtitle">2025-2026</h3>
            </div>
          </div>
        </ScrollAnimation>

        <h1 className="sectionheader">Work Experience</h1>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">Bookstore assistant</h2>
              <img src={asencio} alt="" className="" height={70} />
              <h2 className="card-title">Asencio bookstores</h2>
              <h3 className="card-subtitle">Nov-Dec 2024</h3>
            </div>
            <div className="card">
              <h2 className="card-title">Consultant</h2>
              <img src={inc} alt="" className="" height={70} />
              <h2 className="card-title">SST Incorporated</h2>
              <h3 className="card-subtitle">Jan-Dec 2025</h3>
            </div>
          </div>
        </ScrollAnimation>

        <h1 className="sectionheader">Other qualifications</h1>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">ABRSM Grade 5 Music Theory</h2>
              <img src={abrsm} alt="abrsm" className="logo" height={150} />
              <h3 className="card-subtitle">Passed with Merit</h3>
            </div>

            <div className="card">
              <h2 className="card-title">ABRSM Grade 5 Piano</h2>
              <img src={abrsm} alt="abrsm" className="logo" height={150} />
              <h3 className="card-subtitle">Passed with Merit</h3>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Home;
