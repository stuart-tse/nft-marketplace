import React from "react";
import Image from "next/image";

//internal Import
import Style from "./Service.module.css";
import images from "../../assets/img";

const Service = () => {
  return (
    <div className={Style.service}>
      <div className={Style.service_box}>
        <div className={Style.service_box_item}>
          <Image
            src={images.service1}
            alt="Filter & Discover"
            height={100}
            width={100}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 1</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Connect with wallets, discover, buy Nfts, sell your NFTs</p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service2}
            alt="Filter & Discover"
            height={100}
            width={100}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 2</span>
          </p>
          <h3>Filter & Discover</h3>
          <p>Connect with wallets, discover, buy Nfts, sell your NFTs</p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service3}
            alt="Connect Wallet"
            height={100}
            width={100}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 3</span>
          </p>
          <h3>Connect Wallet</h3>
          <p>Connect with wallets, discover, buy Nfts, sell your NFTs</p>
        </div>
        <div className={Style.service_box_item}>
          <Image
            src={images.service4}
            alt="Filter & Discover"
            height={100}
            width={100}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
          <p className={Style.service_box_item_step}>
            <span>Step 4</span>
          </p>
          <h3>Start Trade</h3>
          <p>Connect with wallets, discover, buy Nfts, sell your NFTs</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
