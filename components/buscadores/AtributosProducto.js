import React from "react";

function AtributosProducto(props) {
  const { atributos } = props;

  const array = JSON.parse(atributos);

  return (
    <div className="grid grid-cols-3 space-x-3 ">
      {array.map((a) => (
        <>
          {a.pra_valor != 0 ? (
        <div>
            <div className="space-y-3">
              <div className="bg-amarillo w-full px-10 py-1 ">
                <p className="text-azul font-bold">{a.atr_descripcion}</p>
              </div>
              <p>{a.pra_valor}</p>
            </div>
            </div>
            ) : null}
        </>
      ))}
    </div>
  );
}

export default AtributosProducto;
