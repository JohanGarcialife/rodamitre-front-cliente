import React, { useState, useEffect } from "react";
import { AutoComplete } from "primereact/autocomplete";
import {
  codigoP,
  modelosVeApi,
  marcaP,
  motorVeApi,
  marcaAutosApi
} from "@/pages/api/productos";

export default function NuevaGarantia() {
  const [vehiculo, setVehiculo] = useState(null);
  const [motivo, setMotivo] = useState(null);
  const [marca, setMarca] = useState([]);
  const [modelo, setModelo] = useState([]);
  const [motor, setMotor] = useState([]);
  const [marcaAutos, setMarcaAutos] = useState([]);


  const handleSelectVehiculo = async function (event) {
    setVehiculo(event.target.value);
    const modeloV = await modelosVeApi(event.target.value);
    setModelo(modeloV);
  };

  const handleModelo = async function (event) {
    const mot = await motorVeApi(event.target.value);
    setMotor(mot);
  };

  function handleSelectMotivo(event) {
    setMotivo(event.target.value);
  }

  function handlemarca(event) {
    console.log(event.target.value);
  }

  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);

  const search = async (event) => {
    if (event.query.length > 2) {
      const Dato = {
        p: event.query,
      };
      const response = await codigoP(Dato);
      var a = response?.map(function (o) {
        // var p = o.CODIGO_EQUIVALENTE
        var p = o.CODIGO;
        return p;
      });
      setItems(a);
    } else {
      setItems([]);
    }
  };

  useEffect(() => {
    if (value.length > 3) {
      (async () => {
        const Dato = {
          p: value,
        };
        const response = await marcaP(Dato);
        setMarca(response);
      })();
    }
  }, [value]);

  useEffect(() => {
    (async () => {
      const response = await marcaAutosApi();
      setMarcaAutos(response);
    })();
  }, []);



  return (
    <div className=" pt-[200px] pb-24 bg-white">
      <div>
        <div className="flex items-center justify-center w-full h-fit font-montserrat ">
          <div className="bg-white rounded-lg w-fit p-5 relative">
           
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
                    <AutoComplete
                          class="element"
                          value={value}
                          suggestions={items}
                          completeMethod={search}
                          onChange={(e) => setValue(e.value)}
                        />
                  </div>
                  <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                  <select
                          className="pl-4 w-full text-black border-0"
                          placeholder="Designación*"
                          /*  label={vehiculo}
                           value={vehiculo} */
                          onChange={handlemarca}
                        >
                          {marca.map((m) => (
                            <option value={m.marca}>{m.marca}</option>
                          ))}
                        </select>
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
                          //value={vehiculo}
                          onChange={handleSelectVehiculo}
                        >
                          <option value=""></option>
                          {marcaAutos.map((m) => (
                            <option value={m.MAU_ID}>
                              {m.MAU_DESCRIPCION}
                            </option>
                          ))}
                        </select>
                  </div>
                  <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                  
                    <select
                          className="pl-4 w-full text-black border-0"
                          // label={vehiculo}
                          // value={vehiculo}
                          onChange={handleModelo}
                        > 
                          <option value={""}></option>
                          {modelo.map((m) => (
                            <option value={m.MOD_ID}>
                              {m.MOD_DESCRIPCION}
                            </option>
                          ))}
                        </select>
                  </div>
                  <div className="flex space-x-5 ">
                    <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                      
                    <select
                            className="pl-4 w-full text-black border-0"
                            // label={vehiculo}
                            // value={vehiculo}
                            // onChange={handleSelectVehiculo}
                          >
                            <option value=""></option>
                            {motor?.map((m) => (
                              <option value={m.mde_descripcion}>
                                {m.mde_descripcion}
                              </option>
                            ))}
                          </select>
                    </div>
                    <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                      <p className="text-[#969696] font-bold text-sm ">Año</p>
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
                      <span className="font-bold">Durante la instalación.</span>{" "}
                      No fue posible instalarlo
                    </option>
                    <option value="En la instalación">
                      <p>
                        {" "}
                        <span className="font-bold">En la instalación.</span> Se
                        desinstaló inmediatamente
                      </p>
                    </option>
                    <option value="En la instalación">
                      <span className="font-bold">En la instalación.</span> Al
                      probarlo no funcionó en forma aceptable
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
                      Se desinstaló porque su funcionamiento no era aceptable
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
                    Describir lo sucedido con el mayor detalle posible, desde
                    los primeros síntomas hasta la desinstalación. Indicar
                    cualquier anormalidad observada en la instalación, uso o
                    desinstalación.
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
                  //onClick={() => setOpen(!open)}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
