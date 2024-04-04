import React, { useEffect, useState } from "react";
import { removeFromCart, selectCartTotal } from "@/features/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { IoMdCloseCircle } from "react-icons/io";

export default function CarritoPopUp(props) {
  const { items, setBuscador } = props;
  const [itemsAgrupadosEnCarrito, setItemsAgrupadosEnCarrito] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const itemsAgrupados = items.reduce((results, item) => {
      (results[item.pre_id] = results[item.pre_id] || []).push(item);
      return results;
    }, {});

    setItemsAgrupadosEnCarrito(itemsAgrupados);
  }, [items]);

  const totalCarrito = useSelector(selectCartTotal);

  return (
    <div className="font-montserrat">
      {!items.length > 0 ? (
        <div className="w-28 flex justify-center text-center">
          <p className="text-black">Aún no has añadido productos al carrito.</p>
        </div>
      ) : (
        <div className="w-80 flex flex-col items-center justify-center text-center space-y-2">
          <div className="space-y-2 max-h-80  overflow-y-scroll">
            {Object.entries(itemsAgrupadosEnCarrito).map(([key, items]) => (
              <div
                className="flex items-center space-x-4 p-2 border border-gris-medio rounded-md bg-[#e8e8ff] "
                key={key}
              >
                <div className=" flex items-center space-x-2 px-2">
                  <p className="text-black font-bold"> {items.length}</p>
                  <p className="text-black font-bold">x</p>
                </div>
                <Image
                  src="/VKPC-85097_1_SKF.jpg"
                  height={75}
                  width={75}
                  alt="Imagen"
                  className="mr-2"
                />
                <div className="flex flex-col items-center justify-center w-full">
                  <p className="text-black font-bold">{items[0]?.codigo} </p>
                  <p className="text-amarillo text-sm font-bold">
                    {items[0]?.marca_articulo}{" "}
                  </p>
                  <p className="text-azul font-bold">
                    ${items.length * items[0]?.ppa_precio?.toFixed(2)}
                  </p>
                </div>
                <div
                  onClick={() =>
                    dispatch(removeFromCart({ pre_id: JSON.parse(key) }))
                  }
                  className="text-red-700 rounded-full text-2xl p-1 cursor-pointer"
                >
                  <IoMdCloseCircle />
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-black font-bold">Subtotal: </p>
            <p className="text-azul font-bold"> ${totalCarrito.toFixed(2)} </p>
          </div>
          <button
            onClick={() => setBuscador("Cart")}
            className="bg-azul rounded-lg py-2 px-4 text-white font-bold"
          >
            Ir al carrito
          </button>
        </div>
      )}
    </div>
  );
}
