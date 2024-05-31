import React from "react";

export default function Marca(props) {
  const { producto } = props;
  return (
    <div className="h-[100px] flex items-center space-x-4  text-center justify-center font-bold">
      <p>{producto?.marca_articulo} </p>
    </div>
  );
}
