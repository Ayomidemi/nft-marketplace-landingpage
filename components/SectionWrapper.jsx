import Image from "next/image";
import React from "react";
import styles from "../styles/Global";
import assets from "../public/assets";
import Button from "../components/Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen flex justify-center items-center p-16 sm:p-8 ${
        reverse ? "bg-white" : "bg-primary"
      } ${banner}`}
    >
      <div
        className={`flex items-center ${
          reverse ? "flex-col md:flex-row-reverse" : "flex-col md:flex-row"
        } w-11/12 sm:w-full md:w-3/4`}
      >
        <div
          className={`flex-1 w-full flex justify-start flex-col md:mb-10 ${
            reverse ? " fadeRightMini" : " fadeLeftMini"
          } ${!reverse ? "text-left" : "text-right"}`}
        >
          <h1
            className={`font-bold font-IBMPlex md:text-5xl sm:text-4xl text-3xl minlg:text-8xl leading-10 md:leading-13 ${
              reverse ? "text-tertiary" : "text-white"
            }`}
          >
            {title}
          </h1>
          <p
            className={`my-5 minmd:my-10 font-IBMPlex font-light text-xl md:text-3xl minlg:text-4xl md:leading-16 ${
              reverse ? "text-tertiary" : "text-white"
            }`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/@pease/nft-marketplace?serviceType=classic&distribution=expo-go"
            />
          )}
        </div>

        <div className={`flex-1 flex justify-center items-center p-8 sm:px-0`}>
          <Image
            src={mockupImg}
            alt="DamiisDandy"
            className={`${!reverse ? " fadeRightMini" : " fadeLeftMini"} `}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
