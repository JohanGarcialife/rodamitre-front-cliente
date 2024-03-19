import React, { useState } from "react";
import Image from "next/image";

export default function Distribuidores() {
  const [show, setShow] = useState(true);

  setTimeout(function () {
    setShow(!show);
  }, 10000);

  return (
    <div
      className="bg-[#f5f5f5] text-black relative flex justify-between py-10 px-12 font-montserrat"
      id="marcas"
    >
      <div className="w-1/4">
        <p className="text-gris mb-3 text-lg">DISTRIBUIDOR OFICIAL:</p>
        <div className="h-1 w-1/4 bg-gris "></div>
      </div>
      <div className="w-3/4">{show === true ? <Logos /> : <Logos2 />}</div>
    </div>
  );
}

function Logos() {
  return (
    <div className="w-full flex items-center justify-between font-montserrat">
      <Image
        src="/logo-timken-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-75 "
      />
      <Image
        src="/logo-dayco-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-200"
      />
      <Image
        src="/logo-frasle-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-500 "
      />
      <Image
        src="/logo-fremax-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-700 "
      />
    </div>
  );
}

function Logos2() {
  return (
    <div className="w-full flex items-center justify-between font-montserrat">
      <Image
        src="/logo-mahle-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-75 "
      />
      <Image
        src="/logo-hescher-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-200 "
      />
      <Image
        src="/logo-peer-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-500 "
      />
      <Image
        src="/logo-cofap-2.png"
        height={88}
        width={177}
        alt="logo"
        className="animate-fade-up animate-delay-700 "
      />
    </div>
  );
}
