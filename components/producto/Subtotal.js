import React from "react";

export default function Subtotal(props) {
  const { producto, valor } = props;

  console.log(producto?.ppa_precio);
  console.log(valor);

  const subtotal = valor < 0 ? 0 : valor * producto?.ppa_precio;

  return <div className="font-bold ">$ {subtotal.toFixed(2)}</div>;
}
