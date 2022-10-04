import Image from "next/image";
import React from "react";

const Button = ({ assetUrl, link }) => {
  return (
    <div
      className="bg-black flex items-center py-2 px-4 rounded-md mt-2 w-fit cursor-pointer"
      onClick={() => window.open(link, "_blank")}
    >
      <Image src={assetUrl} alt='DamiisDandy' width={15} height={15} className="minmd:w-10 minmd:h-10 object-contain"/>
      <div className="flex flex-col justify-start ml-4">
        <p className={`text-white font-IBMPlex minmd:text-lg font-normal text-xs`}>View it on</p>
        <p className={`text-white font-IBMPlex minmd:text-lg font-bold text-sm`}>Expo Store</p>
      </div>
    </div>
  );
};

export default Button;
