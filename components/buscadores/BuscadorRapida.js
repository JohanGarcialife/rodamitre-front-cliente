import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useFormik } from "formik";
import { LuChevronFirst, LuChevronLast } from "react-icons/lu";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Box,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { productosCodigo, codigoP } from "@/pages/api/productos";
import RecommendablesRow from "../productos/RecommendablesRow";
import { useRouter } from "next/router";
import RowBusquedaRapida from "./RowBusquedaRapida";
import { AutoComplete } from "primereact/autocomplete";

export default function BuscadorRapida(props) {
  const { auth, setBuscar, data } = props;
  const [loade, setLoade] = useState(false);
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState([]);
  const [equivalente, setEquivalente] = useState([]);

  setBuscar(data?.query.query);

  function initialValues() {
    return {
      p: data.query.query || "",
      interior: "",
      exterior: "",
      altura: "",
    };
  }

  useEffect(() => {
    if (data?.query?.query) {
      formik.values.p = data.query.query;
      setLoade(true);
      (async () => {
        const Dato = {
          p: data.query.query,
        };
        const productAuto = await productosCodigo(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        setEquivalente(null);
        setBuscar(null);
        setLoade(false);
      })();
   //   setSearch([]);
    }
   // setSearch([]);
  }, [data]);

  const formik = useFormik({
    initialValues: initialValues(),
    onSubmit: async (Dato) => {
      //setSearch([]);
      setLoade(true);
      const productAuto = await productosCodigo(auth.CLI_ID, auth.LPP_ID, Dato);
      setProductos(productAuto);
      setLoade(false);
      setBuscar(null);
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    console.log(event, newPage)
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    console.log(event, setPage, "arriba")
  };

/*   let probar = "010000000400_2.JPG"
  let esono = probar.split(';')

  console.log(esono, "ver") */


//console.log(productos)
  

  const [items, setItems] = useState([]);

  const sear = async (event) => {
    if (event.query?.length > 2 && event.query?.length < 12) {
      const Dato = {
        p: event.query,
      };
      const response = await codigoP(Dato);
      var a = response?.map(function (o) {
        var p = o.CODIGO;
        return p;
      });
      setItems(a);
    } else {
      setItems([])
    }
  };

  //console.log(productos, "info");

  return (
    <div className=" pt-[200px] xl:pt-[245px] pb-24 bg-white">
      <form
        className="flex space-x-10 px-2 w-full font-montserrat"
        onSubmit={formik.handleSubmit}
      ///  onClick={() => setSearch([])}
      >
        <div className="w-full space-y-5">
          <div className="bg-white rounded-lg border border-black flex">
            <div className="bg-azul text-white rounded-l-lg flex  space-x-3 text-balck p-3 w-fit">
              <p className="font-bold">¿Qué necesita?</p>
            </div>
            {/*  <div className="flex flex-col w-4/5 relative"> */}
            <div className=" justify-center items-center w-[80%] ">
              <AutoComplete
                className="cls"
                name="p"
                placeholder="Código del artículo y/o ubicación. Ej: VKM 1258 / Mazda Ford Fiesta / VKM Fiat"
                value={formik.values.p}
                suggestions={items}
                completeMethod={sear}
                onChange={
                  formik.handleChange
                } /* onChange={(e) => setValue(e.value)} */
              />
            </div>
          </div>
          <div className="w-full flex space-x-5">
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p className="font-bold">Interior</p>
              </div>
              <input
                type="text"
                className="bg-transparent p-3 text-black"
                placeholder="Interior"
                name="interior"
                onChange={formik.handleChange}
                value={formik.values.interior}
              />
            </div>
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p className="font-bold">Exterior</p>
              </div>
              <input
                type="text"
                className="bg-transparent p-3 text-black"
                placeholder="Exterior"
                name="exterior"
                onChange={formik.handleChange}
                value={formik.values.exterior}
              />
            </div>
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p className="font-bold">Altura</p>
              </div>
              <input
                name="altura"
                type="text"
                className="bg-transparent p-3 text-black"
                placeholder="Altura"
                onChange={formik.handleChange}
                value={formik.values.altura}
              />
            </div>
          </div>
        </div>
        <div className="flex h-fit bg-azul text-white rounded-lg">
          <button
            className="flex items-center space-x-2 p-3 hover:bg-amarillo rounded-l-lg cursor-pointer"
          >
            <p className="font-bold">Buscar</p>
            <FaSearch />
          </button>
          <div
            className="flex items-center space-x-2 p-3 hover:bg-amarillo rounded-r-lg cursor-pointer text-white"
            onClick={() => formik.resetForm()}
          >
            <p className="font-bold">Limpiar</p>
            <IoClose className="text-2xl" />
          </div>
        </div>
      </form>
      {productos?.message ? (
        <div className="flex items-center justify-center font-montserrat text-center mt-20 text-4xl text-azul">
          <div>Producto no encontrado</div>
        </div>
      ) : (
        <>
          {productos?.length <= 0 ? (
            <div
              className="flex items-center justify-center font-montserrat text-center mt-20 text-4xl text-azul"
            >
              {loade === true ? (
                <CircularProgress />
              ) : (
                <div>Indique los criterios de busqueda</div>
              )}
            </div>
          ) : (
            <div className=" font-montserrat mt-10">
              {loade === true ? (
                <div className="flex items-center justify-center">
                  <CircularProgress />
                </div>
              ) : (
                <Table
                className="relative"
                >
                  <TableHead className="text-white rounded-t-lg p-5 w-full uppercase">
                    <TableRow className=" bg-azul flex justify-between !rounded-t-lg items-center">
                      <TableCell>
                        <div className="font-bold text-white flex justify-cente xl:justify-start">
                          Artículo
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-bold text-white flex justify-center xl:justify-start">
                          Aplicaciones
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-bold text-white flex justify-center xl:justify-start">
                          Marca
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-bold text-white flex justify-center xl:justify-start">
                          Costo
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-bold text-white flex justify-center xl:justify-start">
                          Cantidad
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-bold text-white flex justify-center xl:justify-start">
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
                      <>
                        <RowBusquedaRapida
                          producto={producto}
                        />
                      </>
                    ))}
                  </TableBody>
                  <TableFooter>
                    <TableRow>
                      <TablePagination
                        rowsPerPageOptions={[
                          5,
                          10,
                          15,                    
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
          )}
        </>
      )}
    </div>
  );
}

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;
  console.log(page, "paguina")
  console.log(count, "count")
  console.log(rowsPerPage, "rouws")
  console.log(onPageChange, "onPageChange")

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
