import Image from "next/image";
import React from "react";


export default function ProductoInfoE(props) {
  const { producto, setBuscar, buscar, setBuscador } = props;
  return (
    <div className="font-bold flex items-center justify-start space-x-3">
      <Image
        src="/VKPC-85097_1_SKF.jpg"
        height={100}
        width={100}
        alt="Imagen"
        className="mr-3"
      />
    </div>
  );
}
