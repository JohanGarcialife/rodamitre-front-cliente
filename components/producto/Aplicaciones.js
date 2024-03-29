import React from "react";
import { CiCircleInfo } from "react-icons/ci";

export default function Aplicaciones(props) {
  const { comparacion, producto } = props;
  return (
    <div className="text-gris text-xs ">
      {comparacion?.map((comparacion) => (
        <div>
          {comparacion.pre_id === producto?.pre_id && (
            <div className="flex items-center space-x-2 ">
              <div className="flex items-center space-x-1 ">
                <p>{comparacion.marca_auto}</p>
                <p>{comparacion.modelo}</p>
              </div>
              <div className="group">
                {" "}
                <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                  <p className="font-bold text-black text-base">
                    {producto.super_rubro}
                  </p>
                  <p className=" text-black  text-xs	 ">
                    {comparacion.descripcion}
                  </p>
                </div>
                <CiCircleInfo className="font-bold text-lg" />
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
