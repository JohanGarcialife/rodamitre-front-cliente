import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import ProductoInfo from "../producto/ProductoInfo";
import Contador from "../producto/Contador";

export default function RecommendablesRow(props) {
  const { eq, producto } = props;
  console.log(eq);
  console.log(producto);

  const TableRowStyled = styled(TableRow)`

    &:nth-of-type(odd) {
      background-color: #f5f5f5;
    }
    &:nth-of-type(even) {
      background-color: #f5f5f5;
    }
    & td,
    th {
      width: fit-content;
      text-align: center;
      border: hidden
    }
  `;

  return (
    <TableRowStyled
      // key={producto?.pre_id}
      className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
    >
      {producto?.codigo === eq.codigo ? null : (
        <>
          <TableCell className="w-full">
           
          </TableCell>
          <TableCell className="w-full text-center">
          <ProductoInfo producto={eq} />
          </TableCell>
          <TableCell className="w-full flex justify-center text-center">
            <Marca producto={eq} />
          </TableCell>
          <TableCell className="w-full text-center">
            <Precio producto={eq} />
          </TableCell>
          {/* contador */}
          <TableCell colSpan={3} className="w-full flex justify-center">
            <div className="w-full flex justify-center">
                <Contador
            producto={eq}
            /* quantity={quantity}
            setQuantity={setQuantity}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            addItemToCart={addItemToCart} */
          />
            </div>
          </TableCell>
        </>
      )}
    </TableRowStyled>
    /*  <div className="flex flex-row gap-8">
        <text>
            Imagen producto
        </text>

    <text>
    {eq.PRE_CODIGO_FABRICA}
  </text>
  <text>
    {eq.MAR_DESCRIPCION}
  </text>
  <text>
    {eq.PPA_PRECIO}
  </text>


    </div> */
  );
}
