import React, { useEffect, useState } from "react";
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
  marcaAutosApi,
} from "@/pages/api/productos";
import RowBuscadorVehiculo from "./RowBuscadorVehiculo";
import RowBuscadorVehiculo2 from "./RowBuscadorVehiculo2";

export default function BuscadorVehiculo(props) {
  const { marcaAutos, setMarcaAutos, auth, buscar, setBuscar, setBuscador } =
    props;
  const [modelo, setModelo] = useState(null);
  const [rubro, setRubro] = useState([]);
  const [motor, setMotor] = useState([]);
  const [producto, setProducto] = useState([]);
  const [producto1, setProducto1] = useState([]);
  const [producto2, setProducto2] = useState([]);
  const [modId, setModId] = useState([]);
  const [vehiculo, setVehiculo] = useState(null);
  const [modeloVh, setModeloVh] = useState([]);
  const [selectRubro, setSelectRubro] = useState([]);
  const [motorSelect, setMotorSelect] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await marcaAutosApi();
      setMarcaAutos(response);
    })();
  }, []);

  useEffect(() => {
    setModelo(null);
    setRubro([]);
    setMotor([]);
  }, [vehiculo]);

  useEffect(() => {
    setRubro([]);
    setMotor([]);
  }, [modelo]);

  useEffect(() => {
    setMotor([]);
  }, [rubro]);

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

  var rubroSelect = selectRubro?.map(function (obj) {
    var rObj = {
      value: obj?.rup_id,
      label: obj?.rup_descripcion,
    };
    return rObj;
  });

  var motSelect = motorSelect?.map(function (obj) {
    var rObj = {
      value: obj?.mde_id,
      label: obj?.mde_descripcion,
    };
    return rObj;
  });

  const handleSelectVehiculo = async function (event) {
    setVehiculo(event);
    setModeloVh(null);
    const modeloV = await modelosVeApi(event.value);
    setModeloVh(modeloV);
  };

  const handleSelectModelo = async function (event) {
    setModelo(event);
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

    if (vehiculo && modelo && !rubro.label > 0) {
      setProducto(producto1);
    }

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
      setProducto2(productAuto);
    }
  };

  const handleSelectMotor = async function (event) {
    setMotor(event);

    if (vehiculo && modelo && rubro && !motor?.label > 0) {
      setProducto(producto2);
    }

    var motor = event.map(function (data) {
      var data = data.value;
      return data;
    });
    var motort = motor.toString();

    var rup = rubro.map(function (data) {
      var data = data.value;
      return data;
    });
    var rub = rup.toString();

    const Dato = {
      mod_id: modId,
      rubro: rub,
      motor: motort,
    };

    if (event.length > 0) {
      const productAuto = await productosMarModelo(
        auth.CLI_ID,
        auth.LPP_ID,
        Dato
      );
      setProducto(productAuto);
    }
  };

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
                {vehiculo.label}
              </p>
            )}
            ,
            {!modelo ? null : (
              <p key="" className="text-gris">
                {modelo.label}
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
      <div className="flex font-montserrat  px-2 rounded-t-md bg-white border border-[#D9D9D9]">
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

          <Select
            value={modelo}
            options={modeloSelect}
            placeholder="Seleccione un auto"
            className="text-black font-montserrat"
            onChange={handleSelectModelo}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Rubros</p>

          <Select
            isMulti
            value={rubro}
            closeMenuOnSelect={false}
            name="rubros"
            options={rubroSelect}
            className="text-black font-montserrat"
            placeholder="Todos los rubros..."
            onChange={handleSelectRubro}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Motores</p>

          <Select
            isMulti
            value={motor}
            closeMenuOnSelect={false}
            name="motores"
            options={motSelect}
            className="text-black font-montserrat"
            placeholder="Todos los motores..."
            onChange={handleSelectMotor}
          />
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
              <RowBuscadorVehiculo
                rubros={rubro}
                producto={producto}
                buscar={buscar}
                setBuscar={setBuscar}
                setBuscador={setBuscador}
              />
            </TableBody>
          ) : (
            <TableBody className="bg-white">
              <RowBuscadorVehiculo2
                selectRubro={selectRubro}
                rubros={rubro}
                producto={producto}
                buscar={buscar}
                setBuscar={setBuscar}
                setBuscador={setBuscador}
              />
            </TableBody>
          )}
        </Table>
      </div>
    </>
  );
}
