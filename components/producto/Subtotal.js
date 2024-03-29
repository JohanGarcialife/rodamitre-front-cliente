import React from "react";

export default function Subtotal(props) {
  const { producto, quantities } = props;

  return (
    <div className="font-bold ">
      $
      {quantities[producto?.pre_id] <= 0 || !quantities[producto?.pre_id]
        ? 0
        : (quantities[producto?.pre_id] * producto?.ppa_precio).toFixed(2)}
    </div>
  );
}
