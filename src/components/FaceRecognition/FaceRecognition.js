import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="center ma">
      <div className="absolute mt2">
        <img id="inputimage" alt="" src={imageUrl} className="face-img" />

        {boxes.map((box, index) => {
          return (
            <div
              className="bounding-box"
              key={index}
              style={{ top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaceRecognition;
