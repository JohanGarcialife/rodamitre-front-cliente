import React from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import ProductoInfo from "../producto/ProductoInfo";
import Contador from "../producto/Contador";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from "@/features/cartSlice";
import Pedir from "../producto/Pedir";
import Motor from "../productos/Motor";

export default function RowBuscadorVehiculo2(props) {
  const { rubros, producto, buscar, setBuscar, setBuscador, selectRubro } =
    props;

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
      })
    );
  };

  const removeItemFromCart = () => {
    if (!items.length > 0) return;
    dispatch(removeFromCart({ pre_id }));
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

  console.log(producto, "vehiculo2")

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
                <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
                  <TableCell className="w-full ">
                    <ProductoInfo
                      producto={producto}
                      setBuscar={setBuscar}
                      buscar={buscar}
                      setBuscador={setBuscador}
                    />
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <Motor motor = {producto?.motor}/>
                    {/* <div className="font-black">
                      <p>1.6 16v</p>
                    </div> */}
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <div className="flex space-x-4 items-center text-center font-bold">
                      <Marca producto={producto} />
                    </div>
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <Precio producto={producto} />
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <div className="font-bold ">
                      <p>$ 9.668,68</p>
                    </div>
                  </TableCell>
                  {/* { Contador } */}
                  <TableCell className="w-full flex justify-center">
                    <Contador
                      producto={producto}
                      cantidad={items}
                      addItemToCart={addItemToCart}
                      removeItemFromCart={removeItemFromCart}
                    />
                  </TableCell>
                  <TableCell className="w-full text-center space-y-2">
                    <Pedir producto={producto} />
                  </TableCell>
                </TableRowStyled>
              )}
            </>
          ))}
        </>
      ))}
    </>
  );
}
