import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "@/features/cartSlice";

export default function Pedir(props) {
  const { producto, quantity, valor } = props;
  const [pedir, setPedir] = useState(false);
  const {
    atributos,
    codigo,
    comentarios,
    descuento_marca,
    descuento_producto,
    descuento_rubro,
    es_parte_de,
    formado_por,
    intercambiables,
    mar_id,
    marca_articulo,
    notas,
    ppa_precio,
    pre_id,
    pre_stock_actual,
    rubro,
    rup_id,
    spr_id,
    super_rubro,
  } = producto;

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      addToCart({
        atributos,
        codigo,
        comentarios,
        descuento_marca,
        descuento_producto,
        descuento_rubro,
        es_parte_de,
        formado_por,
        intercambiables,
        mar_id,
        marca_articulo,
        notas,
        ppa_precio,
        pre_id,
        pre_stock_actual,
        rubro,
        rup_id,
        spr_id,
        super_rubro,
        valor,
      })
    );
  };

  return (
    <div>
      {quantity > 0 ? (
        <div
          onClick={addItemToCart}
          className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo"
        >
          <p>Pedir</p>
        </div>
      ) : (
        <div className="py-1 px-2 bg-gray-700  rounded-sm cursor-pointer font-bold text-white">
          <p>Pedir</p>
        </div>
      )}

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
