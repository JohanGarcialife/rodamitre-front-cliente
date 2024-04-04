import React from "react";

export default function Pedir(props) {
  const { producto } = props;

  return (
    <div>
      <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
        <p>Pedir</p>
      </div>

      {producto?.pre_stock_actual > 0 && (
        <div className="font-bold text-green-600">
          <p>Disponible</p>
        </div>
      )}

      {producto?.pre_stock_actual === 0 && (
        <div className="font-bold text-red-600">
          <p>Sin Stock</p>
        </div>
      )}
    </div>
  );
}
