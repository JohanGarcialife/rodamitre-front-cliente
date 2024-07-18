import React from "react";

export default function MarcaRapida(props) {
  const { producto } = props;
  return (
    <div className="h-[100px] flex flex-col items-center  text-center  justify-center font-bold">
      <p>{producto?.marca_articulo} </p>
      {
        producto?.pre_id_principal === producto?.pre_id
          ? ""
          : !producto?.pre_id_principal
          ? ""
          : producto?.pre_id_principal != producto?.pre_id && (
              <div className="text-center">
                <p>({producto.codigo}) </p>
              </div>
            ) /* : !producto?.pre_id_principal && "" */

        /* (
        <div className="text-left">
          <p>{codiE.codigo}</p>
        </div>
      ) */
      }
    </div>
  );
}
