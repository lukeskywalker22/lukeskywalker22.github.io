import "./template.css";

import perse from "../assets/competitions/persecoding.png";
import noi from "../assets/competitions/noi.png";
import idex from "../assets/competitions/idex.png";
import vex from "../assets/competitions/vex.jpeg";
import wro from "../assets/competitions/wro.png";
import intoc from "../assets/competitions/intoc.png";
import oppx from "../assets/competitions/oppx.png";
import moe from "../assets/competitions/moe.png";
import ewbarker from "../assets/competitions/ewbarker.jpg";
import sil from "../assets/competitions/sil.png";

import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";

const Achievements = () => {
  return (
    <>
      <div className="titleBar">
        <div>
          <h1 className="sectionheader">Achievements</h1>
          <p style={{ fontSize: 20, color: "white" }}>
            Awards I've won and competitions I've participated in
          </p>
        </div>
      </div>

      <div className="main achievementsbg">
        <h1 className="sectionheader">Science Research</h1>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">NTU Nanyang Research Programme</h2>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/960px-Nanyang_Technological_University_coat_of_arms_vector.svg.png"
                className="logoWithBg"
                style={{
                  margin: "2em",
                }}
                height={90}
                alt="ntu"
              />
              <h3 className="card-subtitle">Silver Award</h3>
              <h3 className="card-title">2025-2026</h3>
            </div>
            <div className="card">
              <h2 className="card-title">
                INTOC International Science Project Competition
              </h2>
              <img src={intoc} className="logo" alt="" height={92} />
              <h2 className="card-subtitle">Bronze award</h2>
              <h2 className="card-title">2022</h2>
            </div>

            <div className="card">
              <h2 className="card-title">Opportunity X Online Science Fair</h2>
              <img src={oppx} className="logo" alt="" height={125} />
              <h2 className="card-subtitle">Presentation award</h2>
              <h2 className="card-title">2022</h2>
            </div>
          </div>
        </ScrollAnimation>

        <h1 className="sectionheader">Competitions</h1>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">E.W. Barker Challenge</h2>
              <img src={ewbarker} width={175} className="logo" />
              <h3 className="card-subtitle">Champion</h3>
              <h2 className="card-title">2025</h2>
            </div>
            <div className="card">
              <h2 className="card-title">Singapore Informatics League</h2>
              <img src={sil} width={145} className="logo" />
              <h3 className="card-subtitle">Bronze</h3>
              <h2 className="card-title">2025</h2>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">Singapore Physics League</h2>
              <img
                src="https://sgphysicsleague.org/res/logo_complete.png"
                width={100}
                className="logoWithBg"
                alt=""
              />
              <h3 className="card-subtitle">Honourable Mention</h3>
              <h2 className="card-title">2025</h2>
            </div>

            <div className="card">
              <h2 className="card-title">
                Perse Coding Team Challenge Round 1
              </h2>
              <img src={perse} width={300} className="logoWithBg" alt="" />
              <h3 className="card-subtitle">2023: Distinction</h3>
              <h3 className="card-subtitle">2024: Merit</h3>
            </div>

            <div className="card">
              <h2 className="card-title">
                Perse Coding Team Challenge Round 2
              </h2>
              <img src={perse} width={300} className="logoWithBg" alt="" />
              <h3 className="card-subtitle">2023: Higher Participation</h3>
              <h3 className="card-subtitle">2024: Distinction</h3>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">National Olympiad in Informatics</h2>
              <img src={noi} height={120} alt="" className="logo" />
              <h3 className="card-subtitle">Participation</h3>
              <h2 className="card-title">2024</h2>
            </div>

            <div className="card">
              <h2 className="card-title">ACS(I) iDEX Competition</h2>
              <img src={idex} width={350} alt="" className="logo" />
              <h3 className="card-subtitle">Finalist</h3>
              <h2 className="card-title">2024</h2>
            </div>

            <div className="card">
              <h2 className="card-title">World Robot Olympiad Singapore</h2>
              <div className="logoWithBg">
                <img src={wro} width={250} alt="" className="logoBgNoPadding" />
              </div>
              <h3 className="card-subtitle">Champion</h3>
              <h2 className="card-title">2023</h2>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="fadeInRight" animateOnce>
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">Singapore Vex Robotics Competition</h2>
              <img src={vex} height={140} alt="" className="logo" />
              <h3 className="card-subtitle">Judges' award</h3>
              <h2 className="card-title">2022</h2>
            </div>
          </div>
        </ScrollAnimation>

        <h1 className="sectionheader">Other awards</h1>

        <ScrollAnimation animateIn="fadeInRight">
          <div className="horizontalSection">
            <div className="card">
              <h2 className="card-title">MOE Edusave Merit award</h2>
              <img
                src={moe}
                height={175}
                alt=""
                style={{ margin: 1.5 + "em" }}
              />
              <h2 className="card-title">2022, 2024, 2025</h2>
              <h3 className="card-subtitle">
                Awarded to top 25% of school's level in terms of academic
                performance
              </h3>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
};

export default Achievements;
