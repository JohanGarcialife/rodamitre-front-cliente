import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";

export default function RecommendablesRow(props) {
const { eq } = props

  return (
    <div className="flex flex-row gap-8">
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


    </div>
  )
}
