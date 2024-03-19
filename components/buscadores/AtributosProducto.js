import React, { useEffect, useState } from "react";

function AtributosProducto(props) {
  const { atributos } = props;
  const [atributosMap, setAtributosMap] = useState([]);

  //////esto se va usar para convertir los tipo string en array en los atributos  /////////////////////////
  // let atributos = "[{Eje:Delantero,Diámetro (mm):Ø13.6 / Ø17.6,Posicion:INFERIOR IZQUIERDA/DERECHA}]" ///
  // const result = JSON.parse(                                                                         ///
  // atributos.replaceAll(", ", ",")                                                                     ///
  //     .replace(/([^,{]+)?:([^,}]+)?/gi, `"$1":"$2"`) // Sorry.                                       ///
  // );                                                                                                 ///
  // console.log(result, "funciono transforme a array")                                                 ///
  //                                                                                                    ///
  /////////////////////////////////////////////////////////////////////////////////////////////////////////

  ///var espart = "[{13075AP,13076AP,VKDS 6422 A,VKDS 6423 A}]"

  /* useEffect(() => {
    const result = JSON.parse(
      atributos
        ?.replaceAll(", ", ",")
        .replace(/([^,{]+)?:([^,}]+)?/gi, `"$1":"$2"`)
    );
    console.log(result, "funciono transforme a array");
    setAtributosMap(result);
  }, [atributos]);

  console.log(atributosMap); */

 // console.log(atributos, "informacion")
  const result = JSON.parse(                                                                         
    atributos?.replaceAll(", ", ",")                                                                    
        .replace(/([^,{]+)?:([^,}]+)?/gi, `"$1":"$2"`)                                        
    ); 
  

  return (
    <>
      {result.map((atributo) => (
        <div className="grid grid-cols-3 space-x-3">
          <div className="space-y-3">
            <div className="bg-amarillo w-full px-10 py-1 ">
              <p className="text-azul font-bold">Diámetro (mm)</p>
            </div>
            <p>20</p>
          </div>
          <div className="space-y-3">
            <div className="bg-amarillo w-full px-10 py-1">
              <p className="text-azul font-bold">Eje</p>
            </div>
            <p>{atributo.Eje} </p>
          </div>
          <div className="space-y-3">
            <div className="bg-amarillo w-full px-10 py-1">
              <p className="text-azul font-bold">Posición</p>
            </div>
            <p>{atributo.Posicion} </p>
          </div>
        </div>
       ))} 
      ,
    </>
  );
}

export default AtributosProducto;
