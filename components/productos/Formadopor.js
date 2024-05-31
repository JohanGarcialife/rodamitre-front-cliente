import React from "react";
import { useRouter } from "next/router";

export default function Formadopor(props) {
  const { formadopor } = props;
  const router = useRouter();
  console.log(formadopor, "string");

  let arr = formadopor?.split(",");

  function handlebuscar(event) {
    router.push(`/busquedaRapida?query=${event.trim()}`);
  }

  return (
    <div className="font-normal grid grid-cols-3">
      {arr?.map((ar) => (
        <div className=" ">
          <p
            className="cursor-pointer hover:border-b-2 hover:border-amarillo text-xs "
            onClick={() => handlebuscar(ar)}
          >
            {ar}
          </p>
        </div>
      ))}
    </div>
  );
}
