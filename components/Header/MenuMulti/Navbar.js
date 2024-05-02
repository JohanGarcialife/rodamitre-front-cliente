import React from "react";
import MenuItems from "./MenuItems";

export default function Navbar(props) {
  const { setBuscador, buscador, menuItemsData } = props;

  const depthLevel = 0;

  return (
    <nav>
      {/* <p>Menu Multi</p> */}
      <ul className="flex justify-start items-center space-x-4 ">
        {menuItemsData.map((menu, index) => {
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
              buscador={buscador}
              setBuscador={setBuscador}
            />
          );
        })}
      </ul>
    </nav>
  );
}
