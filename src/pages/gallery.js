import "./template.css";
import { useEffect } from "react";

const Gallery = () => {
  useEffect(() => {
  let script = document.getElementById("juicer-script");

  if (!script) {
    script = document.createElement("script");
    script.id = "juicer-script";
    script.src = "https://www.juicer.io/embed/lukeyeo30/embed-code.js";
    script.async = true;

    script.onload = () => {
      if (window.juicer) {
        window.juicer.refresh();
      }
    };

    document.body.appendChild(script);
  } else {
    if (window.juicer) {
      window.juicer.refresh();
    }
  }
}, []);


  return (
    <>
      <div className="titleBar">
        <div>
          <h1 className="sectionheader">Gallery</h1>
          <p style={{ fontSize: 20, color: "white" }}>
            Where my photography hobby resides
          </p>
        </div>
      </div>
      <div className="gallery">
        <ul className="juicer-feed" data-feed-id="lukeyeo30" ></ul>
      </div>
    </>
  );
};

export default Gallery;
