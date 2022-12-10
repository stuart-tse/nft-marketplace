import React from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import Image from "next/image";

//Ineternal Import
import Style from "./Subscibe.module.css";
import images from "../../assets/img";

const Subscibe = () => {
  return (
    <div className={Style.subscribe}>
      <div className={Style.subscribe_box}>
        <div className={Style.subscrible_box_left}>
          <h2>Never Miss A Drop</h2>
          <p>
            Subscribe to our super-exclusive drop list and be the first per son
            to receive our up-comming drops
          </p>
          <div className={Style.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>
          <div className={Style.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium newsletter</small>
          </div>
          <div className={Style.subscribe_box_left_input}>
            <input type="email" placeholder="Enter Your Email" />
            <RiSendPlaneFill className={Style.subscribe_box_left_input_icon} />
          </div>
        </div>

        <div className={Style.subscribe_box_right}>
          <Image
            src={images.update}
            alt="Get update"
            height={600}
            // layout="responsive"
            width={800}
            style={{
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto",
              maxWidth: "100%",
              height: "auto"
            }} />
        </div>
      </div>
    </div>
  );
};

export default Subscibe;
