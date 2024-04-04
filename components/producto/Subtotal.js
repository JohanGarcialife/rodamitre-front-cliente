import React from "react";

export default function Subtotal(props) {
  const { producto, cantidad } = props;
  return (
    <div className="font-bold ">
      ${cantidad.length * producto?.ppa_precio.toFixed(2)}
    </div>
  );
}
