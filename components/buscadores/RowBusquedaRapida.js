import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import ProductoInfo from "../producto/ProductoInfo";
import ProductoInfoE from "../producto/ProductoInfoE";
import Aplicaciones from "../producto/Aplicaciones";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import ContadorRapida from "../producto/ContadorRapida";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemsWithId } from "@/features/cartSlice";
import MarcaRapida from "../producto/MarcaRapida";

export default function RowBusquedaRapida(props) {
  const { producto, productos, equivalente } = props;

  const {
    atributos,
    codigo,
    comentarios,
    descuento_marca,
    descuento_producto,
    descuento_rubro,
    es_parte_de,
    formado_por,
    intercambiables,
    mar_id,
    marca_articulo,
    notas,
    ppa_precio,
    pre_id,
    pre_stock_actual,
    rubro,
    rup_id,
    spr_id,
    super_rubro,
  } = producto;
  const [quantity, setQuantity] = useState(0);

  const items = useSelector((state) => selectCartItemsWithId(state, pre_id));

  const dispatch = useDispatch();

  const addItemToCart = () => {
    dispatch(
      addToCart({
        atributos,
        codigo,
        comentarios,
        descuento_marca,
        descuento_producto,
        descuento_rubro,
        es_parte_de,
        formado_por,
        intercambiables,
        mar_id,
        marca_articulo,
        notas,
        ppa_precio,
        pre_id,
        pre_stock_actual,
        rubro,
        rup_id,
        spr_id,
        super_rubro,
        quantity,
      })
    );
  };
  

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

  const TableRowStyled2 = styled(TableRow)`
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
    <>
    
    
    < TableRowStyled
      key={producto?.pre_id}
      className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
    >
      {producto?.pre_id === productos?.[0].pre_id ? "" : <>
      <TableCell className="w-full">
        <ProductoInfoE producto={producto} />
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
        <MarcaRapida producto={producto} />
      </TableCell>
      <TableCell className="w-full text-center">
        <Precio producto={producto} />
      </TableCell>
      {/* contador */}
      <TableCell colSpan={3} className="w-full flex justify-center">
        <div className="w-full flex justify-center">
          <ContadorRapida
            producto={producto}
            addItemToCart={addItemToCart}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </div>
      </TableCell>
      
      </>


      }
      
    </TableRowStyled>
    
    </>

  );
}
