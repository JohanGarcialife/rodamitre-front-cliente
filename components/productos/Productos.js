import Image from 'next/image';
import React from 'react'
import { PiDotsThreeOutlineFill } from "react-icons/pi";


export default function Productos() {
    
  return (
    <div
      className="bg-[#f5f5f5] px-12 py-28 pt-0 font-montserrat"
      id="productos"
    >
      <div className="flex items-center w-full mb-10">
        <PiDotsThreeOutlineFill className="text-[#EAEAEA] text-4xl font-bold mr-5" />
        <p className="text-gris-medio text-5xl font-bold">PRODUCTOS</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <div className="bg-[#EEEEEE] p-6 pb-12 rounded-md hover:bg-white hover:text-amarillo hover:shadow-2xl">
          <Image
            src="/icono-motor.png"
            height={100}
            width={100}
            alt="logo"
            className=""
          />
          <p className="text-[#424242] text-2xl font-semibold">MOTOR</p>
        </div>
        <div className="bg-[#EEEEEE] p-6 pb-12 rounded-md hover:bg-white hover:text-amarillo hover:shadow-2xl">
          <Image
            src="/icono-suspension.png"
            height={100}
            width={100}
            alt="logo"
            className=""
          />
          <p className="text-[#424242] text-2xl font-semibold">SUSPENSION</p>
        </div>
        <div className="bg-[#EEEEEE] p-6 pb-12 rounded-md hover:bg-white hover:text-amarillo hover:shadow-2xl">
          <Image
            src="/icono-encendido.png"
            height={100}
            width={100}
            alt="logo"
            className=""
          />
          <p className="text-[#424242] text-2xl font-semibold">ENCENDIDO</p>
        </div>
        <div className="bg-[#EEEEEE] p-6 pb-12 rounded-md hover:bg-white hover:text-amarillo hover:shadow-2xl">
          <Image
            src="/icono-freno.png"
            height={100}
            width={100}
            alt="logo"
            className=""
          />
          <p className="text-[#424242] text-2xl font-semibold">
            FRENOS Y EMBRAGUE
          </p>
        </div>
        <div className="bg-[#EEEEEE] p-6 pb-12 rounded-md hover:bg-white hover:text-amarillo hover:shadow-2xl">
          <Image
            src="/icono-rodamiento.png"
            height={100}
            width={100}
            alt="logo"
            className=""
          />
          <p className="text-[#424242] text-2xl font-semibold">RODAMIENTOS</p>
        </div>
        <div className="bg-[#EEEEEE] p-6 pb-12 rounded-md hover:bg-white hover:text-amarillo hover:shadow-2xl">
          <Image
            src="/icono-transmision.png"
            height={100}
            width={100}
            alt="logo"
            className=""
          />
          <p className="text-[#424242] text-2xl font-semibold">TRANSMISION</p>
        </div>
      </div>
    </div>
  );
}
