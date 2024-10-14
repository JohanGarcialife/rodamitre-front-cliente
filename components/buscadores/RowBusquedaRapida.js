import React, { useState } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import ProductoInfoE from "../producto/ProductoInfoE";
import Aplicaciones from "../producto/Aplicaciones";
import Precio from "../producto/Precio";
import ContadorRapida from "../producto/ContadorRapida";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemsWithId } from "@/features/cartSlice";
import MarcaRapida from "../producto/MarcaRapida";

export default function RowBusquedaRapida(props) {
  const { producto } = props;

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
      border: hidden;
    }
  `;

  const jsonObject = JSON?.parse(producto?.todo);
  const array = jsonObject?.map((item) => {
    return item;
  });

  const jsonO = JSON?.parse(producto?.c);
  const com = jsonO?.map((item) => {
    return item;
  });


  /* console.log(com, "veo")
  console.log(producto) */

  return (
    <>
      <TableRowStyled
        key={producto?.pre_id}
        className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
      >
        <>
          <TableCell className="w-full">
            <ProductoInfoE producto={array?.[0]} equi={array} c={com} atributos = {producto}  />
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
            {array?.map((e) => (
              <div className="">
                <MarcaRapida producto={e} c={com} prod={array[0]} />
              </div>
            ))}
          </TableCell>
          <TableCell className="w-full text-center">
            {array?.map((e) => (
              <div className="">
                <Precio producto={e} />
              </div>
            ))}
          </TableCell>
          {/* contador */}
          <TableCell colSpan={3} className="w-full flex justify-center">
            {array?.map((e) => (
              <>
                <div className="w-full flex h-[100px] items-center justify-around ">
                  <ContadorRapida
                    producto={e}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    /*  handleAddItem={handleAddItem}
                      handleRemoveItem={handleRemoveItem} */
                    addItemToCart={addItemToCart}
                  />
                </div>
              </>
            ))}
          </TableCell>
        </>
      </TableRowStyled>
    </>
  );
}
