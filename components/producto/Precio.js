import React from "react";

export default function Precio(props) {
  const { producto } = props;
  return <div className="font-bold">$ {producto?.ppa_precio} </div>;
}
