import React from "react";

export default function MarcaRapida(props) {
  const { producto, c, prod } = props;
  // console.log(producto, "ver")
  // console.log(c, "informarcion")
  /////sconsole.log(c, "c")

  return (
    <div className="h-[100px] flex flex-col items-center  text-center  justify-center font-bold">
      <p>{producto?.marca_articulo} </p>

      {c?.length > 0 &&
      c[0]?.codigo_equivalente != producto?.codigo &&
      c[0]?.pre_id_equivalente === 0 ? (
        <div>
          <div className="text-center">
            <p>({producto.codigo}) </p>
          </div>
        </div>
      ) : c?.length > 0 &&
        c[0]?.codigo_equivalente != producto?.codigo &&
        c[0]?.pre_id_equivalente != 0 ? (
        <div>
          <p>({producto?.codigo}) </p>
        </div>
      ) : (
          c === undefined &&  prod.codigo != producto?.codigo && (
          <div>
            <p> ({producto?.codigo}) </p>
          </div>
        )
      )}
    </div>
  );
}
