import React from "react";

export default function Subtotal(props) {
  const { producto, quantity } = props;
  return (
    <div className="font-bold ">
      ${quantity < 0 ? 0 : quantity * producto?.ppa_precio.toFixed(2)}
    </div>
  );
}
