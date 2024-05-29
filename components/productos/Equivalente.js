import React from "react";
import Image from "next/image";


export default function Equivalente(props) {
  const { equi } = props;
  return (
    <div className="flex items-center justify-start space-x-3 mt-2">
      <Image
        src="/VKPC-85097_1_SKF.jpg"
        height={100}
        width={100}
        alt="Imagen"
        className="mr-3"
      />
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <p>{equi?.codigo} </p>
        </div>
      </div>
    </div>
  );
}
