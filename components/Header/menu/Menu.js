import React, { useEffect, useState } from 'react'
import Image from "next/image"

export default function Menu() {
  const [active, setActive] = useState("#")
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 720) {
        setScrolled(true);
      } else {
        setScrolled(false);
        setActive("#")
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    {scrolled === false ?
    <div className='flex items-center space-x-8 pb-4 pt-2'>
      <Image src="/rodamitre-logo.png" height={100} width={200} alt="Roadmitre logo"  className=""/>
      <div className='flex space-x-1 items-center'>
        
        <div onClick={() => setActive("#")} className={active === "#" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
          <p className='text-white'>
            INICIO
          </p>
        </div>
        <a href='#nosotros'>
          <div onClick={() => setActive("#nosotros")} className={active === "#nosotros" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
            <p className='text-white'>
              NOSOTROS
            </p>
          </div>
        </a>
        <a href="#productos">
          <div onClick={() => setActive("#productos")} className={active === "#productos" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
            <p className='text-white'>
              PRODUCTOS
            </p>          
          </div>
        </a>
        <a href='#marcas'>
          <div onClick={() => setActive("#marcas")} className={active === "#marcas" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
            <p className='text-white'>
              MARCAS
            </p>
          </div>
        </a> 
        <a href='#contacto'>
          <div onClick={() => setActive("#contacto")} className={active === "#contacto" ? 'cursor-pointer rounded-sm px-4 py-1 bg-amarillo' : 'cursor-pointer rounded-sm px-4 py-1 hover:animate-open hover:bg-amarillo '}>
            <p className='text-white'>
              CONTACTO
            </p>
          </div>
        </a>
      </div>
    </div> :
    <div className='flex items-center justify-center space-x-8  pt-2'>
     
      <div className='flex space-x-1 items-center'>
        
        <div onClick={() => setActive("#")} className={active === "#" ? 'cursor-pointer  px-4 py-1 bg-amarillo' : 'cursor-pointer  px-4 py-1 hover:animate-open hover:bg-black '}>
          <p className='text-white'>
            INICIO
          </p>
        </div>
        <a href='#nosotros'>
          <div onClick={() => setActive("#nosotros")} className={active === "#nosotros" ? 'cursor-pointer  px-4 py-1 bg-amarillo' : 'cursor-pointer  px-4 py-1 hover:animate-open hover:bg-black '}>
            <p className='text-white'>
              NOSOTROS
            </p>
          </div>
        </a>
        <a href="#productos">
          <div onClick={() => setActive("#productos")} className={active === "#productos" ? 'cursor-pointer  px-4 py-1 bg-amarillo' : 'cursor-pointer  px-4 py-1 hover:animate-open hover:bg-black '}>
            <p className='text-white'>
              PRODUCTOS
            </p>          
          </div>
        </a>
        <a href='#marcas'>
          <div onClick={() => setActive("#marcas")} className={active === "#marcas" ? 'cursor-pointer  px-4 py-1 bg-amarillo' : 'cursor-pointer  px-4 py-1 hover:animate-open hover:bg-black '}>
            <p className='text-white'>
              MARCAS
            </p>
          </div>
        </a> 
        <a href='#contacto'>
          <div onClick={() => setActive("#contacto")} className={active === "#contacto" ? 'cursor-pointer  px-4 py-1 bg-amarillo' : 'cursor-pointer  px-4 py-1 hover:animate-open hover:bg-black '}>
            <p className='text-white'>
              CONTACTO
            </p>
          </div>
        </a>
      </div>
    </div> 
  }
  </>
  ) 
}
