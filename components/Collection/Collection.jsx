import React, { useState } from "react";
import {
  BsFillAlarmFill,
  BsFillCalendarDateFill,
  BsCalendar3,
} from "react-icons/bs";

//Inrernal Import
import Style from "./Collection.module.css";
import DaysComponents from "./DaysComponents/DaysComponents";
import images from "../../assets/img";

const Collection = () => {
  //   const [popular, setPopular] = useState(true);
  //   const [follwoing, setFollwoing] = useState(false);
  //   const [news, setNews] = useState(false);

  const [openCardState, setOpenCardState] = useState("popular");

  const cardArray = [
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
  ];
  const followingArray = [
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
  ];
  const newsArray = [
    {
      background: images.creatorbackground7,
      user: images.user7,
    },
    {
      background: images.creatorbackground8,
      user: images.user8,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
  ];

  const openCard = (CardType) => {
    // Switch between Tab
    switch (CardType) {
      case "popular":
        setOpenCardState("popular");
        console.log(CardType);
        break;
      case "following":
        setOpenCardState("following");
        console.log(CardType);
        break;
      case "news":
        setOpenCardState("news");
        break;
    }
  };

  return (
    <div className={Style.collection}>
      <div className={Style.collection_title}>
        <h2>Top List Creator</h2>
        <div className={Style.collection_collections}>
          <div className={Style.collection_collections_btn}>
            <button onClick={() => openCard("popular")}>
              <BsFillAlarmFill /> Last 24 Hours
            </button>

            <button onClick={() => openCard("following")}>
              <BsCalendar3 /> Last 7 days
            </button>

            <button onClick={() => openCard("news")}>
              <BsFillCalendarDateFill /> Last 30 days
            </button>
          </div>
        </div>
      </div>

      {openCardState == "popular" && (
        <div className={Style.collection_box}>
          {cardArray.map((el, i) => (
            <DaysComponents key={i + 1} el={el} />
          ))}
        </div>
      )}
      {openCardState == "following" && (
        <div className={Style.collection_box}>
          {followingArray.map((el, i) => (
            <DaysComponents key={i + 1} el={el} />
          ))}
        </div>
      )}
      {openCardState == "news" && (
        <div className={Style.collection_box}>
          {newsArray.map((el, i) => (
            <DaysComponents key={i + 1} el={el} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Collection;
