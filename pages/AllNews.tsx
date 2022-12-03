import React from "react";
import { ContractAddress } from "../constants/index";
import { useState } from "react";
import { useEffect } from "react";

import Publish from "../components/Publish";

interface NftData {
  imgUrl: string;
  name: string;
  desc: string;
  opensea: string;
}

export default function AllNews() {
  const tokens = process.env.NEXT_PUBLIC_TOKEN;
  const [nft, setNft] = useState<NftData[]>([]);
  const [pub, setPub] = useState<boolean>(false);

  async function fetchAllNft() {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `${tokens}`,
      },
    };

    fetch(
      `https://api.nftport.xyz/v0/nfts/${ContractAddress}?chain=polygon&include=metadata`,
      options
    )
      .then((response) => response.json())
      .then((res) => {
        let data: any = [];
        res.nfts?.map((nft: any) => {
          data.push({
            imgUrl: nft.cached_file_url,
            name: nft.metadata.name,
            desc: nft.metadata.description,
            opensea: `https://opensea.io/assets/matic/${ContractAddress}/${nft.token_id}`,
          });
        });

        setNft(data);
      });
  }
  console.log(nft);

  useEffect(() => {
    fetchAllNft();
  }, []);

  return (
    <>
      {
        pub && <div className={` z-20"}`}>
          <Publish  set={setPub} />
        </div>
      }

      <div className="pt-16 min-h-screen  w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 bg-gradient-to-br from-black to-zinc-600 auto-rows-max  px-6  z-10 ">
        {/* {publish && <Publish>} */}
        {nft?.map((nft: NftData, ind: number) => {
          return (
            <div
              key={ind}
              className="bg-white/80 w-11/12 h-5/6 m-4 flex-col min-h-max rounded-lg flex items-center justify-center p-3 pb-4 hover:scale-105 transition-all duration-200 ease-linear hover:shadow-black/20 hover:shadow-lg"
            >
              <h3 className="text-lg w-full text-center">
                {nft.name.toUpperCase()}
              </h3>
              <div className="flex w-full">
                <div className="w-2/4 ">
                  <img src={nft.imgUrl} alt="nfts" />
                </div>
                <div className="w-2/4 p-4 flex flex-col  ">
                  <p className="text-sm mt-2 text-slate-700 text-center h- overflow-y-scroll scrollbar-hide ">
                    {nft.desc}
                  </p>
                  <a
                    href={nft.opensea}
                    className="text-xs text-blue-700 mt-0 float-right mx-auto"
                    target="new"
                  >
                    <span>
                      <img
                        src="/images/link.png"
                        alt="img"
                        className="w-4 inline-flex"
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
        <div
          className="bg-white/80 w-11/12 h-5/6 m-4 flex-col min-h-max rounded-lg flex items-center justify-center p-3 pb-4 hover:scale-105 transition-all duration-200 ease-linear hover:shadow-black/20 hover:shadow-lg cursor-pointer
        
        "
          onClick={() => setPub(!pub)}
        >
          <img src="/images/add.png" alt="add 	" />
        </div>
      </div>
    </>
  );
}
