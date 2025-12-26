import "./template.css";

const Gallery = () => {
  const imageFolder = "photography";
  const imageNames = [
    "bridge.jpg",
    "buildings.jpg",
    "exhaust.jpg",
    "hall2.jpg",
    "skyfuji.jpg",
    "island2.jpg",
    "jap.jpg",
    "mountain.jpg",
    "domepov.jpg",
    "hk.jpg",
    "backlighttrails.jpg",
    "levante2.jpg",
    "uobplaza.jpg",
    "frame.jpg",
    "mbs.jpg",
    "murgerhan.jpg",
    "acsi2.jpg",
    "moss.jpg",
    "cathedral.jpg",
    "ttfocused.jpg",
    "squirrel.jpg",
    "esplanade.jpg",
    "pool.jpg",
    // Add more image file names
  ];

  return (
    <>
      <div className="titleBar">
        <div>
          <h1 className="sectionheader">Gallery</h1>
          <p style={{ fontSize: 20, color: "white" }}>
            Collection of the photographs I've taken
          </p>
        </div>
      </div>
      <div className="main">
        <div className="gallery">
          {imageNames.map((imageName, index) => (
            <div className="gallery-item">
              <img src={`${imageFolder}/${imageName}`} alt="" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery;
