import React from "react";

export default function Esparte(props) {
  const { esparte, setBuscar, setBuscador } = props;

  let arr = esparte?.split(",");
  
  
  function handlebuscar(event) {
    setBuscar(event);
    //router.push(`/?query=${event}`)
    setBuscador("Rapida");
  }

  return (
    <div className="flex font-normal ">
      {arr?.map((ar) => (
        <div className="flex flex-row ">
          <p
            className="cursor-pointer hover:border-b-2 hover:border-amarillo "
            onClick={() => handlebuscar(ar)}
          >
            {ar}&nbsp;&nbsp;
          </p>
        </div>
      ))}
    </div>
  );
}
