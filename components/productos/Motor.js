import React from "react";

export default function Motor(props) {
  const { motor } = props;

  const array = JSON.parse(motor);

  return (
    <div className="font-normal text-left">
      {array?.map((a) => (
        <p>{a?.mde_descripcion}</p>
      ))}
    </div>
  );
}
