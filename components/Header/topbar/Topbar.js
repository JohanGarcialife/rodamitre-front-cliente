import Auth from "@/components/auth/Auth";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import useAuth from '@/hooks/useAuth';


export default function Topbar(props) {
  const { show, setShow, handleOpen, handleClose, isLogin, setIsLogin } = props;
  const [scrolled, setScrolled] = useState(false);
  const { auth, logout } = useAuth();


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
          {/* isLogin === false */ !auth ? 
            <div className="flex items-center">
              <Auth
                show={show}
                setShow={setShow}
                handleOpen={handleOpen}
                handleClose={handleClose}
              />
            </div>
           : 
            <IoArrowBackCircleOutline
              onClick={ logout /* () => setIsLogin(!isLogin) */}
              className="text-white text-3xl font-light cursor-pointer"
            />
        }
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
