import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "@emotion/styled";

export default function Garantia() {
  const [open, setOpen] = useState(false);
  const [vehiculo, setVehiculo] = useState(null);
  const [motivo, setMotivo] = useState(null);

  function handleSelectVehiculo(event) {
    setVehiculo(event.target.value);
  }
  function handleSelectMotivo(event) {
    setMotivo(event.target.value);
  }

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
      <div>
        <div className=" flex justify-end font-montserrat mb-5">
          <button
            className="bg-azul rounded-md px-4 py-2 font-bold text-amarillo hover:bg-amarillo hover:text-black"
            onClick={() => setOpen(!open)}
          >
            Nueva Garantía
          </button>
        </div>
        {open === true ? (
          <div>
            <div className="flex items-center justify-center w-full h-fit font-montserrat ">
              <div className="bg-white rounded-lg w-fit p-5 relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="absolute top-3 right-3  bg-gray-200 text-black rounded-full text-lg p-3 cursor-pointer hover:bg-gray-400  "
                >
                  <AiOutlineClose />
                </div>
                <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                  <p className="text-black text-4xl border-b-4 border-amarillo">
                    Nueva Garantía
                  </p>
                </div>
                <div className=" flex flex-col justify-center items-center space-y-5 px-20">
                  <p className="text-black">
                    En caso que haya existido una{" "}
                    <span className="font-bold text-center">
                      {" "}
                      falla de algún artículo
                    </span>{" "}
                    completá los siguientes campos según corresponda y estaremos
                    solucionandolo.
                  </p>
                  <p className="text-black">
                    En caso de{" "}
                    <span className="font-bold text-center">
                      inconvenientes operativos
                    </span>
                    , generar la{" "}
                    <span className="font-bold text-center">
                      solicitud en <a href="">Reclamos</a>.
                    </span>
                  </p>
                  <div className="flex items-start w-full space-x-5">
                    <div className="w-full space-y-5">
                      <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                        <p className="text-black text-xl border-b-4 border-amarillo font-bold">
                          Producto
                        </p>
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-sm ">
                          Designación*
                        </p>
                        <input
                          type="text"
                          placeholder="Designación*"
                          className="pl-4 w-full"
                        />
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        {/* <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p> */}
                        <select
                          className="pl-4 w-full text-black border-0"
                          // label={vehiculo}
                          // value={vehiculo}
                          // onChange={handleSelectVehiculo}
                        ></select>
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-sm ">
                          Cantidad
                        </p>
                        <input
                          type="text"
                          placeholder="Cantidad"
                          className="pl-4 w-full"
                        />
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-sm ">
                          N° Comprobante de Compra
                        </p>
                        <input
                          type="text"
                          placeholder="N° Comprobante de Compra"
                          className="pl-4 w-full"
                        />
                      </div>
                    </div>
                    <div className="w-full space-y-5">
                      <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                        <p className="text-black text-xl border-b-4 border-amarillo font-bold">
                          Vehículo
                        </p>
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        <p className="text-[#969696] font-bold text-sm ">
                          Vehículo
                        </p>
                        <select
                          className="pl-4 w-full text-black border-0"
                          label={vehiculo}
                          value={vehiculo}
                          onChange={handleSelectVehiculo}
                        >
                          <option value="Chevrolet">Chevrolet</option>
                          <option value="Citroen">Citroen</option>
                          <option value="Fiat">Fiat</option>
                          <option value="Ford">Ford</option>
                        </select>
                      </div>
                      <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                        {/* <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p> */}
                        <select
                          className="pl-4 w-full text-black border-0"
                          // label={vehiculo}
                          // value={vehiculo}
                          // onChange={handleSelectVehiculo}
                        ></select>
                      </div>
                      <div className="flex space-x-5 ">
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          {/* <p className="text-[#969696] font-bold text-sm ">
                        Vehículo
                      </p> */}
                          <select
                            className="pl-4 w-full text-black border-0"
                            // label={vehiculo}
                            // value={vehiculo}
                            // onChange={handleSelectVehiculo}
                          ></select>
                        </div>
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Año
                          </p>
                          <input
                            type="text"
                            placeholder="Año"
                            className="pl-4 w-full"
                          />
                        </div>
                      </div>
                      <div className="flex space-x-5 ">
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Patente
                          </p>
                          <input
                            type="text"
                            placeholder="Patente"
                            className="pl-4 w-full"
                          />
                        </div>
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Kilometraje
                          </p>
                          <input
                            type="text"
                            placeholder="Kilometraje"
                            className="pl-4 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-5">
                    <div className="border-b-2 border-gris flex justify-center items-center mb-5">
                      <p className="text-black text-xl border-b-4 border-amarillo font-bold">
                        Secuencia De Falla
                      </p>
                    </div>
                    <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                      <p className="text-[#969696] font-bold text-sm ">
                        Seleccione un motivo
                      </p>
                      <select
                        className="pl-4 w-full text-black border-0"
                        label={motivo}
                        value={motivo}
                        onChange={handleSelectMotivo}
                      >
                        <option value="Rechazo inicial">
                          <span className="font-bold">Rechazo inicial.</span> Se
                          observarvó una condición anormal
                        </option>
                        <option value="Durante la instalación">
                          <span className="font-bold">
                            Durante la instalación.
                          </span>{" "}
                          No fue posible instalarlo
                        </option>
                        <option value="En la instalación">
                          <p>
                            {" "}
                            <span className="font-bold">
                              En la instalación.
                            </span>{" "}
                            Se desinstaló inmediatamente
                          </p>
                        </option>
                        <option value="En la instalación">
                          <span className="font-bold">En la instalación.</span>{" "}
                          Al probarlo no funcionó en forma aceptable
                        </option>
                        <option value="En la instalación">
                          <span className="font-bold">En la instalación.</span>
                          Al probarlo falló o no funcionó
                        </option>

                        <option value="En el uso - Falla súbita">
                          <span className="font-bold">
                            En el uso - Falla súbita.
                          </span>{" "}
                          sin señales previas, dejó de funcionar repentinamente
                        </option>
                        <option value="En el uso - Falla Progresiva">
                          <span className="font-bold">
                            En el uso - Falla Progresiva.
                          </span>{" "}
                          Se desinstaló porque su funcionamiento no era
                          aceptable
                        </option>
                        <option value="En el uso - Falla Progresiva">
                          <span className="font-bold">
                            En el uso - Falla Progresiva.
                          </span>{" "}
                          Dejó de funcionar completamente
                        </option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full space-y-5">
                    <div>
                      <div className="border-b-2 border-gris flex justify-center items-center ">
                        <p className="text-black text-xl border-b-4 border-amarillo font-bold">
                          Intensidad de Uso
                        </p>
                      </div>
                      <p className="text-black text-center mb-5">
                        Completar solo si el producto falló durante el uso
                      </p>
                    </div>
                    <div className="flex space-x-5 w-full justify-center items-start">
                      <div className="space-y-5 w-full flex flex-col items-end">
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-1/2 p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Fecha de instalación
                          </p>
                          <input
                            type="date"
                            placeholder="Año"
                            className="pl-4 w-full text-black"
                          />
                        </div>
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Kilometraje de instalación*
                          </p>
                          <input
                            type="text"
                            placeholder="Kilometraje de instalación*"
                            className="pl-4 w-full"
                          />
                        </div>
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Kilometraje de uso*
                          </p>
                          <input
                            type="text"
                            placeholder="Kilometraje de uso"
                            className="pl-4 w-full"
                          />
                        </div>
                      </div>
                      <div className="space-y-5 w-full">
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-1/2 p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Fecha de incidente
                          </p>
                          <input
                            type="date"
                            placeholder="Año"
                            className="pl-4 w-full text-black"
                          />
                        </div>
                        <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                          <p className="text-[#969696] font-bold text-sm ">
                            Kilometraje de incidente
                          </p>
                          <input
                            type="text"
                            placeholder="Kilometraje de incidente"
                            className="pl-4 w-full"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full space-y-5">
                    <div>
                      <div className="border-b-2 border-gris flex justify-center items-center ">
                        <p className="text-black text-xl border-b-4 border-amarillo font-bold">
                          Descripción De La Garantía
                        </p>
                      </div>
                      <p className="text-black text-center mb-5">
                        Describir lo sucedido con el mayor detalle posible,
                        desde los primeros síntomas hasta la desinstalación.
                        Indicar cualquier anormalidad observada en la
                        instalación, uso o desinstalación.
                      </p>
                    </div>
                    <textarea
                      rows="8"
                      placeholder=""
                      className="p-4 w-full h-full bg-blue-200/30 text-black"
                    />
                  </div>
                  <div>
                    <button
                      className="bg-azul rounded-md px-4 py-2 font-bold text-amarillo hover:bg-amarillo hover:text-black"
                      onClick={() => setOpen(!open)}
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
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
        )}
      </div>
    </>
  );
}
