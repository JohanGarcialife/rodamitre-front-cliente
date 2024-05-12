import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import ProductoInfo from "../producto/ProductoInfo";
import Contador from "../producto/Contador";

export default function RecommendablesRow(props) {
const { eq } = props

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
     // key={producto?.pre_id}
      className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
    >
      <TableCell className="w-full">
         <ProductoInfo producto={eq} /> 
      </TableCell>
      <TableCell className="w-full text-center">
       {/*  {producto?.aplicaciones ? (
          <Aplicaciones
            aplicaciones={producto.aplicaciones}
            srubro={producto.rubro}
          />
        ) : null} */}
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
           /*  quantity={quantity}
            setQuantity={setQuantity}
            handleAddItem={handleAddItem}
            handleRemoveItem={handleRemoveItem}
            addItemToCart={addItemToCart} */
          />
        </div>
      </TableCell> 
     
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
  )
}
