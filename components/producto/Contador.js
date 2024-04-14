import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Contador(props) {
  const { quantity, setQuantity, handleAddItem, handleRemoveItem } = props;

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
          {/* <p className="text-black font-bold">{cantidad?.length} </p> */}
          <input
            value={quantity < 0 ? 0 : quantity}
            onChange={(e) => {
              e.target.value === "-"
                ? setQuantity(0)
                : setQuantity(parseInt(e.target.value));
            }}
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
