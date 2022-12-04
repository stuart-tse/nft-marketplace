import React from "react";
import Image from "next/image";

//internal Import
import Style from "./HeroSection.module.css";
import { Button } from "../ComponentsIndex";
import images from "../../assets/img";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_box}>
        <div className={Style.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs </h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnText="Start your search" />
        </div>
        <div className={Style.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width="100%"
            height="100%"
            layout="responsive"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
