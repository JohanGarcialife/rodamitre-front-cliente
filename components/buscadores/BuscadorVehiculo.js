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
import Select from "react-select";
import { MdNavigateNext } from "react-icons/md";
import {
  modelosVeApi,
  productosMarModelo,
  rubroModeloS,
  motorRM,
  marcaAutosApi,
} from "@/pages/api/productos";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CircularProgress from "@mui/material/CircularProgress";
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
  const [motorS2, setMotorS2] = useState([]);

  const [expand, setExpand] = useState("noExpand");
  const [loade, setLoade] = useState(false);

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
    setLoade(true);
    setSelectRubro(null);
    setModId(event.value);

    const Dato = {
      mod_id: event.value,
    };
    const rubromodV = await rubroModeloS(Dato);
    setSelectRubro(rubromodV);
    const motorTT = await motorRM(Dato);
    setMotorSelect(motorTT);
    setMotorS2(motorTT);

    const productAuto = await productosMarModelo(
      auth.CLI_ID,
      auth.LPP_ID,
      Dato
    );
    setProducto(productAuto);
    setProducto1(productAuto);
    setLoade(false);
  };

  const handleSelectRubro = async function (event) {
    setRubro(event);
    setMotorSelect(null);

    if (vehiculo && modelo && !rubro.label > 0) {
      setProducto(producto1);
      setMotorSelect(motorS2);
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

      /*setLoade(true);

      const productAuto = await productosMarModelo(
        auth.CLI_ID,
        auth.LPP_ID,
        Dato
      );
      setProducto(productAuto);
      setProducto2(productAuto);
      setLoade(false);*/
    }
  };

  const handleSelectMotor = async function (event) {
    setMotor(event);

    if (vehiculo && modelo && rubro && !motor?.label > 0) {
      setProducto(producto2);
    }

    if (vehiculo && modelo && !rubro.label > 0 && !motor?.label > 0) {
      setProducto(producto1);
    }

    var motor = event.map(function (data) {
      var data = data.value;
      return data;
    });
    var motort = motor.toString();

    console.log(motort, "motor");

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
      setLoade(true);

      const productAuto = await productosMarModelo(
        auth.CLI_ID,
        auth.LPP_ID,
        Dato
      );
      setProducto(productAuto);
      console.log(productAuto, "informacion");
      setLoade(false);
    }
  };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }
  ///console.log(producto, "productos")

  return (
    <div className=" pt-[200px] xl:pt-[245px] pb-24 bg-white">
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
              <p key="" className="text-gris text-xs">
                Busqueda Vehículos
              </p>
            </Link>
            ,
            {!vehiculo ? null : (
              <p key="" className="text-gris text-xs">
                {vehiculo.label}
              </p>
            )}
            ,
            {!modelo ? null : (
              <p key="" className="text-gris text-xs">
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
                <div className="flex space-x-1 items-center">
                  {rubro?.map((rubro) => (
                    <p key="" className="text-gris text-xs">
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
                <div className="flex space-x-1 items-center">
                  {motor?.map((motor) => (
                    <p key="" className="text-gris text-xs">
                      {motor.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            <p key="" className="text-gris text-xs">
              Página 1 de 1
            </p>
            ,
          </Breadcrumbs>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-2 font-montserrat  px-2 rounded-t-md bg-white border border-[#D9D9D9]">
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
          <div className="flex space-x-2 w-full items-center">
            <Select
              isMulti
              value={rubro}
              closeMenuOnSelect={false}
              name="rubros"
              options={rubroSelect}
              className={
                expand === "expand"
                  ? "text-black font-montserrat w-full expand"
                  : "text-black font-montserrat w-full"
              }
              placeholder="Todos los rubros..."
              onChange={handleSelectRubro}
            />
            {expand === "noExpand" && (
              <FaPlus
                onClick={() => setExpand("expand")}
                className="text-base text-azul cursor-pointer plus"
              />
            )}
            {expand === "expand" && (
              <FaMinus
                onClick={() => setExpand("noExpand")}
                className="text-base text-azul cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Motores</p>
          <div className="flex space-x-2 w-full items-center">
            <Select
              isMulti
              value={motor}
              closeMenuOnSelect={false}
              name="motores"
              options={motSelect}
              className={
                expand === "expand"
                  ? "text-black font-montserrat w-full expand"
                  : "text-black font-montserrat w-full"
              }
              placeholder="Todos los motores..."
              onChange={handleSelectMotor}
            />
            {expand === "noExpand" && (
              <FaPlus
                onClick={() => setExpand("expand")}
                className="text-base text-azul cursor-pointer plus"
              />
            )}
            {expand === "expand" && (
              <FaMinus
                onClick={() => setExpand("noExpand")}
                className="text-base text-azul cursor-pointer"
              />
            )}
          </div>
        </div>
      </div>
      <div className=" flex justify-center font-montserrat">
        {loade ? (
          <div className="mt-20 flex item-center justify-center w-full text-center">
            <CircularProgress />
          </div>
        ) : (
          <Table>
            <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
              <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
                <TableCell>
                  <div className="font-bold text-white flex justify-center xl:justify-start">
                    ARTÍCULO
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center xl:justify-start">
                    MOTORIZACIÓN
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center xl:justify-start">
                    MARCA
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center xl:justify-start">
                    COSTO
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center xl:justify-start">
                    VENTA
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-start xl:px-5">
                    CANTIDAD
                  </div>
                </TableCell>
                <TableCell>{""}</TableCell>
              </TableRow>
            </TableHead>
            {rubro.length > 0 ? (
              <TableBody className="bg-white">
                <RowBuscadorVehiculo rubros={rubro} producto={producto} />
              </TableBody>
            ) : (
              <TableBody className="bg-white">
                <RowBuscadorVehiculo2
                  selectRubro={selectRubro}
                  rubros={rubro}
                  producto={producto}
                  motor={motor}
                />
              </TableBody>
            )}
          </Table>
        )}
      </div>
    </div>
  );
}
