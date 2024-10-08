import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

import Pedir from "./Pedir";

export default function ContadorVehiculo(props) {
  const {
    quantity,
    setQuantity,
    handleAddItem,
    handleRemoveItem,
    producto,
    addItemToCart,
  } = props;
  const [valor, setValor] = useState("0");

  return (
    <div className="w-full flex items-center justify-around xl:justify-between xl:px-5 h-[100px]">
      <div className=" flex items-center justify-center space-x-2">
        {valor <= 0 ? (
          <button className="text-amarillo p-1 bg-gray-500 rounded-md ">
            <FaMinus />
          </button>
        ) : (
          <button
            onClick={() => setValor(parseInt(valor) - 1)}
            className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
          >
            <FaMinus />
          </button>
        )}
        <div className="bg-white border flex justify-center border-black rounded-md py-1 px-2">
          <input
            type="number"
            min={0}
            max={5000}
            onChange={(e) => {
              e.target.value === "" ? setValor(0) : setValor(e.target.value);
            }}
            value={valor === "" ? 0 : valor}
            className="text-black text-center font-bold"
          />
        </div>
        <button
          onClick={() => setValor(parseInt(valor) + 1)}
          className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
        >
          <FaPlus />
        </button>
      </div>
      <div className="">
        <Pedir
          quantity={valor}
          setQuantity={setQuantity}
          producto={producto}
          valor={parseInt(valor)}
          addItemToCart={addItemToCart}
        />
      </div>
    </div>
  );
}
