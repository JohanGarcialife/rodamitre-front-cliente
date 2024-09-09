import React, { useState } from "react";
import styled from "@emotion/styled";
import { TableCell, TableRow } from "@mui/material";
import { IoIosArrowDown } from "react-icons/io";

export default function RowGarantía(props) {
  const { garantia } = props;
  const {
    ARTICULO,
    CLIENTE,
    CLI_ID,
    CODIGO_ARTICULO,
    CODIGO_CLIENTE,
    ESTADO,
    FECHA,
    FECHA_DEVOLUCION_CLIENTE,
    FECHA_ENTREGA_PROVEEDOR,
    FECHA_EXPEDICION_PROVEEDOR,
    FECHA_RECEPCION,
    NUMERO,
    PRE_ID,
  } = garantia;

  const [showTracking, setShowTracking] = useState(false);

  console.log(garantia);

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
      <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
        <TableCell className="w-full text-center">
          <div className="font-bold text-lg">{NUMERO}</div>
          {showTracking ? (
            <div className="font-bold mt-10 mb-5 flex flex-col justify-center items-center space-y-5">
              <div className="bg-amarillo rounded-full py-5 px-7 w-fit text-white">
                <p className="text-2xl">1</p>
              </div>
              <p className="text-lg uppercase">creado</p>
              <p className="font-normal text-lg">{FECHA}</p>
            </div>
          ) : null}
        </TableCell>
        <TableCell className="w-full text-center">
          <div className="font-bold text-lg">{FECHA}</div>
          {showTracking ? (
            <div className="font-bold mt-10 mb-5 flex flex-col justify-center items-center space-y-5">
              <div className="bg-amarillo rounded-full py-5 px-7 w-fit text-white">
                <p className="text-2xl">2</p>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <div className="space-y-2 flex flex-col items-center justify-center">
                  <p className="text-lg uppercase">recibido</p>
                  <p className="font-normal text-lg">{FECHA_RECEPCION}</p>
                </div>
              </div>
            </div>
          ) : null}
        </TableCell>
        <TableCell className="w-full text-center">
          <div className="font-bold text-lg">{ARTICULO}</div>
          {showTracking ? (
            <div className="font-bold mt-10 mb-5 flex flex-col justify-center items-center space-y-5">
              <div className="bg-amarillo rounded-full py-5 px-7 w-fit text-white ">
                <p className="text-2xl">3</p>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <p className="text-lg uppercase">en proveedor</p>
                <p className="font-normal text-lg">
                  {FECHA_EXPEDICION_PROVEEDOR}
                </p>
              </div>
            </div>
          ) : null}
        </TableCell>
        <TableCell className="w-full text-center">
          <div className="font-bold text-lg">1</div>
          {showTracking ? (
            <div className="font-bold mt-10 mb-5 flex flex-col justify-center items-center space-y-5">
              <div className="bg-amarillo rounded-full py-5 px-7 w-fit text-white">
                <p className="text-2xl">4</p>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <p className="text-lg uppercase">retorno proveedor</p>
                <p className="font-normal text-lg">{FECHA_ENTREGA_PROVEEDOR}</p>
              </div>
            </div>
          ) : null}
        </TableCell>
        <TableCell className="w-full flex justify-center">
          <div
            onClick={() => setShowTracking(!showTracking)}
            className="font-bold text-lg cursor-pointer flex justify-center items-center"
          >
            <p className="hover:border-b-2 hover:border-amarillo">VER</p>
            <IoIosArrowDown className="text-black text-xl 2xl:text-2xl font-bold " />
          </div>
          {showTracking ? (
            <div className="font-bold mt-10 mb-5 flex flex-col justify-center items-center space-y-5">
              <div className="bg-amarillo rounded-full py-5 px-7 w-fit text-white">
                <p className="text-2xl">5</p>
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center">
                <p className="text-lg uppercase">devolución</p>
                <p className="font-normal text-lg">
                  {FECHA_DEVOLUCION_CLIENTE}
                </p>
              </div>
            </div>
          ) : null}
        </TableCell>
      </TableRowStyled>
    </>
  );
}
