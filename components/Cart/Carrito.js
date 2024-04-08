import React, { useEffect, useState } from "react";
import { selectCartItems, selectCartTotal } from "@/features/cartSlice";
import { useSelector } from "react-redux";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import { FiSend } from "react-icons/fi";
import RowCarrito from "./RowCarrito";

export default function Carrito() {
  const items = useSelector(selectCartItems);
  const [itemsAgrupadosEnCarrito, setItemsAgrupadosEnCarrito] = useState([]);

  const totalCarrito = useSelector(selectCartTotal);

  useEffect(() => {
    const itemsAgrupados = items.reduce((results, item) => {
      (results[item.pre_id] = results[item.pre_id] || []).push(item);
      return results;
    }, {});

    setItemsAgrupadosEnCarrito(itemsAgrupados);
  }, [items]);

  return (
    <>
      {items.length === 0 ? (
        <div className="w-full flex justify-center items-center">
          <p className="text-azul font-bold text-montserrat text-2xl">
            No hay productos en el carrito.
          </p>
        </div>
      ) : (
        <div className="font-montserrat px-2">
          <Table>
            <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
              <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    FECHA
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    ARTÍCULO
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    MARCA
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    CANTIDAD
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    LISTA
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    NETO
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    SUBTOTAL
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    PEDIDO POR
                  </div>
                </TableCell>
                <TableCell>{""}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className="bg-white">
              {Object.entries(itemsAgrupadosEnCarrito).map(([key, items]) => (
                <RowCarrito
                  items={items}
                  itemsAgrupadosEnCarrito={itemsAgrupadosEnCarrito}
                />
              ))}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell></TableCell>
                <TableCell colSpan={5}>
                  <p className="text-azul text-lg font-bold">
                    DTO. 5% POR PAGO A 30 DÍAS FECHA DE FACTURA
                  </p>
                </TableCell>

                <TableCell>
                  <div className="font-bold text-azul text-lg flex justify-center">
                    <p>${((totalCarrito.toFixed(2) / 100) * 5).toFixed(2)}</p>
                  </div>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>{""}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell colSpan={7}>
                  <p className="text-black text-lg ">
                    EL DTO. POR PAGO SERÁ REALIZADO POR NOTA DE CRÉDITO, UNA VEZ
                    IMPUTADO EL MISMO EN SU CUENTA CORRIENTE
                  </p>
                </TableCell>

                <TableCell>{""}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell>
                  <p className="text-azul text-lg font-bold">Reparto</p>
                </TableCell>

                <TableCell colSpan={5}>
                  <div className="text-black text-lg flex justify-center">
                    <p>
                      Si el pedido no supera los $ 40.000,00 se cobrará $
                      1.000,00 en concepto de reparto
                    </p>
                  </div>
                </TableCell>
                <TableCell></TableCell>
                <TableCell>{""}</TableCell>
              </TableRow>
            </TableFooter>
          </Table>

          <div className="border-t-2 w-full border-azul mt-5 pt-5">
            <form
              className="flex space-x-10 px-2 w-full font-montserrat"
              //onSubmit={handleSubmit}
            >
              <div className="bg-white rounded-lg border w-3/4 border-black flex">
                <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 w-1/5">
                  <p>Observaciones</p>
                </div>
                <input
                  type="text"
                  name="observaciones"
                  className="bg-transparent p-3 w-4/5"
                  placeholder="Observaciones"
                  //onChange={handleSubmit}
                />
              </div>

              <div className="flex h-fit bg-azul text-white rounded-lg  ">
                <button
                  className="flex items-center space-x-2 p-3 hover:bg-amarillo rounded-lg cursor-pointer"
                  type="submit"
                >
                  <p>Enviar pedido</p>
                  <FiSend />
                </button>
              </div>
            </form>

            <div className="w-full flex justify-end px-20 mt-5">
              <div className="space-y-5">
                <p className="text-black">
                  Subtotal:{" "}
                  <span className="text-azul font-bold">
                    ${totalCarrito.toFixed(2)}
                  </span>
                </p>
                <p className="text-green-600 ">
                  Descuentos: <span className="font-bold">$ 0.00</span>
                </p>
                <p className="text-black text-2xl">
                  Subtotal:{" "}
                  <span className="text-azul font-bold">
                    ${totalCarrito.toFixed(2)}
                  </span>
                </p>
                <p className="text-black text-2xl">+ Impuestos</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
