import React from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";

import RowVehiculo from "./RowVehiculo";

export default function RowBuscadorVehiculo(props) {
  const { rubros, producto, setEje } = props;
  ///console.log(producto, "info")
  
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
 /// console.log("vehiculo 1")

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
                <RowVehiculo producto={producto} r = {rubro} setEje={setEje}  />
              )}
            </>
          ))}
        </>
      ))}
      ;
    </>
  );
}
