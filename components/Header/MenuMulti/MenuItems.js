import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";
import Link from "next/link";

export default function MenuItems(props) {
  const { setBuscador, buscador, items, depthLevel } = props;
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
      // onClick={
      //   items.busquedaId === items.buscador
      //     ? () => setBuscador(items.buscador)
      //     : null
      // }
    >
      {items.submenu ? (
        <div className="w-full">
          <Link href={items.buscador}>
            <button
              type="button"
              aria-haspopup="menu"
              aria-expanded={dropdown ? "true" : "false"}
              // onClick={
              //   items.busquedaId === items.buscador
              //     ? () => setBuscador(items.buscador)
              //     : null
              // }
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
          </Link>
          <Dropdown
            buscador={buscador}
            setBuscador={setBuscador}
            submenus={items.submenu}
            dropdown={dropdown}
            depthLevel={depthLevel}
          />
        </div>
      ) : (
        <Link href={items.buscador}>
          <p
            className="hover:bg-amarillo px-2 w-full"
            // onClick={
            //   items.busquedaId === items.buscador
            //     ? () => setBuscador(items.buscador)
            //     : null
            // }
          >
            {items.title}
          </p>
        </Link>
      )}
    </li>
  );
}
