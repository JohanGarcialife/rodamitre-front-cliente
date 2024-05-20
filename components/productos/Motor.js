import React from "react";

export default function Motor(props) {
  const { motor } = props;

  const array = JSON.parse(motor);

  return (
    <div className="font-black">
      {array?.map((a) => (
        <p>{a?.mde_descripcion}</p>
      ))}
    </div>
  );
}
