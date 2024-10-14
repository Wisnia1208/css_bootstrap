import React, { useState, useEffect } from "react";
import "./Css1.css";

const Css1 = () => {
  const [animate, setAnimate] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {}, [showImage]);

  const handleAnimationBooty = () => {
    setShowImage(true);
    const audio = new Audio("/sound.mp3");
    audio.play();

    setTimeout(() => {
      setShowImage(false);
    }, 300);
  };

  const handleAnimation = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 1000);
  };

  return (
    <div className="container animated-container show">
      <h2>CSS Page 1</h2>
      <p>This is CSS Page 1 with some custom styles!</p>
      <button className="btn btn-primary" onClick={handleAnimation}>
        Animate
      </button>

      <button className="btn btn-primary m-3" onClick={handleAnimationBooty}>
        Show Image
      </button>
      <div className="animate-image">
        {showImage && (
          <img src="/img0.jpg" alt="Animated" className="animated-image" />
        )}
      </div>
      <div className={`animate-box ${animate ? "animated" : ""}`}></div>
    </div>
  );
};

export default Css1;
