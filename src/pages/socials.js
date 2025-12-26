import "./template.css";
import ig from "../assets/socials/ig.png";
import igpfp from "../assets/socials/pfps/ig.jpg";
import tele from "../assets/socials/tele.png";
import telepfp from "../assets/socials/pfps/tele.jpg";
import linkedin from "../assets/socials/linkedin.png";
import linkedinpfp from "../assets/socials/pfps/linkedin.jpeg";
import photopfp from "../assets/socials/pfps/photo.png";

const Socials = () => {
  return (
    <>
      <div className="titleBar">
        <div>
          <h1 className="sectionheader">Socials</h1>
          <p style={{ fontSize: 20, color: "white" }}>
            Follow for life updates
          </p>
        </div>
      </div>

      <div className="main">
        <h1 className="sectionheader">Personal</h1>
        <div className="horizontalSection">
          <div className="wide-card">
            <h1 className="card-title">Instagram</h1>
            <div className="horizontalSection2">
              <img src={ig} alt="" width={135} />
              <img src={igpfp} alt="" width={135} className="pic" />
            </div>

            <a
              href="https://www.instagram.com/luk_e.1/"
              className="hyperlink-bold"
            >
              @luk_e.1
              <span className="divspan"></span>
            </a>
          </div>

          <div className="wide-card">
            <h1 className="card-title">Telegram</h1>
            <div className="horizontalSection2">
              <img src={tele} alt="" width={135} />
              <img src={telepfp} alt="" className="pic" width={135} />
            </div>

            <a
              href="https://www.t.me/luke_skywalker_22/"
              className="hyperlink-bold"
            >
              @luke_skywalker_22
              <span className="divspan"></span>
            </a>
          </div>
        </div>

        <h1 className="sectionheader">Professional</h1>
        <div className="horizontalSection">
          <div className="wide-card">
            <h1 className="card-title">LinkedIn</h1>
            <div className="horizontalSection2">
              <img src={linkedin} alt="" width={100} className="logoWithBg" />
              <img src={linkedinpfp} alt="" width={135} className="pic" />
            </div>

            <a
              href="https://www.linkedin.com/in/luke-yeo-337204244/"
              className="hyperlink-bold"
            >
              LinkedIn page
              <span className="divspan"></span>
            </a>
          </div>
          <div className="wide-card">
            <h1 className="card-title">Photography</h1>
            <div className="horizontalSection2">
              <img src={ig} alt="" width={135} />
              <img src={photopfp} alt="" width={135} className="pic" />
            </div>
            <a
              href="https://www.instagram.com/_lukes.snaps_/"
              className="hyperlink-bold"
            >
              @_lukes.snaps_
              <span className="divspan"></span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Socials;
