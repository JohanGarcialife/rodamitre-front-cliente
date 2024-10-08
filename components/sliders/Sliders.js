import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import { map } from "lodash";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Sliders(props) {
  const { images } = props;

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

  console.log(images, " ver");

  return (
    <>
      {!images ? (
        <div className="w-[100px] h-[100px]"></div>
      ) : imagenes?.length === 1 ? (
        <>
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
        </>
      ) : (
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
      )}
    </>
  );
}
