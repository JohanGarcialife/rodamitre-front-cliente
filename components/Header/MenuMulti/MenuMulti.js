import React from "react";
import Navbar from "./Navbar";

export default function MenuMulti(props) {
  const { setBuscador, buscador } = props;

  const menuItemsData = [
    {
      busquedaId: "ofertas",
      title: "OFERTA",
      buscador: "ofertas",
      submenu: [
        {
          busquedaId: "ofertas",
          title: "Artículos en oferta",
          buscador: "ofertas",
          // submenu: [
          //   {
          //     busquedaId: "Oferta",
          //     title: "Todo",
          //     buscador: "/",
          //   },
          //   {
          //     busquedaId: "Oferta",
          //     title: "Bomba de Agua",
          //     buscador: "/",
          //   },
          //   {
          //     busquedaId: "Oferta",
          //     title: "Kit de distribución",
          //     buscador: "/",
          //   },
          //   {
          //     busquedaId: "Oferta",
          //     title: "Líquido de frenos",
          //     buscador: "/",
          //   },
          //   {
          //     busquedaId: "Oferta",
          //     title: "Líquido refrigerante",
          //     buscador: "/",
          //   },
          // ],
        },

        {
          title: "Flyers",
          buscador: "ofertas",
        },
        {
          title: "Novedades",
          buscador: "ofertas",
        },
      ],
    },

    {
      title: "RECLAMOS",
      buscador: "seguimientoReclamo",
      submenu: [
        {
          busquedaId: "Reclamo",
          title: "Reclamos operativos",
          buscador: "seguimientoReclamo",
          submenu: [
            {
              busquedaId: "nuevoReclamo",
              title: "Nuevo Reclamo",
              buscador: "nuevoReclamo",
            },
            {
              busquedaId: "seguimientoReclamo",
              title: "Seguimiento",
              buscador: "seguimientoReclamo",
            },
          ],
        },
        {
          busquedaId: "Garantías",
          title: "Garantías",
          buscador: "seguimientoGarantia",
          submenu: [
            {
              busquedaId: "nuevaGarantia",
              title: "Nueva Garantía",
              buscador: "nuevaGarantia",
            },
            {
              busquedaId: "seguimientoGarantia",
              title: "Seguimiento",
              buscador: "seguimientoGarantia",
            },
          ],
        },
      ],
    },

    {
      busquedaId: "Administracion",
      title: "ADMINISTRACIÓN",
      buscador: "Administracion",
      submenu: [
        {
          busquedaId: "Administracion",
          title: "Lista de precios",
          buscador: "/",
        },
        {
          busquedaId: "Administracion",
          title: "Panel de control",
          buscador: "/",
        },
      ],
    },
  ];

  return (
    <>
      <Navbar
        buscador={buscador}
        setBuscador={setBuscador}
        menuItemsData={menuItemsData}
      />
    </>
  );
}
