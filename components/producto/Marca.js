import React from "react";

export default function Marca(props) {
  const { producto, codiE } = props;
  return (
    <div className="h-[100px] flex flex-col items-center  text-center justify-center font-bold">
      <p>{producto?.marca_articulo} </p>
      {codiE && (
        <div className="items-center   text-center justify-center  ">
          <p>{codiE.codigo}</p>
        </div>
      ) }
    </div>
  );
}
