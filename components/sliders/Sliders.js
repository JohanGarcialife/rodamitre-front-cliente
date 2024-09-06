import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import { map } from "lodash";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders(props) {
  const { images, images2 } = props;

  const settings = {
    className: "carousel-precios",
    dots: false,
    infinite: true,
    speed: 400,
    arrows: false,
    slidesToShow: 1,
    swipeToSlide: true,
    autoplay: true,
  };

  let imagenes = images?.split(";");

  return (
    <Slider {...settings}>
      {map(imagenes, (producto) => (
        <>
          <Image
            /// key={producto?.id}
            src={`/RODAMITRE-FOTOS/${producto}`}
            height={100}
            width={100}
            // alt={producto?.title}
          />
        </>
      ))}
    </Slider>
  );
}
