import React, { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";

export default function Aplicaciones(props) {
  const { aplicaciones, srubro } = props;
  const [verMas, setVerMas] = useState(false);
  const jsonObject = JSON.parse(aplicaciones);
  const array = jsonObject.map((item) => {
    return item;
  });

  const mayorQueSeis = array.slice(0, 6);

  return (
    <>
      {array.length <= 6 ? (
        <div className="text-gris text-xs ">
          {array?.map((aplicacion) => (
            <div>
              <div className="flex items-center space-x-2 ">
                <div className="flex items-center space-x-1 ">
                  <p>{aplicacion.marca_modelo}</p>
                </div>
                <div className="group">
                  {" "}
                  <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                    <p className="font-bold text-black text-base">{srubro}</p>
                    {aplicacion?.hover?.map((d) => (
                      <p className=" text-black  text-xs">{d.hover}</p>
                    ))}
                  </div>
                  <CiCircleInfo className="font-bold text-lg" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-gris text-xs ">
          {!verMas ? (
            <>
              {mayorQueSeis?.map((aplicacion) => (
                <div>
                  <div className="flex items-center space-x-2 ">
                    <div className="flex items-center space-x-1 ">
                      <p>{aplicacion.marca_modelo}</p>
                    </div>
                    <div className="group">
                      {" "}
                      <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                        <p className="font-bold text-black text-base">
                          {srubro}
                        </p>
                        {aplicacion?.hover?.map((d) => (
                          <p className=" text-black  text-xs">{d.hover}</p>
                        ))}
                      </div>
                      <CiCircleInfo className="font-bold text-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
              {array?.map((aplicacion) => (
                <div>
                  <div className="flex items-center space-x-2 ">
                    <div className="flex items-center space-x-1 ">
                      <p>{aplicacion.marca_modelo}</p>
                    </div>
                    <div className="group">
                      {" "}
                      <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                        <p className="font-bold text-black text-base">
                          {srubro}
                        </p>
                        {aplicacion?.hover?.map((d) => (
                          <p className=" text-black  text-xs">{d.hover}</p>
                        ))}
                      </div>
                      <CiCircleInfo className="font-bold text-lg" />
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {!verMas ? (
            <p
              onClick={() => setVerMas(true)}
              className="text-sm hover:underline hover:cursor-pointer mt-2"
            >
              Ver más
            </p>
          ) : (
            <p
              onClick={() => setVerMas(false)}
              className="text-sm hover:underline hover:cursor-pointer mt-2"
            >
              Ver menos
            </p>
          )}
        </div>
      )}
    </>
  );
}
