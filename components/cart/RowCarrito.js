import React, { useEffect, useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import moment from "moment";
import Contador from "../producto/Contador";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/features/cartSlice";
import { IoMdCloseCircle } from "react-icons/io";
import Subtotal from "../producto/Subtotal";
import ContadorCarrito from "./ContadorCarrito";

export default function RowCarrito(props) {
  const { items, setNewTotalCarrito, newTotalCarrito, productos } = props;
  const [quantity, setQuantity] = useState(items.valor);

  const { pre_id, valor } = items;
  console.log(productos);

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

  const removeItemFromCart = () => {
    console.log(items?.codigo);
    if (!items.length > 0) return;
    dispatch(removeFromCart({ codigo }));
    setNewTotalCarrito(newTotalCarrito - items.ppa_precio * items.quantity);
  };

  return (
    <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
      <TableCell className="w-full ">
        <p className="text-black">{moment().format("L HH:mm")}hs </p>{" "}
      </TableCell>
      <TableCell className="w-full text-center font-bold">
        <p className="text-azul font-bold">{items?.codigo} </p>
      </TableCell>
      <TableCell className="w-full flex justify-center text-center font-bold">
        <p className="text-amarillo font-bold">{items?.marca_articulo} </p>
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

          {valor}
        </p>
      </TableCell>
      <TableCell className="w-full flex justify-center font-bold">
        <p className="text-black font-bold">${items?.ppa_precio} </p>
      </TableCell>
      <TableCell className="w-full text-center font-bold">
        <p className="text-black font-bold">${items?.ppa_precio}</p>
      </TableCell>
      <TableCell className="w-full text-center space-y-2">
        <p className="text-black font-bold">
          <Subtotal producto={items} valor={items?.valor} />
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
