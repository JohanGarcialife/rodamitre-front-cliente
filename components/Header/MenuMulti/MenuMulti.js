import React from "react";
import Navbar from "./Navbar";

export default function MenuMulti(props) {
  const { setBuscador, buscador } = props;

  const menuItemsData = [
    {
      busquedaId: "Oferta",
      title: "OFERTA",
      buscador: "Oferta",
      submenu: [
        {
          busquedaId: "Oferta",
          title: "Artículos en oferta",
          buscador: "/",
          submenu: [
            {
              busquedaId: "Oferta",
              title: "Todo",
              buscador: "/",
            },
            {
              busquedaId: "Oferta",
              title: "Bomba de Agua",
              buscador: "/",
            },
            {
              busquedaId: "Oferta",
              title: "Kit de distribución",
              buscador: "/",
            },
            {
              busquedaId: "Oferta",
              title: "Líquido de frenos",
              buscador: "/",
            },
            {
              busquedaId: "Oferta",
              title: "Líquido refrigerante",
              buscador: "/",
            },
          ],
        },

        {
          title: "Flyers",
          buscador: "/",
        },
        {
          title: "Novedades",
          buscador: "/",
        },
      ],
    },

    {
      title: "RECLAMOS",
      buscador: "Reclamo",
      submenu: [
        {
          busquedaId: "Reclamo",
          title: "Reclamos operativos",
          buscador: "Reclamo",
          submenu: [
            {
              busquedaId: "Reclamo",
              title: "Nuevo Reclamo",
              buscador: "Reclamo",
            },
            {
              busquedaId: "Reclamo",
              title: "Seguimiento",
              buscador: "Reclamo",
            },
          ],
        },
        {
          busquedaId: "Garantías",
          title: "Garantías",
          buscador: "Garantías",
          submenu: [
            {
              busquedaId: "Garantías",
              title: "Nueva Garantía",
              buscador: "Garantías",
            },
            {
              busquedaId: "Garantías",
              title: "Seguimiento",
              buscador: "Garantías",
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
