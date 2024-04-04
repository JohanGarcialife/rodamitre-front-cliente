import React from "react";

export default function Motor(props) {
  const { motor } = props;

  const array = JSON.parse(motor);
  console.log(array, "valor");

  return (
    <div className="font-black">
     {array?.map((a) => (
       
       <p>{a?.motor}</p>
      ))}
    </div>
  );
}
