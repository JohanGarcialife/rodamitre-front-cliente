import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";

export default function MenuItems(props) {
  const { setBuscador, buscador, items, depthLevel, url } = props;
  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    setDropdown(true);
  };

  const onMouseLeave = () => {
    setDropdown(false);
  };

  return (
    <li
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="flex items-center  space-x-1 cursor-pointer"
      onClick={
        items.busquedaId === items.buscador
          ? () => setBuscador(items.buscador)
          : null
      }
    >
      {items.submenu ? (
        <div className="w-full">
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={
              items.busquedaId === items.buscador
                ? () => setBuscador(items.buscador)
                : null
            }
            className={
              depthLevel > 0
                ? "flex items-center hover:bg-amarillo px-2 w-full text-black"
                : "flex items-center space-x-2 w-full text-white"
            }
          >
            {items.title}{" "}
            {depthLevel > 0 ? (
              <MdOutlineKeyboardArrowRight />
            ) : (
              <IoIosArrowDown />
            )}
          </button>
          <Dropdown
            buscador={buscador}
            setBuscador={setBuscador}
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </div>
      ) : (
        <p
          className="hover:bg-amarillo px-2 w-full"
          onClick={
            items.busquedaId === items.buscador
              ? () => setBuscador(items.buscador)
              : null
          }
        >
          {items.title}
        </p>
      )}
    </li>
    // <li

    //   className="flex items-center  space-x-1 cursor-pointer"
    // >
    //   <p className="text-white  text-center">OFERTAS</p>
    //   <IoIosArrowDown className="text-white text-center" />
    // </li>
  );
}
