import React from "react";
import Navbar from "./Navbar";

export default function MenuMulti(props) {
  const { setBuscador, buscador } = props;

  const menuItemsData = [
    {
      title: "OFERTA",
      buscador: "Oferta",
      submenu: [
        {
          title: "Artículos en oferta",
          url: "/",
          submenu: [
            {
              title: "Todo",
              url: "/",
            },
            {
              title: "Bomba de Agua",
              url: "/",
            },
            {
              title: "Kit de distribución",
              url: "/",
            },
            {
              title: "Líquido de frenos",
              url: "/",
            },
            {
              title: "Líquido refrigerante",
              url: "/",
            },
          ],
        },

        {
          title: "Flyers",
          url: "/",
        },
        {
          title: "Novedades",
          url: "/",
        },
      ],
    },

    {
      title: "RECLAMOS",
      buscador: "Reclamo",
      submenu: [
        {
          title: "Reclamos operativos",
          url: "/",
          submenu: [
            {
              title: "Nuevo Reclamo",
              url: "/",
            },
            {
              title: "Seguimiento",
              url: "/",
            },
          ],
        },
        {
          title: "Garantías",
          url: "/",
          submenu: [
            {
              title: "Nueva Garantía",
              url: "/",
            },
            {
              title: "Seguimiento",
              url: "/",
            },
          ],
        },
      ],
    },

    {
      title: "ADMINISTRACIÓN",
      buscador: "Administracion",
      submenu: [
        {
          title: "Lista de precios",
          url: "/",
        },
        {
          title: "Panel de control",
          url: "/",
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
