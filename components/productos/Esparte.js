import React from "react";
import { useRouter } from "next/router";


export default function Esparte(props) {
  const { esparte, setBuscar, setBuscador } = props;
  const router = useRouter();
  


  let arr = esparte?.split(",");

  function handlebuscar(event) {
    //setBuscar(event);
    //router.push(`/?query=${event}`)
    //setBuscador("Rapida");
    router.push(`/busquedaRapida?query=${event}`);
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      {arr?.map((ar) => (
        <div className="text-center ">
          <p
            className="cursor-pointer hover:border-b-2 hover:border-amarillo flex flex-wrap "
            onClick={() => handlebuscar(ar)}
          >
            {ar}
          </p>
        </div>
      ))}
    </div>
  );
}
