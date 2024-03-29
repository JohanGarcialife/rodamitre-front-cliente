import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import { FaMinus, FaPlus } from "react-icons/fa";
import {
  Breadcrumbs,
  Link,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import styled from "@emotion/styled";
import Select from "react-select";
import { MdNavigateNext } from "react-icons/md";
import {
  modelosVeApi,
  productosMarModelo,
  rubroModeloS,
  motorRM,
} from "@/pages/api/productos";
import AtributosProducto from "./AtributosProducto";
import Esparte from "../productos/Esparte";
import Intercambianles from "../productos/Intercambianles";
import Formadopor from "../productos/Formadopor";

export default function BuscadorVehiculo(props) {
  const { comparacion, productos, marcaAutos, auth } = props;
  const [modelo, setModelo] = useState(null);
  const [rubro, setRubro] = useState([]);
  const [motor, setMotor] = useState([]);
  const [cantidad, setCantidad] = useState(0);
  const [producto, setProducto] = useState([]);
  const [producto1, setProducto1] = useState([]);
  const [modId, setModId] = useState([]);
  const [vehiculo, setVehiculo] = useState(null);
  const [modeloVh, setModeloVh] = useState([]);
  const [selectRubro, setSelectRubro] = useState([]);
  const [motorSelect, setMotorSelect] = useState([]);
  const [quantities, setQuantities] = useState(
    producto?.reduce((acc, producto) => {
      acc[producto?.pre_id] = 0;
      return acc;
    }, {})
  );

  const [resetModelo, setResetModelo] = useState(false);
  const [resetRubro, setResetRubro] = useState(false);
  const [resetMotor, setResetMotor] = useState(false);

  useEffect(() => {
    setResetModelo(true);
    setResetModelo(false);

    setResetRubro(true);
    setResetRubro(false);

    setResetMotor(true);
    setResetMotor(false);
  }, [vehiculo]);

  useEffect(() => {
    setResetRubro(true);
    setResetRubro(false);

    setResetMotor(true);
    setResetMotor(false);
  }, [modelo]);

  useEffect(() => {
    setResetMotor(true);
    setResetMotor(false);
  }, [rubro]);

  console.log(resetModelo);

  //console.log(marcaAutos);
  //console.log(modeloVh);
  //console.log(selectRubro);

  var autoSelect = marcaAutos?.map(function (obj) {
    var rObj = {
      value: obj?.MAU_ID,
      label: obj?.MAU_DESCRIPCION,
    };
    return rObj;
  });

  var modeloSelect = modeloVh?.map(function (obj) {
    var rObj = {
      value: obj?.MOD_ID,
      label: obj?.MOD_DESCRIPCION,
    };
    return rObj;
  });

  useEffect(() => {
    console.log(modeloSelect);
  }, [vehiculo]);

  var rubroSelect = selectRubro?.map(function (obj) {
    var rObj = {
      value: obj?.rup_id,
      label: obj?.rup_descripcion,
    };
    return rObj;
  });

  var motSelect = motorSelect?.map(function (obj) {
    var rObj = {
      value: obj?.motor,
      label: obj?.motor,
    };
    return rObj;
  });

  const handleChange = (productId, event) => {
    const newQuantity = parseInt(event.target.value);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const handleQuantityChange = (productId, newQuantity) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
  };

  const handleSelectVehiculo = async function (event) {
    setVehiculo(event.label);
    setModeloVh(null);
    const modeloV = await modelosVeApi(event.value);
    setModeloVh(modeloV);
  };

  const handleSelectModelo = async function (event) {
    console.log(event);
    setModelo(event.label);
    setSelectRubro(null);
    setModId(event.value);

    const Dato = {
      mod_id: event.value,
    };
    const rubromodV = await rubroModeloS(Dato);
    setSelectRubro(rubromodV);

    const productAuto = await productosMarModelo(
      auth.CLI_ID,
      auth.LPP_ID,
      Dato
    );
    setProducto(productAuto);
    setProducto1(productAuto);
  };

  const handleSelectRubro = async function (event) {
    setRubro(event);

    setMotorSelect(null);
    var motord = event.map(function (data) {
      var data = data.value;
      return data;
    });
    var motord = motord.toString();
    const Dato = {
      mod_id: modId,
      rubro: motord,
    };

    if (event.length > 0) {
      const motorTT = await motorRM(Dato);
      setMotorSelect(motorTT);

      const productAuto = await productosMarModelo(
        auth.CLI_ID,
        auth.LPP_ID,
        Dato
      );
      setProducto(productAuto);
    }
  };

  function handleSelectMotor(event) {
    setMotor(event);
  }

  function handleChangeCantidad(event) {
    setCantidad(event.target.value);
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

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <>
      <div className="font-montserrat px-2">
        <div className="bg-white w-fit py-2 px-3 rounded-md">
          <Breadcrumbs separator={<MdNavigateNext />} aria-label="breadcrumb">
            <Link
              underline="hover"
              key="1"
              color="inherit"
              href="/"
              onClick={handleClick}
            >
              Busqueda Vehículos
            </Link>
            ,
            {!vehiculo ? null : (
              <p key="" className="text-gris">
                {vehiculo}
              </p>
            )}
            ,
            {!modelo ? null : (
              <p key="" className="text-gris">
                {modelo}
              </p>
            )}
            ,
            {rubro.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                <div className="flex space-x-2 items-center">
                  {rubro?.map((rubro) => (
                    <p key="" className="text-gris">
                      {rubro.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {motor.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                <div className="flex space-x-2 items-center">
                  {motor?.map((motor) => (
                    <p key="" className="text-gris">
                      {motor.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            <p key="" className="text-gris">
              Página 1 de 1
            </p>
            ,
          </Breadcrumbs>
        </div>
      </div>
      {/* <div className="flex items-center justify-end  font-montserrat px-2">
        <div className="flex items-center space-x-4 bg-white rounded-lg p-3 mt-5 w-fit">
          <div className="flex items-center space-x-2">
            <FaCircle className="" />
            <p className="text-black">Stock</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircle className="" />
            <p className="text-black">Sin Stock</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaCircle className="text-[#EFBE5E]" />
            <p className="text-black">Consultar Stock</p>
          </div>
        </div>
      </div> */}
      <div className="flex font-montserrat mt-5 px-2 rounded-t-md bg-white border border-[#D9D9D9]">
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Marcas</p>

          <Select
            options={autoSelect}
            placeholder="Seleccione una marca"
            className="text-black font-montserrat"
            onChange={handleSelectVehiculo}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Autos</p>

          {!resetModelo && (
            <Select
              value={modeloSelect}
              options={modeloSelect}
              placeholder="Seleccione un auto"
              className="text-black font-montserrat"
              onChange={handleSelectModelo}
            />
          )}
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Rubros</p>

          {!resetRubro && (
            <Select
              isMulti
              closeMenuOnSelect={false}
              name="rubros"
              options={rubroSelect}
              className="text-black font-montserrat"
              placeholder="Todos los rubros..."
              onChange={handleSelectRubro}
            />
          )}
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Motores</p>

          {!resetMotor && (
            <Select
              isMulti
              closeMenuOnSelect={false}
              name="motores"
              options={motSelect}
              className="text-black font-montserrat"
              placeholder="Todos los motores..."
              onChange={handleSelectMotor}
            />
          )}
        </div>
      </div>
      <div className=" flex justify-center font-montserrat">
        <Table>
          <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
            <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  ARTÍCULO
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  MOTORIZACIÓN
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  MARCA
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  COSTO
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  VENTA
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  CANTIDAD
                </div>
              </TableCell>
              <TableCell>{""}</TableCell>
            </TableRow>
          </TableHead>
          {rubro.length > 0 ? (
            <TableBody className="bg-white">
              {rubro?.map((rubro) => (
                <>
                  <TableRowStyled className="w-full">
                    <TableCell colSpan={7}>
                      <div className="border-b border-black text-center w-full flex justify-center">
                        <p className="text-3xl text-black font-bold border-b-4 border-amarillo w-fit px-4">
                          {rubro.label}
                        </p>
                      </div>
                    </TableCell>
                  </TableRowStyled>

                  {producto?.map((producto) => (
                    <>
                      {producto.rubro === rubro.label && (
                        <TableRowStyled className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center">
                          <TableCell className="w-full text-center">
                            <div className="font-bold flex items-center space-x-3">
                              <Image
                                src="/VKPC-85097_1_SKF.jpg"
                                height={100}
                                width={100}
                                alt="Imagen"
                                className="mr-3"
                              />
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <div className="group">
                                    {" "}
                                    <AiFillInfoCircle />
                                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                                      <div className="grid grid-cols-3 space-x-3">
                                        <div className="space-y-3">
                                          <div className="bg-amarillo w-full px-10 py-1 ">
                                            <p className="text-azul font-bold">
                                              Interior
                                            </p>
                                          </div>
                                          <p>20</p>
                                        </div>
                                        <div className="space-y-3">
                                          <div className="bg-amarillo w-full px-10 py-1">
                                            <p className="text-azul font-bold">
                                              Exterior
                                            </p>
                                          </div>
                                          <p>20</p>
                                        </div>
                                        <div className="space-y-3">
                                          <div className="bg-amarillo w-full px-10 py-1">
                                            <p className="text-azul font-bold">
                                              Altura
                                            </p>
                                          </div>
                                          <p>20</p>
                                        </div>
                                      </div>
                                      <div className="space-y-3">
                                        <div className="bg-amarillo w-full py-1">
                                          <p className="text-azul font-bold">
                                            Notas
                                          </p>
                                        </div>
                                        <p>Notas</p>
                                      </div>
                                    </div>
                                  </div>
                                  <p>VKPC 85097</p>
                                </div>
                                <div>
                                  <p className="font-bold text-black text-left">
                                    Es parte de
                                  </p>
                                  <div className="flex font-normal items-center space-x-2 text-sm text-left">
                                    <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                                      VKMC 01107 A1
                                    </p>
                                    <span>-</span>
                                    <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                                      VKMC 01107 A1
                                    </p>
                                    <span>-</span>
                                    <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                                      VKMC 01107 A1
                                    </p>
                                  </div>
                                </div>
                                <div>
                                  <p className="font-bold text-black text-left">
                                    Intercambiable
                                  </p>
                                  <div className="flex font-normal items-center space-x-2 text-sm text-left">
                                    <p className="cursor-pointer hover:border-b-2 hover:border-amarillo">
                                      BA358 VMG
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-black">
                              <p>1.6 16v</p>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-bold ">
                              <p>SFK</p>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-bold ">
                              <p>$ 9.668,68</p>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-bold ">
                              <p>$ 9.668,68</p>
                            </div>
                          </TableCell>
                          {/* Contador */}
                          <TableCell className="w-full flex justify-center">
                            <div className="w-full flex justify-center">
                              <div className="w-full flex items-center  justify-center space-x-2">
                                <div
                                  className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                                  onClick={
                                    cantidad < 1
                                      ? () => setCantidad(0)
                                      : () => setCantidad(cantidad - 1)
                                  }
                                >
                                  <FaMinus />
                                </div>
                                <input
                                  type="number"
                                  min="0"
                                  max="1000"
                                  value={cantidad < 1 ? 0 : cantidad}
                                  onChange={handleChangeCantidad}
                                  className="px-2 rounded-md border border-black h-full text-center"
                                />
                                <div
                                  className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                                  onClick={() => setCantidad(cantidad + 1)}
                                >
                                  <FaPlus />
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center space-y-2">
                            <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                              <p>Pedir</p>
                            </div>
                            <div className="font-bold text-green-600">
                              <p>Disponible</p>
                            </div>

                            {/* {producto.pre_stock_actual > 0 && (
                            <div className="font-bold text-green-600">
                              <p>Disponible</p>
                            </div>
                          )} */}
                            {/* 
                          {producto.pre_stock_actual === 0 && (
                            <div className="font-bold text-red-600">
                              <p>Sin Stock</p>
                            </div>
                          )} */}
                          </TableCell>
                        </TableRowStyled>
                      )}
                    </>
                  ))}
                </>
              ))}
            </TableBody>
          ) : (
            <TableBody className="bg-white">
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
                            <div className="font-bold flex items-center justify-start space-x-3">
                              <Image
                                src="/VKPC-85097_1_SKF.jpg"
                                height={100}
                                width={100}
                                alt="Imagen"
                                className="mr-3"
                              />
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <div className="group">
                                    {" "}
                                    <AiFillInfoCircle />
                                    <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                                      {/*  {!producto?.atributos ? null : (
                              <AtributosProducto
                                atributos={producto?.atributos}
                              />
                            )} */}
                                      {!producto?.notas ? null : (
                                        <div className="space-y-3">
                                          <div className="bg-amarillo w-full py-1">
                                            <p className="text-azul font-bold">
                                              Notas
                                            </p>
                                          </div>
                                          <p>{producto?.notas} </p>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  <p>{producto?.codigo} </p>
                                </div>
                                <div>
                                  {producto?.es_parte_de ? (
                                    <div className="flex flex-col">
                                      <p className="font-bold text-black text-left">
                                        Es parte de
                                      </p>
                                      <Esparte
                                        esparte={producto?.es_parte_de}
                                      />
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div>
                                  {producto?.intercambiables ? (
                                    <div className="flex flex-col">
                                      <p className="font-bold text-black text-left">
                                        Intercambiable
                                      </p>
                                      <Intercambianles
                                        intercambiable={
                                          producto?.intercambiables
                                        }
                                      />
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                                <div>
                                  {producto?.formado_por ? (
                                    <div className="flex flex-col">
                                      <p className="font-bold text-black text-left">
                                        Formado por
                                      </p>
                                      <Formadopor
                                        formadopor={producto?.formado_por}
                                      />
                                    </div>
                                  ) : (
                                    <></>
                                  )}
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-black">
                              <p>1.6 16v</p>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="flex space-x-4 items-center font-bold">
                              <p>{producto?.marca_articulo} </p>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-bold ">
                              $
                              {quantities[producto?.pre_id] <= 0 ||
                              !quantities[producto?.pre_id]
                                ? 0
                                : (
                                    quantities[producto?.pre_id] *
                                    producto?.ppa_precio
                                  ).toFixed(2)}
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center">
                            <div className="font-bold ">
                              <p>$ 9.668,68</p>
                            </div>
                          </TableCell>
                          {/* Contador */}
                          <TableCell className="w-full flex justify-center">
                            <div className="w-full flex justify-center">
                              <div className="w-full flex items-center  justify-center space-x-2">
                                <div
                                  className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                                  onClick={() =>
                                    handleQuantityChange(
                                      producto?.pre_id,
                                      quantities[producto?.pre_id] - 1
                                    )
                                  }
                                >
                                  <FaMinus />
                                </div>
                                <input
                                  type="number"
                                  min="0"
                                  max="1000"
                                  value={
                                    quantities[producto?.pre_id] < 0
                                      ? 0
                                      : quantities[producto?.pre_id] || 0
                                  }
                                  onChange={(event) =>
                                    handleChange(producto?.pre_id, event)
                                  }
                                  className="px-2 rounded-md border border-black h-full text-center"
                                />
                                <div
                                  className="text-amarillo p-1 bg-azul rounded-md cursor-pointer hover:bg-amarillo hover:text-azul"
                                  onClick={() =>
                                    handleQuantityChange(
                                      producto?.pre_id,
                                      quantities[producto?.pre_id]
                                        ? quantities[producto?.pre_id] + 1
                                        : +1
                                    )
                                  }
                                >
                                  <FaPlus />
                                </div>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="w-full text-center space-y-2">
                            <div className="py-1 px-2 bg-amarillo text-azul rounded-sm cursor-pointer font-bold hover:bg-azul hover:text-amarillo">
                              <p>Pedir</p>
                            </div>

                            {producto?.pre_stock_actual > 0 && (
                              <div className="font-bold text-green-600">
                                <p>Disponible</p>
                              </div>
                            )}

                            {producto?.pre_stock_actual === 0 && (
                              <div className="font-bold text-red-600">
                                <p>Sin Stock</p>
                              </div>
                            )}
                          </TableCell>
                        </TableRowStyled>
                      )}
                    </>
                  ))}
                </>
              ))}
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
}
