import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
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
import { useTheme } from "@mui/material/styles";
import { productosCodigo } from "@/pages/api/productos";
import Esparte from "../productos/Esparte";
import Intercambianles from "../productos/Intercambiables";
import Formadopor from "../productos/Formadopor";

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

export default function BuscadorRapida(props) {
  const { auth, comparacion } = props;
  const [productos, setProductos] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [quantities, setQuantities] = useState(
    productos?.reduce((acc, producto) => {
      acc[producto?.pre_id] = 0;
      return acc;
    }, {})
  );
  console.log(productos, "codigo");

  const handleSubmit = async function (event) {
    event.preventDefault();
    console.log(event.target.codigo.value);
    const Dato = {
      codigo: event.target.codigo.value,
    };

    const productAuto = await productosCodigo(auth.CLI_ID, auth.LPP_ID, Dato);
    setProductos(productAuto);
  };

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
      <form
        className="flex space-x-10 w-full font-montserrat"
        onSubmit={handleSubmit}
      >
        <div className="w-full space-y-5">
          <div className="bg-white rounded-lg border border-black flex">
            <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 w-1/5">
              <p>Código / Ubicación</p>
            </div>
            <input
              type="text"
              name="codigo"
              className="bg-transparent p-3 w-4/5"
              placeholder="Código del artículo y/o ubicación. Ej: VKM 1258 / Mazda Ford Fiesta / VKM Fiat"
              //onChange={handleSubmit}
            />
          </div>
          <div className="w-full flex space-x-5">
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p>Interior</p>
              </div>
              <input
                type="text"
                className="bg-transparent p-3 "
                placeholder="Interior"
                name="interior"
                //   onChange={handleSubmit}
              />
            </div>
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p>Exterior</p>
              </div>
              <input
                type="text"
                className="bg-transparent p-3 "
                placeholder="Exterior"
                name="xterior"
                //  onChange={handleSubmit}
              />
            </div>
            <div className="bg-white rounded-lg border border-black flex">
              <div className="bg-amarillo text-white rounded-l-lg flex space-x-3 text-balck p-3 ">
                <p>Altura</p>
              </div>
              <input
                name="altura"
                type="text"
                className="bg-transparent p-3 "
                placeholder="Altura"
                //   onChange={handleSubmit}
              />
            </div>
          </div>
        </div>
        <div className="flex h-fit bg-amarillo text-white rounded-lg  ">
          <button
            className="flex items-center space-x-2 p-3 hover:bg-azul rounded-l-lg cursor-pointer"
            type="submit"
          >
            <p>Buscar</p>
            <FaSearch />
          </button>
          <div className="flex items-center space-x-2 p-3 hover:bg-azul rounded-r-lg cursor-pointer">
            <p>Limpiar</p>
            <IoClose className="text-2xl" />
          </div>
        </div>
      </form>
      {productos?.length <= 0 ? (
        <div classname="flex justify-center text-center mt-[200px]">
          Indique los criterios de busqueda
        </div>
      ) : (
        <div className=" font-montserrat mt-10">
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
                          {producto?.es_parte_de ? (
                            <div className="flex flex-col">
                              <p className="font-bold text-black text-left">
                                Es parte de
                              </p>
                              <Esparte esparte={producto?.es_parte_de} />
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
                                intercambiable={producto?.intercambiables}
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
                              <Formadopor formadopor={producto?.formado_por} />
                            </div>
                          ) : (
                            <></>
                          )}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-full text-center">
                    <div className="text-gris text-xs ">
                      {comparacion?.map((comparacion) => (
                        <div>
                          {comparacion.pre_id === producto?.pre_id && (
                            <div className="flex items-center space-x-2 ">
                              <div className="flex items-center space-x-1 ">
                                <p>{comparacion.marca_auto}</p>
                                <p>{comparacion.modelo}</p>
                              </div>
                              <div className="group">
                                {" "}
                                <div className="absolute z-30 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3">
                                  <p className="font-bold text-black text-base mb-0">
                                    {producto.super_rubro}
                                  </p>
                                  <p className=" text-black  text-xs	 ">
                                    {comparacion.descripcion}
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
      )}
    </>
  );
}
