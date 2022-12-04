import React from "react";
import Link from "next/link";

//internal Import

import Style from "./Discover.module.css";

const Discover = () => {
  // Discover netivgation Menu
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author-profile",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account-setting",
    },
    {
      name: "Connect Wallet",
      link: "connect-wallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((eL, i) => (
        <div className={Style.discover} key={i + 1}>
          <Link href={{ pathname: `${eL.link}` }}>{eL.name}</Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
