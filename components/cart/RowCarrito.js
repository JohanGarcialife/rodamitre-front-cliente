import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import moment from "moment";
import { useDispatch } from "react-redux";
import { removeFromCart } from "@/features/cartSlice";
import { IoMdCloseCircle } from "react-icons/io";
import Subtotal from "../producto/Subtotal";
import ContadorCarrito from "./ContadorCarrito";

export default function RowCarrito(props) {
  const { items } = props;

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

  let quantity = 0;

  items.forEach(cantidad);

  function cantidad(item) {
    quantity += item.valor;
  }

  const removeItemFromCart = () => {
    const pre_id = items[0].pre_id;
    if (!items.length > 0) return;
    dispatch(removeFromCart({ pre_id }));
  };

  return (
    <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
      <TableCell className="w-full ">
        <p className="text-black">{moment().format("L HH:mm")}hs </p>{" "}
      </TableCell>
      <TableCell className="w-full text-center font-bold">
        <p className="text-azul font-bold">{items[0]?.codigo} </p>
      </TableCell>
      <TableCell className="w-full flex justify-center text-center font-bold">
        <p className="text-amarillo font-bold">{items[0]?.marca_articulo} </p>
      </TableCell>
      <TableCell className="w-full text-center">
        <p className="text-black font-bold">
          {/* <ContadorCarrito
            producto={items}
            quantity={valor}
            setQuantity={setQuantity}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
          /> */}

          {quantity}
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
          <Subtotal producto={items[0]} valor={quantity} />
        </p>
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <p className="text-black font-bold">Administrador</p>
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <div
          onClick={() => dispatch(removeItemFromCart)}
          className="text-red-700 rounded-full text-2xl p-1 cursor-pointer"
        >
          <IoMdCloseCircle />
        </div>
      </TableCell>
    </TableRowStyled>
  );
}
