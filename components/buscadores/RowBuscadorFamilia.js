import React, { useState, useEffect } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import ProductoInfo from "../producto/ProductoInfo";
import Aplicaciones from "../producto/Aplicaciones";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import Contador from "../producto/Contador";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemsWithId } from "@/features/cartSlice";

export default function RowBuscadorFamilia(props) {
  const { producto } = props;
  const [equivalencia, setequivalencia] = useState();

  useEffect(() => {
    if (producto?.equivalente) {
      const jsonObject = JSON.parse(producto?.equivalente);
      const equi = jsonObject.map((item) => {
        return item;
      });
      setequivalencia(equi);
    }
  }, [producto?.equivalente]);

  console.log(producto?.equivalente, "equivalencia");

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

  const handleAddItem = () => {
    setQuantity(e.target.value + 1);
  };

  const handleRemoveItem = () => {
    setQuantity(e.target.value - 1);
    if (!quantity > 0) return;
  };

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
  return (
    <>
      <TableRowStyled
        key={producto?.pre_id}
        className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
      >
        <TableCell className="w-full">
          <ProductoInfo producto={producto} equi={equivalencia} />
        </TableCell>
        <TableCell className="w-full text-center">
          {producto?.aplicaciones ? (
            <Aplicaciones
              aplicaciones={producto.aplicaciones}
              srubro={producto.rubro}
            />
          ) : null}
        </TableCell>
        <TableCell className="w-full flex justify-center  text-center">
          <Marca producto={producto} />
          {equivalencia?.map((e) => (
            <>
              {e?.codigo === producto?.codigo ? null : (
                <div className="">
                  {equivalencia && <Marca producto={e} codiE={e} />}
                </div>
              )}
            </>
          ))}
        </TableCell>
        <TableCell className="w-full text-center ">
          <div>
            <Precio producto={producto} />
            {equivalencia?.map((e) => (
              <>
                {e?.codigo === producto?.codigo ? null : (
                  <div className="">
                    {equivalencia && <Precio producto={e} />}
                  </div>
                )}
              </>
            ))}
          </div>
        </TableCell>
        {/* contador */}
        <TableCell colSpan={3} className="w-full  flex justify-center">
          <div className="w-full flex h-[100px] items-center justify-around">
            <Contador
              producto={producto}
              quantity={quantity}
              setQuantity={setQuantity}
              handleAddItem={handleAddItem}
              handleRemoveItem={handleRemoveItem}
              addItemToCart={addItemToCart}
            />
          </div>
          {equivalencia?.map((e) => (
            <>
              {e?.codigo === producto?.codigo ? null : (
                <div className="w-full flex h-[100px] items-center justify-around ">
                  {equivalencia && (
                    <Contador
                      producto={e}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddItem={handleAddItem}
                      handleRemoveItem={handleRemoveItem}
                      addItemToCart={addItemToCart}
                    />
                  )}
                </div>
              )}
            </>
          ))}
        </TableCell>
      </TableRowStyled>
    </>
  );
}
