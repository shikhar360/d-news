import React from "react";
import Link from "next/link";

export default function Hero() {
  function handleContact(e :string) {
    window.open(e);
  }
  return (
    <div className="flex flex-col items-center justify-center border-x-8 border-dashed border-zinc-500 font-mono">
      <div className="text-white w-full min-h-screen flex flex-col items-center justify-center sm:mt-20 mt-6 ">
        <div className="flex flex-col items-center justify-center relative ">
          <img
            src="/images/3.png"
            alt="img"
            className="w-48 p-4 absolute hover:scale-110 hover:-translate-y-36 transition-all duration-200 ease-linear top-0 left-2/4 -translate-y-1/2 -translate-x-1/2"
          />
          <img
            src="/images/1.png"
            alt="img"
            className="w-48 p-4 absolute hover:scale-110 hover:translate-x-24 transition-all duration-200 ease-linear  -right-24 z-40 "
          />
          <img
            src="/images/2.png"
            alt="img"
            className="w-48 p-4 absolute hover:scale-110 hover:-translate-x-24 transition-all duration-200 ease-linear  -left-24 z-10"
          />
          <p className="text-white sm:text-7xl text-2xl mx-2   z-30 my-auto ">Publish </p>
          <p className="text-white sm:text-7xl text-2xl mx-2   z-30 my-auto ">NEWS</p>
          <p className="text-white sm:text-7xl text-2xl mx-2   z-30 my-auto ">ONCHAIN </p>
          <img
            src="/images/4.png"
            alt="img"
            className="w-48 p-4 absolute hover:scale-110 hover:translate-y-40 transition-all duration-200 ease-linear bottom-0 left-2/4 z-50 translate-y-1/2 -translate-x-1/2 "
          />
        </div>

        <Link href={"/AllNews"} className="sm:mt-28 mt-20 rounded-xl border-2 p-4 shadow-md shadow-white hover:shadow-lg hover:shadow-white hover:scale-105 tansition-all duration-300 ease-linear sm:text-xl font-semibold text-md">
          Publish
        </Link>

        <p className=" sm:mt-12 mt-6 font-bold sm:text-4xl text-2xl">:)</p>
      </div>
      <div className="flex flex-col items-center justify-center  gap-6">
        <p className="text-3xl text-white">Sponsors</p>
        <img src="/images/nftport.png" alt="img" className="w-2/3 rounded-xl" />
      </div>
      <div>
        <p className="text-white sm:mt-24 mt-12 w-2/3 mx-auto text-xl text-center">With the D-News you can publish your own news letter and can send it to anyone. With the cutting technology of web3 all your new blog will be uploaded to the IPFS and you can see all of the news that someone has posted </p>
        <div className="flex items-center justify-center sm:flex-row flex-col text-white mt-8 mb-12 gap-4">
          <span className=" rounded-2xl border-2 p-2 shadow-md shadow-white hover:shadow-lg hover:shadow-white hover:scale-105 tansition-all duration-300 ease-linear">Secured Decentralized </span>
          <span className=" rounded-2xl border-2 p-2 shadow-md shadow-white hover:shadow-lg hover:shadow-white hover:scale-105 tansition-all duration-300 ease-linear">Multisig</span>
          <span className=" rounded-2xl border-2 p-2 shadow-md shadow-white hover:shadow-lg hover:shadow-white hover:scale-105 tansition-all duration-300 ease-linear">Non Temperable</span>
        </div>
      </div>
      <div className="bg-zinc-900 text-white grid grid-cols-2 w-full">
      <div className="flex flex-col items-start p-4 justify-start">
        <p className="text-xl">The D-news</p>
        <p className="text-sm">All your personalize newsletter</p>
        <div className="flex   gap-8 mt-2">
          <div onClick={() => handleContact("https://twitter.com/shikkhar_")}>
            <img
              className="cursor-pointer"
              src="/images/twitter.png"
              alt="bg"
             
            />
          </div>
          <div onClick={() => handleContact("https://github.com/shikhar360")}>
            <img
              className="cursor-pointer"
              src="/images/github.png"
              alt="bg"
              width={40}
            />
          </div>
          <div
            onClick={() => handleContact("https://linkedin.com/in/shikhar360")}
          >
            <img
              className="cursor-pointer"
              src="/images/linkedin.png"
              alt="bg"
              height={40}
              width={40}
            />
          </div>
        </div>
      
      </div>
        <span className=" py-2 my-auto  text-[#c7c7c7] text-xs">
          ©2022 DEETHON. ALL COPYRIGHTS RESERVED
        </span>
      
      </div>
    </div>
  );
}
