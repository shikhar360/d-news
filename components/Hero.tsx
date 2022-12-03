import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center border-x-8 border-dashed ">
      <div className="text-white w-full min-h-screen flex flex-col items-center justify-center sm:mt-20 mt-6 ">
        <div className="flex flex-col items-center justify-center relative ">
          <img
            src="/images/3.png"
            alt="img"
            className="w-48 p-4 absolute top-0 left-2/4 -translate-y-1/2 -translate-x-1/2"
          />
          <img
            src="/images/1.png"
            alt="img"
            className="w-48 p-4 absolute  -right-24 z-40 "
          />
          <img
            src="/images/2.png"
            alt="img"
            className="w-48 p-4 absolute  -left-24 z-10"
          />
          <p className="text-white text-7xl   z-30 my-auto ">Publish </p>
          <p className="text-white text-7xl   z-30 my-auto ">NEWS</p>
          <p className="text-white text-7xl   z-30 my-auto ">ONCHAIN </p>
          <img
            src="/images/4.png"
            alt="img"
            className="w-48 p-4 absolute bottom-0 left-2/4 z-50 translate-y-1/2 -translate-x-1/2 "
          />
        </div>

        <Link href={"/Publish"} className="sm:mt-28 mt-14 rounded-xl border-2 p-4 shadow-md shadow-purple-700 hover:shadow-lg hover:shadow-purple-800 hover:scale-105 tansition-all duration-300 ease-linear">
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
        <div className="flex items-center justify-center sm:flex-row flex-col text-white mt-8 gap-4">
          <span className=" rounded-2xl border-2 p-2 shadow-md shadow-purple-700 hover:shadow-lg hover:shadow-purple-800 hover:scale-105 tansition-all duration-300 ease-linear">Secured Decentralized </span>
          <span className=" rounded-2xl border-2 p-2 shadow-md shadow-purple-700 hover:shadow-lg hover:shadow-purple-800 hover:scale-105 tansition-all duration-300 ease-linear">News as a NFT</span>
          <span className=" rounded-2xl border-2 p-2 shadow-md shadow-purple-700 hover:shadow-lg hover:shadow-purple-800 hover:scale-105 tansition-all duration-300 ease-linear">NOT easy to Temper</span>
        </div>
      </div>
    </div>
  );
}
