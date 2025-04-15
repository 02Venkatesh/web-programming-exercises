import React from "react";
import SampleImage from "./someMonument.jpg";
const SrcImage = () => {
  return (
    <div>
      <h2>Image from src Folder</h2>
      <img src={SampleImage} alt="Src Folder Image" width="300" />
    </div>
  );
};
export default SrcImage;
