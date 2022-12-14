import React, { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {

  const [width, setWidth] = useState<number >(200);
  const [isActive, setIsActive] = useState<boolean>(false);
  const sm: number = 648;


  useEffect(() => {
    function handleResize() {
      const { innerWidth: width } = window;
      setWidth(width);
      return width
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);


  useEffect(()=>{

    function handleinitialResize() {
      const { innerWidth: width } = window;
     
      return width
    }

    setWidth(handleinitialResize())
  },[])

  
  

  return (
    <div className="sm:w-11/12 w-full mx-auto my-1 p-0 bg-transparent  text-white flex items-start  backdrop-blur-sm justify-center transition-all duration-300 ease-linear absolute top-0 left-2/4 -translate-x-1/2">
      <div className=" cursor-pointer flex items-center mt-3 mx-3 justify-center ">
        <span><img src="/images/logo.png" alt="logo"  className="w-9 mr-2" /></span> D-News
      </div>
      <div
        className={`h-full py-2 ml-auto flex items-center gap-6 px-2 justify-end  flex-col sm:flex-row transition-all duration-300 ease-linear`}
      >
        {width < sm    && (
          <div
            className="w-full flex items-start justify-center cursor-pointer transition-all duration-300 ease-linear"
            onClick={() => setIsActive(!isActive)}
          >
            {!isActive  ? (
              <img src="/images/menu.png" alt="menu" width={"42"} />
            ) : (
              <img src="/images/close.png" alt="menu" width={"42"} />
            )}
          </div>
        )}

        {isActive || width > sm ? (
          <>
            <span className="cursor-pointer hover:bg-amber-100 shadow-lg shadow-amber-100 hover:text-zinc-800 bg-transparent  p-1.5 rounded-xl transition-all duration-300 ease-linear  ">
            <Link href={"/"}>
             Home
            </Link>
            </span>
            <span className="cursor-pointer hover:bg-amber-100 shadow-lg shadow-amber-100 hover:text-zinc-800 bg-transparent  p-1.5 rounded-xl transition-all duration-300 ease-linear  ">
            <Link href={"/AllNews"}>

             Publish
            </Link>
            </span>
          
          </>
        ) : null}
      </div>
    </div>
  );
}