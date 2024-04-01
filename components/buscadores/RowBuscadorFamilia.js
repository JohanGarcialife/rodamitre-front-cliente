import React from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import ProductoInfo from "../producto/ProductoInfo";
import Aplicaciones from "../producto/Aplicaciones";
import Subtotal from "../producto/Subtotal";
import Marca from "../producto/Marca";
import Pedir from "../producto/Pedir";
import Precio from "../producto/Precio";
import Contador from "../producto/Contador";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "@/features/cartSlice";

export default function RowBuscadorFamilia(props) {
  const { producto, comparacion } = props;
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

  const items = useSelector((state) => selectCartItemsWithId(state, pre_id));

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
      })
    );
  };

  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ pre_id }));
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
    <TableRowStyled
      key={producto?.pre_id}
      className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
    >
      <TableCell className="w-full ">
        <ProductoInfo producto={producto} />
      </TableCell>
      <TableCell className="w-full text-center">
        <Aplicaciones comparacion={comparacion} producto={producto} />
      </TableCell>
      <TableCell className="w-full flex justify-center text-center">
        <Marca producto={producto} />
      </TableCell>
      <TableCell className="w-full text-center">
        <Precio producto={producto} />
      </TableCell>
      {/* contador */}
      <TableCell className="w-full flex justify-center">
        <Contador
          producto={producto}
          cantidad={items}
          addItemToCart={addItemToCart}
          removeItemFromCart={removeItemFromCart}
        />
      </TableCell>
      <TableCell className="w-full text-center">
        <Subtotal producto={producto} cantidad={items} />
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <Pedir producto={producto} />
      </TableCell>
    </TableRowStyled>
  );
}
