import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function Contador(props) {
  const { producto, quantities, setQuantities } = props;

  const handleChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  return (
    <div className="w-full flex justify-center">
      <div className="w-full flex items-center  justify-center space-x-2">
        <div
          className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
          onClick={() =>
            handleQuantityChange(
              producto?.pre_id,
              quantities[producto?.pre_id] - 1
            )
          }
        >
          <FaMinus />
        </div>
        <input
          type="number"
          min="0"
          max="1000"
          value={
            quantities[producto?.pre_id] < 0
              ? 0
              : quantities[producto?.pre_id] || 0
          }
          onChange={(event) => handleChange(producto?.pre_id, event)}
          className="px-2 rounded-md border border-black h-full text-center"
        />
        <div
          className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
          onClick={() =>
            handleQuantityChange(
              producto?.pre_id,
              quantities[producto?.pre_id]
                ? quantities[producto?.pre_id] + 1
                : +1
            )
          }
        >
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
