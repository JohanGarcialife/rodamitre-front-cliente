import React from "react";

export default function Esparte(props) {
  const { esparte } = props;
  console.log(esparte, "props")

  let arr = esparte?.split(",");
  console.log(arr,"qe traes");


  return (
    <div className="flex font-normal ">
              {arr?.map((ar) => (
             <div className="flex flex-row">            
          <p className="cursor-pointer hover:border-b-2 hover:border-amarillo ">
            {ar}&nbsp;&nbsp;
          </p>             
        </div>
      ))}
    </div>
  );
}
