import React from "react";

export default function Precio(props) {
  const { producto } = props;

  const precio = producto?.ppa_precio?.toFixed(2);
  return <div className="font-bold flex space-x-4 items-center text-center justify-center h-[100px] ">$ {precio} </div>;
}
