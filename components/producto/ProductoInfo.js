import React from "react";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import AtributosProducto from "../buscadores/AtributosProducto";
import Esparte from "../productos/Esparte";
import Intercambiables from "../productos/Intercambiables";
import Formadopor from "../productos/Formadopor";
import Compañero from "../productos/Compañero";
import Sliders from "../sliders/Sliders";

export default function ProductoInfo(props) {
  const { producto, equi } = props;
  console.log(producto, "Buscador Familia")
  return (
    <div className="space-y-2">
      <div className="font-bold flex items-center justify-start space-x-3 ">
      <div className="w-[100px] h-[100px] items-center">
          <Sliders images={producto?.pre_imagenes} />
        </div>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            {!producto?.atributos && !producto?.notas ? null : (
              <div className="group">
                {" "}
                <AiFillInfoCircle />
                <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                  {!producto?.atributos ? null : (
                    <AtributosProducto atributos={producto?.atributos} />
                  )}
                  {!producto?.notas ? null : (
                    <div className="space-y-3">
                      <div className="bg-amarillo w-full py-1">
                        <p className="text-azul font-bold">Notas</p>
                      </div>
                      <p>{producto?.notas} </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            <p>{producto?.codigo} </p>
          </div>
          <div>
            {producto?.es_parte_de ? (
              <div className="flex flex-col">
                <p className="font-bold text-black text-left">Es parte de</p>
                <Esparte esparte={producto?.es_parte_de} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {producto?.intercambiables ? (
              <div className="flex flex-col">
                <p className="font-bold text-black text-left">Intercambiable</p>
                <Intercambiables intercambiable={producto?.intercambiables} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {producto?.formado_por ? (
              <div className="flex flex-col">
                <p className="font-bold text-black text-left">Formado por</p>
                <Formadopor formadopor={producto?.formado_por} />
              </div>
            ) : (
              <></>
            )}
          </div>
          <div>
            {producto?.companieros ? (
              <div className="flex flex-col">
                <p className="font-bold text-black text-left">Compañero</p>
                <Compañero compañero={producto?.companieros} />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      {equi?.map((e) => (
        <div className="flex items-center justify-start space-x-2 ">
          {e?.codigo === producto?.codigo ? null : (

<div className="w-[100px] h-[100px] items-center">
<Sliders images={e?.pre_imagenes} />
</div>



          
          )}
        </div>
      ))}
    </div>
  );
}
