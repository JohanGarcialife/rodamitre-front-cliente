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
  Breadcrumbs,
  Link,
  IconButton,
  Box,
  TableFooter,
  TablePagination,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";
import { productosCodigo } from "@/pages/api/productos";
import RowBuscadorFamilia from "./RowBuscadorFamilia";

export default function BuscadorRapida(props) {
  const { auth, setBuscar, buscar, setBuscador } = props;
  const [loade, setLoade] = useState(false);
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [quantities, setQuantities] = useState(
    productos?.reduce((acc, producto) => {
      acc[producto?.pre_id] = 0;
      return acc;
    }, {})
  );

  console.log(buscar, "valor");
  useEffect(() => {
    if (buscar) {
      setLoade(true);
      (async () => {
        const Dato = {
          p: buscar,
        };

        const productAuto = await productosCodigo(
          auth.CLI_ID,
          auth.LPP_ID,
          Dato
        );
        setProductos(productAuto);
        setBuscar(null);
        setLoade(false);
      })();
    }
  }, [buscar]);

  const formik = useFormik({
    initialValues: initialValues(buscar ? buscar : ""),

    /*    initialValues: {
      p: buscar ? buscar : "",
      interior: "",
      exterior: "",
      altura: "",
    }, */
    onSubmit: async (Dato) => {
      setLoade(true);
      /*inicio sesion base de datos */
      const productAuto = await productosCodigo(auth.CLI_ID, auth.LPP_ID, Dato);
      setProductos(productAuto);
      setLoade(false);
      setBuscar(null);
    },
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className=" pt-[200px] pb-24 bg-white">
      <form
        className="flex space-x-10 px-2 w-full font-montserrat"
        onSubmit={formik.handleSubmit}
      >
        <div className="w-full space-y-5">
          <div className="bg-white rounded-lg border border-black flex">
            <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 w-1/5">
              <p>Código / Ubicación</p>
            </div>
            <input
              type="text"
              name="p"
              className="bg-transparent p-3 w-4/5"
              placeholder="Código del artículo y/o ubicación. Ej: VKM 1258 / Mazda Ford Fiesta / VKM Fiat"
              onChange={formik.handleChange}
              value={formik.values.p}
            />
          </div>
          <div className="w-full flex space-x-5">
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p>Interior</p>
              </div>
              <input
                type="text"
                className="bg-transparent p-3 "
                placeholder="Interior"
                name="interior"
                onChange={formik.handleChange}
                value={formik.values.interior}
              />
            </div>
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p>Exterior</p>
              </div>
              <input
                type="text"
                className="bg-transparent p-3 "
                placeholder="Exterior"
                name="exterior"
                onChange={formik.handleChange}
                value={formik.values.exterior}
              />
            </div>
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-azul text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p>Altura</p>
              </div>
              <input
                name="altura"
                type="text"
                className="bg-transparent p-3 "
                placeholder="Altura"
                onChange={formik.handleChange}
                value={formik.values.altura}
              />
            </div>
          </div>
        </div>
        <div className="flex h-fit bg-azul text-white rounded-lg  ">
          <button
            className="flex items-center space-x-2 p-3 hover:bg-amarillo rounded-l-lg cursor-pointer"
            type="submit"
          >
            <p>Buscar</p>
            <FaSearch />
          </button>
          <div
            className="flex items-center space-x-2 p-3 hover:bg-amarillo rounded-r-lg cursor-pointer "
            onClick={() => formik.resetForm()}
          >
            <p>Limpiar</p>
            <IoClose className="text-2xl" />
          </div>
        </div>
      </form>
      {productos?.length <= 0 ? (
        <div className="flex items-center justify-center font-montserrat text-center mt-20 text-4xl text-azul ">
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
                  <RowBuscadorFamilia
                    productos={productos}
                    producto={producto}
                    setBuscar={setBuscar}
                    buscar={buscar}
                    setBuscador={setBuscador}
                  />
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
      )}
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

function initialValues(buscar) {
  return {
    p: buscar || "",
    interior: "",
    exterior: "",
    altura: "",
  };
}
