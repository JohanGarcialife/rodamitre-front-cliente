import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Layout from "@/layout/Layout";
import HeroSection from "@/components/heroSection/HeroSection";
import Distribuidores from "@/components/distribuidores/Distribuidores";
import Nosotros from "@/components/nosotros/Nosotros";
import Productos from "@/components/productos/Productos";
import Contacto from "@/components/contacto/Contacto";
import useAuth from "../hooks/useAuth.js";
import { Modal } from "@mui/material";
import { IoClose } from "react-icons/io5";
import { loginApi } from "./api/clientes";
import BuscadorFamilia from "@/components/buscadores/BuscadorFamilia.js";
import BuscadorRapida from "@/components/buscadores/BuscadorRapida.js";
import { useRouter } from "next/router";


export default function Home() {
  const [open, setOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [buscador, setBuscador] = useState("Rapida");
  const { auth, login } = useAuth();
  const [comparacion, setComparacion] = useState([]);
  const [buscar, setBuscar] = useState(null);
  const data = useRouter();

  const formik = useFormik({
    initialValues: {
      CLI_CUIT: "",
      CLI_PASSWORD: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (formData) => {
      const response = await loginApi(formData);
      if (response?.token) {
        setIsLogin(true);
        login(response.token);
        setOpen(false);
      }
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Layout
        handleOpen={handleOpen}
        handleClose={handleClose}
        setBuscador={setBuscador}
        buscador={buscador}
      >
        {auth ? (
          <BuscadorRapida 
          auth={auth}
          comparacion={comparacion}
          buscar={buscar}
          setBuscar={setBuscar}
          data={data}
          
          
          />
        ) : (
          <>
            <HeroSection
              isLogin={isLogin}
              setIsLogin={setIsLogin}
              buscador={buscador}
              setBuscador={setBuscador}
            />
            <Distribuidores />
            <Nosotros />
            <Productos />
            <Contacto />
          </>
        )}
      </Layout>
      <Modal open={open} onClose={handleClose} className="max-w-screen">
        <div className="flex items-center justify-center w-screen h-screen font-montserrat">
          <form
            className="relative w-96 bg-[#EDEDED] p-10 rounded-sm"
            onSubmit={formik.handleSubmit}
          >
            <IoClose
              onClick={handleClose}
              className="text-gris/75  absolute top-3 right-3 cursor-pointer "
            />
            <p className="text-amarillo text-lg font-semibold">
              SIGN IN YOUR ACCOUNT TO HAVE ACCESS TO DIFFERENT FEATURES
            </p>
            <div className="my-5 space-y-3">
              <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2">
                <p className="text-[#969696] font-bold text-[10px] ">
                  USERNAME
                </p>
                <input
                  type="text"
                  placeholder="EG; james-smith"
                  name="CLI_CUIT"
                  onChange={formik.handleChange}
                  value={formik.values.CLI_CUIT}
                  className={
                    formik.errors.CLI_CUIT && formik.touched.CLI_CUIT
                      ? "pl-4 w-full text-black bg-red-300"
                      : "pl-4 w-full text-black"
                  }
                />
              </div>
              <div className="rounded-md bg-white border border-[#D9D9D9] w-full p-2 ">
                <p className="text-[#969696] font-bold text-[10px] ">
                  PASSWORD
                </p>
                <input
                  type="password"
                  placeholder="Type password"
                  name="CLI_PASSWORD"
                  onChange={formik.handleChange}
                  value={formik.values.CLI_PASSWORD}
                  className={
                    formik.errors.CLI_PASSWORD && formik.touched.CLI_PASSWORD
                      ? "pl-4 w-full text-black bg-red-300"
                      : "pl-4 w-full text-black"
                  }
                />
              </div>
            </div>
            <div className="flex item-center space-x-2 mb-5">
              <input type="checkbox" className="rounded-sm " />
              <label className="text-gris text-xs">REMEMBER ME</label>
            </div>
            <button
              type="submit"
              /*  onClick={handleLogin}  */
              className="bg-amarillo rounded-sm px-5 py-2"
            >
              LOGIN
            </button>
            <div className="flex items-center mt-5 space-x-3">
              <p className="text-xs text-gris  cursor-pointer">
                CREATE AN ACCOUNT
              </p>
              <p className="text-xs text-gris">|</p>
              <p className="text-xs text-gris  cursor-pointer">
                FORGOT YOUR PASSWORD?
              </p>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
}

const basicSchema = Yup.object().shape({
  CLI_CUIT: Yup.string().required("Required"),
  CLI_PASSWORD: Yup.string().required("Required"),
});
