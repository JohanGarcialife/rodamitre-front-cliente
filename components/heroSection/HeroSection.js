import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaCheck } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
import { loginApi } from "@/pages/api/clientes";

export default function HeroSection() {
  const { auth, login } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      CLI_CUIT: "",
      CLI_PASSWORD: "",
    },
    validationSchema: basicSchema,
    onSubmit: async (formData) => {
      const response = await loginApi(formData);
      if (response?.token) {
        router.push("/buscadorFamilia");
        login(response.token);
        setOpen(false);
      }
    },
  });

  auth && router.push("/buscadorFamilia");

  return (
    <div
      className={
        !auth
          ? "bg-[url('/chicago-690365-lq.jpg')] bg-cover relative min-h-screen overflow-hidden font-montserrat"
          : "bg-[#f5f5f5] relative min-h-screen overflow-hidden font-montserrat"
      }
    >
      {auth === null && (
        <>
          <div className="px-12 py-24">
            <div className="mt-20 flex">
              <div className="mr-10 w-2/5 mt-5">
                <h1 className="text-3xl tracking-wide mb-5 text-white font-body">
                  <span className="font-semibold">Más de 25 años</span> en la
                  distribución de Autopartes
                </h1>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Servicio</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Confianza</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Eficiencia</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Flexibilidad</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Conocimiento</p>
                </div>
                <div className="text-white flex w-full items-center space-x-4 border-b border-dotted	border-white py-3">
                  <FaCheck />
                  <p>Responsabilidad</p>
                </div>
              </div>

              <form
                className="bg-white/25 p-8 w-2/5 h-fit"
                onSubmit={formik.handleSubmit}
              >
                <div className="flex justify-center text-center mb-5 px-10">
                  <p className="text-white font-bold text-3xl">
                    Ingresa a nuestro Catálogo
                  </p>
                </div>
                <div className="flex items justify-between">
                  <div className="mt-2 space-y-6 w-1/3 ">
                    <p className="text-white">Usuario</p>
                    <p className="text-white">Contraseña</p>
                  </div>

                  <div className="space-y-6 w-2/3">
                    <input
                      className={
                        formik.errors.CLI_CUIT && formik.touched.CLI_CUIT
                          ? "pl-3 py-1 w-full rounded-md text-black bg-red-300"
                          : "pl-3 py-1 w-full rounded-md text-black"
                      }
                      type="text"
                      placeholder="Username"
                      name="CLI_CUIT"
                      onChange={formik.handleChange}
                    />
                    <input
                      className={
                        formik.errors.CLI_PASSWORD &&
                        formik.touched.CLI_PASSWORD
                          ? "pl-3 py-1 w-full rounded-md text-black bg-red-300"
                          : "pl-3 py-1 w-full rounded-md text-black"
                      }
                      type="password"
                      placeholder="Your password"
                      name="CLI_PASSWORD"
                      onChange={formik.handleChange}
                      error={formik.errors.CLI_PASSWORD}
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 bg-amarillo text-white rounded-sm hover:bg-azul"
                    >
                      INGRESAR
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="absolute bottom-0">
            <div className="flex items-center justify-center">
              <img src="./mask.svg" className="scale-375 z-40" />
              <IoIosArrowDown className="absolute -bottom-0 max-w-screen  scale-150 text-gris z-50" />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

const basicSchema = Yup.object().shape({
  CLI_CUIT: Yup.string().required("Required"),
  CLI_PASSWORD: Yup.string().required("Required"),
});
