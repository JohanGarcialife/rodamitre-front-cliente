import Auth from "@/components/auth/Auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import useAuth from "@/hooks/useAuth";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { selectCartItems } from "@/features/cartSlice";
import Carrito from "@/components/Cart/Carrito";

export default function Topbar(props) {
  const { show, setShow, handleOpen, handleClose } = props;
  const [scrolled, setScrolled] = useState(false);
  const { auth, logout } = useAuth();

  const items = useSelector(selectCartItems);

  console.log(items);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 720) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {scrolled === false ? (
        <div className="flex justify-between w-full py-4 border-b border-white/50">
          <div className="flex gap-x-8 items-center ">
            <div className="flex gap-x-4 text-white">
              <FaFacebookF />
              <AiFillInstagram />
            </div>
            <div className="flex items-center">
              <p className="text-white font-montserrat text-xs m-0">
                CONTÁCTANOS: <span className="font-bold">(+54)4919-2299</span>
              </p>
            </div>
          </div>
          {!auth ? (
            <div className="flex items-center">
              <Auth
                show={show}
                setShow={setShow}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <BsCart4 className="text-white text-3xl font-light cursor-pointer" />
                {items.length ? (
                  <div className="bg-amarillo absolute -bottom-4 -right-2 z-30 rounded-full px-2 py-1 ">
                    <p className="text-sm text-azul font-bold">
                      {items.length}
                    </p>
                  </div>
                ) : null}
                <div
                  className={
                    items.length
                      ? "absolute -left-48 z-20 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3"
                      : "absolute -left-28 z-20 hidden group-hover:block bg-white text-black p-3 rounded-md border border-gris space-y-3"
                  }
                >
                  <Carrito items={items} />
                </div>
              </div>
              <IoArrowBackCircleOutline
                onClick={logout}
                className="text-white text-3xl font-light cursor-pointer"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="flex justify-between w-full py-4 ">
          <div className="flex gap-x-8 items-center ">
            <Image
              src="/rodamitre-logo.png"
              height={72}
              width={165}
              alt="Roadmitre logo"
              className=""
            />
          </div>
          <div className="flex items-center">
            <p className="text-white font-montserrat text-xs m-0">
              CONTÁCTANOS: <span className="font-bold">(+54)4919-2299</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
