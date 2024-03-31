import React, { useEffect, useState } from "react";
import Image from "next/image";
import Topbar from "./topbar/Topbar";
import Menu from "./menu/Menu";
import { IoIosArrowDown } from "react-icons/io";
import useAuth from "@/hooks/useAuth";

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
        <div className="absolute top-0 w-full z-50 bg-azul">
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
          <div className="px-12">
            <Topbar
              show={show}
              setShow={setShow}
              handleOpen={handleOpen}
              handleClose={handleClose}
              isLogin={isLogin}
              setIsLogin={setIsLogin}
            />
          </div>
          <div className="flex items-end pb-3 justify-between px-12">
            <Image
              src="/rodamitre-logo.png"
              height={150}
              width={300}
              alt="Roadmitre logo"
              className="h-fit"
            />
            <div className="pb-3">
              <div className="py-3 mb-3 border-b border-white w-full">
                <p className="text-white text-2xl font-montserrat text-center">
                  BUSQUEDAS
                </p>
              </div>
              <div className="flex items-center space-x-5">
                <p
                  onClick={() => setBuscador("Familia")}
                  className={
                    buscador === "Familia"
                      ? "text-white text-lg text-center cursor-pointer border-b-2 border-amarillo"
                      : "text-white text-lg text-center cursor-pointer"
                  }
                >
                  FAMILIA
                </p>
                <p
                  onClick={() => setBuscador("Vehiculo")}
                  className={
                    buscador === "Vehiculo"
                      ? "text-white text-lg text-center cursor-pointer border-b-2 border-amarillo"
                      : "text-white text-lg text-center cursor-pointer"
                  }
                >
                  VEHICULO
                </p>
                <p
                  onClick={() => setBuscador("Rapida")}
                  className={
                    buscador === "Rapida"
                      ? "text-white text-lg text-center cursor-pointer border-b-2 border-amarillo"
                      : "text-white text-lg text-center cursor-pointer"
                  }
                >
                  RAPIDA
                </p>
              </div>
            </div>
            <div className="flex items-center pb-3 text-lg space-x-5">
              <div
                onClick={() => setBuscador("Oferta")}
                className="flex items-center  space-x-1 cursor-pointer"
              >
                <p className="text-white  text-center">OFERTAS</p>
                <IoIosArrowDown className="text-white text-center" />
              </div>

              <div
                onClick={() => setBuscador("Reclamo")}
                className="flex items-center  space-x-1 cursor-pointer"
              >
                <p className="text-white  text-center">RECLAMOS</p>
                <IoIosArrowDown className="text-white text-center" />
              </div>
              <div
                onClick={() => setBuscador("Garantia")}
                className="flex items-center  space-x-1 cursor-pointer"
              >
                <p className="text-white text-center">GARANTIAS</p>
                <IoIosArrowDown className="text-white text-center" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
