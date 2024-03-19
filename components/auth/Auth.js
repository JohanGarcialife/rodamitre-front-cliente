import React from "react";

export default function Auth(props) {
  const { show, setShow, handleOpen } = props;

  return (
    <>
      <div className="flex items-center gap-x-8 mr-16">
        <Registro show={show} setShow={setShow} />
        <Login handleOpen={handleOpen} />
      </div>
    </>
  );
}

function Registro(props) {
  const { show, setShow } = props;
  return (
    <>
      <div
        onClick={() => setShow(!show)}
        className="font-bold text-white font-montserrat text-xs opacity-75 hover:opacity-100 cursor-pointer"
      >
        <p>REGISTRATE AQUÍ</p>
      </div>
    </>
  );
}

function Login(props) {
  const { handleOpen } = props;
  return (
    <>
      <div
        onClick={handleOpen}
        className="font-bold text-white font-montserrat text-xs opacity-75 hover:opacity-100 cursor-pointer"
      >
        <p>LOGIN</p>
      </div>
    </>
  );
}
