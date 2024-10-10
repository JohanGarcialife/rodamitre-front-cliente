import React, { useEffect, useState } from "react";
import Image from "next/image";
import Topbar from "./topbar/Topbar";
import Menu from "./menu/Menu";
import useAuth from "@/hooks/useAuth";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/features/cartSlice";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import MenuMulti from "./MenuMulti/MenuMulti";
import Link from "next/link";

export default function Header(props) {
  const {
    show,
    setShow,
    handleOpen,
    handleClose,
    isLogin,
    setIsLogin,
    setBuscador,
    buscador,
  } = props;
  const [scrolled, setScrolled] = useState(false);

  const { auth, logout } = useAuth();
  const items = useSelector(selectCartItems);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 720) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {!auth ? (
        <>
          {scrolled === false ? (
            <div className="absolute top-0 w-full z-50">
              <div className="px-12">
                <Topbar
                  show={show}
                  setShow={setShow}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
                <Menu />
              </div>
            </div>
          ) : (
            <div className="fixed bg-azul/75 top-0 w-full z-50">
              <div className="px-12">
                <Topbar
                  show={show}
                  setShow={setShow}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  isLogin={isLogin}
                  setIsLogin={setIsLogin}
                />
                <Menu />
              </div>
            </div>
          )}
        </>
      ) : (
        /// static anterior
        <div className="absolute top-0 w-full  z-50 bg-azul">
          <div>
            <Image
              src="/austin-distel-tLZhFRLj6nY-unsplash.jpg"
              height={100}
              width={100}
              sizes="100vw"
              style={{
                width: "100%",
              }}
              alt="Imagen"
              className="mr-3"
            />
          </div>

          <div className="flex items-center space-y-3 max-h-24 2xl:max-h-32 pb-1 2xl:pb-3 justify-between  xl:pr-24 pr-12 xl:pl-2 pl-2">
            <div className="flex space-x-24 items-center ">
              <div className="w-1/3 flex h-full items-center justify-start xl:justify-center">
                <Link href="/">
                  <Image
                    src="/rodamitre-logo.png"
                    height={150}
                    width={300}
                    alt="Roadmitre logo"
                    className="h-fit"
                  />
                </Link>
              </div>

              <div className="pb-3 w-1/3 flex flex-col items-center">
                <div className="py-2 mb-2 border-b border-white w-full">
                  <p className="text-white text-lg 2xl:text-2xl font-montserrat text-center">
                    BUSQUEDAS
                  </p>
                </div>
                <div className="flex items-center space-x-5">
                  <Link href="/busquedaRapida">
                    <p
                      //onClick={() => setBuscador("Rapida")}
                      className={
                        buscador === "Rapida"
                          ? "text-white text-md 2xl:text-2xl text-center cursor-pointer border-b-2 border-amarillo"
                          : "text-white text-md 2xl:text-2xl text-center cursor-pointer"
                      }
                    >
                      RAPIDA
                    </p>
                  </Link>

                  <Link href="/buscadorVehiculo">
                    <p
                      //onClick={() => setBuscador("Vehiculo")}
                      className={
                        buscador === "Vehiculo"
                          ? "text-white text-md 2xl:text-2xl text-center cursor-pointer border-b-2 border-amarillo"
                          : "text-white text-md 2xl:text-2xl text-center cursor-pointer"
                      }
                    >
                      VEHICULO
                    </p>
                  </Link>

                  <Link href="/buscadorFamilia">
                    <p
                      //onClick={() => setBuscador("Familia")}
                      className={
                        buscador === "Familia"
                          ? "text-white text-md 2xl:text-2xl text-center cursor-pointer border-b-2 border-amarillo"
                          : "text-white text-md 2xl:text-2xl text-center cursor-pointer"
                      }
                    >
                      FAMILIA
                    </p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="pb-3 text-lg w-1/3 space-x-5">
              <div className="py-2 mb-1  w-full">
                <div className="flex justify-end items-center w-full space-x-4 xl:pr-24">
                  <div className="relative">
                    <Link href="/carrito">
                      <BsCart4 className="text-white text-xl 2xl:text-2xl font-light cursor-pointer" />
                      {items.length ? (
                        <div className="bg-amarillo absolute -bottom-4 -right-2 z-30 rounded-full px-2 py-1 ">
                          <p className="text-sm text-azul font-bold">
                            {items.length}
                          </p>
                        </div>
                      ) : null}
                    </Link>
                  </div>
                  <div className="flex items-center space-x-1">
                    <IoArrowBackCircleOutline
                      onClick={logout}
                      className="text-white text-xl 2xl:text-2xl font-light cursor-pointer"
                    />
                    <p className="text-white text-xl  2xl:text-2xl cursor-pointer">
                      Salir
                    </p>
                  </div>
                </div>
              </div>

              <MenuMulti buscador={buscador} setBuscador={setBuscador} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
