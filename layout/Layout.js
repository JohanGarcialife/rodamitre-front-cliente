import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/Footer";
import RegisterBanner from "@/components/auth/RegisterBanner";

export default function Layout(props) {
  const {
    children,
    handleOpen,
    handleClose,
    isLogin,
    setIsLogin,
    setBuscador,
    buscador,
  } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      {show === true ? <RegisterBanner show={show} setShow={setShow} /> : null}

      <div className="relative">
        <Header
          className="absolute top-0 z-50"
          show={show}
          setShow={setShow}
          handleOpen={handleOpen}
          handleClose={handleClose}
          isLogin={isLogin}
          setIsLogin={setIsLogin}
          setBuscador={setBuscador}
          buscador={buscador}
        />
        {children}
        <Footer />
      </div>
    </>
  );
}
