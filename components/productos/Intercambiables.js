import React from "react";
import { useRouter } from "next/router";

export default function Intercambiables(props) {
  const { intercambiable } = props;
  const router = useRouter();

  let arr = intercambiable?.split(",");

  function handlebuscar(event) {
    router.push(`/busquedaRapida?query=${event.trim()}`);
  }

  return (
    <div className="flex font-normal  gap-x-2 ">
      {arr?.map((ar) => (
        <div className="flex flex-row">
          <p
            className="cursor-pointer hover:border-b-2 hover:border-amarillo text-xs"
            onClick={() => handlebuscar(ar)}
          >
            {ar}
          </p>
        </div>
      ))}
    </div>
  );
}
