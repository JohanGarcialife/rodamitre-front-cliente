import React from "react";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Footer() {
  return (
    <div className="px-20 py-12 bg-azul w-full font-montserrat">
      <div className="flex justify-center items-center">
        <Image
          src="/rodamitre-logo.png"
          height={200}
          width={400}
          alt="Roadmitre logo"
          className=""
        />
      </div>
      <div>
        <div className="flex justify-center items-start space-x-10 mt-10 pb-10 border-b border-white font-montserrat">
          <div>
            <div className="flex items-center space-x-2 text-amarillo mb-3">
              <IoLocationSharp />
              <p>Dirección</p>
            </div>
            <p className="text-white">Caboto 1129, CABA, Argentina</p>
          </div>
          <div>
            <div className="flex items-center space-x-2 text-amarillo mb-3">
              <MdEmail />
              <p>E-Mails</p>
            </div>
            <p className="text-white">ventas@rodamitre.com.ar</p>
            <p className="text-white">administración@rodamitre.com.ar</p>
          </div>
          <div>
            <div className="flex items-center space-x-2 text-amarillo mb-3">
              <BsFillTelephoneFill />
              <p>Teléfonos</p>
            </div>
            <p className="text-white">(+54) (11) 3980-7075 (ROTATIVA)</p>
          </div>
          <div>
            <div className="flex items-center space-x-2 text-amarillo mb-3">
              <IoLogoWhatsapp />
              <p>Whatsapp</p>
            </div>
            <p className="text-white">
              <span className="text-amarillo">Zona 1:</span> (+54) (11)
              4028-4558
            </p>
            <p className="text-white">
              <span className="text-amarillo">Zona 2:</span> (+54) (11)
              2365-6769
            </p>
            <p className="text-white">
              <span className="text-amarillo">Zona 3:</span> (+54) (11)
              5826-8501
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 text-center font-montserrat">
        <p className=" text-white">© 2019 Rodamitre</p>
        <p className=" text-white">
          Desarrollado por{" "}
          <span className="text-amarillo">Creative Feel Dev</span>
        </p>
      </div>
    </div>
  );
}
