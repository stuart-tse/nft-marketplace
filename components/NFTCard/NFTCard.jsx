import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { BsImages } from "react-icons/bs";
import Image from "next/image";

// Internal Improt
import Style from "./NFTCard.module.css";
import images from "../../assets/img";

// Internal Improt Card = () => {
const NFTCard = () => {
  const featureArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const [like, setLike] = useState(true);

  const likeNFT = () => setLike((prev) => !prev);

  const image = [
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground3,
    images.creatorbackground4,
    images.creatorbackground5,
    images.creatorbackground6,
    images.creatorbackground7,
    images.creatorbackground8,
    images.creatorbackground9,
    images.creatorbackground10,
  ];

  const randomNumber = Math.floor(Math.random() * (image.length - 3));

  const [currentImageIndex, setcurrentImageIndex] = useState(randomNumber);

  const changedImage = () => {
    setcurrentImageIndex(randomNumber);
  };

  return (
    <div className={Style.NFTCard}>
      {image.map((el, i) => (
        <div className={Style.NFTCard_box} key={i}>
          <div className={Style.NFTCard_box_img}>
            <Image
              src={el}
              alt="NFT image"
              width={600}
              height={600}
              className={Style.NFTCard_box_img_img}
              sizes="100vw"
              style={{
                width: "400px",
                height: "400px",
                objectFit: "cover",
              }}
            />
          </div>

          <div className={Style.NFTCard_box_update}>
            <div className={Style.NFTCard_box_update_left}>
              <div
                className={Style.NFTCard_update_left_lile}
                onClick={() => likeNFT()}
              >
                {like ? (
                  <AiOutlineHeart />
                ) : (
                  <AiFillHeart
                    className={Style.NFTCard_box_update_left_like_icon}
                  />
                )}{" "}
                22
              </div>
            </div>

            <div className={Style.NFTCard_box_update_right}>
              <div className={Style.NFTCard_box_update_right_info}>
                <small>Remainning Time</small>
                <p>3h: 15m :20s</p>
              </div>
            </div>
          </div>

          <div className={Style.NFTCard_box_update_details}>
            <div className={Style.NFTCard_box_update_details_price}>
              <div className={Style.NFTCard_box_update_details_price_box}>
                <h4>Clone #17373</h4>

                <div className={Style.NFTCard_box_update_details_price_box_box}>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_bid}
                  >
                    <small>Current Bid</small>
                    <p>1.000ETH</p>
                  </div>
                  <div
                    className={Style.NFTCard_box_update_details_price_box_stock}
                  >
                    <small>61 in stock</small>
                  </div>
                </div>
              </div>
            </div>

            <div className={Style.NFTCard_box_update_datils_category}>
              <BsImages />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NFTCard;
