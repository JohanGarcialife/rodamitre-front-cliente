import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";
import useAuth from "@/hooks/useAuth";
import { garantiasApi } from "@/pages/api/reclamoGarantias";
import RowGarantía from "./RowGarantía";

export default function Garantia() {
  const { auth, setReloadUser } = useAuth();
  const [garant, setGarant] = useState();

  useEffect(() => {
    (async () => {
      const response = await garantiasApi(auth.CLI_ID);
      setGarant(response);
    })();
  }, []);

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
            {garant?.map((garantia) => (
              <RowGarantía garantia={garantia} />
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
