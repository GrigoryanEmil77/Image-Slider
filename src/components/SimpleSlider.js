import { useState } from "react";
import { Button } from "@mui/material";
import "./SimpleSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";
import img6 from "../img/6.jpg";
import img7 from "../img/7.jpg";


export default function SimpleSlider() {
  const [array, setArray] = useState([]);

  const sliderImages = [img1, img2, img3, img4, img5, img6, img7];
  const newImages = sliderImages.map((slider, i) => {
    return {
      id: i + 1,
      src: slider,
      checked: false,
      imgborder:"2px solid green"

    }
  });
const [images, setImages] = useState(newImages);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="cont">
      <div className="contImages">
        {images.map((img,) => {
          return (
            <div key={img.id}>
              <img style={{border:img.imgborder}} src={img.src} alt=""className="Images"
                onClick={() => {
                    const chek = images.find((val) => val.id === img.id)
                    chek.checked = !chek.checked;
                    chek.checked ? chek.imgborder = "6px solid green" : chek.imgborder = "2px solid green"
                    setImages([...images])
                }}
              />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "center", marginTop: "3%" }}>
        <Button
          sx={{width: "200px",background: "green",height: "50px",color:"greenyellow",}}
          onClick={() => {
          setArray(images.filter((img) => img.checked === true));
          }}> Create Slider
        </Button>
      </div>
      <Slider {...settings}>
        {array.map((arr) => {
          return (
            <div key={arr.src} className="divSlider">
              <img src={arr.src} className="imgSlider" alt=""/>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
