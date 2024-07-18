import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import Precio from "../producto/Precio";
import ContadorRapida from "../producto/ContadorRapida";
import ProductoInfoE1 from "../producto/ProductoInfoE1";
import MarcaRapida from "../producto/MarcaRapida";
import Aplicaciones from "../producto/Aplicaciones";

export default function RecommendablesRow(props) {
  const {  producto } = props;
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
     
        <>
          <TableCell className="w-full">
           
          <ProductoInfoE1 producto={producto} />
          </TableCell>
          <TableCell className="w-full text-center">
          {producto?.aplicaciones ? (
          <Aplicaciones
            aplicaciones={producto.aplicaciones}
            srubro={producto.rubro}
          />
        ) : null}
          </TableCell>
          <TableCell className="w-full flex justify-center text-center">
             <MarcaRapida producto={producto}  /> 
          </TableCell>
          <TableCell className="w-full text-center">
             <Precio producto={producto} /> 
          </TableCell>
          {/* contador */}
          <TableCell colSpan={3}  className="w-full flex justify-center">
          <div className="w-full flex justify-center">
                 <ContadorRapida
            producto={producto}
          /> 
            </div>
          </TableCell>
        </>
      
    </TableRowStyled>
  
  );
}