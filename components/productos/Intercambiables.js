import React from "react";
import { useRouter } from "next/router";


export default function Intercambiables(props) {
  const { intercambiable, setBuscar, setBuscador } = props;
  const router = useRouter();


  let arr = intercambiable?.split(",");

  function handlebuscar(event) {
   // setBuscar(event);
    router.push(`/busquedaRapida?query=${event}`);

    
    //router.push(`/?query=${event}`)
    //setBuscador("Rapida");
  }

  return (
    <div className="flex font-normal ">
      {arr?.map((ar) => (
        <div className="flex flex-row">
          <p
            className="cursor-pointer hover:border-b-2 hover:border-amarillo text-xs"
            onClick={() => handlebuscar(ar)}
          >
            {ar}&nbsp;&nbsp;
          </p>
        </div>
      ))}
    </div>
  );
}
