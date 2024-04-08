import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Contador(props) {
  const { cantidad, addItemToCart, removeItemFromCart } = props;

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex items-center  justify-center space-x-2">
        <div
          onClick={removeItemFromCart}
          className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
        >
          <FaMinus />
        </div>
        <div className="bg-white border flex justify-center border-black rounded-md py-1 px-2">
          {/* <p className="text-black font-bold">{cantidad?.length} </p> */}
          <input
            type="number"
            value={cantidad?.length}
            //onChange={}
            className="text-black text-center font-bold"
          />
        </div>
        <div
          onClick={addItemToCart}
          className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
