import React, { useEffect, useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Subtotal from "./Subtotal";
import Pedir from "./Pedir";

export default function Contador(props) {
  const { setQuantity, producto, addItemToCart } = props;

  const [valor, setValor] = useState("0");

  return (
    <div className="flex justify-around items-center w-full h-[100px]">
      <div className="w-full grid grid-cols-3 ">
        <div className=" flex items-center justify-end space-x-2">
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
          <div
            onClick={() => setValor(parseInt(valor) + 1)}
            className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
          >
            <FaPlus />
          </div>
        </div>
        <div className=" flex items-center justify-center space-x-2">
          <Subtotal producto={producto} valor={parseInt(valor)} />
        </div>
        <div className="flex items-center justify-center mr-2">
          <Pedir
            setQuantity={setQuantity}
            producto={producto}
            valor={parseInt(valor)}
            addItemToCart={addItemToCart}
          />
        </div>
      </div>
    </div>
  );
}
