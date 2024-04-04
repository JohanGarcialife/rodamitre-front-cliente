import React from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import moment from "moment";
import Contador from "../producto/Contador";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartTotal,
} from "@/features/cartSlice";
import { IoMdCloseCircle } from "react-icons/io";

export default function RowCarrito(props) {
  const { items } = props;
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
  } = items[0];

  const dispatch = useDispatch();

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
      })
    );
  };

  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ pre_id }));
  };

  return (
    <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
      <TableCell className="w-full ">
        <p className="text-black">{moment().format("L LT")} </p>{" "}
      </TableCell>
      <TableCell className="w-full text-center font-bold">
        <p className="text-azul font-bold">{items[0]?.codigo} </p>
      </TableCell>
      <TableCell className="w-full flex justify-center text-center font-bold">
        <p className="text-amarillo font-bold">{items[0]?.marca_articulo} </p>
      </TableCell>
      <TableCell className="w-full text-center">
        <p className="text-black">
          <Contador
            cantidad={items}
            addItemToCart={addItemToCart}
            removeItemFromCart={removeItemFromCart}
          />
        </p>
      </TableCell>
      <TableCell className="w-full flex justify-center font-bold">
        <p className="text-black font-bold">${items[0]?.ppa_precio} </p>
      </TableCell>
      <TableCell className="w-full text-center font-bold">
        <p className="text-black font-bold">${items[0]?.ppa_precio}</p>
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <p className="text-black font-bold">
          ${items.length * items[0]?.ppa_precio.toFixed(2)}
        </p>
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <p className="text-black font-bold">Administrador</p>
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <div
          onClick={() =>
            dispatch(removeFromCart({ pre_id: JSON.parse(pre_id) }))
          }
          className="text-red-700 rounded-full text-2xl p-1 cursor-pointer"
        >
          <IoMdCloseCircle />
        </div>
      </TableCell>
    </TableRowStyled>
  );
}
