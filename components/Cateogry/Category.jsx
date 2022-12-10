import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

//Internal Import
import Style from "./Category.module.css";
import images from "../../assets/img";

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5, 6];

  const image = [
    images.creatorbackground6,
    images.creatorbackground7,
    images.creatorbackground8,
    images.creatorbackground9,
    images.creatorbackground10,
    images.creatorbackground1,
    images.creatorbackground2,
    images.creatorbackground3,
    images.creatorbackground4,
    images.creatorbackground5,
  ];

  return (
    <div className={Style.box_category}>
      <div className={Style.category}>
        {image.map((CategoryImage, i) => (
          <div key={i} className={Style.category_box}>
            <Image
              src={CategoryImage}
              className={Style.category_box_img}
              alt="Background image"
              width={350}
              height={350}
              style={{
                maxWidth: "100%",
                height: "100px",
                objectFit: "cotain",
              }}
            />
            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>Entertainment</h4>
                <small>1995 NFTs</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
