import React from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function RegisterBanner(props) {
  const { show, setShow } = props;

  return (
    <div className="bg-white shadow-inner-xl px-12 py-10 font-montserrat">
      <div
        onClick={() => setShow(!show)}
        className="absolute top-6 right-6 bg-gray-200 text-black rounded-full text-xl p-3 cursor-pointer hover:bg-gray-400 hover:p-4 "
      >
        <AiOutlineClose />
      </div>
      <div className="flex">
        <div className="w-full">
          <p className="text-amarillo text-lg mb-3">QUERÉS REGISTRARTE?</p>

          <div className="grid grid-cols-3 gap-5 w-full">
            <div className="flex items-center">
              <div className="bg-amarillo font-bold text-white rounded-full px-3 py-1 w-fit mb-3">
                1
              </div>
              <p className="text-black/70 ml-4">
                {" "}
                Envianos un mail solicitando una cuenta
              </p>
            </div>
            <div className="flex items-center w-full">
              <div className="bg-amarillo font-bold text-white rounded-full px-3 py-1 w-fit mb-3">
                2
              </div>
              <p className="text-black/70 ml-4">
                {" "}
                Recibiras un correo con tu usuario y contraseña
              </p>
            </div>
            <div className="flex items-center w-full">
              <div className="bg-amarillo font-bold text-white rounded-full px-3 py-1 w-fit mb-3">
                3
              </div>
              <p className="text-black/70 ml-4">
                {" "}
                Ingresa desde nuestro sitio y compra lo que necesites
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/3 ml-10">
          <p className="text-amarillo text-lg mb-3">SOPORTE</p>
          <div>
            <p className="text-black/70 text-sm">Tel.:(+54)(11)4028-4558</p>
          </div>
          <div>
            <p className="text-black/70 text-sm">
              administracion@rodamitre.com.ar
            </p>
          </div>
          <div>
            <p className="text-black/70 text-sm">
              Comunicate con nosotros de 9 a 18 hs.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full mt-3">
        <p className="text-black/70 text-sm">
          Si tenes algun problema para ingresas comunicate con nosotros!
        </p>
      </div>
    </div>
  );
}
