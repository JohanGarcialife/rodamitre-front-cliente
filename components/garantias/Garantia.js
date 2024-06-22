import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import styled from "@emotion/styled";

export default function Garantia() {
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
      <div className=" pt-[200px] xl:pt-[245px] pb-24 bg-white">
        <div className="border-b-2 border-gris flex justify-center items-center mb-5 mt-2">
          <p className="text-black text-4xl border-b-4 border-amarillo">
            Seguimiento de Garantía
          </p>
        </div>
        <Table>
          <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
            <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  NRO DE RECLAMO
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  FECHA GENERACIÓN
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  PRODUCTO
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  UNIDADES
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  TRACKING PEDIDO
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
              <TableCell className="w-full text-center">
                <div className="font-black">Reclamo</div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-black">Fecha</div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-black">Producto</div>
              </TableCell>
              <TableCell className="w-full text-center">
                <div className="font-black">Cantidad</div>
              </TableCell>
              <TableCell className="w-full flex justify-center">
                <div className="font-black">Tracking</div>
              </TableCell>
            </TableRowStyled>
          </TableBody>
        </Table>
      </div>
    </>
  );
}
