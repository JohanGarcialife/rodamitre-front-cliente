import React from "react";

export default function Marca(props) {
  const { producto } = props;
  return (
    <div className="flex space-x-4 items-center font-bold">
      <p>{producto?.marca_articulo} </p>
    </div>
  );
}
