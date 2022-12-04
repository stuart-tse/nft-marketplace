import React from "react";
import Link from "next/link";

import Style from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact us",
      link: "contact-us",
    },
    {
      name: "Sign Up",
      link: "sign-up",
    },
    {
      name: "Sgin In",
      link: "Sign In",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div>
      <div className={Style.box}>
        {helpCenter.map((eL, i) => (
          <div key={i} className={Style.helpCenter}>
            <Link href={{ pathname: `$eL.link` }}>{eL.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpCenter;
