import React from "react";
import "./imageCaroussel.css";
import image1 from "../pictures/carousel-1.png";
import image2 from "../pictures/carousel-2.png";
import image3 from "../pictures/carousel-3.png";
import image4 from "../pictures/carousel-4.png";
import image5 from "../pictures/carousel-5.png";
import image6 from "../pictures/carousel-6.png";
import image7 from "../pictures/carousel-7.png";

export default function ImageCaroussel() {
  const imagesArray = [image1, image2, image3, image4, image5, image6, image7];

  return (
    <div className="carousselWrapper">
      {imagesArray.map((image, i) => {
        return <img src={image} alt="menu images" key={i} />;
      })}
    </div>
  );
}
