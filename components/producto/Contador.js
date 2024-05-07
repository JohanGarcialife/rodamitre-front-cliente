import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Contador(props) {
  const { quantity, setQuantity, handleAddItem, handleRemoveItem, producto } =
    props;
  const [valor, setValor] = useState(0);
  const newQuantity = setQuantity(valor);
  console.log(valor);

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex items-center  justify-center space-x-2">
        {quantity <= 0 ? (
          <div className="text-amarillo p-1 bg-gray-500 rounded-md ">
            <FaMinus />
          </div>
        ) : (
          <div
            onClick={handleRemoveItem}
            className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
          >
            <FaMinus />
          </div>
        )}
        <div className="bg-white border flex justify-center border-black rounded-md py-1 px-2">
          <input
            type="number"
            min={0}
            max={5000}
            onChange={(e) => {
              setValor(e.target.value);
            }}
            // value={quantity < 0 ? 0 : quantity}
            className="text-black text-center font-bold"
          />
        </div>
        <div
          onClick={handleAddItem}
          className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
