import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function BuscadorRapida() {
  return (
    <div className="flex space-x-10 w-full font-montserrat">
      <div className="w-full space-y-5">
        <div className="bg-white rounded-lg border border-black flex">
          <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 w-1/5">
            <p>Código / Ubicación</p>
          </div>
          <input
            type="text"
            className="bg-transparent p-3 w-4/5"
            placeholder="Código del artículo y/o ubicación. Ej: VKM 1258 / Mazda Ford Fiesta / VKM Fiat"
          />
        </div>
        <div className="w-full flex space-x-5">
          <div className="bg-white rounded-lg border border-black flex">
            <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
              <p>Interior</p>
            </div>
            <input
              type="text"
              className="bg-transparent p-3 "
              placeholder="Interior"
            />
          </div>
          <div className="bg-white rounded-lg border border-black flex">
            <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
              <p>Exterior</p>
            </div>
            <input
              type="text"
              className="bg-transparent p-3 "
              placeholder="Exterior"
            />
          </div>
          <div className="bg-white rounded-lg border border-black flex">
            <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
              <p>Altura</p>
            </div>
            <input
              type="text"
              className="bg-transparent p-3 "
              placeholder="Altura"
            />
          </div>
        </div>
      </div>
      <div className="flex h-fit bg-amarillo text-white rounded-lg  ">
        <div className="flex items-center space-x-2 p-3 hover:bg-azul rounded-l-lg cursor-pointer">
          <p>Buscar</p>
          <FaSearch />
        </div>
        <div className="flex items-center space-x-2 p-3 hover:bg-azul rounded-r-lg cursor-pointer">
          <p>Limpiar</p>
          <IoClose className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
