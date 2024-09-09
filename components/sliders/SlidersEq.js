import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import { map } from "lodash";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SlidersEq(props) {
  const { images } = props;

  const settings = {
  //  className: "carousel-precios",
    dots: false,
    infinite: true,
    speed: 400,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
  };

  let imagenes = images?.split(";");
  console.log(imagenes, "Images")

  return (
    <Slider {...settings}>
      {map(imagenes, (producto) => (
        <>
          <Image
            src={`/RODAMITRE-FOTOS/${producto}`}
            height={100}
            width={100}
            alt="Imagen"
            className="mr-3"
          />
        </>
      ))}
    </Slider>
  );
}
