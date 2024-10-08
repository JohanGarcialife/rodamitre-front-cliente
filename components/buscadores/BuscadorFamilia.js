import React, { useEffect, useState } from "react";
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
import { FaMinus, FaPlus } from "react-icons/fa6";
import { MdNavigateNext } from "react-icons/md";
import Select from "react-select";
import { useTheme } from "@mui/material/styles";
import {
  productosApi,
  superrubrosMarcId,
  productosMarcAuto,
  pMarcarticulo,
  rubrosP,
  marcaAutosApi,
} from "@/pages/api/productos";
import CircularProgress from "@mui/material/CircularProgress";
import RowBuscadorFamilia from "./RowBuscadorFamilia";

export default function BuscadorFamilia(props) {
  const { auth } = props;
  const [productos1, setProductos1] = useState([]);
  const [productos, setProductos] = useState([]);
  const [marID, setMarID] = useState("");
  const [rudID, setRudID] = useState(null);
  const [marcaId, setMarcaId] = useState([]);
  const [rubroId, setRubroId] = useState(null);
  const [familia, setFamilia] = useState(null);
  const [marca, setMarca] = useState([]);
  const [rubro, setRubro] = useState(null);
  const [selectSrubro, setSelectSrubro] = useState(null);
  const [selectMarId, setSelectMarId] = useState(null);
  const [selectRubro, setSelecRubro] = useState(null);
  const [vehiculoName, setVehiculoName] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [expand, setExpand] = useState("noExpand");
  const [loade, setLoade] = useState(false);
  const [marcaAutos, setMarcaAutos] = useState([]);
  const [superR1, setSuperR1] = useState();
  const [mar1, setMar1] = useState();

  useEffect(() => {
    (async () => {
      setLoade(true);
      const response1 = await productosApi(auth.CLI_ID, auth.LPP_ID);
      setProductos1(response1);
      setProductos(response1);
      const response = await marcaAutosApi();
      setMarcaAutos(response);
      const listrubro = await superrubrosMarcId();
      setSelectSrubro(listrubro);
      setSuperR1(listrubro);
      const pArticulo = await pMarcarticulo();
      setSelectMarId(pArticulo);
      setMar1(pArticulo);
      setLoade(false);
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

  var rubroSelect = selectRubro?.map(function (obj) {
    var rObj = {
      value: obj?.rubro,
      label: obj?.rup_descripcion,
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

  const handleChangeVehiculo = async function (event) {
    setVehiculoName(event);
    setRudID(null);
    setMarcaId([]);
    setRubroId(null);
    setSelecRubro(null);
    var newproduct = event.map(function (data) {
      var data = data.value;
      return data;
    });
    var marid = newproduct.toString();
    const Dato = {
      mau_id: marid,
    };
    setMarID(marid);

    if (event?.length === 0) {
      setProductos(productos1);
      setSelectSrubro(superR1);
      setSelectMarId(mar1);
    } else {
      setLoade(true);
      const listrubro = await superrubrosMarcId(Dato);
      setSelectSrubro(listrubro);
      const pArticulo = await pMarcarticulo(Dato);
      setSelectMarId(pArticulo);
      const productAuto = await productosMarcAuto(
        auth.CLI_ID,
        auth.LPP_ID,
        Dato
      );
      setProductos(productAuto);
      setLoade(false);
    }
  };

  const handleSelectFamilia = async function (event) {
    setFamilia(event.label);
    setMarcaId([]);
    setRubroId(null);
    setRudID(event);
    const Dato = {
      mau_id: marID,
      rud_id: event.value,
    };
    setLoade(true);
    const psRubro = await rubrosP(Dato);
    setSelecRubro(psRubro);
    const pArticulo = await pMarcarticulo(Dato);
    setSelectMarId(pArticulo);
    const productAuto = await productosMarcAuto(auth.CLI_ID, auth.LPP_ID, Dato);
    setProductos(productAuto);
    setLoade(false);
  };

  const handleSelectRubro = async function (event) {
    setRubro(event.label);
    setRubroId(event);
    setMarcaId([]);
    const Dato = {
      mau_id: marID,
      rud_id: rudID.value,
      mar_id: "",
      rubro: event.value,
    };
    setLoade(true);
    const pArticulo = await pMarcarticulo(Dato);
    setSelectMarId(pArticulo);
    const productAuto = await productosMarcAuto(auth.CLI_ID, auth.LPP_ID, Dato);
    setProductos(productAuto);
    setLoade(false);
  };

  const handleChangeMarca = async function (event) {
    setMarca(event);
    setMarcaId(event);
    var newmarca = event.map(function (data) {
      var data = data.value;
      return data;
    });
    var marcid = newmarca.toString();

    if (event?.length === 0 && !rudID && marID?.length === 0) {
      console.log("entreaqyuu");
      setProductos(productos1);
    } else {
      setLoade(true);
      const Dato = {
        mau_id: marID,
        rud_id: rudID?.value ? rudID.value : "",
        mar_id: marcid,
        rubro: rubroId?.value ? rubroId.value : "",
      };

      const productAuto = await productosMarcAuto(
        auth.CLI_ID,
        auth.LPP_ID,
        Dato
      );
      setProductos(productAuto);
      setLoade(false);
    }
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
    /////pt-[200px] xl:pt-[245px] anterior
    <div className="xl:pt-[180px] 2xl:pt-[245px] pb-24 bg-white">
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
                Busqueda Familias
              </p>
            </Link>
            ,
            {vehiculoName?.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
                className="text-xs"
              >
                <div className="flex space-x-1 items-center">
                  {vehiculoName?.map((vehiculo) => (
                    <p key="" className="text-gris text-xs">
                      {vehiculo?.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {!familia ? null : (
              <p key="" className="text-gris text-xs">
                {familia}
              </p>
            )}
            ,
            {marcaId.length > 0 ? (
              <Link
                underline="hover"
                key="2"
                color="inherit"
                href="/"
                onClick={handleClick}
                className="text-xs"
              >
                <div className="flex space-x-1 items-center">
                  {marca?.map((marca) => (
                    <p key="" className="text-gris text-xs">
                      {marca.label}
                    </p>
                  ))}
                </div>
              </Link>
            ) : null}
            ,
            {!rubroId ? null : (
              <p key="" className="text-gris text-xs">
                {rubro}
              </p>
            )}
            ,
            <p key="" className="text-gris text-xs">
              Página {page + 1} de{" "}
              {(productos?.length / rowsPerPage).toFixed(0)}
            </p>
            ,
          </Breadcrumbs>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-2 font-montserrat  px-2 rounded-t-md bg-white border border-[#D9D9D9]">
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Vehículo</p>
          <div className="flex space-x-2 w-full items-center">
            <Select
              isMulti
              name="vehiculos"
              closeMenuOnSelect={false}
              options={autoSelect}
              className={
                expand === "expand"
                  ? "text-black font-montserrat w-full expand"
                  : "text-black font-montserrat w-full"
              }
              placeholder="Todos los vehículos..."
              onChange={handleChangeVehiculo}
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
          <p className="text-[#969696] font-bold text-xs uppercase">Familias</p>

          <Select
            value={rudID}
            options={superRubroSelect}
            placeholder="Todas las familias..."
            className="text-black font-montserrat"
            onChange={handleSelectFamilia}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Rubros</p>

          <Select
            value={rubroId}
            options={rubroSelect}
            placeholder="Todos los rubros..."
            className="text-black font-montserrat"
            onChange={handleSelectRubro}
          />
        </div>
        <div className="w-full p-2">
          <p className="text-[#969696] font-bold text-xs uppercase">Marcas</p>
          <div className="flex space-x-2 w-full items-center">
            <Select
              value={marcaId}
              isMulti
              name="marcas"
              closeMenuOnSelect={false}
              options={marcaArticuloSelect}
              className={
                expand === "expand"
                  ? "text-black font-montserrat w-full expand"
                  : "text-black font-montserrat w-full"
              }
              placeholder="Todas las marcas..."
              onChange={handleChangeMarca}
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

      <div className=" font-montserrat">
        {loade ? (
          <div className="mt-20 flex item-center justify-center w-full text-center">
            <CircularProgress />
          </div>
        ) : (
          <Table>
            <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
              <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    Artículo
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-start">
                    Aplicaciones
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-start">
                    Marca
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-start">
                    Costo
                  </div>
                </TableCell>
                <TableCell>
                  <div className="font-bold text-white flex justify-center">
                    Cantidad
                  </div>
                </TableCell>
                <TableCell>
                  <div></div>
                  <div className="font-bold text-white flex justify-start">
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
                <RowBuscadorFamilia producto={producto} />
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
        )}
      </div>
    </div>
  );
}

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
