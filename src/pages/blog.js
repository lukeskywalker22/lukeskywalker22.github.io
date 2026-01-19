import { useEffect } from "react";
import "./template.css";

const Blog = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://widgets.sociablekit.com/linkedin-profile-posts/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="titleBar">
        <div>
          <h1 className="sectionheader">Achievements</h1>
          <p style={{ fontSize: 20, color: "white" }}>
            My recent activities (from my LinkedIn page!)
          </p>
        </div>
      </div>

      <div
        className="sk-ww-linkedin-profile-post"
        data-embed-id="25645229"
      ></div>
    </>
  );
};

export default Blog;
