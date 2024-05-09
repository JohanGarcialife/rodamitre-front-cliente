import React from "react";

export default function Subtotal(props) {
  const { producto, quantity, valor } = props;

  return (
    <div className="font-bold ">
      ${valor < 0 ? 0 : valor * producto?.ppa_precio.toFixed(2)}
    </div>
  );
}
