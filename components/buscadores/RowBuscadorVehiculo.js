import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import ProductoInfo from "../producto/ProductoInfo";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemsWithId } from "@/features/cartSlice";
import Motor from "../productos/Motor";
import Pedir from "../producto/Pedir";
import ContadorVehiculo from "../producto/ContadorVehiculo";

export default function RowBuscadorVehiculo(props) {
  const { rubros, producto } = props;
  const [quantity, setQuantity] = useState(0);

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

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    setQuantity(quantity - 1);
    if (!quantity > 0) return;
  };

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
        quantity,
      })
    );
  };

  const TableRowStyled = styled(TableRow)`
    &:nth-of-type(odd) {
      background-color: #e8e8ff;
    }
    &:nth-of-type(even) {
      background-color: #f5f5f5;
    }
    & td,
    th {
      width: fit-content;
      text-align: center;
    }
  `;

  return (
    <>
      {rubros?.map((rubro) => (
        <>
          <TableRowStyled className="w-full">
            <TableCell colSpan={7}>
              <div className="border-b border-black text-center w-full flex justify-center">
                <p className="text-3xl text-black font-bold border-b-4 border-amarillo w-fit px-4">
                  {rubro.label}
                </p>
              </div>
            </TableCell>
          </TableRowStyled>

          {producto?.map((producto) => (
            <>
              {producto.rubro === rubro.label && (
                <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
                  <TableCell className="w-full text-center">
                    <ProductoInfo producto={producto} />
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <Motor motor={producto?.motor} />

                    {/*  <div className="font-black">
                      <p>1.6 16v</p>
                    </div> */}
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <Marca producto={producto} />
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <div className="font-bold ">
                      <Precio producto={producto} />
                    </div>
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <div className="font-bold ">
                      <p>$ 9.668,68</p>
                    </div>
                  </TableCell>
                  {/* Contador */}
                  <TableCell colSpan={2} className="w-full flex justify-center">
                    <ContadorVehiculo
                      producto={producto}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddItem={handleAddItem}
                      handleRemoveItem={handleRemoveItem}
                    />
                  </TableCell>
                  {/* <TableCell className="w-full text-center space-y-2">
                    <Pedir producto={producto} addItemToCart={addItemToCart} />
                  </TableCell> */}
                </TableRowStyled>
              )}
            </>
          ))}
        </>
      ))}
      ;
    </>
  );
}
