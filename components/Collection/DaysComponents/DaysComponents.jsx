import React, { useState } from "react";
import Image from "next/image";
import { MdVerified } from "react-icons/md";

//Internal Import

import Style from "./DaysComponents.module.css";
import images from "../../../assets/img";

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

const DaysComponents = ({ el, i }) => {
  const randomNumber = Math.floor(Math.random() * (image.length - 3));

  const [currentImageIndex, setcurrentImageIndex] = useState(randomNumber);

  const changedImage = () => {
    setcurrentImageIndex(randomNumber);
  };

  return (
    <div className={Style.daysComponents}>
      <div className={Style.daysComponents_box}>
        <div className={Style.daysComponents_box_img}>
          <Image
            src={image[currentImageIndex]}
            alt="Creator Background"
            // width={300}
            // height={300}
            // fill="cover"
            className={Style.daysComponents_box_img_img}
            style={{
              maxWidth: "100%",
              height: "220px",
              maxHeight: "240px",
              fill: "cover",
            }}
          />
        </div>

        <div className={Style.daysComponents_box_profile}>
          <Image
            src={image[currentImageIndex + 1]}
            alt="Profile"
            width={200}
            height={200}
            className={Style.daysComponents_box_profile_img_1}
            style={{
              maxWidth: "100%",
              height: "70px",
              maxHeight: "78px",
            }}
          ></Image>

          <Image
            src={image[currentImageIndex + 2]}
            alt="Profile"
            width={200}
            height={200}
            className={Style.daysComponents_box_profile_img_2}
            style={{
              maxWidth: "100%",
              height: "70px",
              maxHeight: "78px",
            }}
          ></Image>
          <Image
            src={image[currentImageIndex + 3]}
            alt="Profile"
            width={200}
            height={200}
            className={Style.daysComponents_box_profile_img_3}
            style={{
              maxWidth: "100%",
              height: "70px",
              maxHeight: "78px",
              objectFit: "cover",
            }}
          ></Image>
        </div>

        <div className={Style.daysComponents_box_title}>
          <h2>Amazing Collection</h2>
          <div className={Style.daysComponents_box_title_info}>
            <div className={Style.daysComponents_box_title_info_profile}>
              <Image
                src={el.user}
                alt="Profile"
                width={30}
                height={30}
                className={Style.daysComponents_box_title_info_profile_img}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  objectFit: "cover",
                  maxWidth: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto",
                }}
              />

              <p>
                Creator{" "}
                <span>
                  Shoaib{" "}
                  <small>
                    <MdVerified />
                  </small>
                </span>
              </p>
            </div>
            <div className={Style.daysComponents_box_title_info_price}>
              <small>1.255 ETH</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DaysComponents;
