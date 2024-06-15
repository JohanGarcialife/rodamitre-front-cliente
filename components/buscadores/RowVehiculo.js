import React, { useState, useEffect } from "react";
import { TableCell, TableRow } from "@mui/material";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartItemsWithId } from "@/features/cartSlice";
import ProductoInfo from "../producto/ProductoInfo";
import Marca from "../producto/Marca";
import Precio from "../producto/Precio";
import Motor from "../productos/Motor";
import ContadorVehiculo from "../producto/ContadorVehiculo";

export default function RowVehiculo(props) {
  const { producto, r , setEje} = props;
  const [quantity, setQuantity] = useState(0);
  const [equivalencia, setEquivalencia] = useState();
  ///const array = JSON.parse(atributos);

  ///console.log(producto)
  if (r?.label && producto?.dt && producto?.eje) {
    setEje(true)
  } else {
    setEje(false)
  }

  useEffect(() => {
    if (producto?.equivalente) {
      const jsonObject = JSON.parse(producto?.equivalente);
      const equi = jsonObject.map((item) => {
        return item;
      });
      setEquivalencia(equi);
    }
  }, [producto?.equivalente]);

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

  const dispatch = useDispatch();

  const handleAddItem = () => {
    setQuantity(quantity + 1);
  };

  const handleRemoveItem = () => {
    setQuantity(quantity - 1);
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
    <TableRowStyled
      key={producto?.pre_id}
      className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
    >
      <TableCell className="w-full text-center">
        <ProductoInfo producto={producto} equi={equivalencia} />
      </TableCell>
      <TableCell className="w-full">
        <Motor motor={producto?.motor} />
      </TableCell>
      <TableCell className="w-full text-center">
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
      <TableCell className="w-full text-center">
        <div className="font-bold ">
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
      <TableCell className="w-full text-center">
        <div className="font-bold flex h-[100px] items-center justify-start ">
          <p>$ 9.668,68</p>
        </div>

        {equivalencia?.map((e) => (
          <>
            {e?.codigo === producto?.codigo ? null : (
              <div className="font-bold flex h-[100px] items-center justify-start ">
                <p>$ 9.668,68</p>
              </div>
            )}
          </>
        ))}
      </TableCell>

      <TableCell colSpan={2} className="w-full flex justify-center">
        <ContadorVehiculo
          producto={producto}
          quantity={quantity}
          setQuantity={setQuantity}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
        />
        {equivalencia?.map((e) => (
          <>
            {e?.codigo === producto?.codigo ? null : (
              <div className="w-full flex h-[100px] items-center justify-around ">
                {equivalencia && (
                  <ContadorVehiculo
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
  );
}
