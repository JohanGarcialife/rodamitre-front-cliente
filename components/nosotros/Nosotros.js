import React from "react";
import Image from "next/image";

export default function Nosotros() {
  return (
    <>
      <div className="px-12 py-28 bg-white font-montserrat" id="nosotros">
        <h2 className="text-amarillo text-6xl font-semibold mb-5">
          NUESTRA TRAYECTORIA
        </h2>
        <h3 className="text-black font-light text-3xl mb-10">
          25 AÑOS EN LA DISTRIBUCION DE AUTOPARTES
        </h3>

        <div className="flex justify-between space-x-11">
          <div className="w-1/3">
            <p className="text-gris font-extrabold text-4xl mb-5">
              Nos dedicamos a cubrir las necesidades de las casas de repuestos
              automotrices
            </p>
            <div className="h-1 w-1/4 bg-gris/50 "></div>
          </div>
          <div className="w-1/3">
            <p className="text-gris text-sm">
              Rodamitre nace en el año 1989 en la Ciudad Autónoma de Buenos
              Aires y hoy con más de 25 años en el mercado se ha convertido en
              un referente en la distribución de autopartes, impulsada desde sus
              inicios por la búsqueda permanente de la excelencia en el
              servicio, calidad y el capital humano. Nos dedicamos a cubrir las
              necesidades de las casas de repuestos automotrices con la venta de
              todo lo necesario para motor, suspensión, embrague, frenos,
              transmisión, rodamientos y encendido.
            </p>
          </div>
          <div className="w-1/3">
            <p className="text-gris text-sm">
              Nuestra estrategia comercial se apoya en sólidas bases de conducta
              que nos han consolidado como una de las opciones más atractivas
              para Clientes y Proveedores. Nuestro objetivo es continuar con el
              crecimiento constante y sustentable que venimos desarrollando
              desde hace años, trabajando para ofrecer a nuestros clientes una
              propuesta superadora a través de diferenciales estratégicos de
              nuestra organización.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#f5f5f5] px-12 py-28 font-montserrat">
        <div className="flex justify-between space-x-4 w-full">
          <div className="w-1/3">
            <div>
              <Image
                src="/icono-vision.png"
                height={100}
                width={100}
                alt="logo"
                className=""
              />
            </div>
            <p className="text-amarillo text-2xl font-semibold mt-5 mb-3">
              VISION
            </p>
            <p className="text-black">
              Efficiently re-engineer pandemic processes vis-a-vis
              bricks-and-clicks partnerships. Proactively coordinate fully
              researched relationships rather than.
            </p>
          </div>
          <div className="w-1/3 text-center">
            <div className="flex justify-center">
              <Image
                src="/icono-servicio2.png"
                height={100}
                width={100}
                alt="logo"
                className=""
              />
            </div>
            <p className="text-amarillo text-2xl font-semibold mt-5 mb-3">
              VISION
            </p>
            <p className="text-black ">
              Efficiently re-engineer pandemic processes vis-a-vis
              bricks-and-clicks partnerships. Proactively coordinate fully
              researched relationships rather than.
            </p>
          </div>
          <div className="w-1/3 text-end ">
            <div className="flex justify-end">
              <Image
                src="/icono-valores.png"
                height={100}
                width={100}
                alt="logo"
                className=""
              />
            </div>
            <p className="text-amarillo text-2xl font-semibold mt-5 mb-3">
              VISION
            </p>
            <p className="text-black">
              Efficiently re-engineer pandemic processes vis-a-vis
              bricks-and-clicks partnerships. Proactively coordinate fully
              researched relationships rather than.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
