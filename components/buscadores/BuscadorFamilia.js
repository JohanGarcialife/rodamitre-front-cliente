import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AiFillInfoCircle } from "react-icons/ai";
import { CiCircleInfo } from "react-icons/ci";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Breadcrumbs,
  Link,
  IconButton,
  Box,
  TableFooter,
  TablePagination,
} from "@mui/material";
import styled from "@emotion/styled";
import { FaMinus, FaPlus } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import Select from "react-select";
import { useTheme } from "@mui/material/styles";
import {
  productosApi,
  superrubrosMarcId,
  productosMarcAuto,
  pMarcarticulo,
  rubrosP,
} from "@/pages/api/productos";
import AtributosProducto from "./AtributosProducto";

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }} className="px-5 text-azul">
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LuChevronLast /> : <LuChevronFirst />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <MdKeyboardArrowRight />
        ) : (
          <MdKeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <MdKeyboardArrowLeft />
        ) : (
          <MdKeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <LuChevronFirst /> : <LuChevronLast />}
      </IconButton>
    </Box>
  );
}

export default function BuscadorFamilia(props) {
  const { comparacion, marcaAutos, auth, setReloadUser } = props;
  const [productos1, setProductos1] = useState([]);
  const [productos, setProductos] = useState([]);
  const [marca, setMarca] = useState([]);
  const [marID, setMarID] = useState();
  const [rudID, setRudID] = useState(null);
  const [marcaId, setMarcaId] = useState(null);
  const [rubroId, setRubroId] = useState(null);

  const [familia, setFamilia] = useState(null);
  const [rubro, setRubro] = useState(null);
  const [selectSrubro, setSelectSrubro] = useState(null);
  const [selectMarId, setSelectMarId] = useState(null);
  const [selectRubro, setSelecRubro] = useState(null);

  const [vehiculoName, setVehiculoName] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [quantities, setQuantities] = useState(
    productos?.reduce((acc, producto) => {
      acc[producto?.pre_id] = 0;
      return acc;
    }, {})
  );

  useEffect(() => {
    (async () => {
      const response = await productosApi(auth.CLI_ID, auth.LPP_ID);
      setProductos1(response);
      setProductos(response);
    })();
  }, []);

  var autoSelect = marcaAutos?.map(function (obj) {
    var rObj = {
      value: obj?.MAU_ID,
      label: obj?.MAU_DESCRIPCION,
    };
    return rObj;
  });

  var superRubroSelect = selectSrubro?.map(function (obj) {
    var rObj = {
      value: obj?.spr_id,
      label: obj?.super_rubro,
    };
    return rObj;
  });
  var marcaArticuloSelect = selectMarId?.map(function (obj) {
    var rObj = {
      value: obj?.mar_id,
      label: obj?.marca_a,
    };
    return rObj;
  });

  var rubroSelect = selectRubro?.map(function (obj) {
    var rObj = {
      value: obj?.rubro,
      label: obj?.rup_descripcion,
    };
    return rObj;
  });

  useEffect(() => {
    if (marID?.length > 0 && !rudID && !marcaId?.length && !rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();
        const Dato = {
          mau_id: marid,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);

        const listrubro = await superrubrosMarcId(Dato);
        setSelectSrubro(listrubro);

        const pArticulo = await pMarcarticulo(Dato);
        setSelectMarId(pArticulo);
      })();
    }
    if (marID?.length > 0 && rudID && !marcaId?.length && !rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();
        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        const pArticulo = await pMarcarticulo(Dato);
        setSelectMarId(pArticulo);
        const psRubro = await rubrosP(Dato);
        setSelecRubro(psRubro);
      })();
    }

    if (rudID && !marID?.length && !marcaId?.length && !rubroId) {
      (async () => {
        const Dato = {
          rud_id: rudID.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        const pArticulo = await pMarcarticulo(Dato);
        setSelectMarId(pArticulo);
        const psRubro = await rubrosP(Dato);
        setSelecRubro(psRubro);
      })();
    }

    if (!marID?.length && !rudID && !marcaId?.length) {
      (async () => {
        const listrubro = await superrubrosMarcId();
        setSelectSrubro(listrubro);
        const pArticulo = await pMarcarticulo();
        setSelectMarId(pArticulo);
      })();
      setProductos(productos1);
    }
  }, [rudID || marID]);

  useEffect(() => {
    if (marID?.length > 0 && rudID && marcaId?.length > 0 && !rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();

        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
          mar_id: marcid,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        /* const psRubro = await rubrosP(Dato);
            setSelecRubro(psRubro); */
      })();
    }

    if (marID?.length > 0 && rudID && !marcaId?.length && !rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();
        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
          mar_id: "",
          rubro: "",
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        /* const pArticulo = await pMarcarticulo(Dato);
            setSelectMarId(pArticulo);
            const psRubro = await rubrosP(Dato);
            setSelecRubro(psRubro); */
      })();
    }

    if (marID?.length > 0 && !rudID && marcaId?.length > 0 && !rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();

        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: marid,
          rud_id: "",
          mar_id: marcid,
          rubro: "",
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }
    if (marID?.length > 0 && !rudID && !marcaId?.length && !rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();
        const Dato = {
          mau_id: marid,
          rud_id: "",
          mar_id: "",
          rubro: "",
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (!marID?.length > 0 && rudID && marcaId?.length > 0 && !rubroId) {
      (async () => {
        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: "",
          rud_id: rudID.value,
          mar_id: marcid,
          rubro: "",
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (!marID?.length > 0 && rudID && !marcaId?.length > 0 && !rubroId) {
      (async () => {
        const Dato = {
          mau_id: "",
          rud_id: rudID.value,
          mar_id: "",
          rubro: "",
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (!marID?.length > 0 && rudID && marcaId?.length > 0 && rubroId) {
      (async () => {
        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: "",
          rud_id: rudID.value,
          mar_id: marcid,
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }
    if (!marID?.length > 0 && rudID && !marcaId?.length > 0 && rubroId) {
      (async () => {
        const Dato = {
          mau_id: "",
          rud_id: rudID.value,
          mar_id: "",
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        const pArticulo = await pMarcarticulo(Dato);
        setSelectMarId(pArticulo);
      })();
    }

    if (!marID?.length > 0 && !rudID && marcaId?.length > 0 && !rubroId) {
      (async () => {
        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: "",
          rud_id: "",
          mar_id: marcid,
          rubro: "",
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (!marID?.length > 0 && !rudID && !marcaId?.length && !rubroId) {
      setProductos(productos1);
    }

    if (marID?.length > 0 && rudID && marcaId?.length > 0 && rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();

        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
          mar_id: marcid,
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (marID?.length > 0 && rudID && !marcaId?.length > 0 && rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();

        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
          mar_id: "",
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }
  }, [marcaId]);

  useEffect(() => {
    if (marID?.length > 0 && rudID && marcaId?.length > 0 && rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();

        var newmarca = marcaId.map(function (data) {
          var data = data.value;
          return data;
        });
        var marcid = newmarca.toString();

        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
          mar_id: marcid,
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (marID?.length > 0 && rudID && !marcaId?.length > 0 && rubroId) {
      (async () => {
        var newproduct = marID.map(function (data) {
          var data = data.value;
          return data;
        });
        var marid = newproduct.toString();

        const Dato = {
          mau_id: marid,
          rud_id: rudID.value,
          mar_id: "",
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
      })();
    }

    if (!marID?.length > 0 && rudID && !marcaId?.length > 0 && rubroId) {
      (async () => {
        const Dato = {
          mau_id: "",
          rud_id: rudID.value,
          mar_id: "",
          rubro: rubroId.value,
        };
        const productAuto = await productosMarcAuto(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        const pArticulo = await pMarcarticulo(Dato);
        setSelectMarId(pArticulo);
      })();
    }
  }, [rubroId]);

  const handleChangeVehiculo = (event) => {
    setVehiculoName(event);
    setRudID(null);
    setMarcaId(null);
    setRubroId(null);
    setMarID(event);

    /*  setFamilia(null);
    setMarca([]);
    setRubro(null); */
  };

  function handleSelectFamilia(event) {
    setRudID(event);
    setFamilia(event.label);
    setMarcaId(null);
    setRubroId(null);
    /*  setMarca([]);
    setRubro(null); */
  }

  const handleChangeMarca = (event) => {
    setMarca(event);
    setMarcaId(event);
    /*  setRubro(null); */
  };

  function handleSelectRubro(event) {
    setRubro(event.label);
    setRubroId(event);
    setMarcaId(null);
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

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
              Busqueda Familias
            </Link>
            ,
            {vehiculoName?.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                <div className="flex space-x-2 items-center">
                  {vehiculoName?.map((vehiculo) => (
                    <p key="" className="text-gris">
                      {vehiculo?.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {!familia ? null : (
              <p key="" className="text-gris">
                {familia}
              </p>
            )}
            ,
            {marca.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
              >
                <div className="flex space-x-2 items-center">
                  {marca?.map((marca) => (
                    <p key="" className="text-gris">
                      {marca.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {!rubro ? null : (
              <p key="" className="text-gris">
                {rubro}
              </p>
            )}
            ,
            <p key="" className="text-gris">
              Página 1 de 1
            </p>
            ,
          </Breadcrumbs>
        </div>
      </div>
      <div className="flex font-montserrat mt-5 px-2 rounded-t-md bg-white border border-[#D9D9D9]">
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Vehículo</p>

          <Select
            isMulti
            name="vehiculos"
            options={autoSelect}
            className="text-black font-montserrat"
            placeholder="Todos los vehículos..."
            onChange={handleChangeVehiculo}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Familias</p>

          <Select
            options={superRubroSelect}
            placeholder="Todas las familias..."
            className="text-black font-montserrat"
            onChange={handleSelectFamilia}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Marcas</p>

          <Select
            isMulti
            name="marcas"
            options={marcaArticuloSelect}
            className="text-black font-montserrat"
            placeholder="Todas las marcas..."
            onChange={handleChangeMarca}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Rubros</p>

          <Select
            options={rubroSelect}
            placeholder="Todos los rubros..."
            className="text-black font-montserrat"
            onChange={handleSelectRubro}
          />
        </div>
      </div>
      <div className=" font-montserrat">
        <Table>
          <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
            <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Artículo
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Aplicaciones
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Marca
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Costo
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  Cantidad
                </div>
              </TableCell>
              <TableCell>
                <div className="font-bold text-white flex justify-center">
                  SUB-TOTAL
                </div>
              </TableCell>
              <TableCell>{""}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="bg-white">
            {(rowsPerPage > 0
              ? productos?.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : productos
            )?.map((producto) => (
              <TableRowStyled
                key={producto?.pre_id}
                className="text-black p-5 flex justify-between w-full last-of-type:rounded-b-lg items-center"
              >
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
                                  <p className="text-azul font-bold">Notas</p>
                                </div>
                                <p>{producto?.notas} </p>
                              </div>
                            )}
                          </div>
                        </div>
                        <p>{producto?.codigo} </p>
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
                  <div className="text-gris text-xs ">
                    {comparacion?.map((comparacion) => (
                      <div>
                        {comparacion.PRE_ID === producto?.pre_id && (
                          <div className="flex items-center space-x-2 ">
                            <div className="flex items-center space-x-1 ">
                              <p>{comparacion.MARCA_AUTO}</p>
                              <p>{comparacion.MODELO}</p>
                            </div>
                            <div className="group">
                              {" "}
                              <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                                <p className="font-bold text-black text-base">
                                  {comparacion.SUPER_RUBRO}
                                </p>
                              </div>
                              <CiCircleInfo className="font-bold text-lg" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="w-full text-center">
                  <div className="flex space-x-4 items-center font-bold">
                    <p>{producto?.marca_articulo} </p>
                  </div>
                </TableCell>
                <TableCell className="w-full text-center">
                  <div className="font-bold">$ {producto?.ppa_precio} </div>
                </TableCell>
                {/* contador */}
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
                <TableCell className="w-full text-center">
                  <div className="font-bold ">
                    $
                    {quantities[producto?.pre_id] <= 0 ||
                    !quantities[producto?.pre_id]
                      ? 0
                      : (
                          quantities[producto?.pre_id] * producto?.ppa_precio
                        ).toFixed(2)}
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
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[
                  5,
                  10,
                  25,
                  50,
                  { label: "All", value: -1 },
                ]}
                labelRowsPerPage="Productos por página:"
                colSpan={7}
                count={productos?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                slotProps={{
                  select: {
                    inputProps: {
                      "aria-label": "Productos por página",
                      label: "Productos por página",
                    },
                    native: true,
                  },
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </>
  );
}
