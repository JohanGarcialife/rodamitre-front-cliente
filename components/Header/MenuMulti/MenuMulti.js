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
          buscador: "/",
          submenu: [
            {
              title: "Todo",
              buscador: "/",
            },
            {
              title: "Bomba de Agua",
              buscador: "/",
            },
            {
              title: "Kit de distribución",
              buscador: "/",
            },
            {
              title: "Líquido de frenos",
              buscador: "/",
            },
            {
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
          title: "Reclamos operativos",
          buscador: "Reclamo",
          submenu: [
            {
              title: "Nuevo Reclamo",
              buscador: "Reclamo",
            },
            {
              title: "Seguimiento",
              buscador: "Reclamo",
            },
          ],
        },
        {
          title: "Garantías",
          buscador: "Garantia",
          submenu: [
            {
              title: "Nueva Garantía",
              buscador: "Garantia",
            },
            {
              title: "Seguimiento",
              buscador: "Garantia",
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
          buscador: "/",
        },
        {
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
