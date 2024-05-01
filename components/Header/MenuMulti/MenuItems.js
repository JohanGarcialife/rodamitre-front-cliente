import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import Dropdown from "./Dropdown";

export default function MenuItems(props) {
  const { setBuscador, buscador, items } = props;
  console.log(items);
  return (
    <li
      className="flex items-center  space-x-1 cursor-pointer"
      onClick={() => setBuscador(items.buscador)}
    >
      {items.submenu ? (
        <>
          <button type="button" aria-haspopup="menu">
            {items.title}{" "}
          </button>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
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
