import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

//Import React Icon

import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import Style from "./NavBar.module.css";
import { Discover, HelpCenter, Notification, Profile, SideBar } from "./index";
import { Button } from "../ComponentsIndex";
import images from "../../assets/img";
import { logo } from "../../assets/img";

const NavBar = () => {
  //usestate component
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  let ref = useRef();
  let ref2 = useRef();
  //Click Outside Menu

  useEffect(() => {
    const handler = (e) => {
      if (
        (discover && ref.current && !ref.current.contains(e.target)) ||
        (help && ref2.current && !ref2.current.contains(e.target))
      ) {
        setDiscover(false);
        setHelp(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [discover, help]);

  //Open Menu Function
  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText == "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText == "Help Center") {
      setHelp(true);
      setNotification(false);
      setProfile(false);
      setDiscover(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    } else {
      setProfile(false);
      setDiscover(false);
      setHelp(false);
      setNotification(false);
    }
  };

  const openSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className={Style.navbar}>
      <div className={Style.navbar_container}>
        {/* // Beginning of Left Navigation Bar */}
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="NFT Marketplace"
              width={100}
              height={100}
              style={{
                maxWidth: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto",
                maxWidth: "100%",
                height: "auto"
              }} />
          </div>
          <div className={Style.navbar_container_left_box_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search for NFT" />
              <BsSearch onClick={() => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>
        {/* // End of Left Navigation Bar */}

        {/* //Beginning of Right Navigation Bar */}
        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover} ref={ref}>
            {/* //Discover Menu  */}
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Discover
            </p>
            {discover && (
              <div
                className={Style.navbar_container_right_discover_box}
                ref={ref}
              >
                <Discover />
              </div>
            )}
          </div>

          {/* // Help Center Menu  */}
          <div className={Style.navbar_container_right_help} ref={ref2}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>
          {/* // Notification   */}
          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={(e) => {
                openNotification(e);
              }}
            />
            {notification && <Notification />}
          </div>

          {/* // Create Button Section */}
          <div className={Style.navbar_container_right_button}>
            <Button btnText="Create" />
          </div>

          {/* // User Profile Section */}
          <div className={Style.navbar_container_right_profile_box}>
            <div className={Style.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={() => openProfile()}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto",
                  maxWidth: "100%",
                  height: "auto"
                }} />
              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button */}
          <div className={Style.navbar_container_right_menu_button}>
            <CgMenuRight
              className={Style.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* // SideBar Component */}
      {openSideMenu && (
        <div className={Style.sideBar}>
          <SideBar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
