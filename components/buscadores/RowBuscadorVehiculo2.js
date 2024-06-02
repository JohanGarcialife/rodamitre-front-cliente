import React, { useState, useEffect } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import RowVehiculo from "./RowVehiculo";

export default function RowBuscadorVehiculo2(props) {
  const { producto, selectRubro } = props;
  

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
      {selectRubro?.map((rubro) => (
        <>
          <TableRowStyled className="w-full">
            <TableCell colSpan={7}>
              <div className="border-b border-black text-center w-full flex justify-center">
                <p className="text-3xl text-black font-bold border-b-4 border-amarillo w-fit px-4">
                  {rubro.rup_descripcion}
                </p>
              </div>
            </TableCell>
          </TableRowStyled>
          {producto?.map((producto) => (
            <>
              {rubro.rup_descripcion === producto.rubro && (
                <RowVehiculo producto={producto} />
              )}
            </>
          ))}
        </>
      ))}
    </>
  );
}
