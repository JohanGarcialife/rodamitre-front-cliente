import React from "react";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import AtributosProducto from "../buscadores/AtributosProducto";
import Esparte from "../productos/Esparte";
import Intercambiables from "../productos/Intercambiables";
import Formadopor from "../productos/Formadopor";

export default function ProductoInfoE1(props) {
  const { producto } = props;
  return (
    <div className="space-y-2">
      <div className="font-bold flex items-center justify-start space-x-3">
        <Image
          src="/VKPC-85097_1_SKF.jpg"
          height={100}
          width={100}
          alt="Imagen"
          className="mr-3"
        />
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

            {producto?.pre_id_principal === producto?.pre_id ? (
              <p >{producto?.codigo} </p>
            ) : !producto?.pre_id_principal ? (
              <p>{producto?.codigo} </p>
            ) : (
              producto?.pre_id_principal != producto?.pre_id && (
                <div className="flex flex-col text-left">
                  <p>{producto?.codigo_principal}</p>
                  <p className="text-orange-500">{producto?.codigo} </p>
                </div>
              )
            )}

            {/*   <p>{producto?.codigo} </p> */}
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
        </div>
      </div>
    </div>
  );
}
