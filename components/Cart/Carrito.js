import React from "react";

export default function Carrito(props) {
  const { items } = props;
  return (
    <div>
      {!items.length > 0 ? (
        <div className="w-28 flex justify-center text-center">
          <p className="text-black">Aún no has añadido productos al carrito.</p>
        </div>
      ) : (
        <div className="w-48 flex justify-center text-center">
          <p>Carrito</p>
        </div>
      )}
    </div>
  );
}
