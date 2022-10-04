import Image from "next/image";
import React from "react";
import assets from "../public/assets";

const Download = () => {
  return (
    <div className={`flex justify-center items-center p-16 sm:p-8 bg-white`}>
      <div className={`flex items-center w-full md:w-3/4 flex-col text-center`}>
        <div>
          <h1
            className={`font-bold font-IBMPlex text-5xl sm:text-4xl minmd:text-6xl minlg:text-8xl leading-12 minmd:leading-13 text-tertiary`}
          >
            Download the Source Code
          </h1>
          <p
            className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl minmd:text-3xl minlg:text-4xl minmd:leading-16 text-tertiary`}
          >
            Get the full source code on GitHub
          </p>
        </div>
        <button className="bg-primary mt-4 py-4 px-6 text-white text-lg minmd:text-2xl font-IBMPlex font-medium rounded-lg hover:shadow-2xl">
          <a
            href="https://github.com/Ayomidemi/react-native-nft-marketplace"
            target="_blank"
            rel="noreferrer"
          >
            Source Code
          </a>
        </button>
        <div className="flex justify-center items-center">
          <Image
            src={assets.scene}
            alt="download_png"
            className="w-20 h-20 lg:w-40 lg:h-40 object-contain mb-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Download;
