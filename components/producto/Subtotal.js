import React from "react";

export default function Subtotal(props) {
  const { producto, valor } = props;

  const subtotal = valor < 0 ? 0 : valor * producto?.ppa_precio?.toFixed(2);

  return <div className="font-bold ">$ {subtotal.toFixed(2)}</div>;
}
