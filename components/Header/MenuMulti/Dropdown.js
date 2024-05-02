import React from "react";
import MenuItems from "./MenuItems";

export default function Dropdown(props) {
  const { setBuscador, buscador, submenus, dropdown, depthLevel } = props;
  const newDepthLevel = depthLevel + 1;
  const dropdownClass =
    newDepthLevel > 1 ? "top-0 left-full text-black" : "text-black";

  return (
    <div>
      <ul
        className={`absolute text-black text-sm  font-bold bg-white rounded-md py-3 space-y-2 border border-gray-400 ${dropdownClass} ${
          dropdown ? "block" : "hidden"
        }`}
      >
        {submenus.map((submenu, index) => (
          <MenuItems
            items={submenu}
            key={index}
            depthLevel={newDepthLevel}
            buscador={buscador}
            setBuscador={setBuscador}
          />
        ))}
      </ul>
    </div>
  );
}
