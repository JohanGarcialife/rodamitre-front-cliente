import React from "react";

export default function Marca(props) {
  const { producto, codiE } = props;
  return (
    <div className="h-[100px] flex flex-col items-start  text-left  justify-center font-bold">
      <p>{producto?.marca_articulo} </p>
      {codiE && (
        <div className="text-left">
          <p>{codiE.codigo}</p>
        </div>
      )}
    </div>
  );
}
